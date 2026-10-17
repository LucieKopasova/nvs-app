// Design tokens from docs/DESIGN.md. The palette is not final — change colors here only.

export const colors = {
  primary: '#35AFCB',
  secondary: '#788A6D',
  tertiary: '#E9B69A',
  background: '#FBF7EF',
  card: '#FFFDF8',
  mutedSurface: '#E8EDE3',
  beige: '#E8E1D5',
  text: '#303F49',
  textAlt: '#42483E',
  onPrimary: '#FFFFFF',
  error: '#BA1A1A',
  hairline: 'rgba(120,138,109,0.15)',
}

// On Android a custom font ignores fontWeight, so each weight is its own family.
export const fonts = {
  regular: 'NunitoSans_400Regular',
  medium: 'NunitoSans_500Medium',
  semiBold: 'NunitoSans_600SemiBold',
  bold: 'NunitoSans_700Bold',
  extraBold: 'NunitoSans_800ExtraBold',
}

export const typography = {
  displayLg: {
    fontFamily: fonts.extraBold,
    fontSize: 34,
    lineHeight: 42,
    letterSpacing: -0.68,
  },
  headlineLg: { fontFamily: fonts.bold, fontSize: 26, lineHeight: 34 },
  headlineMd: { fontFamily: fonts.bold, fontSize: 22, lineHeight: 28 },
  headlineSm: { fontFamily: fonts.semiBold, fontSize: 19, lineHeight: 26 },
  bodyLg: { fontFamily: fonts.regular, fontSize: 17, lineHeight: 26 },
  bodyMd: { fontFamily: fonts.regular, fontSize: 15, lineHeight: 22 },
  bodySm: { fontFamily: fonts.medium, fontSize: 13, lineHeight: 18 },
  labelLg: { fontFamily: fonts.bold, fontSize: 15, lineHeight: 20 },
  labelMd: { fontFamily: fonts.semiBold, fontSize: 13, lineHeight: 16 },
  labelSm: { fontFamily: fonts.semiBold, fontSize: 11, lineHeight: 14 },
}

export const spacing = {
  '2xs': 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  '2xl': 48,
}

export const radius = {
  sm: 8,
  default: 16,
  card: 32,
  cardLg: 48,
  pill: 9999,
}
