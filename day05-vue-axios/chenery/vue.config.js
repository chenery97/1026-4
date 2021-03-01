module.exports = {
  devServer: {
    // proxy: 'http://localhost:9898' // 目标服务器

    proxy: {
      "^/api": { // 处理以 /api 开头的请求
        target: "http://localhost:9898", // 目标服务器
        pathRewrite: { // 路径重写
          "^/api": "",
        },
        // changeOrigin: true, // 改变host，允许跨域
      },
    },
  },
};
