import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Message from "../views/Home/Message";
import News from "../views/Home/News";

// 安装路由器插件
Vue.use(VueRouter);
// new 一个路由器，传入路由配置对象
export default new VueRouter({
  routes: [
    {
      path: "/home", // 路由路径
      component: Home, // 路由组件
      children: [ // 子路由
        {
          path: "/home/message",
          component: Message,
        },
        {
          path: "news",
          component: News,
        },
        {
          path: "/",
          redirect: "message",
        },
      ],
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/", // 根路径会重定向到home组件
      redirect: "/home", // 重定向
    },
  ],
});
