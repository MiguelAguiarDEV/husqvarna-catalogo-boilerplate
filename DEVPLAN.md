# DEVPLAN.md - JSON-Driven Slide Architecture

> **Project:** Husqvarna Catalogo 2026 - Slide System Refactoring
> **Version:** 1.0.0
> **Created:** 2025-12-16
> **Status:** Planning Phase

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Current State Analysis](#2-current-state-analysis)
3. [Target Architecture](#3-target-architecture)
4. [JSON Schema Design](#4-json-schema-design)
5. [TypeScript Interfaces](#5-typescript-interfaces)
6. [Grid System & Splitting](#6-grid-system--splitting)
7. [Nested Grids & Spans](#7-nested-grids--spans)
8. [Component Architecture](#8-component-architecture)
9. [Navigation System](#9-navigation-system)
10. [File Structure](#10-file-structure)
11. [Migration Strategy](#11-migration-strategy)
12. [Testing Strategy](#12-testing-strategy)
13. [Rollback Plan](#13-rollback-plan)

---

## 1. Executive Summary

### Problem
- **47+ individual slide component files** with duplicated patterns
- Hard to maintain, edit, and scale
- Non-developers cannot modify content
- Mobile variants require separate files (Slide2_1.tsx, Slide2_2.tsx)

### Solution
- **Single JSON "bible"** containing all slide configurations
- **Reusable renderer components** that interpret JSON
- **Grid-based splitting system** for mobile (2, 4, 8 parts)
- **Type-safe architecture** with full TypeScript coverage

### Benefits
| Metric | Before | After |
|--------|--------|-------|
| Slide Files | 47+ | 1 JSON + ~15 components |
| Lines of Code | ~8,000 | ~2,000 |
| Edit Difficulty | Developer required | JSON edit |
| Type Safety | Partial | 100% |
| Mobile Variants | Manual files | Auto-generated |

---

## 2. Current State Analysis

### 2.1 Slide Types Identified

| Type | Desktop Slides | Mobile Behavior | Example |
|------|----------------|-----------------|---------|
| Full Image | Slide1 | Split horizontal 2 | Cover page |
| Split (Left/Right) | Slide2 | Split into 2 slides | Info + Grid |
| Grid Navigation | Slide3 | Split into 4 (2x2) | Category index |
| Info + Icons | Slide4 | Split into 2 | Battery info |
| Product Showcase | Slide5 | Split into 2-4 | New products |
| Product Grid | Slide6-17 | Split 2-4 based on content | Category pages |

### 2.2 Content Elements Found

```
Elements in current slides:
├── Images (static, clickable, hover effects)
├── ProductCards (with dialog triggers)
├── Titles (animated with Framer Motion)
├── Text blocks (translated)
├── Icon rows (with labels)
├── Buttons (navigation, external links)
├── Videos (embedded, popup)
└── Grids (2x2, 2x3, 3x2, custom)
```

### 2.3 Current Mobile Split Pattern

```
Desktop Slide 2 (1920x1080)
┌─────────────────────────────────────┐
│  LEFT SECTION   │   RIGHT SECTION   │
│  (Image + Text) │   (2x3 Grid)      │
│                 │   [1][2]          │
│                 │   [3][4]          │
│                 │   [5][6]          │
└─────────────────────────────────────┘
        ↓ Mobile Split ↓
┌─────────────┐  ┌─────────────┐
│  Slide 2-1  │  │  Slide 2-2  │
│  LEFT HALF  │  │  RIGHT HALF │
│  (100dvw)   │  │  (100dvw)   │
└─────────────┘  └─────────────┘
```

---

## 3. Target Architecture

### 3.1 High-Level Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        slides.json                          │
│                      (THE BIBLE)                            │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    useSlideConfig()                         │
│              Parse, validate, transform                     │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    useFlatSlides()                          │
│         Flatten for carousel (handle splits)                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     SlideRenderer                           │
│              Route to correct layout                        │
└─────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │ GridLayout│   │ FlexLayout│   │SplitLayout│
        └──────────┘   └──────────┘   └──────────┘
              │               │               │
              └───────────────┼───────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    ElementRenderer                          │
│         Switch on element.type → specific component         │
└─────────────────────────────────────────────────────────────┘
                              │
        ┌─────────┬─────────┬─────────┬─────────┐
        ▼         ▼         ▼         ▼         ▼
   ImageEl   GridEl   TitleEl   ProductEl   ...etc
```

### 3.2 Core Principles

1. **JSON is the single source of truth**
2. **Components are stateless renderers**
3. **All layout math happens in utilities**
4. **Mobile splits are auto-calculated**
5. **Type safety from JSON to render**

---

## 4. JSON Schema Design

### 4.1 Root Structure

```json
{
  "$schema": "./slides.schema.json",
  "version": "1.0.0",
  "config": {
    "defaultLocale": "es",
    "supportedLocales": ["es", "cat", "pt"],
    "breakpoints": {
      "mobile": 1024,
      "tablet": 1280
    }
  },
  "slides": [ /* SlideDefinition[] */ ],
  "dialogs": { /* Record<string, ProductDialog> */ }
}
```

### 4.2 Slide Definition

```json
{
  "id": "slide-3",
  "type": "grid-navigation",
  "menuCategory": "CORTE_Y_TALA",
  "searchTextKey": "slide3.textSearch_1",

  "desktop": {
    "layout": {
      "type": "grid",
      "columns": 4,
      "rows": 2,
      "gap": "15px",
      "padding": "30px"
    },
    "elements": [ /* SlideElement[] */ ]
  },

  "mobile": {
    "split": {
      "type": "grid",
      "columns": 2,
      "rows": 2,
      "totalParts": 4,
      "navigation": "swipe"
    },
    "layout": {
      "type": "grid",
      "columns": 2,
      "rows": 1,
      "gap": "10px",
      "padding": "20px"
    }
  }
}
```

### 4.3 Element Types

#### Image Element
```json
{
  "type": "image",
  "id": "hero-image",
  "src": "/images/{locale}/slide1/background.jpg",
  "alt": "Husqvarna Cover 2026",
  "sizing": {
    "width": "100%",
    "height": "100%",
    "objectFit": "cover",
    "objectPosition": "center center"
  },
  "position": {
    "gridColumn": "1 / 3",
    "gridRow": "1 / 2"
  },
  "animation": {
    "type": "fadeIn",
    "duration": 500,
    "triggerOnActive": true
  },
  "onClick": {
    "type": "dialog",
    "dialogId": "hero-dialog"
  }
}
```

#### Grid Element (Nested)
```json
{
  "type": "grid",
  "id": "product-grid",
  "grid": {
    "columns": 2,
    "rows": 3,
    "gap": "15px",
    "alignItems": "stretch"
  },
  "sizing": {
    "width": "30%"
  },
  "elements": [
    { "type": "product-card", "...": "..." },
    { "type": "product-card", "...": "..." }
  ]
}
```

#### Container with Absolute Children
```json
{
  "type": "container",
  "id": "overlay-container",
  "position": { "relative": true },
  "sizing": { "width": "100%", "height": "500px" },
  "elements": [
    {
      "type": "image",
      "src": "/images/{locale}/slide7/background.png",
      "sizing": { "width": "100%", "height": "100%" }
    },
    {
      "type": "product-card",
      "position": {
        "absolute": true,
        "top": "43%",
        "left": "9%"
      },
      "sizing": { "maxWidth": "15%" },
      "dialogId": "popup-0"
    },
    {
      "type": "product-card",
      "position": {
        "absolute": true,
        "bottom": "7%",
        "right": "6%"
      },
      "sizing": { "maxWidth": "15%" },
      "dialogId": "popup-1"
    }
  ]
}
```

#### Product Card Element
```json
{
  "type": "product-card",
  "id": "card-battery-1",
  "imageSrc": "/images/{locale}/slide5/product1.png",
  "alt": "Husqvarna 120iTK4-P",
  "variant": "floating",
  "sizing": {
    "maxWidth": "168px",
    "maxHeight": "241px"
  },
  "button": {
    "textKey": "elements.shop_now",
    "hidden": false,
    "position": { "bottom": "10%" }
  },
  "dialogId": "product-120",
  "dialogSlideIndex": 0
}
```

#### Title Element (Animated)
```json
{
  "type": "title",
  "id": "main-title",
  "translationKey": "slide2.title",
  "variant": "bg-transparent",
  "animated": true,
  "styling": {
    "className": "text-white text-5xl font-bold"
  },
  "position": {
    "absolute": true,
    "top": "20%",
    "left": "5%"
  }
}
```

### 4.4 Mobile Split Configuration

#### Simple Horizontal Split (2 parts)
```json
{
  "mobile": {
    "split": {
      "type": "horizontal",
      "parts": 2
    }
  }
}
```

#### Grid Split (4 parts - 2x2)
```json
{
  "mobile": {
    "split": {
      "type": "grid",
      "columns": 2,
      "rows": 2,
      "totalParts": 4,
      "order": "row-first"
    }
  }
}
```
```
Desktop (4x2 grid):
┌───┬───┬───┬───┐
│ 1 │ 2 │ 3 │ 4 │
├───┼───┼───┼───┤
│ 5 │ 6 │ 7 │ 8 │
└───┴───┴───┴───┘

Mobile Split (2x2 = 4 slides):
┌───────┐ ┌───────┐ ┌───────┐ ┌───────┐
│ 1 │ 2 │ │ 3 │ 4 │ │ 5 │ 6 │ │ 7 │ 8 │
└───────┘ └───────┘ └───────┘ └───────┘
 Part 1    Part 2    Part 3    Part 4
```

#### Grid Split (8 parts - 4x2)
```json
{
  "mobile": {
    "split": {
      "type": "grid",
      "columns": 4,
      "rows": 2,
      "totalParts": 8,
      "order": "column-first"
    }
  }
}
```

### 4.5 Dialogs Configuration

```json
{
  "dialogs": {
    "product-120": {
      "id": "product-120",
      "title": "Podadora de altura a batería",
      "images": [
        {
          "src": "/images/{locale}/slide5/120-dialog/image_01.jpg",
          "href": {
            "es": "https://tiendahusqvarna.es/...",
            "cat": "https://tiendahusqvarna.es/...",
            "pt": "https://lojahusqvarna.pt/..."
          },
          "imgClassName": "!max-h-[400px]",
          "productData": {
            "name": "Husqvarna 120iTK4-P",
            "id": { "es": "18636", "cat": "18636", "pt": "23386" },
            "price": { "es": "399", "cat": "399", "pt": "379" },
            "category": "Podadora",
            "variant": "Podadora"
          }
        },
        {
          "src": "/images/{locale}/slide5/120-dialog/image_02.jpg",
          "href": { "...": "..." },
          "productData": { "...": "..." }
        }
      ]
    }
  }
}
```

---

## 5. TypeScript Interfaces

### 5.1 Core Types (`src/types/slides.ts`)

```typescript
// ============================================
// LOCALE & PRIMITIVES
// ============================================

export type SupportedLocale = "es" | "cat" | "pt";

/**
 * Value that can be a simple string or locale-specific
 * @example "Hello" or { es: "Hola", cat: "Hola", pt: "Olá" }
 */
export type LocaleValue<T> = T | Record<SupportedLocale, T>;

export type LocaleString = LocaleValue<string>;
export type LocaleNumber = LocaleValue<number>;

// ============================================
// SIZING & DIMENSIONS
// ============================================

export interface Sizing {
  /** Width value: "100%", "300px", "50dvw" */
  width?: string;
  /** Height value: "100%", "500px", "100dvh" */
  height?: string;
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  /** Aspect ratio: "16/9", "4/3", "1/1" */
  aspectRatio?: string;
  /** Object fit for images */
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  /** Object position for images: "center", "left top", "50% 25%" */
  objectPosition?: string;
}

// ============================================
// POSITIONING
// ============================================

export interface Position {
  /** Enable position: relative */
  relative?: boolean;
  /** Enable position: absolute */
  absolute?: boolean;
  /** Enable position: fixed */
  fixed?: boolean;
  /** Top offset: "20%", "100px" */
  top?: string;
  /** Right offset */
  right?: string;
  /** Bottom offset */
  bottom?: string;
  /** Left offset */
  left?: string;
  /** Z-index for stacking */
  zIndex?: number;
  /** CSS transform value */
  transform?: string;
  /** Transform origin */
  transformOrigin?: string;
  /** Grid column placement: "1 / 3", "span 2" */
  gridColumn?: string;
  /** Grid row placement: "1 / 2", "span 2" */
  gridRow?: string;
}

// ============================================
// GRID CONFIGURATION
// ============================================

export interface GridConfig {
  /** Number of columns */
  columns: number;
  /** Number of rows (optional, auto if not set) */
  rows?: number;
  /** Gap between all items */
  gap?: string;
  /** Gap between rows only */
  rowGap?: string;
  /** Gap between columns only */
  columnGap?: string;
  /** Align items on cross axis */
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  /** Justify items on main axis */
  justifyItems?: "start" | "center" | "end" | "stretch";
  /** Align content (multiple rows) */
  alignContent?: "start" | "center" | "end" | "stretch" | "between" | "around";
  /** Justify content (multiple columns) */
  justifyContent?: "start" | "center" | "end" | "stretch" | "between" | "around";
  /** Auto flow direction */
  autoFlow?: "row" | "column" | "dense" | "row dense" | "column dense";
  /** Template for columns: "1fr 2fr", "repeat(3, 1fr)" */
  templateColumns?: string;
  /** Template for rows */
  templateRows?: string;
}

// ============================================
// FLEX CONFIGURATION
// ============================================

export interface FlexConfig {
  /** Flex direction */
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  /** Enable flex wrap */
  wrap?: boolean | "wrap" | "nowrap" | "wrap-reverse";
  /** Align items on cross axis */
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  /** Justify content on main axis */
  justifyContent?: "start" | "center" | "end" | "between" | "around" | "evenly";
  /** Gap between items */
  gap?: string;
  /** Row gap */
  rowGap?: string;
  /** Column gap */
  columnGap?: string;
}

// ============================================
// LAYOUT CONFIGURATION
// ============================================

export type LayoutType = "single" | "flex" | "grid" | "absolute";

export interface LayoutConfig {
  /** Layout type */
  type: LayoutType;
  /** Flex configuration (when type = "flex") */
  flex?: FlexConfig;
  /** Grid configuration (when type = "grid") */
  grid?: GridConfig;
  /** Padding around content */
  padding?: string | {
    x?: string;
    y?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  /** Background configuration */
  background?: {
    color?: string;
    image?: string;
    gradient?: string;
    position?: string;
    size?: string;
    repeat?: string;
  };
  /** Overflow behavior */
  overflow?: "visible" | "hidden" | "scroll" | "auto";
  /** Additional CSS classes */
  className?: string;
}

// ============================================
// RESPONSIVE CONFIGURATION
// ============================================

export interface ResponsiveBreakpoint {
  /** Max width breakpoint */
  maxWidth?: number;
  /** Max height breakpoint */
  maxHeight?: number;
  /** Min width breakpoint */
  minWidth?: number;
  /** Min height breakpoint */
  minHeight?: number;
  /** Scale transform value */
  scale?: number;
  /** Margin top adjustment */
  marginTop?: string;
  /** Transform origin */
  transformOrigin?: string;
  /** Override layout at this breakpoint */
  layout?: Partial<LayoutConfig>;
  /** Custom inline styles */
  styles?: Record<string, string>;
}

export interface ResponsiveConfig {
  /** Array of breakpoint configurations */
  breakpoints?: ResponsiveBreakpoint[];
  /** Hide on mobile (< 1024px) */
  hideOnMobile?: boolean;
  /** Hide on desktop (>= 1024px) */
  hideOnDesktop?: boolean;
}

// ============================================
// MOBILE SPLIT CONFIGURATION
// ============================================

export type SplitType = "horizontal" | "vertical" | "grid";
export type SplitOrder = "row-first" | "column-first";

export interface SplitConfig {
  /** Type of split */
  type: SplitType;
  /** Number of parts for horizontal/vertical split */
  parts?: 2 | 3 | 4;
  /** Columns for grid split */
  columns?: number;
  /** Rows for grid split */
  rows?: number;
  /** Total parts (columns * rows for grid) */
  totalParts?: number;
  /** Order of navigation through parts */
  order?: SplitOrder;
  /** Navigation hint for UX */
  navigation?: "swipe" | "tap" | "arrows";
}

// ============================================
// ANIMATION CONFIGURATION
// ============================================

export type AnimationType =
  | "none"
  | "fadeIn"
  | "fadeOut"
  | "scaleIn"
  | "scaleOut"
  | "slideInLeft"
  | "slideInRight"
  | "slideInUp"
  | "slideInDown";

export interface AnimationConfig {
  /** Animation type */
  type: AnimationType;
  /** Duration in milliseconds */
  duration?: number;
  /** Delay before animation starts */
  delay?: number;
  /** Easing function */
  easing?: string;
  /** Only animate when slide is active */
  triggerOnActive?: boolean;
  /** Framer Motion variants (advanced) */
  variants?: {
    initial?: Record<string, unknown>;
    animate?: Record<string, unknown>;
    exit?: Record<string, unknown>;
  };
}

// ============================================
// CLICK ACTIONS
// ============================================

export type ClickActionType =
  | "none"
  | "dialog"
  | "navigate"
  | "menu"
  | "external"
  | "video"
  | "scroll";

export interface ClickAction {
  /** Action type */
  type: ClickActionType;
  /** Dialog ID to open */
  dialogId?: string;
  /** Slide index in dialog carousel */
  dialogSlideIndex?: number;
  /** External URL (locale-aware) */
  href?: LocaleString;
  /** Menu label for navigation */
  menuLabel?: string;
  /** Slide index for internal navigation */
  slideIndex?: number;
  /** Video URL for video action */
  videoUrl?: string;
  /** Scroll target element ID */
  scrollTarget?: string;
}

// ============================================
// ELEMENT TYPES
// ============================================

export type ElementType =
  | "image"
  | "container"
  | "grid"
  | "flex"
  | "title"
  | "text"
  | "product-card"
  | "button"
  | "video"
  | "icon-row"
  | "spacer"
  | "divider";

// ============================================
// BASE ELEMENT
// ============================================

export interface BaseElement {
  /** Element type discriminator */
  type: ElementType;
  /** Unique identifier */
  id?: string;
  /** Size configuration */
  sizing?: Sizing;
  /** Position configuration */
  position?: Position;
  /** Custom styling */
  styling?: {
    /** Tailwind CSS classes */
    className?: string;
    /** Inline styles */
    style?: Record<string, string>;
  };
  /** Responsive overrides */
  responsive?: ResponsiveConfig;
  /** Animation configuration */
  animation?: AnimationConfig;
  /** Which split part this element belongs to (for mobile) */
  splitPart?: number | number[];
}

// ============================================
// SPECIFIC ELEMENTS
// ============================================

export interface ImageElement extends BaseElement {
  type: "image";
  /** Image source path (supports {locale} placeholder) */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Loading strategy */
  loading?: "lazy" | "eager";
  /** Priority loading (LCP) */
  priority?: boolean;
  /** Click action */
  onClick?: ClickAction;
  /** Hover effect */
  hoverEffect?: "none" | "scale" | "opacity" | "brightness";
  /** Hover scale amount (default 1.05) */
  hoverScale?: number;
}

export interface ContainerElement extends BaseElement {
  type: "container";
  /** Child elements */
  elements: SlideElement[];
  /** Container layout */
  layout?: LayoutConfig;
}

export interface GridElement extends BaseElement {
  type: "grid";
  /** Grid configuration */
  grid: GridConfig;
  /** Child elements */
  elements: SlideElement[];
}

export interface FlexElement extends BaseElement {
  type: "flex";
  /** Flex configuration */
  flex: FlexConfig;
  /** Child elements */
  elements: SlideElement[];
}

export interface TitleElement extends BaseElement {
  type: "title";
  /** Translation key: "slide2.title" */
  translationKey: string;
  /** Enable scale animation */
  animated?: boolean;
  /** Background variant */
  variant?: "bg-transparent" | "bg-black" | "bg-white";
  /** HTML tag to render */
  tag?: "h1" | "h2" | "h3" | "h4" | "span" | "p";
}

export interface TextElement extends BaseElement {
  type: "text";
  /** Translation key */
  translationKey: string;
  /** HTML tag to render */
  tag?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Enable HTML rendering (dangerouslySetInnerHTML) */
  allowHtml?: boolean;
}

export interface ProductCardElement extends BaseElement {
  type: "product-card";
  /** Product image source */
  imageSrc: string;
  /** Alt text */
  alt: string;
  /** Card variant */
  variant: "default" | "floating" | "no-button";
  /** Button configuration */
  button?: {
    /** Translation key for button text */
    textKey?: string;
    /** Hide button */
    hidden?: boolean;
    /** Button position override */
    position?: Position;
    /** Button styling */
    className?: string;
  };
  /** Dialog to open on click */
  dialogId?: string;
  /** Starting slide in dialog */
  dialogSlideIndex?: number;
}

export interface ButtonElement extends BaseElement {
  type: "button";
  /** Translation key for button text */
  textKey: string;
  /** Click action */
  onClick: ClickAction;
  /** Button variant */
  variant?: "primary" | "secondary" | "ghost" | "outline";
  /** Icon name (optional) */
  icon?: string;
  /** Icon position */
  iconPosition?: "left" | "right";
}

export interface VideoElement extends BaseElement {
  type: "video";
  /** Video source URL */
  src: string;
  /** Poster image */
  poster?: string;
  /** Auto play */
  autoPlay?: boolean;
  /** Show controls */
  controls?: boolean;
  /** Muted */
  muted?: boolean;
  /** Loop playback */
  loop?: boolean;
  /** Play in modal */
  playInModal?: boolean;
}

export interface IconRowElement extends BaseElement {
  type: "icon-row";
  /** Array of icons */
  icons: Array<{
    /** Icon image source */
    src: string;
    /** Translation key for label */
    labelKey: string;
    /** Icon sizing */
    sizing?: Sizing;
  }>;
  /** Gap between icons */
  gap?: string;
  /** Alignment */
  align?: "start" | "center" | "end" | "between" | "around";
}

export interface SpacerElement extends BaseElement {
  type: "spacer";
  /** Fixed size or flex grow */
  size?: string;
  /** Flex grow value */
  grow?: number;
}

export interface DividerElement extends BaseElement {
  type: "divider";
  /** Orientation */
  orientation?: "horizontal" | "vertical";
  /** Divider color */
  color?: string;
  /** Divider thickness */
  thickness?: string;
}

/** Union of all element types */
export type SlideElement =
  | ImageElement
  | ContainerElement
  | GridElement
  | FlexElement
  | TitleElement
  | TextElement
  | ProductCardElement
  | ButtonElement
  | VideoElement
  | IconRowElement
  | SpacerElement
  | DividerElement;

// ============================================
// PRODUCT DATA & DIALOGS
// ============================================

export interface ProductData {
  /** Product name */
  name: string;
  /** Product ID (locale-aware) */
  id: LocaleString;
  /** Product price (locale-aware) */
  price: LocaleString;
  /** Product category for analytics */
  category: string;
  /** Product variant for analytics */
  variant: string;
}

export interface DialogImage {
  /** Image source */
  src: string;
  /** Shop URL (locale-aware) */
  href: LocaleString;
  /** Image styling */
  imgClassName?: string;
  /** Product data for analytics */
  productData: ProductData;
}

export interface ProductDialog {
  /** Unique dialog ID */
  id: string;
  /** Dialog title (optional) */
  title?: string;
  /** Carousel images */
  images: DialogImage[];
  /** Default starting slide */
  defaultActiveSlide?: number;
}

// ============================================
// SLIDE CONFIGURATION
// ============================================

export interface SlideViewConfig {
  /** Layout configuration */
  layout: LayoutConfig;
  /** Elements to render */
  elements: SlideElement[];
  /** Responsive breakpoints */
  responsive?: ResponsiveConfig;
  /** Custom styled-jsx CSS */
  customStyles?: string;
}

export interface MobileSlideConfig extends SlideViewConfig {
  /** Unique ID for this mobile variant */
  id: string;
}

export interface SlideDefinition {
  /** Unique slide identifier */
  id: string;
  /** Slide type for categorization */
  type: "cover" | "info" | "products" | "grid-navigation" | "category" | "custom";
  /** Menu category this slide belongs to */
  menuCategory?: string;
  /** Search text translation key */
  searchTextKey?: string;
  /** Desktop configuration */
  desktop: SlideViewConfig;
  /** Mobile configuration - can be null, single config, array, or split config */
  mobile?: null | SlideViewConfig | MobileSlideConfig[] | {
    split: SplitConfig;
    layout?: LayoutConfig;
    elements?: SlideElement[];
  };
}

// ============================================
// ROOT CONFIGURATION
// ============================================

export interface SlidesConfigMeta {
  /** Default locale */
  defaultLocale: SupportedLocale;
  /** All supported locales */
  supportedLocales: SupportedLocale[];
  /** Responsive breakpoints */
  breakpoints: {
    mobile: number;
    tablet: number;
  };
}

export interface SlidesConfig {
  /** JSON Schema reference */
  $schema?: string;
  /** Config version */
  version: string;
  /** Global configuration */
  config: SlidesConfigMeta;
  /** All slide definitions */
  slides: SlideDefinition[];
  /** All dialog definitions */
  dialogs: Record<string, ProductDialog>;
}

// ============================================
// RUNTIME TYPES (for hooks/components)
// ============================================

export interface FlattenedSlide {
  /** Unique ID for this flattened slide */
  id: string;
  /** Original slide definition ID */
  originalSlideId: string;
  /** Desktop index (for page counter) */
  desktopIndex: number;
  /** Mobile index (carousel position) */
  mobileIndex: number;
  /** If split, which part (0, 1, 2...) */
  splitPart?: number;
  /** Total split parts */
  totalSplitParts?: number;
  /** View configuration to render */
  viewConfig: SlideViewConfig;
}

export interface SlideRenderContext {
  /** Current locale */
  locale: SupportedLocale;
  /** Is slide currently active */
  isActive: boolean;
  /** Is mobile viewport */
  isMobile: boolean;
  /** All dialogs */
  dialogs: Record<string, ProductDialog>;
  /** Open dialog handler */
  onOpenDialog: (dialogId: string, slideIndex?: number) => void;
  /** Menu click handler */
  onClickMenu?: (label: string) => void;
  /** Navigate to slide handler */
  onNavigate?: (slideIndex: number) => void;
}
```

---

## 6. Grid System & Splitting

### 6.1 Split Calculation Algorithm

```typescript
// src/utils/splitCalculator.ts

export interface SplitResult {
  containerWidth: string;
  containerHeight: string;
  translateX: string;
  translateY: string;
  viewportClip: {
    top: string;
    right: string;
    bottom: string;
    left: string;
  };
}

/**
 * Calculate CSS values for split slides
 */
export function calculateSplit(
  splitConfig: SplitConfig,
  partIndex: number
): SplitResult {
  const { type, parts = 2, columns = 2, rows = 1, order = "row-first" } = splitConfig;

  if (type === "horizontal") {
    return calculateHorizontalSplit(parts, partIndex);
  }

  if (type === "vertical") {
    return calculateVerticalSplit(parts, partIndex);
  }

  if (type === "grid") {
    return calculateGridSplit(columns, rows, partIndex, order);
  }

  throw new Error(`Unknown split type: ${type}`);
}

function calculateHorizontalSplit(
  parts: number,
  partIndex: number
): SplitResult {
  const translateXPercent = -(partIndex * (100 / parts));

  return {
    containerWidth: `${parts * 100}dvw`,
    containerHeight: "100dvh",
    translateX: `${translateXPercent}%`,
    translateY: "0%",
    viewportClip: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
    },
  };
}

function calculateVerticalSplit(
  parts: number,
  partIndex: number
): SplitResult {
  const translateYPercent = -(partIndex * (100 / parts));

  return {
    containerWidth: "100dvw",
    containerHeight: `${parts * 100}dvh`,
    translateX: "0%",
    translateY: `${translateYPercent}%`,
    viewportClip: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
    },
  };
}

function calculateGridSplit(
  columns: number,
  rows: number,
  partIndex: number,
  order: SplitOrder
): SplitResult {
  let col: number;
  let row: number;

  if (order === "row-first") {
    // 0,1,2,3 → (0,0), (1,0), (0,1), (1,1) for 2x2
    col = partIndex % columns;
    row = Math.floor(partIndex / columns);
  } else {
    // column-first: 0,1,2,3 → (0,0), (0,1), (1,0), (1,1) for 2x2
    row = partIndex % rows;
    col = Math.floor(partIndex / rows);
  }

  const translateXPercent = -(col * 100);
  const translateYPercent = -(row * 100);

  return {
    containerWidth: `${columns * 100}dvw`,
    containerHeight: `${rows * 100}dvh`,
    translateX: `${translateXPercent}%`,
    translateY: `${translateYPercent}%`,
    viewportClip: {
      top: "0",
      right: "0",
      bottom: "0",
      left: "0",
    },
  };
}
```

### 6.2 Visual Examples

#### 2-Part Horizontal Split
```
DESKTOP:
┌──────────────────────────────────────────┐
│                  FULL                     │
│                 IMAGE                     │
│               (1920x1080)                 │
└──────────────────────────────────────────┘

MOBILE (split.parts = 2):
Container: 200dvw x 100dvh

Part 0 (translateX: 0%):
┌─────────────┬─────────────┐
│▓▓▓▓▓▓▓▓▓▓▓▓▓│             │
│▓▓ VISIBLE ▓▓│   HIDDEN    │
│▓▓▓▓▓▓▓▓▓▓▓▓▓│             │
└─────────────┴─────────────┘
    100dvw         100dvw

Part 1 (translateX: -50%):
┌─────────────┬─────────────┐
│             │▓▓▓▓▓▓▓▓▓▓▓▓▓│
│   HIDDEN    │▓▓ VISIBLE ▓▓│
│             │▓▓▓▓▓▓▓▓▓▓▓▓▓│
└─────────────┴─────────────┘
    100dvw         100dvw
```

#### 4-Part Grid Split (2x2)
```
DESKTOP (4 columns x 2 rows):
┌─────┬─────┬─────┬─────┐
│  1  │  2  │  3  │  4  │
├─────┼─────┼─────┼─────┤
│  5  │  6  │  7  │  8  │
└─────┴─────┴─────┴─────┘

MOBILE (split.columns = 2, split.rows = 2):
Container: 200dvw x 200dvh

Part 0 (tx: 0%, ty: 0%):      Part 1 (tx: -100%, ty: 0%):
┌─────┬─────┐                 ┌─────┬─────┐
│▓1▓▓▓│▓2▓▓▓│                 │▓3▓▓▓│▓4▓▓▓│
├─────┼─────┤                 ├─────┼─────┤
│  5  │  6  │                 │  7  │  8  │
└─────┴─────┘                 └─────┴─────┘

Part 2 (tx: 0%, ty: -100%):   Part 3 (tx: -100%, ty: -100%):
┌─────┬─────┐                 ┌─────┬─────┐
│  1  │  2  │                 │  3  │  4  │
├─────┼─────┤                 ├─────┼─────┤
│▓5▓▓▓│▓6▓▓▓│                 │▓7▓▓▓│▓8▓▓▓│
└─────┴─────┘                 └─────┴─────┘
```

#### 8-Part Grid Split (4x2)
```
DESKTOP (4 columns x 2 rows):
┌─────┬─────┬─────┬─────┐
│  A  │  B  │  C  │  D  │
├─────┼─────┼─────┼─────┤
│  E  │  F  │  G  │  H  │
└─────┴─────┴─────┴─────┘

MOBILE (split 4 cols x 2 rows = 8 parts):
Each part shows 1 cell (1x1)
Container: 400dvw x 200dvh

Navigation order (row-first):
A → B → C → D → E → F → G → H

Part 0: tx=0%, ty=0%       (shows A)
Part 1: tx=-100%, ty=0%    (shows B)
Part 2: tx=-200%, ty=0%    (shows C)
Part 3: tx=-300%, ty=0%    (shows D)
Part 4: tx=0%, ty=-100%    (shows E)
Part 5: tx=-100%, ty=-100% (shows F)
Part 6: tx=-200%, ty=-100% (shows G)
Part 7: tx=-300%, ty=-100% (shows H)
```

### 6.3 Element-Level Split Assignment

For cases where different elements go to different mobile parts:

```json
{
  "elements": [
    {
      "type": "product-card",
      "id": "card-1",
      "splitPart": 0,
      "...": "..."
    },
    {
      "type": "product-card",
      "id": "card-2",
      "splitPart": 0,
      "...": "..."
    },
    {
      "type": "product-card",
      "id": "card-3",
      "splitPart": 1,
      "...": "..."
    },
    {
      "type": "product-card",
      "id": "card-4",
      "splitPart": 1,
      "...": "..."
    }
  ]
}
```

---

## 7. Nested Grids & Spans

### 7.1 Complex Layout Support

The system must support magazine-style layouts with nested grids, row spans, and column spans. This is essential for creating rich visual layouts that split correctly on mobile.

### 7.2 Visual Example - Complex Nested Layout

```
DESKTOP: Parent Grid (2 cols x 1 row)
┌─────────────────────────────────────────────────────────────────┐
│                    │                                            │
│   LEFT COLUMN      │              RIGHT COLUMN                  │
│   (Nested Grid     │              (Nested Grid                  │
│    2 cols x 3 rows)│               3 cols x 2 rows)             │
│                    │                                            │
└─────────────────────────────────────────────────────────────────┘

LEFT COLUMN Detail (2 cols x 3 rows with spans):
┌─────────────────────────────┐
│      HEADER (colspan: 2)    │  ← Row 1: spans both columns
├──────────────┬──────────────┤
│    IMAGE 1   │   IMAGE 2    │  ← Row 2: normal 2 columns
├──────────────┼──────────────┤
│    IMAGE 3   │   IMAGE 4    │  ← Row 3: normal 2 columns
└──────────────┴──────────────┘

RIGHT COLUMN Detail (3 cols x 2 rows with spans):
┌──────────────────────────────────────────┐
│         HERO IMAGE                       │  ← Row 1: spans 2 cols
│         (colspan: 2,        ┌───────────┤
│          rowspan: 2)        │  CARD 1   │  ← Rows 1-2, Col 3
│                             ├───────────┤
│                             │  CARD 2   │
├─────────────┬───────────────┴───────────┤
│   CARD 3    │   CARD 4    │   CARD 5    │  ← Row 3: 3 columns (hypothetical)
└─────────────┴─────────────┴─────────────┘
```

### 7.3 JSON Structure for Nested Grids

```json
{
  "id": "slide-complex",
  "type": "products",
  "desktop": {
    "layout": {
      "type": "grid",
      "grid": {
        "columns": 2,
        "rows": 1,
        "gap": "30px",
        "templateColumns": "40% 60%"
      },
      "padding": "30px"
    },
    "elements": [
      {
        "type": "grid",
        "id": "left-nested-grid",
        "grid": {
          "columns": 2,
          "rows": 3,
          "gap": "15px"
        },
        "elements": [
          {
            "type": "image",
            "id": "header-image",
            "src": "/images/{locale}/slide/header.jpg",
            "alt": "Header",
            "position": {
              "gridColumn": "1 / 3",
              "gridRow": "1"
            },
            "sizing": { "width": "100%", "height": "auto" }
          },
          {
            "type": "product-card",
            "id": "card-1",
            "imageSrc": "/images/{locale}/slide/card1.jpg",
            "position": {
              "gridColumn": "1",
              "gridRow": "2"
            }
          },
          {
            "type": "product-card",
            "id": "card-2",
            "imageSrc": "/images/{locale}/slide/card2.jpg",
            "position": {
              "gridColumn": "2",
              "gridRow": "2"
            }
          },
          {
            "type": "product-card",
            "id": "card-3",
            "imageSrc": "/images/{locale}/slide/card3.jpg",
            "position": {
              "gridColumn": "1",
              "gridRow": "3"
            }
          },
          {
            "type": "product-card",
            "id": "card-4",
            "imageSrc": "/images/{locale}/slide/card4.jpg",
            "position": {
              "gridColumn": "2",
              "gridRow": "3"
            }
          }
        ]
      },
      {
        "type": "grid",
        "id": "right-nested-grid",
        "grid": {
          "columns": 3,
          "rows": 2,
          "gap": "15px",
          "templateColumns": "2fr 2fr 1fr"
        },
        "elements": [
          {
            "type": "image",
            "id": "hero-image",
            "src": "/images/{locale}/slide/hero.jpg",
            "alt": "Hero Product",
            "position": {
              "gridColumn": "1 / 3",
              "gridRow": "1 / 3"
            },
            "sizing": {
              "width": "100%",
              "height": "100%",
              "objectFit": "cover"
            },
            "onClick": {
              "type": "dialog",
              "dialogId": "hero-dialog"
            }
          },
          {
            "type": "product-card",
            "id": "side-card-1",
            "imageSrc": "/images/{locale}/slide/side1.jpg",
            "position": {
              "gridColumn": "3",
              "gridRow": "1"
            }
          },
          {
            "type": "product-card",
            "id": "side-card-2",
            "imageSrc": "/images/{locale}/slide/side2.jpg",
            "position": {
              "gridColumn": "3",
              "gridRow": "2"
            }
          }
        ]
      }
    ]
  }
}
```

### 7.4 Grid Position Syntax

Using CSS Grid syntax for positioning:

| Property | Values | Description |
|----------|--------|-------------|
| `gridColumn` | `"1"`, `"1 / 3"`, `"span 2"`, `"1 / -1"` | Column placement |
| `gridRow` | `"1"`, `"1 / 3"`, `"span 2"`, `"1 / -1"` | Row placement |

#### Common Patterns:

```typescript
// Span entire row (all columns)
position: { gridColumn: "1 / -1" }

// Span 2 columns starting from column 1
position: { gridColumn: "1 / 3" }
// or
position: { gridColumn: "span 2" }

// Span 2 rows starting from row 1
position: { gridRow: "1 / 3" }
// or
position: { gridRow: "span 2" }

// Large element spanning 2x2
position: {
  gridColumn: "1 / 3",  // columns 1-2
  gridRow: "1 / 3"      // rows 1-2
}

// Last column
position: { gridColumn: "-2 / -1" }
```

### 7.5 Mobile Split for Nested Grids

When a complex nested grid needs to split on mobile, the system calculates which elements belong to each split part based on their grid position.

#### Strategy 1: Auto-Split by Grid Position

```json
{
  "mobile": {
    "split": {
      "type": "grid",
      "columns": 2,
      "rows": 2,
      "totalParts": 4,
      "splitBy": "auto"
    }
  }
}
```

The system automatically assigns elements to split parts:

```
Desktop 4-column grid:
┌─────┬─────┬─────┬─────┐
│  A  │  B  │  C  │  D  │
├─────┼─────┼─────┼─────┤
│  E  │  F  │  G  │  H  │
└─────┴─────┴─────┴─────┘

Auto-split to 2x2 (4 parts):
Part 0: A, B, E, F  (columns 1-2)
Part 1: C, D, G, H  (columns 3-4)
```

#### Strategy 2: Manual Split Assignment

```json
{
  "elements": [
    {
      "type": "product-card",
      "id": "card-a",
      "splitPart": 0
    },
    {
      "type": "product-card",
      "id": "card-b",
      "splitPart": 0
    },
    {
      "type": "product-card",
      "id": "card-c",
      "splitPart": 1
    },
    {
      "type": "product-card",
      "id": "card-d",
      "splitPart": 1
    }
  ]
}
```

#### Strategy 3: Split Regions

Define named regions for splitting:

```json
{
  "mobile": {
    "split": {
      "type": "regions",
      "totalParts": 4,
      "regions": [
        { "part": 0, "gridArea": "1 / 1 / 2 / 3" },
        { "part": 1, "gridArea": "1 / 3 / 2 / 5" },
        { "part": 2, "gridArea": "2 / 1 / 3 / 3" },
        { "part": 3, "gridArea": "2 / 3 / 3 / 5" }
      ]
    }
  }
}
```

### 7.6 Handling Spans in Mobile Split

When an element spans multiple cells, the system needs to decide how to handle it during mobile split.

#### Option A: Element Appears in First Part

```json
{
  "type": "image",
  "position": {
    "gridColumn": "1 / 3",
    "gridRow": "1"
  },
  "splitBehavior": "first"
}
```

The spanning element only appears in the first split part it touches.

#### Option B: Element Appears in All Parts

```json
{
  "type": "image",
  "position": {
    "gridColumn": "1 / 3",
    "gridRow": "1"
  },
  "splitBehavior": "all"
}
```

The spanning element appears in all split parts it touches (useful for headers).

#### Option C: Element is Cropped per Part

```json
{
  "type": "image",
  "position": {
    "gridColumn": "1 / 3",
    "gridRow": "1"
  },
  "splitBehavior": "crop"
}
```

Each part shows the portion of the element that belongs to that region (like the horizontal image split).

### 7.7 Real-World Example: Slide 3 (Index)

```
Desktop Layout:
┌─────────────────────────────────────────────────────────────────┐
│                           TITLE                                 │
├─────────────────────────────┬───────────────────────────────────┤
│                             │            │                      │
│      LARGE IMAGE            │   CARD 1   │     CARD 2           │
│      (Corte y tala)         │            │                      │
│                             ├────────────┼──────────────────────┤
│                             │            │                      │
├─────────────────────────────┤   CARD 3   │     CARD 4           │
│                             │            │                      │
│      MEDIUM IMAGE           ├────────────┴──────────────────────┤
│      (Cuidado césped)       │                                   │
│                             │          CARD 5                   │
├─────────────────────────────┤         (wide)                    │
│      SMALL IMAGE            │                                   │
│      (Limpieza)             │                                   │
└─────────────────────────────┴───────────────────────────────────┘
```

JSON Configuration:

```json
{
  "id": "slide-3",
  "type": "grid-navigation",
  "desktop": {
    "layout": {
      "type": "grid",
      "grid": {
        "columns": 4,
        "rows": 4,
        "gap": "15px",
        "templateColumns": "1.5fr 1fr 1fr 1fr",
        "templateRows": "auto 1fr 1fr 1fr"
      },
      "padding": "30px"
    },
    "elements": [
      {
        "type": "title",
        "translationKey": "slide3.title",
        "position": { "gridColumn": "1 / -1", "gridRow": "1" }
      },
      {
        "type": "image",
        "id": "large-image",
        "src": "/images/{locale}/slide3/corte_tala.jpg",
        "alt": "Corte y tala",
        "position": { "gridColumn": "1", "gridRow": "2 / 4" },
        "onClick": { "type": "menu", "menuLabel": "CORTE_Y_TALA" }
      },
      {
        "type": "image",
        "id": "medium-image",
        "src": "/images/{locale}/slide3/cesped.jpg",
        "position": { "gridColumn": "1", "gridRow": "4" },
        "onClick": { "type": "menu", "menuLabel": "CUIDADO_DEL_CESPED" }
      },
      {
        "type": "product-card",
        "id": "card-recorte",
        "imageSrc": "/images/{locale}/slide3/recorte.jpg",
        "position": { "gridColumn": "2", "gridRow": "2" },
        "dialogId": "recorte-dialog"
      },
      {
        "type": "product-card",
        "id": "card-naturaleza",
        "imageSrc": "/images/{locale}/slide3/naturaleza.jpg",
        "position": { "gridColumn": "3", "gridRow": "2" },
        "dialogId": "naturaleza-dialog"
      },
      {
        "type": "product-card",
        "id": "card-suelo",
        "imageSrc": "/images/{locale}/slide3/suelo.jpg",
        "position": { "gridColumn": "2", "gridRow": "3" },
        "dialogId": "suelo-dialog"
      },
      {
        "type": "product-card",
        "id": "card-ropa",
        "imageSrc": "/images/{locale}/slide3/ropa.jpg",
        "position": { "gridColumn": "3", "gridRow": "3" },
        "dialogId": "ropa-dialog"
      },
      {
        "type": "image",
        "id": "wide-card",
        "src": "/images/{locale}/slide3/limpieza.jpg",
        "position": { "gridColumn": "2 / -1", "gridRow": "4" },
        "onClick": { "type": "menu", "menuLabel": "LIMPIEZA" }
      }
    ]
  },
  "mobile": {
    "split": {
      "type": "grid",
      "columns": 2,
      "rows": 2,
      "totalParts": 4
    },
    "layout": {
      "type": "grid",
      "grid": {
        "columns": 2,
        "rows": 2,
        "gap": "10px"
      },
      "padding": "20px"
    },
    "elementMapping": {
      "0": ["large-image", "medium-image"],
      "1": ["card-recorte", "card-naturaleza"],
      "2": ["card-suelo", "card-ropa"],
      "3": ["wide-card"]
    }
  }
}
```

Mobile Split Result:

```
Part 0:                    Part 1:
┌─────────────────────┐    ┌─────────────────────┐
│                     │    │          │          │
│    LARGE IMAGE      │    │  RECORTE │NATURALEZA│
│                     │    │          │          │
├─────────────────────┤    ├──────────┴──────────┤
│    MEDIUM IMAGE     │    │                     │
│                     │    │                     │
└─────────────────────┘    └─────────────────────┘

Part 2:                    Part 3:
┌─────────────────────┐    ┌─────────────────────┐
│          │          │    │                     │
│   SUELO  │   ROPA   │    │     WIDE CARD       │
│          │          │    │     (Limpieza)      │
├──────────┴──────────┤    ├─────────────────────┤
│                     │    │                     │
│                     │    │                     │
└─────────────────────┘    └─────────────────────┘
```

### 7.8 TypeScript Additions for Nested Grids

```typescript
// Additional types for nested grids

export interface GridPosition {
  /** Column position: "1", "1 / 3", "span 2", "1 / -1" */
  gridColumn?: string;
  /** Row position: "1", "1 / 3", "span 2" */
  gridRow?: string;
  /** Named grid area */
  gridArea?: string;
}

export type SplitBehavior = "first" | "all" | "crop" | "hide";

export interface ElementSplitConfig {
  /** Which split part(s) this element appears in */
  splitPart?: number | number[];
  /** How spanning elements behave during split */
  splitBehavior?: SplitBehavior;
}

export interface MobileSplitConfig extends SplitConfig {
  /** How to assign elements to parts */
  splitBy?: "auto" | "manual" | "regions";
  /** Region definitions for region-based splitting */
  regions?: Array<{
    part: number;
    gridArea: string;
  }>;
  /** Manual element-to-part mapping */
  elementMapping?: Record<string, string[]>;
}

// Update BaseElement
export interface BaseElement {
  // ... existing properties

  /** Grid position within parent grid */
  position?: Position & GridPosition;

  /** Split behavior configuration */
  splitConfig?: ElementSplitConfig;
}
```

### 7.9 Renderer Logic for Nested Grids

```typescript
// src/utils/gridSplitCalculator.ts

interface ElementWithPosition {
  id: string;
  position?: {
    gridColumn?: string;
    gridRow?: string;
  };
  splitPart?: number | number[];
  splitBehavior?: SplitBehavior;
}

/**
 * Calculate which elements belong to which split part
 */
export function calculateElementsForPart(
  elements: ElementWithPosition[],
  partIndex: number,
  splitConfig: MobileSplitConfig
): string[] {
  // Manual mapping takes priority
  if (splitConfig.elementMapping) {
    return splitConfig.elementMapping[partIndex.toString()] || [];
  }

  // Region-based splitting
  if (splitConfig.splitBy === "regions" && splitConfig.regions) {
    const region = splitConfig.regions.find(r => r.part === partIndex);
    if (!region) return [];

    return elements
      .filter(el => isElementInRegion(el, region.gridArea, splitConfig))
      .map(el => el.id!);
  }

  // Auto-split by grid position
  const { columns = 2, rows = 1 } = splitConfig;
  const colsPerPart = Math.ceil(getTotalColumns(elements) / columns);
  const rowsPerPart = Math.ceil(getTotalRows(elements) / rows);

  const partCol = partIndex % columns;
  const partRow = Math.floor(partIndex / columns);

  const colStart = partCol * colsPerPart + 1;
  const colEnd = colStart + colsPerPart;
  const rowStart = partRow * rowsPerPart + 1;
  const rowEnd = rowStart + rowsPerPart;

  return elements
    .filter(el => {
      const elCol = parseGridPosition(el.position?.gridColumn);
      const elRow = parseGridPosition(el.position?.gridRow);

      return (
        elCol.start < colEnd &&
        elCol.end > colStart &&
        elRow.start < rowEnd &&
        elRow.end > rowStart
      );
    })
    .map(el => el.id!);
}

function parseGridPosition(value?: string): { start: number; end: number } {
  if (!value) return { start: 1, end: 2 };

  // Handle "span N"
  if (value.startsWith("span")) {
    const span = parseInt(value.split(" ")[1], 10);
    return { start: 1, end: 1 + span };
  }

  // Handle "N / M"
  if (value.includes("/")) {
    const [start, end] = value.split("/").map(s => {
      const n = parseInt(s.trim(), 10);
      return n < 0 ? 999 + n : n; // Handle negative indices
    });
    return { start, end };
  }

  // Single number
  const n = parseInt(value, 10);
  return { start: n, end: n + 1 };
}
```

---

## 8. Component Architecture

### 8.1 Component Tree

```
<SlidesProvider>                    # Context with config, dialogs
│
├── <Carousel>                      # Swiper wrapper
│   │
│   └── {flattenedSlides.map}       # Loop through all slides
│       │
│       └── <SlideRenderer>         # Main renderer
│           │
│           ├── <SplitContainer>    # Handles split transforms (if mobile split)
│           │   │
│           │   └── <LayoutRenderer>
│           │       │
│           │       └── <ElementRenderer>  # Switch on type
│           │           │
│           │           ├── <ImageElement>
│           │           ├── <ContainerElement>
│           │           │   └── <ElementRenderer> (recursive)
│           │           ├── <GridElement>
│           │           │   └── <ElementRenderer> (recursive)
│           │           ├── <TitleElement>
│           │           ├── <TextElement>
│           │           ├── <ProductCardElement>
│           │           ├── <ButtonElement>
│           │           ├── <VideoElement>
│           │           └── <IconRowElement>
│           │
│           └── <ResponsiveStyles>  # Dynamic styled-jsx
│
└── <ProductsDialog>                # Shared dialog component
```

### 7.2 Core Components

#### SlidesProvider
```typescript
// src/components/slide-renderer/SlidesProvider.tsx

interface SlidesContextValue {
  config: SlidesConfig;
  dialogs: Record<string, ProductDialog>;
  locale: SupportedLocale;
  isMobile: boolean;
  flattenedSlides: FlattenedSlide[];
  openDialog: (dialogId: string, slideIndex?: number) => void;
  closeDialog: () => void;
  currentDialog: { id: string; slideIndex: number } | null;
}

export const SlidesContext = createContext<SlidesContextValue | null>(null);

export const SlidesProvider: React.FC<PropsWithChildren<{
  config: SlidesConfig;
}>> = ({ config, children }) => {
  const router = useRouter();
  const locale = (router.query.locale as SupportedLocale) || config.config.defaultLocale;
  const isMobile = useMediaQuery(`(max-width: ${config.config.breakpoints.mobile}px)`);

  const flattenedSlides = useMemo(
    () => flattenSlides(config.slides, isMobile),
    [config.slides, isMobile]
  );

  const [currentDialog, setCurrentDialog] = useState<{
    id: string;
    slideIndex: number;
  } | null>(null);

  const openDialog = useCallback((dialogId: string, slideIndex = 0) => {
    setCurrentDialog({ id: dialogId, slideIndex });
  }, []);

  const closeDialog = useCallback(() => {
    setCurrentDialog(null);
  }, []);

  const value = useMemo(() => ({
    config,
    dialogs: config.dialogs,
    locale,
    isMobile,
    flattenedSlides,
    openDialog,
    closeDialog,
    currentDialog,
  }), [config, locale, isMobile, flattenedSlides, openDialog, closeDialog, currentDialog]);

  return (
    <SlidesContext.Provider value={value}>
      {children}
      {currentDialog && (
        <ProductsDialog
          open={true}
          onClose={closeDialog}
          images={resolveDialogImages(config.dialogs[currentDialog.id], locale)}
          defaultActiveSlide={currentDialog.slideIndex}
        />
      )}
    </SlidesContext.Provider>
  );
};
```

#### SlideRenderer
```typescript
// src/components/slide-renderer/SlideRenderer.tsx

interface SlideRendererProps {
  slide: FlattenedSlide;
  isActive: boolean;
  onClickMenu?: (label: string) => void;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slide,
  isActive,
  onClickMenu,
}) => {
  const { locale, isMobile, openDialog } = useSlidesContext();

  const context: SlideRenderContext = useMemo(() => ({
    locale,
    isActive,
    isMobile,
    dialogs: {},
    onOpenDialog: openDialog,
    onClickMenu,
  }), [locale, isActive, isMobile, openDialog, onClickMenu]);

  // Handle split slides
  if (slide.splitPart !== undefined && slide.totalSplitParts) {
    return (
      <CarouselSlide>
        <SplitContainer
          partIndex={slide.splitPart}
          totalParts={slide.totalSplitParts}
          splitType={/* from config */}
        >
          <LayoutRenderer
            config={slide.viewConfig.layout}
            elements={slide.viewConfig.elements}
            context={context}
          />
        </SplitContainer>
        {slide.viewConfig.customStyles && (
          <style jsx>{slide.viewConfig.customStyles}</style>
        )}
      </CarouselSlide>
    );
  }

  // Regular slides
  return (
    <CarouselSlide className={getPaddingClass(slide.viewConfig.layout.padding)}>
      <LayoutRenderer
        config={slide.viewConfig.layout}
        elements={slide.viewConfig.elements}
        context={context}
      />
      {slide.viewConfig.customStyles && (
        <style jsx>{slide.viewConfig.customStyles}</style>
      )}
    </CarouselSlide>
  );
};
```

#### SplitContainer
```typescript
// src/components/slide-renderer/SplitContainer.tsx

interface SplitContainerProps {
  partIndex: number;
  totalParts: number;
  splitType: SplitType;
  splitConfig: SplitConfig;
  children: React.ReactNode;
}

export const SplitContainer: React.FC<SplitContainerProps> = ({
  partIndex,
  totalParts,
  splitConfig,
  children,
}) => {
  const splitResult = useMemo(
    () => calculateSplit(splitConfig, partIndex),
    [splitConfig, partIndex]
  );

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div
        style={{
          width: splitResult.containerWidth,
          height: splitResult.containerHeight,
          transform: `translate(${splitResult.translateX}, ${splitResult.translateY})`,
        }}
      >
        {children}
      </div>
    </div>
  );
};
```

#### ElementRenderer
```typescript
// src/components/slide-renderer/ElementRenderer.tsx

interface ElementRendererProps {
  element: SlideElement;
  context: SlideRenderContext;
}

export const ElementRenderer: React.FC<ElementRendererProps> = ({
  element,
  context,
}) => {
  // Check responsive visibility
  if (element.responsive?.hideOnMobile && context.isMobile) return null;
  if (element.responsive?.hideOnDesktop && !context.isMobile) return null;

  // Build common props
  const commonProps = {
    sizing: element.sizing,
    position: element.position,
    styling: element.styling,
    animation: element.animation,
    isActive: context.isActive,
  };

  switch (element.type) {
    case "image":
      return (
        <ImageElement
          {...commonProps}
          element={element}
          locale={context.locale}
          onOpenDialog={context.onOpenDialog}
        />
      );

    case "container":
      return (
        <ContainerElement
          {...commonProps}
          element={element}
          context={context}
        />
      );

    case "grid":
      return (
        <GridElement
          {...commonProps}
          element={element}
          context={context}
        />
      );

    case "title":
      return (
        <TitleElement
          {...commonProps}
          element={element}
          isActive={context.isActive}
        />
      );

    case "product-card":
      return (
        <ProductCardElement
          {...commonProps}
          element={element}
          locale={context.locale}
          onOpenDialog={context.onOpenDialog}
        />
      );

    // ... other cases

    default:
      console.warn(`Unknown element type: ${(element as BaseElement).type}`);
      return null;
  }
};
```

### 7.3 Utility Functions

#### styleBuilder.ts
```typescript
// src/utils/styleBuilder.ts

import { cn } from "./misc";
import type { Sizing, Position, GridConfig, FlexConfig, LayoutConfig } from "@/types/slides";

export function buildSizingStyles(sizing?: Sizing): React.CSSProperties {
  if (!sizing) return {};

  return {
    width: sizing.width,
    height: sizing.height,
    minWidth: sizing.minWidth,
    minHeight: sizing.minHeight,
    maxWidth: sizing.maxWidth,
    maxHeight: sizing.maxHeight,
    aspectRatio: sizing.aspectRatio,
    objectFit: sizing.objectFit,
    objectPosition: sizing.objectPosition,
  };
}

export function buildPositionClasses(position?: Position): string {
  if (!position) return "";

  return cn(
    position.relative && "relative",
    position.absolute && "absolute",
    position.fixed && "fixed",
  );
}

export function buildPositionStyles(position?: Position): React.CSSProperties {
  if (!position) return {};

  return {
    top: position.top,
    right: position.right,
    bottom: position.bottom,
    left: position.left,
    zIndex: position.zIndex,
    transform: position.transform,
    transformOrigin: position.transformOrigin,
    gridColumn: position.gridColumn,
    gridRow: position.gridRow,
  };
}

export function buildGridStyles(grid: GridConfig): React.CSSProperties {
  return {
    display: "grid",
    gridTemplateColumns: grid.templateColumns || `repeat(${grid.columns}, 1fr)`,
    gridTemplateRows: grid.templateRows || (grid.rows ? `repeat(${grid.rows}, 1fr)` : undefined),
    gap: grid.gap,
    rowGap: grid.rowGap,
    columnGap: grid.columnGap,
    alignItems: grid.alignItems,
    justifyItems: grid.justifyItems,
    alignContent: grid.alignContent,
    justifyContent: grid.justifyContent,
    gridAutoFlow: grid.autoFlow,
  };
}

export function buildFlexStyles(flex: FlexConfig): React.CSSProperties {
  return {
    display: "flex",
    flexDirection: flex.direction,
    flexWrap: typeof flex.wrap === "boolean" ? (flex.wrap ? "wrap" : "nowrap") : flex.wrap,
    alignItems: flex.alignItems,
    justifyContent: flex.justifyContent === "between" ? "space-between"
      : flex.justifyContent === "around" ? "space-around"
      : flex.justifyContent === "evenly" ? "space-evenly"
      : flex.justifyContent,
    gap: flex.gap,
    rowGap: flex.rowGap,
    columnGap: flex.columnGap,
  };
}

export function buildLayoutStyles(layout: LayoutConfig): React.CSSProperties {
  const baseStyles: React.CSSProperties = {};

  // Padding
  if (layout.padding) {
    if (typeof layout.padding === "string") {
      baseStyles.padding = layout.padding;
    } else {
      baseStyles.paddingTop = layout.padding.top || layout.padding.y;
      baseStyles.paddingRight = layout.padding.right || layout.padding.x;
      baseStyles.paddingBottom = layout.padding.bottom || layout.padding.y;
      baseStyles.paddingLeft = layout.padding.left || layout.padding.x;
    }
  }

  // Background
  if (layout.background) {
    baseStyles.backgroundColor = layout.background.color;
    baseStyles.backgroundImage = layout.background.image || layout.background.gradient;
    baseStyles.backgroundPosition = layout.background.position;
    baseStyles.backgroundSize = layout.background.size;
    baseStyles.backgroundRepeat = layout.background.repeat;
  }

  // Overflow
  baseStyles.overflow = layout.overflow;

  // Layout type specific
  switch (layout.type) {
    case "grid":
      return { ...baseStyles, ...buildGridStyles(layout.grid!) };
    case "flex":
      return { ...baseStyles, ...buildFlexStyles(layout.flex!) };
    case "single":
    case "absolute":
    default:
      return baseStyles;
  }
}
```

#### localeReplacer.ts
```typescript
// src/utils/localeReplacer.ts

import type { LocaleValue, SupportedLocale } from "@/types/slides";

/**
 * Replace {locale} placeholder in paths
 */
export function replaceLocalePlaceholder(path: string, locale: SupportedLocale): string {
  return path.replace(/\{locale\}/g, locale);
}

/**
 * Resolve locale-aware value
 */
export function resolveLocaleValue<T>(
  value: LocaleValue<T>,
  locale: SupportedLocale
): T {
  if (typeof value === "object" && value !== null && locale in value) {
    return (value as Record<SupportedLocale, T>)[locale];
  }
  return value as T;
}

/**
 * Process element sources (images, videos)
 */
export function processElementSources<T extends { src?: string }>(
  element: T,
  locale: SupportedLocale
): T {
  if (!element.src) return element;

  return {
    ...element,
    src: replaceLocalePlaceholder(element.src, locale),
  };
}
```

---

## 9. Navigation System

### 9.1 Slide Flattening

```typescript
// src/utils/flattenSlides.ts

export function flattenSlides(
  slides: SlideDefinition[],
  isMobile: boolean
): FlattenedSlide[] {
  const result: FlattenedSlide[] = [];

  slides.forEach((slide, desktopIndex) => {
    if (!isMobile) {
      // Desktop: 1 slide = 1 carousel item
      result.push({
        id: slide.id,
        originalSlideId: slide.id,
        desktopIndex,
        mobileIndex: result.length,
        viewConfig: slide.desktop,
      });
      return;
    }

    // Mobile handling
    const mobile = slide.mobile;

    // No mobile config: use desktop
    if (!mobile) {
      result.push({
        id: slide.id,
        originalSlideId: slide.id,
        desktopIndex,
        mobileIndex: result.length,
        viewConfig: slide.desktop,
      });
      return;
    }

    // Array of mobile configs
    if (Array.isArray(mobile)) {
      mobile.forEach((mobileConfig, idx) => {
        result.push({
          id: mobileConfig.id || `${slide.id}-${idx + 1}`,
          originalSlideId: slide.id,
          desktopIndex,
          mobileIndex: result.length,
          splitPart: idx,
          totalSplitParts: mobile.length,
          viewConfig: mobileConfig,
        });
      });
      return;
    }

    // Split configuration
    if ("split" in mobile) {
      const totalParts = mobile.split.totalParts
        || mobile.split.parts
        || (mobile.split.columns || 1) * (mobile.split.rows || 1);

      for (let i = 0; i < totalParts; i++) {
        result.push({
          id: `${slide.id}-${i + 1}`,
          originalSlideId: slide.id,
          desktopIndex,
          mobileIndex: result.length,
          splitPart: i,
          totalSplitParts: totalParts,
          viewConfig: {
            layout: mobile.layout || slide.desktop.layout,
            elements: mobile.elements || slide.desktop.elements,
            customStyles: slide.desktop.customStyles,
          },
          // Store split config for SplitContainer
          _splitConfig: mobile.split,
        });
      }
      return;
    }

    // Single mobile config
    result.push({
      id: slide.id,
      originalSlideId: slide.id,
      desktopIndex,
      mobileIndex: result.length,
      viewConfig: mobile as SlideViewConfig,
    });
  });

  return result;
}
```

### 9.2 Page Counter Logic

```typescript
// src/hooks/usePageCounter.ts

export function usePageCounter(
  flattenedSlides: FlattenedSlide[],
  currentIndex: number,
  isMobile: boolean
) {
  return useMemo(() => {
    const currentSlide = flattenedSlides[currentIndex];
    if (!currentSlide) return { current: 1, total: 1, label: "1/1" };

    // Desktop: simple index
    if (!isMobile) {
      return {
        current: currentIndex + 1,
        total: flattenedSlides.length,
        label: `${currentIndex + 1}/${flattenedSlides.length}`,
      };
    }

    // Mobile: show desktop page number
    const desktopTotal = new Set(
      flattenedSlides.map(s => s.desktopIndex)
    ).size;

    return {
      current: currentSlide.desktopIndex + 1,
      total: desktopTotal,
      label: `${currentSlide.desktopIndex + 1}/${desktopTotal}`,
      // Extra info for split slides
      splitInfo: currentSlide.totalSplitParts
        ? `(${(currentSlide.splitPart || 0) + 1}/${currentSlide.totalSplitParts})`
        : undefined,
    };
  }, [flattenedSlides, currentIndex, isMobile]);
}
```

### 9.3 Navigation Between Split Parts

```typescript
// Visual indicator for split navigation
interface SplitIndicatorProps {
  currentPart: number;
  totalParts: number;
  onNavigate: (partIndex: number) => void;
}

export const SplitIndicator: React.FC<SplitIndicatorProps> = ({
  currentPart,
  totalParts,
  onNavigate,
}) => {
  if (totalParts <= 1) return null;

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {Array.from({ length: totalParts }, (_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className={cn(
            "w-2 h-2 rounded-full transition-all",
            i === currentPart
              ? "bg-[#f25421] w-4"
              : "bg-white/50 hover:bg-white/80"
          )}
          aria-label={`Go to part ${i + 1} of ${totalParts}`}
        />
      ))}
    </div>
  );
};
```

---

## 10. File Structure

```
src/
├── components/
│   ├── slide-renderer/
│   │   ├── index.ts                      # Public exports
│   │   ├── SlidesProvider.tsx            # Context provider
│   │   ├── SlideRenderer.tsx             # Main slide renderer
│   │   ├── SplitContainer.tsx            # Split slide wrapper
│   │   ├── LayoutRenderer.tsx            # Layout type switcher
│   │   ├── ElementRenderer.tsx           # Element type switcher
│   │   ├── ResponsiveWrapper.tsx         # Breakpoint handler
│   │   ├── SplitIndicator.tsx            # Split navigation dots
│   │   │
│   │   ├── elements/
│   │   │   ├── index.ts
│   │   │   ├── ImageElement.tsx
│   │   │   ├── ContainerElement.tsx
│   │   │   ├── GridElement.tsx
│   │   │   ├── FlexElement.tsx
│   │   │   ├── TitleElement.tsx
│   │   │   ├── TextElement.tsx
│   │   │   ├── ProductCardElement.tsx
│   │   │   ├── ButtonElement.tsx
│   │   │   ├── VideoElement.tsx
│   │   │   ├── IconRowElement.tsx
│   │   │   ├── SpacerElement.tsx
│   │   │   └── DividerElement.tsx
│   │   │
│   │   ├── layouts/
│   │   │   ├── index.ts
│   │   │   ├── SingleLayout.tsx
│   │   │   ├── FlexLayout.tsx
│   │   │   ├── GridLayout.tsx
│   │   │   └── AbsoluteLayout.tsx
│   │   │
│   │   └── hooks/
│   │       ├── index.ts
│   │       ├── useSlidesContext.ts
│   │       ├── useSlideConfig.ts
│   │       ├── useFlatSlides.ts
│   │       ├── usePageCounter.ts
│   │       └── useMediaQuery.ts
│   │
│   ├── ui/                               # Existing UI components
│   ├── Carousel.tsx                      # Existing (keep)
│   ├── CarouselSlide.tsx                 # Existing (keep)
│   ├── ProductCard.tsx                   # Existing (keep)
│   ├── ProductsDialog.tsx                # Existing (keep)
│   ├── Header.tsx                        # Existing (update for new page counter)
│   └── slides/                           # DEPRECATED after migration
│
├── data/
│   ├── slides.json                       # THE BIBLE
│   └── slides.schema.json                # JSON Schema for validation
│
├── types/
│   ├── index.ts                          # Existing exports
│   └── slides.ts                         # New slide types
│
├── utils/
│   ├── misc.ts                           # Existing (cn, etc.)
│   ├── analytics.ts                      # Existing
│   ├── styleBuilder.ts                   # NEW: Build styles from config
│   ├── localeReplacer.ts                 # NEW: Handle {locale} placeholders
│   ├── splitCalculator.ts               # NEW: Calculate split transforms
│   ├── flattenSlides.ts                  # NEW: Flatten for carousel
│   └── configValidator.ts               # NEW: Validate JSON config
│
└── pages/
    └── [locale]/
        └── index.tsx                     # Update to use SlidesProvider
```

---

## 11. Migration Strategy

### Phase 1: Foundation (Week 1)
- [ ] Create `src/types/slides.ts` with all interfaces
- [ ] Create `src/data/slides.schema.json` for validation
- [ ] Create utility functions (`styleBuilder`, `localeReplacer`, `splitCalculator`)
- [ ] Set up `SlidesProvider` context

### Phase 2: Core Components (Week 1-2)
- [ ] Create `SlideRenderer` component
- [ ] Create `LayoutRenderer` component
- [ ] Create `ElementRenderer` component
- [ ] Create `SplitContainer` component
- [ ] Create all element components (`ImageElement`, `GridElement`, etc.)

### Phase 3: Migrate Slides (Week 2-3)
- [ ] Convert Slide1 (full image) - simplest case
- [ ] Convert Slide2 (split layout with grid)
- [ ] Convert Slide3 (grid navigation)
- [ ] Convert Slide4 (info + icons)
- [ ] Convert Slide5 (product showcase)
- [ ] Convert remaining slides (6-17)
- [ ] Migrate all mobile variants

### Phase 4: Integration (Week 3)
- [ ] Update `pages/[locale]/index.tsx` to use new system
- [ ] Update `Header.tsx` for new page counter
- [ ] Update `SearchDialog.tsx` for new slide indexing
- [ ] Test all navigation flows

### Phase 5: Testing & Cleanup (Week 4)
- [ ] Visual regression testing (Cypress)
- [ ] Test all locales (es, cat, pt)
- [ ] Test all breakpoints
- [ ] Performance testing
- [ ] Remove deprecated slide files
- [ ] Documentation update

### Migration Order (by complexity)

| Order | Slide | Complexity | Notes |
|-------|-------|------------|-------|
| 1 | Slide1 | Simple | Full image, no split |
| 2 | Slide4 | Simple | Info + icons |
| 3 | Slide16 | Simple | Two images |
| 4 | Slide2 | Medium | Split layout |
| 5 | Slide5 | Medium | Product showcase |
| 6 | Slide3 | Medium | Grid navigation |
| 7 | Slide6 | Medium | Category grid |
| 8 | Slide7 | Complex | Overlays + dialogs |
| 9 | Slide8-15 | Medium | Product pages |
| 10 | Slide17 | Medium | Accessories |

---

## 12. Testing Strategy

### 12.1 Unit Tests

```typescript
// __tests__/utils/splitCalculator.test.ts

describe("splitCalculator", () => {
  describe("calculateHorizontalSplit", () => {
    it("should_ReturnCorrectTranslateX_When_Part0Of2", () => {
      const result = calculateSplit({ type: "horizontal", parts: 2 }, 0);
      expect(result.translateX).toBe("0%");
      expect(result.containerWidth).toBe("200dvw");
    });

    it("should_ReturnCorrectTranslateX_When_Part1Of2", () => {
      const result = calculateSplit({ type: "horizontal", parts: 2 }, 1);
      expect(result.translateX).toBe("-50%");
    });
  });

  describe("calculateGridSplit", () => {
    it("should_ReturnCorrectTransforms_When_2x2Grid", () => {
      const config = { type: "grid" as const, columns: 2, rows: 2 };

      expect(calculateSplit(config, 0)).toMatchObject({
        translateX: "0%",
        translateY: "0%",
      });

      expect(calculateSplit(config, 3)).toMatchObject({
        translateX: "-100%",
        translateY: "-100%",
      });
    });
  });
});
```

### 12.2 Component Tests

```typescript
// __tests__/components/SlideRenderer.test.tsx

describe("SlideRenderer", () => {
  it("should_RenderImageElement_When_TypeIsImage", () => {
    const config = {
      layout: { type: "single" },
      elements: [{
        type: "image",
        src: "/images/es/test.jpg",
        alt: "Test",
      }],
    };

    render(<SlideRenderer slide={mockSlide(config)} isActive={true} />);

    expect(screen.getByAltText("Test")).toBeInTheDocument();
  });

  it("should_ApplySplitTransform_When_MobileSplit", () => {
    const slide = mockFlattenedSlide({
      splitPart: 1,
      totalSplitParts: 2,
    });

    render(<SlideRenderer slide={slide} isActive={true} />);

    const container = screen.getByTestId("split-container");
    expect(container).toHaveStyle({ transform: "translate(-50%, 0%)" });
  });
});
```

### 12.3 E2E Tests (Cypress)

```typescript
// cypress/e2e/slides.cy.ts

describe("Slide Navigation", () => {
  beforeEach(() => {
    cy.visit("/es");
  });

  it("should navigate through all desktop slides", () => {
    cy.get("[data-testid=page-counter]").should("contain", "1/17");

    // Navigate forward
    for (let i = 2; i <= 17; i++) {
      cy.get("[data-testid=next-button]").click();
      cy.get("[data-testid=page-counter]").should("contain", `${i}/17`);
    }
  });

  it("should show split slides on mobile", () => {
    cy.viewport("iphone-x");
    cy.visit("/es");

    // Slide 2 should split into 2 parts
    cy.get("[data-testid=next-button]").click();
    cy.get("[data-testid=page-counter]").should("contain", "2/17");
    cy.get("[data-testid=split-indicator]").should("exist");
    cy.get("[data-testid=split-dot]").should("have.length", 2);
  });

  it("should open product dialog on card click", () => {
    cy.get("[data-testid=product-card]").first().click();
    cy.get("[data-testid=products-dialog]").should("be.visible");
  });
});
```

### 12.4 Visual Regression

```typescript
// cypress/e2e/visual.cy.ts

describe("Visual Regression", () => {
  const slides = Array.from({ length: 17 }, (_, i) => i + 1);
  const locales = ["es", "cat", "pt"];

  locales.forEach(locale => {
    slides.forEach(slideNum => {
      it(`should match snapshot for slide ${slideNum} in ${locale}`, () => {
        cy.visit(`/${locale}`);
        cy.navigateToSlide(slideNum);
        cy.matchImageSnapshot(`slide-${slideNum}-${locale}`);
      });
    });
  });
});
```

---

## 13. Rollback Plan

### If Migration Fails

1. **Keep old slides** in `src/components/slides-legacy/` during migration
2. **Feature flag** to switch between old and new system:
   ```typescript
   const USE_JSON_SLIDES = process.env.NEXT_PUBLIC_USE_JSON_SLIDES === "true";
   ```
3. **Git branch strategy:**
   - `main` - production (old system)
   - `feature/json-slides` - new system development
   - Only merge after full QA

### Rollback Steps

1. Revert feature flag to `false`
2. Deploy
3. Investigate issues
4. Fix and re-enable

---

## Appendix A: Example slides.json

```json
{
  "$schema": "./slides.schema.json",
  "version": "1.0.0",
  "config": {
    "defaultLocale": "es",
    "supportedLocales": ["es", "cat", "pt"],
    "breakpoints": {
      "mobile": 1024,
      "tablet": 1280
    }
  },
  "slides": [
    {
      "id": "slide-1",
      "type": "cover",
      "searchTextKey": "slide1.textSearch_1",
      "desktop": {
        "layout": {
          "type": "single",
          "padding": "0"
        },
        "elements": [
          {
            "type": "image",
            "id": "cover-image",
            "src": "/images/{locale}/slide1/background.jpg",
            "alt": "Husqvarna Catalogo 2026",
            "sizing": {
              "width": "100%",
              "height": "100%",
              "objectFit": "cover"
            },
            "priority": true
          }
        ]
      },
      "mobile": {
        "split": {
          "type": "horizontal",
          "parts": 2
        }
      }
    },
    {
      "id": "slide-2",
      "type": "info",
      "menuCategory": "INNOVADORES",
      "searchTextKey": "slide2.textSearch_1",
      "desktop": {
        "layout": {
          "type": "flex",
          "flex": {
            "direction": "row",
            "gap": "30px"
          },
          "padding": "30px"
        },
        "elements": [
          {
            "type": "container",
            "id": "left-section",
            "sizing": { "width": "67.52%" },
            "position": { "relative": true },
            "elements": [
              {
                "type": "image",
                "src": "/images/{locale}/slide2/leftBackground.jpg",
                "alt": "Innovadores desde 1689",
                "sizing": { "width": "100%", "height": "auto" }
              },
              {
                "type": "title",
                "translationKey": "slide2.title",
                "animated": true,
                "variant": "bg-transparent",
                "position": {
                  "absolute": true,
                  "top": "20%",
                  "left": "5%"
                },
                "styling": {
                  "className": "text-white text-5xl font-bold"
                }
              }
            ]
          },
          {
            "type": "grid",
            "id": "right-grid",
            "sizing": { "width": "30%" },
            "grid": {
              "columns": 2,
              "rows": 3,
              "gap": "15px"
            },
            "elements": [
              {
                "type": "product-card",
                "imageSrc": "/images/{locale}/slide2/card1.jpg",
                "alt": "1689",
                "variant": "default",
                "button": { "textKey": "slide2.cards.card_1.button" },
                "dialogId": "history-1689"
              },
              {
                "type": "product-card",
                "imageSrc": "/images/{locale}/slide2/card2.jpg",
                "alt": "1903",
                "variant": "default",
                "button": { "textKey": "slide2.cards.card_2.button" },
                "dialogId": "history-1903"
              }
            ]
          }
        ]
      },
      "mobile": [
        {
          "id": "slide-2-1",
          "layout": {
            "type": "single",
            "padding": "30px"
          },
          "elements": [
            {
              "type": "image",
              "src": "/images/{locale}/slide2/leftBackground.jpg",
              "alt": "Innovadores",
              "sizing": { "width": "100%", "height": "100%", "objectFit": "cover" }
            },
            {
              "type": "title",
              "translationKey": "slide2.title",
              "animated": true,
              "position": { "absolute": true, "bottom": "20%", "left": "5%" }
            }
          ]
        },
        {
          "id": "slide-2-2",
          "layout": {
            "type": "grid",
            "grid": { "columns": 2, "gap": "15px" },
            "padding": "20px"
          },
          "elements": [
            {
              "type": "product-card",
              "imageSrc": "/images/{locale}/slide2/card1.jpg",
              "alt": "1689",
              "variant": "default",
              "dialogId": "history-1689"
            }
          ]
        }
      ]
    }
  ],
  "dialogs": {
    "history-1689": {
      "id": "history-1689",
      "title": "1689 - Energía Hidráulica",
      "images": [
        {
          "src": "/images/{locale}/slide2/dialog/1689_01.jpg",
          "href": "",
          "productData": {
            "name": "Historia 1689",
            "id": "hist-1689",
            "price": "0",
            "category": "Historia",
            "variant": "Info"
          }
        }
      ]
    }
  }
}
```

---

## Appendix B: Checklist

### Before Starting
- [ ] Read RULES.md completely
- [ ] Read CLAUDE.md completely
- [ ] Understand current slide structure
- [ ] Set up development environment

### During Development
- [ ] Follow TypeScript strict mode
- [ ] No `any` types
- [ ] Functions < 40 lines
- [ ] Components are pure/dumb
- [ ] Write tests alongside code
- [ ] Commit frequently with good messages

### Before PR
- [ ] All tests pass
- [ ] ESLint: 0 warnings
- [ ] Prettier formatted
- [ ] Visual regression passed
- [ ] Tested all 3 locales
- [ ] Tested mobile and desktop
- [ ] Performance acceptable
- [ ] Documentation updated

---

*Document Version: 1.0.0*
*Last Updated: 2025-12-16*
*Author: Development Team*
