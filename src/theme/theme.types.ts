// PALETTE
type Common = 'black' | 'white';
type Primary = 'main' | 'light' | 'dark';
type Grey = 'main' | 'light' | 'dark';

export type Palette = {
  common: { [key in Common]: string };
  primary: { [key in Primary]: string };
  grey: { [key in Grey]: string };
};

// TYPOGRAPHY
type FontSize = 'xsmall' | 'small' | 'base' | 'medium' | 'big' | 'large';
type LineHeight = 'xsmall' | 'small' | 'base' | 'medium' | 'big' | 'large';
type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export type Typography = {
  fontFamily: string;
  fontSize: { [key in FontSize]: string };
  lineHeight: { [key in LineHeight]: string };
  fontWeight: { [key in FontWeight]: number };
};

// SHAPE
type BorderRadius = 'base' | 'medium';

export type Shape = {
  borderRadius: { [key in BorderRadius]: string };
};

// BREAKPOINTS
type Key = 'sm' | 'md' | 'lg';

export type BreakPoints = { [key in Key]: string };
