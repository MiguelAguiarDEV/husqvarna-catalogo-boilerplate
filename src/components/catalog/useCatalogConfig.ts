/**
 * useCatalogConfig Hook
 * 
 * Loads and parses catalog configuration from JSON.
 * Provides typed access to slide configurations.
 */

import { useMemo } from 'react';
import { CatalogConfig, SlideConfig } from '@/types/slide.types';
import catalogConfigJson from '@/data/catalog-config.json';

// Type assertion for the imported JSON
const catalogData = catalogConfigJson as Record<string, CatalogConfig>;

/**
 * Hook to get a specific catalog configuration
 */
export const useCatalogConfig = (catalogId: string = 'catalogo-husqvarna-2026'): CatalogConfig | null => {
  return useMemo(() => {
    const config = catalogData[catalogId];
    if (!config) {
      console.warn(`Catalog config not found for id: ${catalogId}`);
      return null;
    }
    return config as CatalogConfig;
  }, [catalogId]);
};

/**
 * Hook to get total slide count (accounting for mobile viewports)
 */
export const useTotalSlides = (config: CatalogConfig | null, isMobile: boolean): number => {
  return useMemo(() => {
    if (!config) return 0;
    
    if (!isMobile) {
      return config.slides.length;
    }
    
    // Mobile: count all viewports
    let total = 1; // First slide (cover)
    for (let i = 1; i < config.slides.length; i++) {
      const slide = config.slides[i];
      if (slide) {
        total += slide.mobileViewports;
      }
    }
    return total;
  }, [config, isMobile]);
};

/**
 * Utility to get slide config by index
 */
export const getSlideConfig = (
  config: CatalogConfig,
  slideIndex: number
): SlideConfig | undefined => {
  return config.slides[slideIndex];
};

export default useCatalogConfig;
