const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/abstracts/_variable.scss";
          @import "@/assets/scss/abstracts/_mixins.scss";
        `
      }
    }
  }
})
