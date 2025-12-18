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
  interpolateLocalePath,
  ClickAction,
} from '@/types/slide.types';
import { ProductCard } from '../ProductCard';
import { SlideTitle } from '../SlideTitle';
import { Button } from '../Button';
import { GridRenderer } from './GridRenderer';
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
  if (isImageContent(content)) {
    const src = interpolateLocalePath(content.src, locale);
    
    if (content.hoverScale) {
      return (
        <motion.img
          loading="lazy"
          src={src}
          alt={content.alt}
          className={content.className}
          width={content.width}
          height={content.height}
          whileHover={{ scale: 1.1 }}
          onClick={() => handleClick(content.onClick)}
          style={{ cursor: content.onClick ? 'pointer' : 'default' }}
        />
      );
    }
    
    return (
      <Image
        loading="lazy"
        src={src}
        alt={content.alt}
        className={content.className}
        width={content.width ?? 0}
        height={content.height ?? 0}
        sizes={!content.width ? '100vw' : undefined}
        style={!content.width ? { width: '100%', height: 'auto' } : undefined}
        onClick={() => handleClick(content.onClick)}
      />
    );
  }

  // Product card content
  if (isProductCardContent(content)) {
    const imageSrc = interpolateLocalePath(content.imageSrc, locale);
    
    return (
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
    );
  }

  // Text content
  if (isTextContent(content)) {
    const Element = content.element ?? 'p';
    return (
      <Element className={content.className}>
        {t(content.textKey)}
      </Element>
    );
  }

  // Title content
  if (isTitleContent(content)) {
    return (
      <SlideTitle
        className={content.className}
        variant={content.variant ?? 'bg-transparent'}
        title={t(content.titleKey)}
        isActive={isActive}
      />
    );
  }

  // Button content
  if (isButtonContent(content)) {
    return (
      <Button
        className={content.className}
        onClick={() => handleClick(content.onClick)}
      >
        {t(content.textKey)}
      </Button>
    );
  }

  // Nested grid content
  if (isNestedGridContent(content)) {
    return (
      <GridRenderer
        layout={content.layout}
        isActive={isActive}
        onOpenPopup={onOpenPopup}
        onClickMenu={onClickMenu}
      />
    );
  }

  // Nested flex content
  if (isNestedFlexContent(content)) {
    return (
      <GridRenderer
        layout={content.layout}
        isActive={isActive}
        onOpenPopup={onOpenPopup}
        onClickMenu={onClickMenu}
      />
    );
  }

  // Overlay content
  if (isOverlayContent(content)) {
    return (
      <div className={content.position}>
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

  return null;
};
