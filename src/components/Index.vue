<template>
  <div class="wrapper">
    <banner></banner>
    <lottery></lottery>
    <section class="desc">
      <div class="text">搜索本站</div>
      <div class="search">
        <input type="text"
               class="input">
        <i class="iconfont">&#xe6a8;</i>
        <!-- <router-link :to="`/articlelist/search?para=${searchTxt}`"><i class="iconfont">&#xe6a8;</i></router-link> -->
      </div>
      <h3>个人博客介绍</h3>
      <p>编程、NBA、健身、音乐、小说是我兴趣之所在,特建此博客,与君一起分享!</p>
      <div class="info">本站采用Vue.js+Node.js+Mongodb搭建，前后端分离，欢迎感兴趣的朋友交流学习。</div>
      <div class="location">源码地址:<a href="https://github.com/godboyxw/xwblog.git"
           target="_blank">https://github.com/godboyxw/xwblog.git</a></div>
      <div class="bg"></div>
    </section>
  </div>
</template>

<script>
import banner from './Banner'
import lottery from './lottery'
export default {
  components: {
    banner,
    lottery
  }
}
</script>

<style scoped>
.wrapper {
  width: 17.6rem;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  font-size: 0.2rem;
}
.desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-shadow: 0 0 0.02rem #ccc;
  background: url("http://www.liciwang.com/upload/i01.pictn.sogoucdn.com/419b14e89b80b4b7.jpg")
    80% 100% / cover no-repeat;
}

.bg {
  width: 1.2rem;
  height: 1rem;
  border-radius: 0.2rem;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url("../assets/images/basketball.png");
  background-size: 100% 100%;
}
.text {
  color: #61b3e6;
  font-weight: bolder;
  margin-bottom: 0.2rem;
}
.search {
  margin-bottom: 0.2rem;
  display: flex;
}
.input {
  width: 4rem;
  height: 0.3rem;
  border: 1px solid #61b3e6;
}
.iconfont {
  width: 0.3rem;
  height: 0.32rem;
  text-align: center;
  line-height: 0.3rem;
  background-color: #61b3e6;
  color: #fff;
  font-weight: bold;
}
h3 {
  width: 2rem;
  height: 0.4rem;
  margin-bottom: 0.2rem;
  font-size: 0.26rem;
  text-align: center;
  line-height: 0.4rem;
  color: aliceblue;
  background: pink;
}
p {
  margin-bottom: 0.2rem;
  font-size: 0.2rem;
}
.info {
  margin-bottom: 0.2rem;
  font-size: 0.2rem;
}
.location {
  margin-bottom: 0.2rem;
}
</style>
