/**
 * Slide Configuration Types
 * 
 * Comprehensive type definitions for JSON-driven configurable slide components.
 * These types enable the construction of complex grid layouts from JSON configuration.
 */

import { ProductData } from './index';

// ============================================================================
// Core Slide Configuration
// ============================================================================

export interface SlideConfig {
  /** Unique slide identifier */
  id: string;
  /** Additional CSS classes for the slide container */
  className?: string;
  /** Inline CSS styles (for values not in Tailwind) */
  style?: React.CSSProperties;
  /** Background color or Tailwind class */
  backgroundColor?: string;
  /** Padding classes */
  padding?: string;
  /** Number of mobile viewport sections (2 for left/right, 4 for quadrants) */
  mobileViewports: 2 | 4;
  /** Root layout for the slide */
  layout: GridLayout | FlexLayout;
  /** Localized content data */
  content?: Record<string, unknown>;
  /** Popup dialog configurations keyed by ID */
  popups?: Record<string, ProductPopupConfig[]>;
  /** Menu labels that navigate to this slide */
  menuLinks?: string[];
  /** Searchable keywords for this slide */
  searchKeywords?: string[];
}

// ============================================================================
// Layout Types
// ============================================================================

export interface GridLayout {
  type: 'grid';
  /** Number of columns or CSS grid-template-columns value */
  columns: number | string;
  /** Number of rows or CSS grid-template-rows value */
  rows?: number | string;
  /** Gap between grid items */
  gap?: string;
  /** Additional CSS classes */
  className?: string;
  /** Grid cells */
  cells: GridCell[];
  /** Inline CSS styles */
  style?: React.CSSProperties;
}

export interface FlexLayout {
  type: 'flex';
  /** Flex direction */
  direction: 'row' | 'column';
  /** Gap between items */
  gap?: string;
  /** Additional CSS classes */
  className?: string;
  /** Align items (cross-axis) */
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  /** Justify content (main-axis) */
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  /** Child elements */
  children: (GridCell | LayoutWrapper)[];
  /** Inline CSS styles */
  style?: React.CSSProperties;
}

/** Wrapper for nested layouts in flex children */
export interface LayoutWrapper {
  id?: string;
  className?: string;
  layout: GridLayout | FlexLayout;
}

export interface GridCell {
  /** Cell identifier */
  id: string;
  /** CSS grid-column value (e.g., "1 / 3" or "span 2") */
  gridColumn?: string;
  /** CSS grid-row value (e.g., "1 / 2") */
  gridRow?: string;
  /** Maximum width constraint */
  maxWidth?: string;
  /** Maximum height constraint */
  maxHeight?: string;
  /** Width value */
  width?: string;
  /** Height value */
  height?: string;
  /** Additional CSS classes */
  className?: string;
  /** Inline CSS styles */
  style?: React.CSSProperties;
  /** Cell content */
  content: CellContent;
}

// ============================================================================
// Cell Content Types
// ============================================================================

export type CellContent =
  | ImageContent
  | ProductCardContent
  | TextContent
  | TitleContent
  | ButtonContent
  | NestedGridContent
  | NestedFlexContent
  | OverlayContent
  | GridOverlayContent;

export interface ImageContent {
  type: 'image';
  /** Image source path (supports {locale} placeholder) */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Image width */
  width?: number;
  /** Image height */
  height?: number;
  /** CSS classes for the container wrapper div */
  containerClassName?: string;
  /** CSS classes for the image element itself */
  className?: string;
  /** Click action */
  onClick?: ClickAction;
  /** Enable motion hover effect */
  hoverScale?: boolean;
}

export interface ProductCardContent {
  type: 'productCard';
  /** Image source path (supports {locale} placeholder) */
  imageSrc: string;
  /** Alt text */
  alt?: string;
  /** CSS classes for the image */
  imgClassName?: string;
  /** Card variant - NOTE: 'no-butto' is a typo in the original component */
  variant?: 'default' | 'floating' | 'no-butto';
  /** Button text (translation key or direct text) */
  buttonText?: string;
  /** Key to reference popup configuration */
  popupKey?: string;
  /** Button CSS classes */
  buttonClassName?: string;
  /** Button container CSS classes */
  buttonContainerClassName?: string;
}

export interface TextContent {
  type: 'text';
  /** Translation key for i18n */
  textKey: string;
  /** Additional CSS classes */
  className?: string;
  /** HTML element type */
  element?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
}

export interface TitleContent {
  type: 'title';
  /** Translation key for i18n */
  titleKey: string;
  /** Title variant - matches SlideTitle component */
  variant?: 'bg-transparent' | 'bg-black';
  /** Additional CSS classes */
  className?: string;
}

export interface ButtonContent {
  type: 'button';
  /** Translation key for button text */
  textKey: string;
  /** Button CSS classes */
  className?: string;
  /** Click action */
  onClick?: ClickAction;
}

export interface NestedGridContent {
  type: 'nestedGrid';
  /** Nested grid layout configuration */
  layout: GridLayout;
}

export interface NestedFlexContent {
  type: 'nestedFlex';
  /** Nested flex layout configuration */
  layout: FlexLayout;
}

export interface OverlayContent {
  type: 'overlay';
  /** Positioning classes (e.g., "absolute left-[70px] top-[101px]") */
  position: string;
  /** Children to render in the overlay */
  children: CellContent[];
}

/** Grid overlay with 12-column positioning system */
export interface GridOverlayContent {
  type: 'gridOverlay';
  /** Background image or content */
  background: ImageContent;
  /** Overlay items positioned using 12-column grid */
  items: GridOverlayItem[];
  /** Container class name */
  className?: string;
}

/** Item positioned within a 12x12 grid overlay */
export interface GridOverlayItem {
  /** Unique identifier */
  id?: string;
  /** Column start position (1-12) */
  colStart: number;
  /** Number of columns to span (1-12) */
  colSpan: number;
  /** Row start position (1-12) */
  rowStart: number;
  /** Number of rows to span (1-12) */
  rowSpan: number;
  /** Content to render at this position */
  content: Exclude<CellContent, GridOverlayContent>;
  /** Additional CSS classes for the item container */
  className?: string;
  /** Horizontal alignment within the grid cell */
  align?: 'start' | 'center' | 'end';
  /** Vertical alignment within the grid cell */
  verticalAlign?: 'start' | 'center' | 'end';
}

// ============================================================================
// Click Actions
// ============================================================================

export interface ClickAction {
  /** Action type */
  action: 'popup' | 'menu' | 'link' | 'video';
  /** Target: popup key, menu label, URL, or video URL */
  target: string;
}

// ============================================================================
// Product Popup Configuration
// ============================================================================

export interface ProductPopupConfig {
  /** Image source (supports {locale} placeholder) */
  src: string;
  /** Default product link */
  href: string;
  /** Per-locale product links */
  hrefs?: Record<string, string>;
  /** Image CSS classes */
  imgClassName?: string;
  /** Product data */
  productData: ProductPopupData;
}

export interface ProductPopupData {
  /** Product name */
  name: string;
  /** Product ID (can be per-locale) */
  id: string | Record<string, string>;
  /** Product price (can be per-locale) */
  price: string | Record<string, string>;
  /** Product category */
  category: string;
  /** Product variant */
  variant: string;
}

// ============================================================================
// Mobile Viewport Configuration
// ============================================================================

export type MobileViewportPosition =
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export interface MobileViewportConfig {
  /** Viewport position to display */
  position: MobileViewportPosition;
  /** Scale factor for X axis */
  scaleX?: number;
  /** Scale factor for Y axis */
  scaleY?: number;
  /** Translate X value */
  translateX?: string;
  /** Translate Y value */
  translateY?: string;
}

// ============================================================================
// Catalog Configuration
// ============================================================================

export interface CatalogConfig {
  /** Catalog identifier */
  id: string;
  /** Background image or color */
  background?: string;
  /** All slide configurations */
  slides: SlideConfig[];
  /** UI element translations */
  uiElements?: Record<string, Record<string, string>>;
}

// ============================================================================
// Type Guards
// ============================================================================

export const isGridLayout = (layout: GridLayout | FlexLayout): layout is GridLayout =>
  layout.type === 'grid';

export const isFlexLayout = (layout: GridLayout | FlexLayout): layout is FlexLayout =>
  layout.type === 'flex';

export const isLayoutWrapper = (item: GridCell | LayoutWrapper): item is LayoutWrapper =>
  'layout' in item;

export const isImageContent = (content: CellContent): content is ImageContent =>
  content.type === 'image';

export const isProductCardContent = (content: CellContent): content is ProductCardContent =>
  content.type === 'productCard';

export const isTextContent = (content: CellContent): content is TextContent =>
  content.type === 'text';

export const isTitleContent = (content: CellContent): content is TitleContent =>
  content.type === 'title';

export const isButtonContent = (content: CellContent): content is ButtonContent =>
  content.type === 'button';

export const isNestedGridContent = (content: CellContent): content is NestedGridContent =>
  content.type === 'nestedGrid';

export const isNestedFlexContent = (content: CellContent): content is NestedFlexContent =>
  content.type === 'nestedFlex';

export const isOverlayContent = (content: CellContent): content is OverlayContent =>
  content.type === 'overlay';

export const isGridOverlayContent = (content: CellContent): content is GridOverlayContent =>
  content.type === 'gridOverlay';

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Interpolates locale placeholder in paths
 */
export const interpolateLocalePath = (path: string, locale: string): string =>
  path.replace(/{locale}/g, locale);

/**
 * Gets locale-specific value from a value that can be a string or per-locale object
 */
export const getLocaleValue = (
  value: string | Record<string, string>,
  locale: string,
  fallbackLocale = 'es'
): string => {
  if (typeof value === 'string') return value;
  return value[locale] ?? value[fallbackLocale] ?? Object.values(value)[0] ?? '';
};

/**
 * Converts ProductPopupConfig to ProductData format for analytics
 */
export const toProductData = (
  popup: ProductPopupConfig,
  locale: string
): ProductData => ({
  name: popup.productData.name,
  id: getLocaleValue(popup.productData.id, locale),
  price: getLocaleValue(popup.productData.price, locale),
  category: popup.productData.category,
  variant: popup.productData.variant,
});

/**
 * Gets the appropriate href for a popup based on locale
 */
export const getPopupHref = (popup: ProductPopupConfig, locale: string): string => {
  if (popup.hrefs && popup.hrefs[locale]) {
    return popup.hrefs[locale];
  }
  return popup.href;
};

/**
 * Calculates mobile viewport index from desktop slide index
 */
export const getMobileViewportIndex = (
  desktopSlideIndex: number,
  mobileViewports: 2 | 4
): number => {
  // Slide 0 (cover) stays as 0
  if (desktopSlideIndex === 0) return 0;
  // Other slides map: slide 1 -> 1,2 or 1,2,3,4 etc.
  return (desktopSlideIndex - 1) * mobileViewports + 1;
};

/**
 * Calculates desktop slide index from mobile viewport index
 */
export const getDesktopSlideIndex = (
  mobileViewportIndex: number,
  slidesConfig: SlideConfig[]
): number => {
  if (mobileViewportIndex === 0) return 0;
  
  let mobileIdx = 1;
  for (let i = 1; i < slidesConfig.length; i++) {
    const slide = slidesConfig[i];
    if (!slide) continue;
    const viewports = slide.mobileViewports;
    if (mobileViewportIndex >= mobileIdx && mobileViewportIndex < mobileIdx + viewports) {
      return i;
    }
    mobileIdx += viewports;
  }
  return slidesConfig.length - 1;
};
