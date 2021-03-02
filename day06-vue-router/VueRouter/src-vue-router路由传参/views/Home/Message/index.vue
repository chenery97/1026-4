<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <!-- 路由传参 -->
        <!-- 方式一：路由参数 -->
        <!-- <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link> -->
        <!-- 方式二：查询字符串 -->
        <!-- <router-link :to="`/home/message/detail/${message.id}?name=jack&age=19`">{{message.title}}</router-link> -->
        <!-- 方式三：路径以对象的形式 -->
        <!-- <router-link :to="{
          path: `/home/message/detail/${message.id}`,
          query: {name: 'jack', age: 19}
        }">{{message.title}}</router-link> -->
        <!-- 方式四：对象形式的简写 -->
        <!-- <router-link :to="{
          name: 'Detail',
          params: {id: message.id},
          query: {name: 'jack', age: 19}
        }">{{message.title}}</router-link> -->
        <router-link to="/home/message/detail">{{message.title}}</router-link>
      </li>
    </ul>
    <!-- 方式五：通过router-view 传递参数，跟props用法一样，多个组件需要相同的数据时可以使用这种方式 -->
    <router-view msg="hello"></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messages: [
        { id: 1, title: "message001" },
        { id: 2, title: "message002" },
        { id: 3, title: "message003" },
      ],
    };
  },
};
</script>

<style>
</style>