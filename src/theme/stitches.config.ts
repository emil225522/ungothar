// Documentation for stiches --> https://stitches.dev/docs/styling
import { createStitches } from '@stitches/react';
import { mediaQueryTypes } from './mediaQueries';
import sizes from './sizes';

const FS_MULTIPLIER = 2;
const MULTIPLIER = 4;

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',
      red: '#FF0000',
      grey: '#808080',
      grey100: '#FAFAFA',
      grey200: '#F5F5F5',
      grey300: '#EDEDED',
      grey400: '#ECECEC',
      grey500: '#B1B6B9',
      grey600: '#AEAEAE',
      grey700: '#A3A3A3',
      grey800: '#717171',
      grey900: '#5C5C5C',
      grey1000: '#484848',
      grey1100: '#2E2E2E',

      alert200: '#feb2b2',
      alert500: '#9a2626',
      alert600: '#9C2929',

      //Colors with the same purpose need to have the same name on all themes to be overidable.
      //These should be used to support theming and variations, button texts need to be seperated
      //from a specific color so allow themes to controll button, link etc sepretly from the main body
      primary: '$grey900',
      secondary: '$white',
      accent: '#F7EDDA',
      textPrimary: '$grey1000',
      textSecondary: '$white',

      //Backgrounds
      backgroundPrimary: '$primary',
      backgroundSecondary: '$secondary',
      backgroundAccent: '$accent',
      backgroundError: '$alert200',

      //Buttons
      buttonPrimary: '$grey1000',
      buttonSecondary: 'grey100',
      buttonLoading: '$grey400',
      buttonHover: '$grey100',
      buttonHoverSecondary: '$grey1100',
      buttonShadow015: 'rgba(72, 72, 72, 0.15)',
      buttonShadow005: 'rgba(59, 72, 80, 0.05)',

      //Headings
      titlePrimay: '$grey1000',

      //Inputs
      inputGroupPrimary: '$grey100',
      inputBorder: '$grey1000',
      inputError: '$alert200',
      inputTextError: '$alert500',

      //ProductItem
      productBgPrimary: '$grey1000',
      productText: '$grey1000',
      buttonTextBorder: '$black',

      //MiniCart
      cartBackground: '$white',
      cartBorder: '$grey1000',
      cartBottomBackground: '$white',
      cartBreadText: '$grey1000',

      //List and Listitems
      listItemLine: '$grey1000',

      //ProductCard
      productCardBgPrimary: '$white',
      productCardShadow: '$grey700',
      productCardBorderPrimary: '$grey700',
      productCardText: '$grey1000',

      //QuickSearch
      mobileSearchBg: '$white',
      mobileSearchBorder: '$grey600',

      //Menu
      menuBg: '$white',
      cartIconFill: '$grey1000',
      cartItemsNotifierBg: '$accent',

      //ColorPicker
      dotShadow: '$grey',

      //ValueDropDown
      valueDropdownBackground: '$white',
      valueDropdownColor: '$grey1000',
      valueDropdownBorder: '$grey700',
      valueDropdownContainerBorder: '$grey1000',

      //CollapsableSection
      collapsableBorderColor: '$grey500',

      errorText: '$red',
      errorbg: '$alert200',
    },
    fontWeights: {
      fw300: 300,
      fw400: 400,
      fw700: 700,
    },
    lineHeights: {
      lh1: 1,
      lh125: 1.25,
      lh13: 1.3,
      lh15: 1.5,
      lh165: 1.625,
      lh175: 1.75,
      lh2: 2,
    },
    letterSpacings: {
      ls0: '0px',
      ls05: '0.5px',
      ls06: '0.6px',
      ls07: '0.7px',
      ls08: '0.8px',
      ls1: '1px',
      ls113: '1.13px',
      ls125: '1.25px',
      ls15: '1.5px',
      ls1625: '1.625px',
      ls163: '1.63px',
      ls175: '1.75px',
      ls2: '2px',
      ls275: '2.75px',
      ls3: '3px',
      ls8: '8px',
    },
    zIndices: {
      Notification: 9,
      Header: 10,
      HeaderMobile: 10,
      Flyout: 10,
      DropDown: 10,
      FlyoutLower: 5,
      Cart: 10,
      CartMobile: 4,
      Modal: 20,
      Overlay: 980,
      pageLoader: 990,
      errorModal: 1000,
    },
    transitions: {
      '200': '200ms',
      '300': '300ms',
      '400': '400ms',
      '500': '500ms',
      '600': '600ms',
      '700': '700ms',
      '1000': '1000ms',
      '1500': '1500ms',
      '5000': '5000ms',
    },
    sizes,
  },
  utils: {
    p: (value: number) => ({
      padding: value * MULTIPLIER,
    }),
    pb: (value: number) => ({
      paddingBottom: value * MULTIPLIER,
    }),
    pt: (value: number) => ({
      paddingTop: value * MULTIPLIER,
    }),
    pl: (value: number) => ({
      paddingleft: value * MULTIPLIER,
    }),
    plx: (value: string) => ({
      paddingleft: `${value}px`,
    }),
    pr: (value: number) => ({
      paddingRight: value * MULTIPLIER,
    }),
    py: (value: number | string) => ({
      paddingTop: typeof value === 'string' ? value : value * MULTIPLIER,
      paddingBottom: typeof value === 'string' ? value : value * MULTIPLIER,
    }),
    px: (value: number | string) => ({
      paddingLeft: typeof value === 'string' ? value : value * MULTIPLIER,
      paddingRight: typeof value === 'string' ? value : value * MULTIPLIER,
    }),
    m: (value: number) => ({
      margin: value * MULTIPLIER,
    }),
    my: (value: number) => ({
      marginTop: value * MULTIPLIER,
      marginBottom: value * MULTIPLIER,
    }),
    mx: (value: number) => ({
      marginLeft: value * MULTIPLIER,
      marginRight: value * MULTIPLIER,
    }),
    mxa: () => ({
      marginLeft: 'auto',
      marginRight: 'auto',
    }),
    mya: () => ({
      marginTop: 'auto',
      marginBottom: 'auto',
    }),
    mt: (value: number) => ({
      marginTop: value * MULTIPLIER,
    }),
    mb: (value: number) => ({
      marginBottom: value * MULTIPLIER,
    }),
    mr: (value: number) => ({
      marginRight: value * MULTIPLIER,
    }),
    ml: (value: number) => ({
      marginLeft: value * MULTIPLIER,
    }),
    g: (value: number) => ({
      gap: value * MULTIPLIER,
    }),
    gg: (value: number) => ({
      gridGap: value * MULTIPLIER + 'px',
    }),
    gcg: (value: number) => ({
      gridColumnGap: value * MULTIPLIER,
    }),
    grg: (value: number) => ({
      gridRowGap: value * MULTIPLIER,
    }),
    b: (value: number) => ({
      bottom: value * MULTIPLIER,
    }),
    t: (value: number) => ({
      top: value * MULTIPLIER,
    }),
    tp: (value: number) => ({
      top: `${value}%`,
    }),
    tm: (value: number) => ({
      top: `-${value * MULTIPLIER}`,
    }),
    l: (value: number | string) => ({
      left: typeof value === 'string' ? value : value * MULTIPLIER,
    }),
    lp: (value: number) => ({
      left: `${value}%`,
    }),
    r: (value: number) => ({
      right: value * MULTIPLIER,
    }),
    rm: (value: number) => ({
      right: `-${value * MULTIPLIER}`,
    }),
    br: (value: number) => ({
      borderRadius: value,
    }),
    brm: (value: number) => ({
      borderRadius: value * MULTIPLIER,
    }),
    brp: (value: number) => ({
      borderRadius: `${value}%`,
    }),
    bw: (value: number) => ({
      borderWidth: value * MULTIPLIER,
    }),
    btw: (value: number) => ({
      borderTopWidth: value * MULTIPLIER,
    }),
    bbw: (value: number) => ({
      borderBottomWidth: value * MULTIPLIER,
    }),
    blw: (value: number) => ({
      borderLeftWidth: value * MULTIPLIER,
    }),
    wh: (value: number) => ({
      width: value * MULTIPLIER,
      height: value * MULTIPLIER,
    }),
    w: (value: number | string) => ({
      width: typeof value === 'string' ? value : value * MULTIPLIER,
    }),
    wp: (value: number) => ({
      width: `${value}%`,
    }),
    h: (value: number | string) => ({
      height: typeof value === 'string' ? value : value * MULTIPLIER,
    }),
    hp: (value: number) => ({
      height: `${value}%`,
    }),
    minH: (value: number | string) => ({
      minHeight: typeof value === 'string' ? value : value * MULTIPLIER,
    }),
    maxH: (value: number | string) => ({
      maxHeight: typeof value === 'string' ? value : value * MULTIPLIER,
    }),
    maxHP: (value: number) => ({
      maxHeight: `${value}%`,
    }),
    minW: (value: number | string) => ({
      minWidth: typeof value === 'string' ? value : value * MULTIPLIER,
    }),
    maxW: (value: number | string) => ({
      maxWidth: typeof value === 'string' ? value : value * MULTIPLIER,
    }),
    fs: (value: number) => ({
      fontSize: value * FS_MULTIPLIER,
    }),
    ls: (value: string) => ({
      letterSpacing: value,
    }),
  },
  media: mediaQueryTypes,
});