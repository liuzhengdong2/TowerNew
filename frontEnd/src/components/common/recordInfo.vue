<template>
  <div class="recordInfo">
    <div>Liuser出品</div>
    <div>© 2021</div>
    <div>TongTianTa</div>
    <a
      href="http://www.beian.gov.cn/portal/registerSystemInfo?spm=a2c4g.11186623.7y9jhqsfz.113.34257243mu7XSO"
    >陕ICP备19012321号</a>
  </div>
</template>

<script>
export default {
    name:"RecordInfo"
}
</script>

<style lang="less" scoped>
.recordInfo {
  margin-top:auto;
  bottom: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  background-image: linear-gradient(to top, #ffffff 70%, #ffffff00 100%);
  cursor: default;
  a{
    color:black;
    text-decoration: none;
    cursor: pointer;
  }
}
</style>