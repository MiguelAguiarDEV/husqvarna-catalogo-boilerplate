/**
 * CatalogPage Example
 * 
 * This is an example showing how to use the new CatalogComponent system.
 * You can use this as a reference for integrating the configurable slide system.
 * 
 * To integrate into the main [locale]/index.tsx:
 * 1. Import CatalogComponent and useCatalogConfig
 * 2. Replace the slidesDesktop/slidesMobile arrays with CatalogComponent
 * 3. Keep the existing Header and analytics logic
 */

import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { Header, MenuItem, MenuLabels } from '@/components/Header';
import { CatalogComponent } from '@/components/catalog';
import { useCatalogConfig, useTotalSlides } from '@/components/catalog/useCatalogConfig';
import { PageData } from '@/components/SearchDialog';
import { Meta } from '@/layouts/Meta';
import { getStaticPaths, makeStaticProps } from '@/i18n/getStatic';

export default function CatalogPageExample() {
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

  // Menu items - these would typically come from your existing config
  const menuItems: MenuItem[] = [
    { label: t('header.menu.CORTE_Y_TALA', { lng: 'es' }) as MenuLabels, slideIndex: [11] },
    { label: t('header.menu.CUIDADO_DEL_CESPED', { lng: 'es' }) as MenuLabels, slideIndex: [5] },
    { label: t('header.menu.LIMPIEZA', { lng: 'es' }) as MenuLabels, slideIndex: [14] },
    { label: t('header.menu.RECORTE_Y_DESBROCE', { lng: 'es' }) as MenuLabels, slideIndex: [12] },
    { label: t('header.menu.CUIDADO_DEL_SUELO', { lng: 'es' }) as MenuLabels, slideIndex: [13] },
    { label: t('header.menu.RESPECTO_A_LA_NATURALEZA', { lng: 'es' }) as MenuLabels, slideIndex: [3] },
    { label: t('header.menu.GENERADORES_Y_MOTOBOMBAS', { lng: 'es' }) as MenuLabels, slideIndex: [15] },
    { label: t('header.menu.ROPA_Y_ACCESORIOS', { lng: 'es' }) as MenuLabels, slideIndex: [16] },
  ];

  const handleMenuClick = (label: MenuLabels) => {
    const item = menuItems.find((item) => item.label === label);
    if (item && item.slideIndex[0] !== undefined) {
      setActiveSlide(item.slideIndex[0]);
    }
  };

  const handleSearchSelect = (page: PageData) => {
    setActiveSlide(isMobile ? page.slideIndexMobile : page.slideIndexDesktop);
  };

  if (!catalogConfig) {
    return <div>Loading catalog...</div>;
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
