// Global type declarations

// Fix for any module augmentations that would conflict with Shopify Polaris
declare module '@shopify/polaris' {
  // Make sure not to redeclare NavigationProps because that would conflict
  // with the original declaration in Shopify's Navigation component

  // Additional extensions to Shopify Polaris components if needed
  // (Moved to types.d.ts to avoid conflicts)
}

// Global interfaces and types
interface Window {
  // Add any window extensions here if needed
}
