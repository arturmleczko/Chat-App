import 'styled-components';

import {
  Palette,
  Typography,
  Shape,
  BreakPoints,
} from '@/theme/theme.types';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    typography: Typography;
    shape: Shape;
    breakPoints: BreakPoints;
  };
}
