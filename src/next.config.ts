/**
 * Copyright (c) 2017-present, SPACE44.
 *
 * @format
 */

module.exports = {
  exportPathMap: function exportPathMap() {
    return {
      "/": { page: "/" },
    };
  },
  // webpack: (config, { dev }) => {
  //   // Perform customizations to webpack config
  //   if (!dev) {
  //     config.module.rules.push({
  //       test: /\.(css|ico|gif)$/,
  //       use: [
  //         {
  //           loader: 'file-loader',
  //           options: {
  //             outputPath: 'static/',
  //           },
  //         },
  //       ],
  //     });
  //   }

  //   // Important: return the modified config
  //   return config;
  // },
};
