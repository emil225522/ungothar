const widths = {
    screenMaxWidth: 1440,
    contentMaxWidth: 1320,
    videoMaxWidth: 1024,
    maxWidthSmall: 960,
    contentResultWidth: 864,
    maxWidthMobile: 768,
    blockMaxWidthMobile: 600,
    mobileMenuMaxWidth: 310,
  };
  
  const heights = {
    heroMaxHeight: 420,
    videoMaxHeight: 574,
    modalHeight: 736,
    standardBlockLargerImageHeight: 490,
    standardBlockLargeImageHeight: 480,
    standardBlockMediumImageHeight: 345,
    thirdWidthBlockImageHeight: 312,
    standardBlockSmallImageHeight: 250,
    verySmallBlockImageHeight: 180,
    mobileHeaderHeight: 50,
  };
  
  const imageHeights = {
    thumbnailImageHeight: 128,
    productImageMaxHeight: 575,
    productImageMaxHeightMedium: 720,
    productImageMaxHeightLarge: 736,
  };
  
  const toExport = { ...widths, ...heights, ...imageHeights };
  export default toExport;
  