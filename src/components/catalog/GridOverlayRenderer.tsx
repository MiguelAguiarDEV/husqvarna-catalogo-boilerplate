/**
 * GridOverlayRenderer
 * 
 * Renders a 12-column grid overlay system for precise positioning
 * of text and other elements over a background image.
 */

import Image from 'next/image';
import { useRouter } from 'next/router';
import { GridOverlayContent, GridOverlayItem, interpolateLocalePath } from '@/types/slide.types';
import { CellRenderer } from './CellRenderer';
import { MenuLabels } from '../Header';
import { cn } from '@/utils/misc';

interface GridOverlayRendererProps {
  config: GridOverlayContent;
  isActive?: boolean;
  onClickMenu?: (label: MenuLabels) => void;
  onOpenPopup?: (key: string) => void;
}

export const GridOverlayRenderer: React.FC<GridOverlayRendererProps> = ({
  config,
  isActive = false,
  onClickMenu,
  onOpenPopup,
}) => {
  const router = useRouter();
  const locale = router.query.locale as string;
  
  const backgroundSrc = interpolateLocalePath(config.background.src, locale);
  
  // Map alignment values to Tailwind classes
  const getAlignClass = (align?: 'start' | 'center' | 'end') => {
    switch (align) {
      case 'start': return 'justify-start';
      case 'center': return 'justify-center';
      case 'end': return 'justify-end';
      default: return 'justify-start';
    }
  };
  
  const getVerticalAlignClass = (align?: 'start' | 'center' | 'end') => {
    switch (align) {
      case 'start': return 'items-start';
      case 'center': return 'items-center';
      case 'end': return 'items-end';
      default: return 'items-start';
    }
  };

  return (
    <div 
      className={cn('catalog-grid-overlay relative h-full w-full', config.className)}
      data-component="GridOverlayRenderer"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundSrc}
          alt={config.background.alt}
          fill
          className={cn('object-cover', config.background.className)}
          priority
        />
      </div>
      
      {/* 12x12 Grid Overlay */}
      <div 
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'repeat(12, 1fr)',
        }}
      >
        {config.items.map((item, index) => (
          <GridOverlayItemRenderer
            key={item.id || `overlay-item-${index}`}
            item={item}
            isActive={isActive}
            onClickMenu={onClickMenu}
            onOpenPopup={onOpenPopup}
            alignClass={getAlignClass(item.align)}
            verticalAlignClass={getVerticalAlignClass(item.verticalAlign)}
          />
        ))}
      </div>
    </div>
  );
};

interface GridOverlayItemRendererProps {
  item: GridOverlayItem;
  isActive: boolean;
  onClickMenu?: (label: MenuLabels) => void;
  onOpenPopup?: (key: string) => void;
  alignClass: string;
  verticalAlignClass: string;
}

const GridOverlayItemRenderer: React.FC<GridOverlayItemRendererProps> = ({
  item,
  isActive,
  onClickMenu,
  onOpenPopup,
  alignClass,
  verticalAlignClass,
}) => {
  return (
    <div
      className={cn(
        'catalog-grid-overlay-item flex',
        alignClass,
        verticalAlignClass,
        item.className
      )}
      style={{
        gridColumn: `${item.colStart} / span ${item.colSpan}`,
        gridRow: `${item.rowStart} / span ${item.rowSpan}`,
      }}
      data-component="GridOverlayItem"
      data-col-start={item.colStart}
      data-col-span={item.colSpan}
      data-row-start={item.rowStart}
      data-row-span={item.rowSpan}
    >
      <CellRenderer
        content={item.content}
        isActive={isActive}
        onClickMenu={onClickMenu}
        onOpenPopup={onOpenPopup}
      />
    </div>
  );
};

export default GridOverlayRenderer;
