/**
 * CellRenderer Component
 * 
 * Renders individual cell content based on the content type configuration.
 * Handles images, product cards, text, titles, buttons, and nested layouts.
 */

import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { cn } from '@/utils/misc';
import { 
  CellContent,
  isImageContent,
  isProductCardContent,
  isTextContent,
  isTitleContent,
  isButtonContent,
  isNestedGridContent,
  isNestedFlexContent,
  isOverlayContent,
  isGridOverlayContent,
  interpolateLocalePath,
  ClickAction,
} from '@/types/slide.types';
import { ProductCard } from '../ProductCard';
import { SlideTitle } from '../SlideTitle';
import { Button } from '../Button';
import { GridRenderer } from './GridRenderer';
import { GridOverlayRenderer } from './GridOverlayRenderer';
import { MenuLabels } from '../Header';

interface CellRendererProps {
  content: CellContent;
  isActive?: boolean;
  onOpenPopup?: (popupKey: string) => void;
  onClickMenu?: (label: MenuLabels) => void;
}

export const CellRenderer: React.FC<CellRendererProps> = ({
  content,
  isActive = false,
  onOpenPopup,
  onClickMenu,
}) => {
  const { t } = useTranslation();
  const router = useRouter();
  const locale = router.query.locale as string;

  const handleClick = (action?: ClickAction) => {
    if (!action) return;
    
    switch (action.action) {
      case 'popup':
        onOpenPopup?.(action.target);
        break;
      case 'menu':
        onClickMenu?.(action.target as MenuLabels);
        break;
      case 'link':
        window.open(action.target, '_blank');
        break;
      case 'video':
        // Video handling can be implemented as needed
        break;
    }
  };

  // Image content
  // Images are wrapped in a container div so we can control sizing from the parent
  // Use containerClassName for the wrapper and className for the image itself
  if (isImageContent(content)) {
    const src = interpolateLocalePath(content.src, locale);
    
    // Determine object-fit: default to 'cover' if container has full dimensions
    const hasFullDimensions = content.className?.includes('object-cover') || 
                              content.className?.includes('object-contain') ||
                              content.className?.includes('object-fill');
    const objectFitClass = hasFullDimensions ? '' : 'object-cover';
    
    if (content.hoverScale) {
      return (
        <div 
          className={cn('catalog-image-container', content.containerClassName)}
          data-component="CellRenderer"
          data-content-type="image"
          data-hover-scale="true"
        >
          <motion.img
            loading="lazy"
            src={src}
            alt={content.alt}
            className={cn('catalog-image catalog-image--hover h-full w-full', objectFitClass, content.className)}
            width={content.width}
            height={content.height}
            whileHover={{ scale: 1.1 }}
            onClick={() => handleClick(content.onClick)}
            style={{ cursor: content.onClick ? 'pointer' : 'default' }}
          />
        </div>
      );
    }
    
    // For Next.js Image, we need to handle sizing differently
    // If no width/height provided, use fill mode
    const useFill = !content.width && !content.height;
    
    return (
      <div 
        className={cn('catalog-image-container relative', content.containerClassName)}
        data-component="CellRenderer"
        data-content-type="image"
      >
        <Image
          loading="lazy"
          src={src}
          alt={content.alt}
          className={cn('catalog-image', objectFitClass, content.className)}
          {...(useFill 
            ? { fill: true } 
            : { width: content.width ?? 0, height: content.height ?? 0 }
          )}
          sizes={useFill ? '100vw' : undefined}
          onClick={() => handleClick(content.onClick)}
        />
      </div>
    );
  }

  // Product card content
  if (isProductCardContent(content)) {
    const imageSrc = interpolateLocalePath(content.imageSrc, locale);
    
    return (
      <div 
        className="catalog-product-card"
        data-component="CellRenderer"
        data-content-type="productCard"
        data-popup-key={content.popupKey}
      >
        <ProductCard
          imageSrc={imageSrc}
          alt={content.alt}
          imgClassName={content.imgClassName}
          variant={content.variant}
          buttonText={content.buttonText ?? ''}
          buttonClassName={content.buttonClassName}
          buttonContainerClassName={content.buttonContainerClassName}
          onClick={() => content.popupKey && onOpenPopup?.(content.popupKey)}
        />
      </div>
    );
  }

  // Text content
  if (isTextContent(content)) {
    const Element = content.element ?? 'p';
    return (
      <Element 
        className={cn('catalog-text', content.className)}
        data-component="CellRenderer"
        data-content-type="text"
      >
        {t(content.textKey)}
      </Element>
    );
  }

  // Title content
  if (isTitleContent(content)) {
    return (
      <div
        className="catalog-title"
        data-component="CellRenderer"
        data-content-type="title"
      >
        <SlideTitle
          className={content.className}
          variant={content.variant ?? 'bg-transparent'}
          title={t(content.titleKey)}
          isActive={isActive}
        />
      </div>
    );
  }

  // Button content
  if (isButtonContent(content)) {
    return (
      <div
        className="catalog-button"
        data-component="CellRenderer"
        data-content-type="button"
      >
        <Button
          className={content.className}
          onClick={() => handleClick(content.onClick)}
        >
          {t(content.textKey)}
        </Button>
      </div>
    );
  }

  // Nested grid content
  if (isNestedGridContent(content)) {
    return (
      <div
        className="catalog-nested-grid"
        data-component="CellRenderer"
        data-content-type="nestedGrid"
      >
        <GridRenderer
          layout={content.layout}
          isActive={isActive}
          onOpenPopup={onOpenPopup}
          onClickMenu={onClickMenu}
        />
      </div>
    );
  }

  // Nested flex content
  if (isNestedFlexContent(content)) {
    return (
      <div
        className="catalog-nested-flex"
        data-component="CellRenderer"
        data-content-type="nestedFlex"
      >
        <GridRenderer
          layout={content.layout}
          isActive={isActive}
          onOpenPopup={onOpenPopup}
          onClickMenu={onClickMenu}
        />
      </div>
    );
  }

  // Overlay content
  if (isOverlayContent(content)) {
    return (
      <div 
        className={cn('catalog-overlay', content.position)}
        data-component="CellRenderer"
        data-content-type="overlay"
      >
        {content.children.map((child, index) => (
          <CellRenderer
            key={index}
            content={child}
            isActive={isActive}
            onOpenPopup={onOpenPopup}
            onClickMenu={onClickMenu}
          />
        ))}
      </div>
    );
  }

  // Grid overlay content (12-column positioning system)
  if (isGridOverlayContent(content)) {
    return (
      <GridOverlayRenderer
        config={content}
        isActive={isActive}
        onClickMenu={onClickMenu}
        onOpenPopup={onOpenPopup}
      />
    );
  }

  return null;
};
