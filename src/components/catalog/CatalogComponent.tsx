/**
 * CatalogComponent
 * 
 * Main catalog controller that manages slides, navigation, and responsive behavior.
 * Handles mobile viewport switching and provides search functionality.
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

    // Mobile: Generate viewport slides
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

    // Generate viewport slides for each desktop slide
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
 * Uses CSS transforms to show only a portion of the desktop slide
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
      // Left/Right split
      const translateX = viewportIndex === 0 ? '0%' : '-100%';
      return {
        transform: `translateX(${translateX}) scale(2)`,
        transformOrigin: viewportIndex === 0 ? 'left center' : 'right center',
      };
    }
    
    // 4-way split (quadrants)
    const col = viewportIndex % 2;
    const row = Math.floor(viewportIndex / 2);
    const translateX = col === 0 ? '0%' : '-100%';
    const translateY = row === 0 ? '0%' : '-100%';
    const originX = col === 0 ? 'left' : 'right';
    const originY = row === 0 ? 'top' : 'bottom';
    
    return {
      transform: `translate(${translateX}, ${translateY}) scale(2)`,
      transformOrigin: `${originX} ${originY}`,
    };
  }, [viewportIndex, totalViewports]);

  return (
    <div className="overflow-hidden h-full w-full">
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
