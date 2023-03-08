const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/abstracts/_variables.scss";
          @import "@/assets/scss/abstracts/_mixins.scss";
          @import "@/assets/scss/base/_fonts";
          @import "@/assets/scss/base/_animations";
          @import "@/assets/scss/base/_default";
          @import "@/assets/scss/base/_fonts";
          @import "@/assets/scss/base/_form";
          @import "@/assets/scss/base/_layout";
          @import "@/assets/scss/base/_icon";
          @import "@/assets/scss/base/_bullet";
          @import "@/assets/scss/base/_table";
          @import "@/assets/scss/base/_button";
          @import "@/assets/scss/layout/_layout";
          @import "@/assets/scss/layout/_header";
          @import "@/assets/scss/layout/_body";
          @import "@/assets/scss/layout/_project";
          @import "@/assets/scss/pages/_page";
        `
      }
    }
  }
})
