// Product Data Types
export interface ProductData {
  name: string;
  id: string;
  price: string;
  category: string;
  variant: string;
}

export interface ProductImage {
  src: string;
  href: string;
  imgClassName?: string;
  productData: ProductData;
}

export type ProductDialogImages = Record<string, ProductImage[]>;

// Locale Types
export type SupportedLocale = "es" | "cat" | "pt";

// Slide Props Types
export interface BaseSlideProps {
  isActive?: boolean;
}

export interface SlideWithMenuProps extends BaseSlideProps {
  onClickMenu?: (label: string) => void;
}

// Helper to create product data
export const createProductData = (
  name: string,
  id: string,
  price: string,
  category: string = "PopUp",
  variant: string = "PopUp"
): ProductData => ({
  name,
  id,
  price,
  category,
  variant,
});

// Helper to create product image
export const createProductImage = (
  src: string,
  href: string,
  productData: ProductData,
  imgClassName?: string
): ProductImage => ({
  src,
  href,
  productData,
  ...(imgClassName && { imgClassName }),
});
