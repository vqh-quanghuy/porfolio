module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap(args => {
          args[0].title = `Vu Quang Huy's Porfolio`;
          args[0].meta = {viewport: 'width=device-width,initial-scale=1.0'};
          args[0].meta = {property: 'og:image', content: 'https://i.vgy.me/SmZhgD.png'};
      return args;
    })
  }
}
