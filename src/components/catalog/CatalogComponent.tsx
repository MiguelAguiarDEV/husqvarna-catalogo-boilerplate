/**
 * CatalogComponent
 * 
 * Main catalog controller that manages slides, navigation, and responsive behavior.
 * Mobile viewports use CSS transforms to scale and translate desktop slides.
 */

import { useMemo } from 'react';
import { Carousel } from '../Carousel';
import { SlideComponent } from './SlideComponent';
import { MenuLabels } from '../Header';
import {
  CatalogConfig,
  SlideConfig,
} from '@/types/slide.types';

interface CatalogComponentProps {
  config: CatalogConfig;
  activeSlide: number;
  onActiveSlideChange: (index: number) => void;
  onClickMenu?: (label: MenuLabels) => void;
  isMobile: boolean;
}

export const CatalogComponent: React.FC<CatalogComponentProps> = ({
  config,
  activeSlide,
  onActiveSlideChange,
  onClickMenu,
  isMobile,
}) => {
  // Generate slides for rendering
  const slides = useMemo(() => {
    if (!isMobile) {
      // Desktop: Render all slides directly
      return config.slides.map((slideConfig, index) => (
        <SlideComponent
          key={slideConfig.id}
          config={slideConfig}
          isActive={activeSlide === index}
          onClickMenu={onClickMenu}
        />
      ));
    }

    // Mobile: Generate viewport slides using CSS transforms
    const mobileSlides: React.ReactNode[] = [];
    
    // First slide (cover) renders as-is
    const firstSlide = config.slides[0];
    if (firstSlide) {
      mobileSlides.push(
        <SlideComponent
          key={firstSlide.id}
          config={firstSlide}
          isActive={activeSlide === 0}
          onClickMenu={onClickMenu}
        />
      );
    }

    // Generate viewport slides for each desktop slide using CSS transforms
    let mobileIndex = 1;
    for (let i = 1; i < config.slides.length; i++) {
      const slideConfig = config.slides[i];
      if (!slideConfig) continue;
      
      const viewports = slideConfig.mobileViewports;
      
      for (let v = 0; v < viewports; v++) {
        const currentIndex = mobileIndex + v;
        mobileSlides.push(
          <MobileViewportSlide
            key={`${slideConfig.id}-viewport-${v}`}
            config={slideConfig}
            viewportIndex={v}
            totalViewports={viewports}
            isActive={activeSlide === currentIndex}
            onClickMenu={onClickMenu}
          />
        );
      }
      mobileIndex += viewports;
    }

    return mobileSlides;
  }, [config.slides, activeSlide, isMobile, onClickMenu]);

  return (
    <Carousel
      className={`bg-[url('/images/background.jpg')] bg-cover`}
      slides={slides}
      spaceBetween={0}
      slidesPerView={1}
      activeIndex={activeSlide}
      onActiveIndexChange={onActiveSlideChange}
      noSwipingSelector="dialog"
    />
  );
};

/**
 * Mobile viewport slide wrapper
 * 
 * Uses CSS transforms to show a portion of the desktop slide:
 * - Scale 2x to make the slide fill the mobile viewport
 * - Translate on X axis to show left half (viewport 0) or right half (viewport 1)
 * 
 * For mobileViewports: 2 (left/right split):
 *   - Viewport 0: scale(2), origin left center → shows left half
 *   - Viewport 1: scale(2), origin right center → shows right half
 * 
 * For mobileViewports: 4 (quadrant split):
 *   - Viewport 0: top-left quadrant
 *   - Viewport 1: top-right quadrant
 *   - Viewport 2: bottom-left quadrant
 *   - Viewport 3: bottom-right quadrant
 */
interface MobileViewportSlideProps {
  config: SlideConfig;
  viewportIndex: number;
  totalViewports: 2 | 4;
  isActive: boolean;
  onClickMenu?: (label: MenuLabels) => void;
}

const MobileViewportSlide: React.FC<MobileViewportSlideProps> = ({
  config,
  viewportIndex,
  totalViewports,
  isActive,
  onClickMenu,
}) => {
  // Calculate transform values based on viewport position
  const transformStyle = useMemo((): React.CSSProperties => {
    if (totalViewports === 2) {
      // Left/Right split: scale 2x and use transform-origin to show correct half
      // Viewport 0 = left half, Viewport 1 = right half
      return {
        transform: 'scale(2)',
        transformOrigin: viewportIndex === 0 ? 'top left' : 'top right',
        width: '100%',
        height: '100%',
      };
    }
    
    // 4-way split (quadrants)
    const col = viewportIndex % 2;
    const row = Math.floor(viewportIndex / 2);
    const originX = col === 0 ? 'left' : 'right';
    const originY = row === 0 ? 'top' : 'bottom';
    
    return {
      transform: 'scale(2)',
      transformOrigin: `${originX} ${originY}`,
      width: '100%',
      height: '100%',
    };
  }, [viewportIndex, totalViewports]);

  return (
    <div 
      className="catalog-mobile-viewport overflow-hidden h-full w-full"
      data-component="MobileViewportSlide"
      data-viewport-index={viewportIndex}
      data-total-viewports={totalViewports}
    >
      <div style={transformStyle}>
        <SlideComponent
          config={config}
          isActive={isActive}
          onClickMenu={onClickMenu}
        />
      </div>
    </div>
  );
};

export default CatalogComponent;
