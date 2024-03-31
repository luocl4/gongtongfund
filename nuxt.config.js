import env from './env.js' // 头部导入
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "共同基金",
    htmlAttrs: {
      lang: "en"
    },
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      },
      {
        name: "format-detection",
        content: "telephone=no"
      }
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["element-ui/lib/theme-chalk/index.css", '@/assets/fonts/iconfont.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: "@/plugins/element-ui",
    ssr: true
  }, {
    src: "~/plugins/map.js",
    ssr: false
  }, {
    src: '@/assets/fonts/iconfont.js',
    ssr: false
  }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    vendor: ["element-ui", "axios"]
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "main",
        path: "/main",
        component: resolve(process.cwd(), "@/pages/index.vue")
      });
    }
  },
  env: {
    NODE_ENV: env[process.env.NODE_ENV].NODE_ENV,
    API_URL: env[process.env.NODE_ENV].API_URL,
  },
};
