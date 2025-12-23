/**
 * GridRenderer Component
 * 
 * Recursively renders grid and flex layouts from configuration.
 * Handles nested layouts, cell positioning, and styling.
 * Supports responsive styles with { mobile: "...", desktop: "..." } format.
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
import { useBreakpoint, resolveResponsiveValue, Breakpoint } from '@/hooks/useBreakpoint';

interface GridRendererProps {
  layout?: GridLayout | FlexLayout;
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
  // Early return if no layout (e.g., customComponent slides)
  if (!layout) {
    return null;
  }

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
        className={cn('catalog-grid', layout.className, className)}
        data-component="GridRenderer"
        data-layout-type="grid"
        data-columns={layout.columns}
        style={{
          gridTemplateColumns,
          gridTemplateRows,
          gap: layout.gap,
          ...layout.style,
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
          'catalog-flex',
          'flex',
          flexDirection,
          alignItems,
          justifyContent,
          layout.className,
          className
        )}
        data-component="GridRenderer"
        data-layout-type="flex"
        data-direction={layout.direction}
        style={{ gap: layout.gap, ...layout.style }}
      >
        {layout.children.map((child, index) => {
          if (isLayoutWrapper(child)) {
            return (
              <div 
                key={child.id ?? index} 
                className={cn('catalog-layout-wrapper', child.className)}
                data-component="LayoutWrapper"
                data-wrapper-id={child.id}
              >
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
  const breakpoint = useBreakpoint();
  
  // Helper to resolve responsive values in style object
  const resolveResponsiveStyles = (
    styleObj: Record<string, unknown> | undefined,
    bp: Breakpoint
  ): React.CSSProperties => {
    if (!styleObj) return {};
    
    const resolved: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(styleObj)) {
      const resolvedValue = resolveResponsiveValue(value as string | number | { mobile?: string | number; desktop?: string | number }, bp);
      if (resolvedValue !== undefined) {
        resolved[key] = resolvedValue;
      }
    }
    return resolved as React.CSSProperties;
  };
  
  // Resolve responsive styles
  const resolvedStyle = resolveResponsiveStyles(cell.style as Record<string, unknown>, breakpoint);
  
  const style: React.CSSProperties = {
    ...resolvedStyle,
  };
  
  // Then apply grid-specific properties (also support responsive values)
  if (cell.gridColumn) style.gridColumn = cell.gridColumn;
  if (cell.gridRow) style.gridRow = cell.gridRow;
  if (cell.maxWidth) {
    const resolved = resolveResponsiveValue(cell.maxWidth as string | number | { mobile?: string | number; desktop?: string | number }, breakpoint);
    if (resolved !== undefined) style.maxWidth = resolved;
  }
  if (cell.maxHeight) {
    const resolved = resolveResponsiveValue(cell.maxHeight as string | number | { mobile?: string | number; desktop?: string | number }, breakpoint);
    if (resolved !== undefined) style.maxHeight = resolved;
  }
  if (cell.width) {
    const resolved = resolveResponsiveValue(cell.width as string | number | { mobile?: string | number; desktop?: string | number }, breakpoint);
    if (resolved !== undefined) style.width = resolved;
  }
  if (cell.height) {
    const resolved = resolveResponsiveValue(cell.height as string | number | { mobile?: string | number; desktop?: string | number }, breakpoint);
    if (resolved !== undefined) style.height = resolved;
  }

  return (
    <div 
      className={cn('catalog-cell', `catalog-cell--${cell.id}`, cell.className)} 
      data-component="GridCell"
      data-cell-id={cell.id}
      data-content-type={cell.content.type}
      style={style}
    >
      <CellRenderer
        content={cell.content}
        isActive={isActive}
        onOpenPopup={onOpenPopup}
        onClickMenu={onClickMenu}
      />
    </div>
  );
};
