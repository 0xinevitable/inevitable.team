const withSvgr = require('next-plugin-svgr');

module.exports = withSvgr({
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
});
