/**
 * SlideComponent
 * 
 * Unified slide renderer that constructs a slide from JSON configuration.
 * Handles layout rendering, popup dialogs, and responsive behavior.
 * Also supports custom React components for complex slides.
 */

import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { CarouselSlide } from '../CarouselSlide';
import { ProductsDialog } from '../ProductsDialog';
import { GridRenderer } from './GridRenderer';
import { MenuLabels } from '../Header';
import {
  SlideConfig,
  interpolateLocalePath,
  toProductData,
  getPopupHref,
} from '@/types/slide.types';
import type { ProductImage } from '@/types';
import { cn } from '@/utils/misc';

// Import custom components for complex slides
import { Slide15 } from '../slides/Slide15';
import { Slide16 } from '../slides/Slide16';
import { Slide17 } from '../slides/Slide17';

// Map of custom component names to their React components
const customComponentsMap: Record<string, React.FC<{ isActive: boolean }>> = {
  Slide15,
  Slide16,
  Slide17,
};

interface SlideComponentProps {
  config: SlideConfig;
  isActive?: boolean;
  onClickMenu?: (label: MenuLabels) => void;
}

export const SlideComponent: React.FC<SlideComponentProps> = ({
  config,
  isActive = false,
  onClickMenu,
}) => {
  const router = useRouter();
  const locale = router.query.locale as string;
  const [openPopup, setOpenPopup] = useState<string | null>(null);

  // Check if this is a custom component slide
  if (config.type === 'customComponent' && config.component) {
    const CustomComponent = customComponentsMap[config.component];
    if (CustomComponent) {
      return <CustomComponent isActive={isActive} />;
    }
    console.warn(`Custom component "${config.component}" not found in componentMap`);
    return null;
  }

  // Convert popup config to ProductImage format for ProductsDialog
  const popupImages = useMemo((): ProductImage[] => {
    if (!openPopup || !config.popups?.[openPopup]) {
      return [];
    }

    return config.popups[openPopup].map((popup) => ({
      src: interpolateLocalePath(popup.src, locale),
      href: getPopupHref(popup, locale),
      imgClassName: popup.imgClassName,
      productData: toProductData(popup, locale),
    }));
  }, [openPopup, config.popups, locale]);

  const handleOpenPopup = (popupKey: string) => {
    setOpenPopup(popupKey);
  };

  const handleClosePopup = () => {
    setOpenPopup(null);
  };

  return (
    <>
      <CarouselSlide
        key={config.id}
        className={cn('catalog-slide', `catalog-slide--${config.id}`, config.padding, config.className)}
        style={config.style}
      >
        <div 
          className="catalog-slide__content h-full w-full"
          data-slide-id={config.id}
          data-component="SlideComponent"
        >
          <GridRenderer
            layout={config.layout}
            isActive={isActive}
            onOpenPopup={handleOpenPopup}
            onClickMenu={onClickMenu}
            className="h-full w-full"
          />
        </div>
      </CarouselSlide>

      {/* Product popup dialog */}
      <ProductsDialog
        open={openPopup !== null}
        onClose={handleClosePopup}
        images={popupImages}
      />
    </>
  );
};

