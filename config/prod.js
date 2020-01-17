const isH5 = process.env.CLIENT_ENV === 'h5',

  HOST = '"https://miniapp.you.163.com"',
  HOST_M = '"https://m.you.163.com"',

  // XXX 搭了个 proxy 用于演示 prod 环境的 H5
  HOST_H5 = '"http://jsnewbee.com/taro-yanxuan/api"',
  HOST_M_H5 = '"http://jsnewbee.com/taro-yanxuan/api-m"'
/* eslint-disable */
module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  defineConstants: {
    HOST: isH5 ? HOST_H5 : HOST,
    HOST_M: isH5 ? HOST_M_H5 : HOST_M
  },
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
