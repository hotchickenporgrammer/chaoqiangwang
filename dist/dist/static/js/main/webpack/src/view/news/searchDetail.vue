<template>
    <div class="container flex flex-cloumn pad-top-nav">
        <div class="search flex flex-row flex-align-center">
            <img src="../../assets/img/img_logo_search.png">
            <div class="search-bar flex flex-justify-between">
                <input type="text">
                <div class="search-btn flex flex-align-center flex-justify-center">需求搜索</div>
            </div>
        </div>
        <div class="detail">
            <div class="detail-title flex flex-row flex-align-center">
                <div class="title-text">手把手教你如何成为一名贷超高手</div>
                <div class="title-tag">资讯</div>
            </div>
            <div class="time">2019-02-02</div>
            <div v-html="content" class="richText"></div>
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
      content: ''
    }
  },
  methods: {
  }
}
</script>
<style scoped>
    .search{
        margin-top: 32px;
    }
    .search img{
        height: 14px;
        width: 104px;
    }
    .search-bar{
        height: 48px;
        width: 640px;
        margin-left: 16px;
    }
    .search-bar input{
        flex: 0 0 83%;
        box-sizing: border-box;
        border:1px solid rgba(233,234,244,1);
        outline: none;
        font-size: 16px;
        color: #4B4D5E;
        padding: 0 10px;
    }
    .search-btn{
        flex: 0 0 17%;
        box-sizing: border-box;
        color: #fff;
        font-size: 16px;
        font-weight:500;
        background: #3084FF;
        cursor: pointer;
    }
    .detail{
        margin-left: 120px;
        margin-top: 32px;
        width: 532px;
        min-height: 100px;
    }
    .detail-title{
        margin: 15px 0;
        }
    .title-text{
        font-size:22px;
        font-weight:bold;
        color:rgba(48,50,52,1);
    }
    .title-tag{
        color: #fff;
        background: #06CDBC;
        width: 40px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 14px;
        margin-left: 14px;
    }
    .time{
        font-size:14px;
        font-weight:500;
        color:rgba(159,162,179,1);
    }
    .richText{
        margin-top: 30px;
    }
</style>



// WEBPACK FOOTER //
// src/view/news/searchDetail.vue