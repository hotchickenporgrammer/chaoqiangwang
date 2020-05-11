<template>
  <div id="app">
    <div class="content">
      <NavBar/>
      <router-view/>
    </div>
    <footerGuide/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import footerGuide from '@/components/footer'
export default {
  name: 'App',
  components: {
    NavBar,
    footerGuide
  }
}
</script>

<style>
html, body{
  height: 100%;
}
* {
  padding: 0;
  margin: 0;
  transition: all 200ms;
}
#app{
  min-height: 100%;
}
.container {
  width: 1030px;
  margin: 0 auto;
}
.height-100{
  height: 100%;
}
.flex{
  display: flex;
}
.flex-1{
  flex: 1;
}
.flex-row{
  flex-direction: row;
}
.flex-cloumn{
  flex-direction: column;
}
.flex-justify-between{
  justify-content: space-between;
}
.flex-justify-around{
  justify-content: space-around;
}
.flex-justify-center{
  justify-content: center;
}
.flex-align-center{
  align-items: center;
}
.pad-top-nav{
  padding-top: 110px;
}
.content{
  min-height: calc(100vh - 75px);
}

</style>



// WEBPACK FOOTER //
// src/App.vue