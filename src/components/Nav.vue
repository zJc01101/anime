<template>
  <div class="footer">
    <ul class="top-nav">
      <li>
        <router-link to="/" exact
          ><i class="iconfont icon-dibutubiao_shouye"></i
          ><br />首页</router-link
        >
      </li>
      <li>
        <router-link to="/bookcase" exact
          ><i class="iconfont icon-shujia"></i><br />书架</router-link
        >
      </li>
      <li>
        <router-link to="/select" exact
          ><i class="iconfont icon-jingxuanyoupin"></i><br />精选</router-link
        >
      </li>
      <li>
        <router-link to="/community" exact
          ><i class="iconfont icon-shequ"></i><br />社区</router-link
        >
      </li>
      <li>
        <router-link to="/mine" exact
          ><i class="iconfont icon-wode"></i><br />我的</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style scoped lang="less">
.footer {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  bottom:0;
}
.top-nav {
  display: flex;
  li {
    flex: 1;
    text-align: center;

}
}
</style>
