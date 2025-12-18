/**
 * GridRenderer Component
 * 
 * Recursively renders grid and flex layouts from configuration.
 * Handles nested layouts, cell positioning, and styling.
 */

import { cn } from '@/utils/misc';
import {
  GridLayout,
  FlexLayout,
  GridCell,
  isGridLayout,
  isFlexLayout,
  isLayoutWrapper,
} from '@/types/slide.types';
import { CellRenderer } from './CellRenderer';
import { MenuLabels } from '../Header';

interface GridRendererProps {
  layout: GridLayout | FlexLayout;
  isActive?: boolean;
  onOpenPopup?: (popupKey: string) => void;
  onClickMenu?: (label: MenuLabels) => void;
  className?: string;
}

export const GridRenderer: React.FC<GridRendererProps> = ({
  layout,
  isActive = false,
  onOpenPopup,
  onClickMenu,
  className,
}) => {
  // Render Grid Layout
  if (isGridLayout(layout)) {
    const gridTemplateColumns = typeof layout.columns === 'number'
      ? `repeat(${layout.columns}, 1fr)`
      : layout.columns;
    
    const gridTemplateRows = layout.rows
      ? (typeof layout.rows === 'number'
          ? `repeat(${layout.rows}, 1fr)`
          : layout.rows)
      : undefined;

    return (
      <div
        className={cn('grid', layout.className, className)}
        style={{
          gridTemplateColumns,
          gridTemplateRows,
          gap: layout.gap,
        }}
      >
        {layout.cells.map((cell) => (
          <GridCellRenderer
            key={cell.id}
            cell={cell}
            isActive={isActive}
            onOpenPopup={onOpenPopup}
            onClickMenu={onClickMenu}
          />
        ))}
      </div>
    );
  }

  // Render Flex Layout
  if (isFlexLayout(layout)) {
    const flexDirection = layout.direction === 'column' ? 'flex-col' : 'flex-row';
    const alignItems = layout.align ? `items-${layout.align}` : '';
    const justifyContent = layout.justify ? `justify-${layout.justify}` : '';

    return (
      <div
        className={cn(
          'flex',
          flexDirection,
          alignItems,
          justifyContent,
          layout.className,
          className
        )}
        style={{ gap: layout.gap }}
      >
        {layout.children.map((child, index) => {
          if (isLayoutWrapper(child)) {
            return (
              <div key={child.id ?? index} className={child.className}>
                <GridRenderer
                  layout={child.layout}
                  isActive={isActive}
                  onOpenPopup={onOpenPopup}
                  onClickMenu={onClickMenu}
                />
              </div>
            );
          }

          // It's a GridCell
          return (
            <GridCellRenderer
              key={child.id}
              cell={child}
              isActive={isActive}
              onOpenPopup={onOpenPopup}
              onClickMenu={onClickMenu}
            />
          );
        })}
      </div>
    );
  }

  return null;
};

interface GridCellRendererProps {
  cell: GridCell;
  isActive?: boolean;
  onOpenPopup?: (popupKey: string) => void;
  onClickMenu?: (label: MenuLabels) => void;
}

const GridCellRenderer: React.FC<GridCellRendererProps> = ({
  cell,
  isActive,
  onOpenPopup,
  onClickMenu,
}) => {
  const style: React.CSSProperties = {};
  
  if (cell.gridColumn) style.gridColumn = cell.gridColumn;
  if (cell.gridRow) style.gridRow = cell.gridRow;
  if (cell.maxWidth) style.maxWidth = cell.maxWidth;
  if (cell.maxHeight) style.maxHeight = cell.maxHeight;
  if (cell.width) style.width = cell.width;
  if (cell.height) style.height = cell.height;

  return (
    <div className={cell.className} style={style}>
      <CellRenderer
        content={cell.content}
        isActive={isActive}
        onOpenPopup={onOpenPopup}
        onClickMenu={onClickMenu}
      />
    </div>
  );
};
