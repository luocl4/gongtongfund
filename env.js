module.exports = {
  // 本地开发环境
  development: {
    NODE_ENV: 'development',
    API_URL: 'http://localhost:3000'
  },
  //   dev测试环境
  staging: {
    NODE_ENV: 'staging',
    API_URL: 'https://gongtong-dev.onrender.com'
  },
  // 生产环境
  production: {
    NODE_ENV: 'production',
    API_URL: 'https://gongtongfund.com'
  },
}
