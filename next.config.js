const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  const config = Object.assign({}, defaultConfig, {
    trailingSlash: true,
    exportPathMap: function () {
      return {
        "/": { page: "/" },
      };
    },
  });

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return config;
  }

  return {
    ...config,
    images: {
      loader: "imgix",
      path: "https://noop/",
    },
  };
};