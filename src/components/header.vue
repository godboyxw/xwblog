<template>
  <div>
    <ul class="lists">
      <router-link to="/"
                   class="link">
        <li class="item">编程</li>
      </router-link>
      <router-link to="/nba"
                   class="link">
        <li class="item">NBA</li>
      </router-link>
      <router-link to="/exercise"
                   class="link">
        <li class="item">健身</li>
      </router-link>
      <router-link to="/music"
                   class="link">
        <li class="item">音乐</li>
      </router-link>
      <router-link to="/novel"
                   class="link">
        <li class="item">小说</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.lists {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.3rem;
}
.item {
  font-size: 0.26rem;
}
.link {
  display: inline-block;
  flex: 1;
  color: #000;
}
.router-link-exact-active {
  background-color: aqua;
  color: orange;
}
</style>
