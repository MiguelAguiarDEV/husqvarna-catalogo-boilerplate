/**
 * Catalog Test Page
 * 
 * Test page for the new configurable slide component system.
 * Contains only slides 1-4 using the JSON-driven approach.
 * 
 * Access via: /[locale]/catalog-test
 */

import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { Header, MenuItem, MenuLabels } from '@/components/Header';
import { CatalogComponent } from '@/components/catalog';
import { useCatalogConfig, useTotalSlides } from '@/components/catalog/useCatalogConfig';
import { PageData } from '@/components/SearchDialog';
import { Meta } from '@/layouts/Meta';
import { getStaticPaths, makeStaticProps } from '@/i18n/getStatic';

export default function CatalogTest() {
  const { t } = useTranslation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Load catalog configuration
  const catalogConfig = useCatalogConfig('catalogo-husqvarna-2026');
  const totalSlides = useTotalSlides(catalogConfig, isMobile);

  // Handle responsive detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Menu items for slides 1-4 (limited set for testing)
  const menuItemsDesktop: MenuItem[] = [
    { label: t('header.menu.RESPECTO_A_LA_NATURALEZA', { lng: 'es' }) as MenuLabels, slideIndex: [2] },
  ];

  const menuItemsMobile: MenuItem[] = [
    { label: t('header.menu.RESPECTO_A_LA_NATURALEZA', { lng: 'es' }) as MenuLabels, slideIndex: [3] },
  ];

  // Hidden items for menu navigation
  const itemsHiddenDesktop: MenuItem[] = [
    { label: 'Corte y tala' as MenuLabels, slideIndex: [2] },
    { label: 'Cuidado del césped' as MenuLabels, slideIndex: [2] },
    { label: 'Limpieza' as MenuLabels, slideIndex: [2] },
    { label: 'Recorte y desbroce' as MenuLabels, slideIndex: [2] },
    { label: 'Cuidado del suelo' as MenuLabels, slideIndex: [2] },
    { label: 'Respeto a la naturaleza' as MenuLabels, slideIndex: [2] },
    { label: 'Generadores y motobombas' as MenuLabels, slideIndex: [2] },
    { label: 'Ropa y accesorios' as MenuLabels, slideIndex: [2] },
  ];

  const itemsHiddenMobile: MenuItem[] = [
    { label: 'Corte y tala' as MenuLabels, slideIndex: [3] },
    { label: 'Cuidado del césped' as MenuLabels, slideIndex: [3] },
    { label: 'Limpieza' as MenuLabels, slideIndex: [3] },
    { label: 'Recorte y desbroce' as MenuLabels, slideIndex: [4] },
    { label: 'Cuidado del suelo' as MenuLabels, slideIndex: [4] },
    { label: 'Respeto a la naturaleza' as MenuLabels, slideIndex: [4] },
    { label: 'Generadores y motobombas' as MenuLabels, slideIndex: [4] },
    { label: 'Ropa y accesorios' as MenuLabels, slideIndex: [4] },
  ];

  const menuItems = isMobile ? menuItemsMobile : menuItemsDesktop;
  const menuItemsHidden = isMobile ? itemsHiddenMobile : itemsHiddenDesktop;

  const handleMenuClick = (label: MenuLabels) => {
    // Check hidden items first
    const hiddenItem = menuItemsHidden.find((item) => item.label === label);
    if (hiddenItem && hiddenItem.slideIndex[0] !== undefined) {
      setActiveSlide(hiddenItem.slideIndex[0]);
      return;
    }
    
    // Then check regular menu items
    const item = menuItems.find((item) => item.label === label);
    if (item && item.slideIndex[0] !== undefined) {
      setActiveSlide(item.slideIndex[0]);
    }
  };

  const handleSearchSelect = (page: PageData) => {
    // For testing, just go to the desktop index since we only have 4 slides
    const targetSlide = Math.min(
      isMobile ? page.slideIndexMobile : page.slideIndexDesktop,
      totalSlides - 1
    );
    setActiveSlide(targetSlide);
  };

  if (!catalogConfig) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#F5F5F5]">
        <p className="text-xl">Loading catalog configuration...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F5F5]">
      <Meta />
      <Header
        onSearchSelect={handleSearchSelect}
        menuItems={menuItems}
        currentIndex={activeSlide}
        totalSlides={totalSlides}
        onActiveIndexChange={(index) => setActiveSlide(index)}
      />
      <CatalogComponent
        config={catalogConfig}
        activeSlide={activeSlide}
        onActiveSlideChange={setActiveSlide}
        onClickMenu={handleMenuClick}
        isMobile={isMobile}
      />
    </div>
  );
}

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
