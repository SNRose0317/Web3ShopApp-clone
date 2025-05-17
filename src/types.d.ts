import React from 'react';
import { ReactNode } from 'react';

// Extended HTML elements
declare namespace JSX {
  interface IntrinsicElements {
    // Basic HTML elements
    div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
    p: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;
    strong: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    ul: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>;
    li: React.DetailedHTMLProps<React.HTMLAttributes<HTMLLIElement>, HTMLLIElement>;
    a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
    span: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
    button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;
    h1: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h2: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h3: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h4: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h5: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
    h6: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
  }
}

// Fix FC type and extend React to handle JSX Element to ReactNode conversion
declare module 'react' {
  interface FunctionComponent<P = {}> {
    (props: P, context?: any): React.ReactElement<any, any> | null;
  }
  
  // Ensure JSX.Element can be assigned to ReactNode
  type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
  interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
    type: T;
    props: P;
    key: Key | null;
  }
}

// Augment Shopify Polaris components - needed for the application to work correctly
declare module '@shopify/polaris' {
  export interface LayoutProps {
    children?: ReactNode;
  }

  export interface LayoutSectionProps {
    children?: ReactNode;
  }

  export interface CardProps {
    children?: ReactNode;
    padding?: string;
  }

  export interface CardSectionProps {
    children?: ReactNode;
  }

  export interface BoxProps {
    children?: ReactNode;
    paddingBlockStart?: string;
    paddingBlockEnd?: string;
    width?: string;
  }

  export interface HorizontalStackProps {
    children?: ReactNode;
    align?: string;
    gap?: string;
    blockAlign?: string;
  }

  export interface VerticalStackProps {
    children?: ReactNode;
    gap?: string;
    align?: string;
  }

  export interface TextProps {
    children?: ReactNode;
    variant?: string;
    as?: string;
    fontWeight?: string;
    color?: string;
  }

  export interface BadgeProps {
    children?: ReactNode;
    status?: string;
  }

  export interface IconProps {
    source?: any;
    color?: string;
  }

  export interface ButtonProps {
    children?: ReactNode;
    primary?: boolean;
    plain?: boolean;
    onClick?: () => void;
    ariaExpanded?: boolean;
    ariaControls?: string;
  }

  export interface ListProps {
    children?: ReactNode;
    type?: string;
  }

  export interface ListItemProps {
    children?: ReactNode;
  }

  export interface BannerProps {
    children?: ReactNode;
    title?: string;
    status?: string;
  }

  export interface GridProps {
    children?: ReactNode;
  }

  export interface GridCellProps {
    children?: ReactNode;
    columnSpan?: any;
  }

  export interface AppProviderProps {
    theme?: any;
    i18n?: any;
    children?: ReactNode;
  }

  export interface FrameProps {
    children?: ReactNode;
    navigation?: ReactNode;
  }

  export interface PageProps {
    children?: ReactNode;
    title?: string;
    subtitle?: string;
    primaryAction?: any;
    secondaryActions?: any[];
    backAction?: any;
  }

  export interface CalloutCardProps {
    children?: ReactNode;
    title?: string;
    illustration?: string;
    primaryAction?: any;
  }

  export interface TextContainerProps {
    children?: ReactNode;
    spacing?: string;
  }
  
  // Define missing components so they can be imported properly
  export const Page: React.FunctionComponent<PageProps>;
  export const Card: React.FunctionComponent<CardProps>;
  export const Layout: React.FunctionComponent<LayoutProps> & {
    Section: React.FunctionComponent<LayoutSectionProps>;
  };
  export const TextContainer: React.FunctionComponent<TextContainerProps>;
  export const Text: React.FunctionComponent<TextProps>;
  export const Badge: React.FunctionComponent<BadgeProps>;
  export const Box: React.FunctionComponent<BoxProps>;
  export const Button: React.FunctionComponent<ButtonProps>;
  export const Icon: React.FunctionComponent<IconProps>;
  export const HorizontalStack: React.FunctionComponent<HorizontalStackProps>;
  export const VerticalStack: React.FunctionComponent<VerticalStackProps>;
  export const Banner: React.FunctionComponent<BannerProps>;
  export const Link: React.FunctionComponent<any>;
  export const Grid: React.FunctionComponent<GridProps> & {
    Cell: React.FunctionComponent<GridCellProps>;
  };
  export const List: React.FunctionComponent<ListProps> & {
    Item: React.FunctionComponent<ListItemProps>;
  };
  export const CalloutCard: React.FunctionComponent<CalloutCardProps>;
  export const Divider: React.FunctionComponent<any>;
  export const Collapsible: React.FunctionComponent<any>;
  export const Frame: React.FunctionComponent<FrameProps>;
  export const AppProvider: React.FunctionComponent<AppProviderProps>;
  export const Navigation: React.FunctionComponent<NavigationProps> & {
    Section: any;
    Item: any;
  };
  
  // Fix the conflict with NavigationProps
  export interface NavigationProps {
    location: string;
    children?: React.ReactNode;
    contextControl?: React.ReactNode;
    onDismiss?(): void;
    ariaLabelledBy?: string;
    logoSuffix?: React.ReactNode;
  }
}
