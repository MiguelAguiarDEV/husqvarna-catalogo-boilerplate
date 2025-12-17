# RULES.md - Sacred Development Commandments

> These rules are absolute. No exceptions. No excuses. Follow them as your father's words.

---

## I. THE HIERARCHY OF TRUTH

1. **Read CLAUDE.md first** - Always. Before any code. Before any decision.
2. **Follow DEVPLAN.md** - The plan is the law. Deviate only with explicit approval.
3. **When in doubt, ask** - Never assume. Never guess. Clarify.

---

## II. CLEAN CODE COMMANDMENTS (Uncle Bob's Testament)

### 1. Naming

```typescript
// BAD - Cryptic, meaningless
const d = 86400;
const arr = slides.filter(s => s.m);
function proc(x: any) {}

// GOOD - Intention-revealing, searchable
const SECONDS_IN_DAY = 86400;
const mobileSlides = slides.filter(slide => slide.isMobile);
function processSlideConfiguration(slideConfig: SlideConfig) {}
```

**Rules:**
- Names must reveal intent
- Names must be pronounceable
- Names must be searchable
- Avoid mental mapping (no single-letter variables except loop counters)
- Class names = nouns, Function names = verbs
- One word per concept (don't mix `fetch`, `retrieve`, `get` for same action)

### 2. Functions

```typescript
// BAD - Does everything, knows everything
function handleSlide(slide, locale, isMobile, dialogs, analytics, user) {
  // 200 lines of chaos
}

// GOOD - Does one thing, does it well
function renderSlideElement(element: SlideElement): JSX.Element {}
function calculateSplitTransform(partIndex: number, totalParts: number): string {}
function mapDesktopIndexToMobile(desktopIndex: number, slides: SlideConfig[]): number {}
```

**Rules:**
- Functions should do ONE thing
- Functions should be SMALL (< 20 lines ideal, < 40 max)
- Maximum 3 parameters (use object for more)
- No side effects
- Command-Query Separation: functions either DO something or ANSWER something, never both
- DRY - Don't Repeat Yourself (but don't over-abstract either)

### 3. Comments

```typescript
// BAD - Redundant, obvious, outdated
// Increment counter by 1
counter++;

// This function renders the slide
function renderSlide() {}

// TODO: Fix this later (written 2 years ago)

// GOOD - Explains WHY, not WHAT
// We use 200dvw because mobile splits show half the content per swipe
const containerWidth = `${splitParts * 100}dvw`;

// translateX shifts viewport to show correct portion
// Part 0: 0%, Part 1: -50% for 2-part split
const translateX = -(currentPart * (100 / splitParts));
```

**Rules:**
- Code should be self-documenting
- Comments explain WHY, never WHAT
- Delete commented-out code (Git remembers)
- Keep comments updated or delete them
- JSDoc for public APIs and complex functions only

### 4. Formatting

```typescript
// Consistent structure
interface SlideElement {
  type: ElementType;
  id?: string;
  sizing?: Sizing;
  position?: Position;
}

// Vertical openness between concepts
function renderImage() { /* ... */ }

function renderGrid() { /* ... */ }

// Horizontal density for related items
const { width, height, maxWidth } = sizing;
```

**Rules:**
- Consistent indentation (2 spaces)
- Max line length: 100 characters
- Blank lines to separate concepts
- Related code stays together
- Declarations at top of scope
- Imports organized: external, internal, types, styles

### 5. Error Handling

```typescript
// BAD - Silent failure, generic catch
try {
  doSomething();
} catch (e) {
  console.log(e);
}

// GOOD - Specific, informative, recoverable
function parseSlideConfig(json: unknown): SlideConfig {
  if (!isValidSlideConfig(json)) {
    throw new SlideConfigError(
      `Invalid slide configuration: missing required field 'type'`,
      { received: json }
    );
  }
  return json as SlideConfig;
}
```

**Rules:**
- Don't return null, throw or return Result type
- Create specific error types
- Provide context in error messages
- Fail fast, fail loud
- Never swallow exceptions silently

---

## III. CLEAN ARCHITECTURE COMMANDMENTS

### 1. Dependency Rule

```
┌─────────────────────────────────────────────────────┐
│                    FRAMEWORKS                        │
│  (Next.js, React, Swiper, Framer Motion)            │
│    ┌─────────────────────────────────────────┐      │
│    │           INTERFACE ADAPTERS            │      │
│    │  (Components, Hooks, Renderers)         │      │
│    │    ┌─────────────────────────────┐      │      │
│    │    │       USE CASES             │      │      │
│    │    │  (SlideRenderer logic)      │      │      │
│    │    │    ┌─────────────────┐      │      │      │
│    │    │    │    ENTITIES    │      │      │      │
│    │    │    │  (Types, JSON) │      │      │      │
│    │    │    └─────────────────┘      │      │      │
│    │    └─────────────────────────────┘      │      │
│    └─────────────────────────────────────────┘      │
└─────────────────────────────────────────────────────┘

Dependencies point INWARD only. Never outward.
```

**Rules:**
- Inner layers know NOTHING about outer layers
- Types/Interfaces live in the center
- Business logic independent of UI framework
- UI components are "dumb" - just render what they're told

### 2. File Structure

```
src/
├── types/                    # ENTITIES (innermost)
│   └── slides.ts             # Pure TypeScript interfaces
├── utils/                    # USE CASES
│   ├── slideParser.ts        # Parse JSON to typed config
│   ├── splitCalculator.ts    # Calculate split transforms
│   └── styleBuilder.ts       # Build Tailwind classes
├── hooks/                    # INTERFACE ADAPTERS
│   ├── useSlideConfig.ts
│   └── useResponsive.ts
└── components/               # FRAMEWORKS & DRIVERS
    └── slide-renderer/
        ├── SlideRenderer.tsx
        └── elements/
```

### 3. Component Rules

```typescript
// BAD - Smart component doing everything
function Slide({ id }) {
  const [data, setData] = useState(null);
  useEffect(() => { fetch(`/api/${id}`).then(setData); }, []);
  const handleClick = () => { analytics.track(); openDialog(); };
  return <div onClick={handleClick}>{/* 100 lines of JSX */}</div>;
}

// GOOD - Dumb component, receives everything
interface SlideProps {
  config: SlideViewConfig;
  isActive: boolean;
  onElementClick: (action: ClickAction) => void;
}

function Slide({ config, isActive, onElementClick }: SlideProps) {
  return (
    <LayoutRenderer config={config.layout}>
      {config.elements.map(element => (
        <ElementRenderer
          key={element.id}
          element={element}
          onClick={onElementClick}
        />
      ))}
    </LayoutRenderer>
  );
}
```

**Rules:**
- Components receive data, don't fetch it
- Components receive handlers, don't define business logic
- Separate Container (smart) from Presentational (dumb)
- One component = one responsibility

---

## IV. TYPESCRIPT COMMANDMENTS

### 1. Type Everything

```typescript
// BAD
const processSlide = (slide: any, options?: any) => { /**/ };
const data = response.json();

// GOOD
const processSlide = (slide: SlideConfig, options?: ProcessOptions): ProcessedSlide => { /**/ };
const data: ApiResponse<SlideData> = await response.json();
```

### 2. Prefer Interfaces for Objects

```typescript
// For object shapes
interface SlideElement {
  type: ElementType;
  id?: string;
}

// For unions, primitives, tuples
type ElementType = "image" | "grid" | "text";
type Coordinates = [number, number];
type LocaleString = string | Record<SupportedLocale, string>;
```

### 3. No Any, No Unknown Without Guards

```typescript
// BAD
function parse(data: any): SlideConfig {
  return data;
}

// GOOD
function parse(data: unknown): SlideConfig {
  if (!isSlideConfig(data)) {
    throw new ParseError("Invalid slide config");
  }
  return data;
}

function isSlideConfig(data: unknown): data is SlideConfig {
  return (
    typeof data === "object" &&
    data !== null &&
    "type" in data &&
    "elements" in data
  );
}
```

### 4. Readonly by Default

```typescript
interface SlideConfig {
  readonly id: string;
  readonly type: SlideType;
  readonly elements: readonly SlideElement[];
}
```

---

## V. REACT COMMANDMENTS

### 1. Component Structure Order

```typescript
// 1. Imports (external, internal, types, styles)
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { ElementRenderer } from "./ElementRenderer";
import { useSlideConfig } from "../hooks/useSlideConfig";

import type { SlideElement } from "@/types/slides";

// 2. Types/Interfaces
interface Props {
  slideId: string;
  isActive: boolean;
}

// 3. Constants
const DEFAULT_GAP = "30px";

// 4. Component
export const SlideRenderer: React.FC<Props> = ({ slideId, isActive }) => {
  // 4a. Hooks (always at top, same order)
  const { t } = useTranslation();
  const config = useSlideConfig(slideId);
  const [dialogOpen, setDialogOpen] = useState(false);

  // 4b. Derived state / memos
  const elements = useMemo(() => /* ... */, [config]);

  // 4c. Effects
  useEffect(() => { /* ... */ }, []);

  // 4d. Handlers
  const handleClick = useCallback(() => { /* ... */ }, []);

  // 4e. Early returns
  if (!config) return null;

  // 4f. Render
  return ( /* ... */ );
};

// 5. Sub-components (if small and only used here)
const SlideTitle = ({ text }: { text: string }) => <h1>{text}</h1>;
```

### 2. Hooks Rules

```typescript
// BAD - Conditional hooks
if (isMobile) {
  useEffect(() => {}, []);
}

// BAD - Hooks in loops
elements.forEach(el => {
  const ref = useRef();
});

// GOOD - Always same order, always top level
const mobileEffect = useEffect(() => {
  if (!isMobile) return;
  // mobile-specific logic
}, [isMobile]);
```

### 3. Performance

```typescript
// Memoize expensive computations
const flattenedSlides = useMemo(
  () => flattenSlidesForMobile(slides),
  [slides]
);

// Memoize callbacks passed to children
const handleElementClick = useCallback(
  (action: ClickAction) => executeAction(action),
  [executeAction]
);

// Memoize components that receive objects/arrays
const MemoizedElement = memo(ElementRenderer);
```

---

## VI. TESTING COMMANDMENTS

### 1. Test Naming

```typescript
// Pattern: should_ExpectedBehavior_When_Condition
describe("SlideRenderer", () => {
  it("should_RenderDesktopLayout_When_ScreenWidthAbove1024", () => {});
  it("should_SplitIntoTwoSlides_When_MobileSplitConfigured", () => {});
  it("should_ThrowError_When_InvalidConfigProvided", () => {});
});
```

### 2. Test Structure (AAA)

```typescript
it("should calculate correct translateX for split slides", () => {
  // Arrange
  const splitParts = 2;
  const currentPart = 1;

  // Act
  const result = calculateSplitTransform(currentPart, splitParts);

  // Assert
  expect(result).toBe("translateX(-50%)");
});
```

### 3. What to Test

- Pure functions: 100% coverage
- Hooks: test with renderHook
- Components: test behavior, not implementation
- Integration: test user flows

---

## VII. GIT COMMANDMENTS

### 1. Commit Messages

```
feat(slides): add JSON-driven slide renderer

- Create SlideRenderer component
- Add ElementRenderer with type switching
- Implement split slide logic for mobile

BREAKING CHANGE: Old Slide1.tsx through Slide17.tsx are deprecated
```

**Format:**
```
type(scope): subject (imperative, <50 chars)

body (what and why, wrap at 72 chars)

footer (breaking changes, issue refs)
```

**Types:** feat, fix, docs, style, refactor, test, chore

### 2. Branch Naming

```
feature/json-slide-renderer
fix/mobile-split-calculation
refactor/remove-legacy-slides
```

---

## VIII. FORBIDDEN PRACTICES

1. **any** type without explicit justification
2. **console.log** in production code (use proper logging)
3. **// @ts-ignore** without explanatory comment
4. **!important** in CSS without justification
5. **inline styles** when Tailwind class exists
6. **Magic numbers** without named constants
7. **Nested ternaries** more than 2 levels deep
8. **Functions** longer than 40 lines
9. **Files** longer than 400 lines
10. **Copy-paste** code (extract to function/component)

---

## IX. MANDATORY PRACTICES

1. **TypeScript strict mode** - Always enabled
2. **ESLint** - Zero warnings policy
3. **Prettier** - Run before every commit
4. **Type exports** - Export interfaces for public APIs
5. **Error boundaries** - Wrap major sections
6. **Loading states** - Always handle async
7. **Empty states** - Always handle no-data
8. **Accessibility** - Alt texts, ARIA labels
9. **Mobile-first** - Default styles for mobile

---

## X. THE FINAL RULE

> "Any fool can write code that a computer can understand.
> Good programmers write code that humans can understand."
> — Martin Fowler

When Uncle Bob reviews your PR, he should:
- Understand the code in 5 minutes
- Find no surprises
- See consistent patterns
- Feel the code is "obvious"

**If it's not obvious, refactor until it is.**

---

*Last updated: 2025-12-16*
*Approved by: The Sacred Council of Clean Code*
