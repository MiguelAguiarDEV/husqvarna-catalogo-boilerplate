/**
 * useBreakpoint Hook
 * 
 * Returns the current breakpoint based on window width.
 * Breakpoints match Tailwind CSS defaults.
 */

import { useState, useEffect } from 'react';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

const breakpoints = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('lg');

  useEffect(() => {
    const getBreakpoint = (): Breakpoint => {
      const width = window.innerWidth;
      if (width >= breakpoints['2xl']) return '2xl';
      if (width >= breakpoints.xl) return 'xl';
      if (width >= breakpoints.lg) return 'lg';
      if (width >= breakpoints.md) return 'md';
      if (width >= breakpoints.sm) return 'sm';
      return 'xs';
    };

    const handleResize = () => {
      setBreakpoint(getBreakpoint());
    };

    // Set initial breakpoint
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

/**
 * Helper to check if current breakpoint is mobile (xs or sm)
 */
export const isMobileBreakpoint = (bp: Breakpoint): boolean => {
  return bp === 'xs' || bp === 'sm';
};

/**
 * Helper to check if current breakpoint is desktop (lg or higher)
 */
export const isDesktopBreakpoint = (bp: Breakpoint): boolean => {
  return bp === 'lg' || bp === 'xl' || bp === '2xl';
};

/**
 * Type for responsive style values
 * Example: { mobile: "100%", desktop: "550px" }
 */
export interface ResponsiveStyle {
  mobile?: string | number;
  desktop?: string | number;
}

/**
 * Helper function to resolve a responsive style value based on breakpoint
 */
export const resolveResponsiveValue = (
  value: string | number | ResponsiveStyle | undefined,
  breakpoint: Breakpoint
): string | number | undefined => {
  if (value === undefined || value === null) return undefined;
  
  // If it's a simple value, return as-is
  if (typeof value === 'string' || typeof value === 'number') {
    return value;
  }
  
  // If it's a responsive object, resolve based on breakpoint
  if (typeof value === 'object' && ('mobile' in value || 'desktop' in value)) {
    const isMobile = isMobileBreakpoint(breakpoint);
    return isMobile ? value.mobile : value.desktop;
  }
  
  return undefined;
};
