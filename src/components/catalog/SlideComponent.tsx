/**
 * SlideComponent
 * 
 * Unified slide renderer that constructs a slide from JSON configuration.
 * Handles layout rendering, popup dialogs, and responsive behavior.
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
        className={cn(config.padding, config.className)}
      >
        <GridRenderer
          layout={config.layout}
          isActive={isActive}
          onOpenPopup={handleOpenPopup}
          onClickMenu={onClickMenu}
        />
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
