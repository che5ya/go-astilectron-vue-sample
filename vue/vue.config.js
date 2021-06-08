// vue.config.js
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? ''
      : '/',
    outputDir: '../resources/app/',
    css: {
        loaderOptions: {
          sass: {
            data: `
              @import "@/styles/_variables.scss";
              @import "@/styles/_mixins.scss";
              @import "@/styles/_VTooltip.scss";
            `
          }
        }
      },
}