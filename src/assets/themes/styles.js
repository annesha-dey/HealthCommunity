/* Constant stylesheet for the app.
This stylesheet will contain, fonts, colors, typography, images.
*/

/* Colors */
export const colorPalette = {
  primary1Color: '#E65100',
  primary2Color: '#F57C00',
  secondary1Color: '',
  secondary2Color: '',
  backgroundColor: '#fff',
  foregroundColor: '#212121',
  borderColor: '#E0E0E0',
  greyTextColor: '#9E9E9E',
};


/* FONT WEIGHTS */
export const fontWeight = {
  Lighter: '100',
  Light: '300',
  Regular: '400',
  Medium: '500',
  SemiBold: '600',
  Bold: '700',
  Bolder: '800',
  SuperBolder: '900',
};

/* FONT BOOK / TYPOGRAPHY */
export const fontBook = {
  h1PrimaryLight: {
    fontSize: 29,
    fontWeight: fontWeight.Light,
    lineHeight: 31,
    color: colorPalette.primary1Color,
  },
  h1PrimaryRegular: {
    fontSize: 29,
    fontWeight: fontWeight.Regular,
    lineHeight: 31,
    color: colorPalette.primary1Color,
  },
  h1PrimaryBold: {
    fontSize: 29,
    fontWeight: fontWeight.Bold,
    lineHeight: 31,
    color: colorPalette.primary1Color,
  },
  h1SecondaryLight: {
    fontSize: 29,
    fontWeight: fontWeight.Light,
    lineHeight: 31,
    color: colorPalette.secondary1Color,
  },
  h1SecondaryRegular: {
    fontSize: 29,
    fontWeight: fontWeight.Regular,
    lineHeight: 31,
    color: colorPalette.secondary1Color,
  },
  h1SecondaryBold: {
    fontSize: 29,
    fontWeight: fontWeight.Bold,
    lineHeight: 31,
    color: colorPalette.secondary1Color,
  },
  h1ForegroundLight: {
    fontSize: 29,
    fontWeight: fontWeight.Light,
    lineHeight: 31,
    color: colorPalette.foregroundColor,
  },
  h1ForegroundRegular: {
    fontSize: 29,
    fontWeight: fontWeight.Regular,
    lineHeight: 31,
    color: colorPalette.foregroundColor,
  },
  h1ForegroundBold: {
    fontSize: 29,
    fontWeight: fontWeight.Bold,
    lineHeight: 31,
    color: colorPalette.foregroundColor,
  },
  h1BackgroundLight: {
    fontSize: 29,
    fontWeight: fontWeight.Light,
    lineHeight: 31,
    color: colorPalette.backgroundColor,
  },
  h1BackgroundRegular: {
    fontSize: 29,
    fontWeight: fontWeight.Regular,
    lineHeight: 31,
    color: colorPalette.backgroundColor,
  },
  h1BackgroundBold: {
    fontSize: 29,
    fontWeight: fontWeight.Bold,
    lineHeight: 31,
    color: colorPalette.backgroundColor,
  },
  h2PrimaryLight: {
    fontSize: 24,
    fontWeight: fontWeight.Light,
    lineHeight: 26,
    color: colorPalette.primary1Color,
  },
  h2PrimaryRegular: {
    fontSize: 24,
    fontWeight: fontWeight.Regular,
    lineHeight: 26,
    color: colorPalette.primary1Color,
  },
  h2PrimaryBold: {
    fontSize: 24,
    fontWeight: fontWeight.Bold,
    lineHeight: 26,
    color: colorPalette.primary1Color,
  },
  h2SecondaryLight: {
    fontSize: 24,
    fontWeight: fontWeight.Light,
    lineHeight: 26,
    color: colorPalette.secondary1Color,
  },
  h2SecondaryRegualar: {
    fontSize: 24,
    fontWeight: fontWeight.Regualar,
    lineHeight: 26,
    color: colorPalette.secondary1Color,
  },
  h2SecondaryBold: {
    fontSize: 24,
    fontWeight: fontWeight.Bold,
    lineHeight: 26,
    color: colorPalette.secondary1Color,
  },
  h2ForegroundLight: {
    fontSize: 24,
    fontWeight: fontWeight.Regular,
    lineHeight: 26,
    color: colorPalette.foregroundColor,
  },
  h2ForegroundBold: {
    fontSize: 24,
    fontWeight: fontWeight.Bold,
    lineHeight: 26,
    color: colorPalette.foregroundColor,
  },
  h2ForegroundBold: {
    fontSize: 24,
    fontWeight: fontWeight.Bold,
    lineHeight: 26,
    color: colorPalette.foregroundColor,
  },
  h2BackgroundLight: {
    fontSize: 24,
    fontWeight: fontWeight.Light,
    lineHeight: 26,
    color: colorPalette.backgroundColor,
  },
  h2BackgroundRegular: {
    fontSize: 24,
    fontWeight: fontWeight.Regular,
    lineHeight: 26,
    color: colorPalette.backgroundColor,
  },
  h2BackgroundBold: {
    fontSize: 24,
    fontWeight: fontWeight.Bold,
    lineHeight: 26,
    color: colorPalette.backgroundColor,
  },
  bodyPrimaryLight: {
    fontSize: 18,
    fontWeight: fontWeight.Light,
    lineHeight: 21,
    color: colorPalette.primary1Color,
  },
  bodyPrimaryRegualar: {
    fontSize: 18,
    fontWeight: fontWeight.Regualar,
    lineHeight: 21,
    color: colorPalette.primary1Color,
  },
  bodyPrimaryBold: {
    fontSize: 18,
    fontWeight: fontWeight.Bold,
    lineHeight: 21,
    color: colorPalette.primary1Color,
  },
  bodySecondaryLight: {
    fontSize: 18,
    fontWeight: fontWeight.Light,
    lineHeight: 21,
    color: colorPalette.secondary1Color,
  },
  bodySecondaryRegular: {
    fontSize: 18,
    fontWeight: fontWeight.Regular,
    lineHeight: 21,
    color: colorPalette.secondary1Color,
  },
  bodySecondaryBold: {
    fontSize: 18,
    fontWeight: fontWeight.Bold,
    lineHeight: 21,
    color: colorPalette.secondary1Color,
  },
  bodyForegroundLight: {
    fontSize: 18,
    fontWeight: fontWeight.Light,
    lineHeight: 21,
    color: colorPalette.foregroundColor,
  },
  bodyForegroundRegular: {
    fontSize: 18,
    fontWeight: fontWeight.Regular,
    lineHeight: 21,
    color: colorPalette.foregroundColor,
  },
  bodyForegroundBold: {
    fontSize: 18,
    fontWeight: fontWeight.Bold,
    lineHeight: 21,
    color: colorPalette.foregroundColor,
  },
  bodyBackgroundLight: {
    fontSize: 18,
    fontWeight: fontWeight.Light,
    lineHeight: 21,
    color: colorPalette.backgroundColor,
  },
  bodyBackgroundRegular: {
    fontSize: 18,
    fontWeight: fontWeight.Regular,
    lineHeight: 21,
    color: colorPalette.backgroundColor,
  },
  bodyBackgroundBold: {
    fontSize: 18,
    fontWeight: fontWeight.Bold,
    lineHeight: 21,
    color: colorPalette.backgroundColor,
  },
  labelPrimaryLight: {
    fontSize: 14,
    fontWeight: fontWeight.Light,
    lineHeight: 16,
    color: colorPalette.primary1Color,
  },
  labelPrimaryRegular: {
    fontSize: 14,
    fontWeight: fontWeight.Regular,
    lineHeight: 16,
    color: colorPalette.primary1Color,
  },
  labelPrimaryBold: {
    fontSize: 14,
    fontWeight: fontWeight.Bold,
    lineHeight: 16,
    color: colorPalette.primary1Color,
  },
  labelSecondaryLight: {
    fontSize: 14,
    fontWeight: fontWeight.Light,
    lineHeight: 16,
    color: colorPalette.secondary1Color,
  },
  labelSecondaryRegular: {
    fontSize: 14,
    fontWeight: fontWeight.Regular,
    lineHeight: 16,
    color: colorPalette.secondary1Color,
  },
  labelSecondaryBold: {
    fontSize: 14,
    fontWeight: fontWeight.Bold,
    lineHeight: 16,
    color: colorPalette.secondary1Color,
  },
  labelForegroundLight: {
    fontSize: 14,
    fontWeight: fontWeight.Light,
    lineHeight: 16,
    color: colorPalette.foregroundColor,
  },
  labelForegroundRegular: {
    fontSize: 14,
    fontWeight: fontWeight.Regular,
    lineHeight: 16,
    color: colorPalette.foregroundColor,
  },
  labelForegroundBold: {
    fontSize: 14,
    fontWeight: fontWeight.Bold,
    lineHeight: 16,
    color: colorPalette.foregroundColor,
  },
  labelBackgroundLight: {
    fontSize: 14,
    fontWeight: fontWeight.Light,
    lineHeight: 16,
    color: colorPalette.backgroundColor,
  },
  labelBackgroundRegular: {
    fontSize: 14,
    fontWeight: fontWeight.Regular,
    lineHeight: 16,
    color: colorPalette.backgroundColor,
  },
  labelBackgroundBold: {
    fontSize: 14,
    fontWeight: fontWeight.Bold,
    lineHeight: 16,
    color: colorPalette.backgroundColor,
  },
};


export const imagePalette = {
  backIcon: require('./images/backIcon.png'),
};

