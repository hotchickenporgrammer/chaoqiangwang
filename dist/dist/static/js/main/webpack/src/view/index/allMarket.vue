<template>
  <div class="pad-top-nav">
    <div class="banner">
      <img src="../../assets/img/img_picture_market.png">
    </div>
    <div class="container flex flex-row market-app">
      <div class="checkType flex flex-cloumn flex-justify-around">
        <div class="check-item flex flex-row flex-align-center" v-for="(item, index) in checkItem" :key="index" @click="theFocus(index)">
          <div class="item-block" :class="isFocus===index?'item-block-active':''" />
          <span class="item-text" :class="isFocus===index?'item-text-active':''">{{ item }}</span>
        </div>
      </div>
      <div class="app-list flex">
        <barItem />
      </div>
    </div>
  </div>
</template>
<script>
import barItem from '@/components/barItem'

export default {
  components: {
    barItem
  },
  data () {
    return {
      checkItem: [
        '小额度',
        '普通产品',
        '高额度',
        '常规产品'
      ],
      isFocus: 0
    }
  },
  methods: {
    theFocus (i) {
      this.isFocus = i
    }
  }
}

</script>
<style scoped>
  .banner {
    width: 1640px;
    height: 420px;
    margin: 0 auto;
  }

  .banner img {
    height: 100%;
    width: 100%;
  }
.market-app{
    padding-top: 32px;
}
.checkType{
    padding-right: 50px;
    height: 133px;
}
.check-item{
    font-size:16px;
    font-weight:500;
    color:rgba(159,162,179,1);
    cursor: default;
}
.item-block{
    height: 8px;
    width: 8px;
    background: #9FA2B3;
    transform: rotate(45deg);
    margin-right: 4px;
}
.item-block-active{
    background-color: #3084FF;
}
.item-text-active{
    color: #3084FF;
}
.app-list{
    width: 900px;
}
.app-list > div{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
}
.app-list >>> .bar-item{
    margin-right: 8px;
    margin-bottom: 32px;
    width: 287px !important;
}
</style>



// WEBPACK FOOTER //
// src/view/index/allMarket.vue