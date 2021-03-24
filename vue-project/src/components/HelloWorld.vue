<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank"> Core Docs </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank"> Forum </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank"> Community Chat </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank"> Twitter </a>
      </li>
      <br />
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank"> vue-router </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank"> vuex </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank"> vue-loader </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">
          awesome-vue
        </a>
      </li>
    </ul>
    <h3>h3</h3>
    <ul>
            <li>
          <!-- vue路由页面跳转方式 -->
            <router-link :to="{path:'/FinConInfo'}">路由跳转方式</router-link>
      </li>
    </ul>


<!-- 这里是区分的部分 -->

   <h3>h3</h3>
    <ul>
            <li>
          <!-- vue路由页面跳转方式 -->
            <router-link :to="{path:'/FinConInfo'}">路由跳转方式</router-link>
      </li>
    </ul>



<!-- 这里是区分的部分 -->



    <!-- 创建一个按钮的点击事件 -->
    <button  id ="agree-submit" v-on:click="submit">提交</button>
  </div>
</template>

<script>

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "vue项目界面",
    };
  },
  methods:{
    submit (){
      alert("弹框信息")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background-color: #d1d4cef1; 
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
}
a {
  color: #42b983;
}
</style>
