<template>
    <div class="container flex flex-cloumn pad-top-nav">
        <div class="search flex flex-row flex-align-center">
            <img src="../../assets/img/img_logo_search.png">
            <div class="search-bar flex flex-justify-between">
                <input type="text">
                <div class="search-btn flex flex-align-center flex-justify-center">需求搜索</div>
            </div>
        </div>
        <div class="flex flex-row flex-justify-between results">
            <div class="list">
                <div class="list-item flex flex-cloumn" @click="toLink('/newsSearchDetail')" v-for="(item, index) in list" :key="index">
                    <div class="flex flex-row flex-align-content">
                        <span class="item-title">{{ item.title }}</span>
                        <span class="item-tag">资讯</span>
                    </div>
                    <div class="item-content">{{ item.content }}</div>
                    <div class="item-time">{{ item.time }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Pagination from '@/components/Pagination'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      list: [
        {
          title: '暴力克洛维',
          content: '有人说，商场如战场，我们必须要懂得一些技巧与策略，才能拥有一定的相对优势在这场没有硝烟的战争中立于不败之地。那么，作为信贷员，要想成功说服客户签单，快速提高业绩需要掌握哪些实用的技巧呢？现在，圈哥就来为大家说一说。',
          time: '2019-08-12'
        },
        {
          title: '暴力克洛维',
          content: '有人说，商场如战场，我们必须要懂得一些技巧与策略，才能拥有一定的相对优势在这场没有硝烟的战争中立于不败之地。那么，作为信贷员，要想成功说服客户签单，快速提高业绩需要掌握哪些实用的技巧呢？现在，圈哥就来为大家说一说。',
          time: '2019-08-12'
        },
        {
          title: '暴力克洛维',
          content: '有人说，商场如战场，我们必须要懂得一些技巧与策略，才能拥有一定的相对优势在这场没有硝烟的战争中立于不败之地。那么，作为信贷员，要想成功说服客户签单，快速提高业绩需要掌握哪些实用的技巧呢？现在，圈哥就来为大家说一说。',
          time: '2019-08-12'
        },
        {
          title: '暴力克洛维',
          content: '有人说，商场如战场，我们必须要懂得一些技巧与策略，才能拥有一定的相对优势在这场没有硝烟的战争中立于不败之地。那么，作为信贷员，要想成功说服客户签单，快速提高业绩需要掌握哪些实用的技巧呢？现在，圈哥就来为大家说一说。',
          time: '2019-08-12'
        }
      ]
    }
  },
  methods: {
    toLink (path) {
      this.$router.push(path)
    }
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
    .results{
        padding-left: 120px;
        padding-top: 32px;
    }
    .list{
        width: 532px;
    }
    .list-item{
        padding: 20px 0;
    }
    .item-title{
        font-size:18px;
        font-weight:bold;
        color:rgba(48,50,52,1);
        cursor: pointer;
    }
    .item-tag{
        margin-left: 8px;
        font-size:14px;
        font-weight:bold;
        color: #fff;
        padding: 2px 6px;
        background: #06CDBC;
    }
    .item-content,.item-time{
        font-size: 14px;
        font-weight: 500;
        color: rgba(102,105,128,1);
    }
    .item-content{
        line-height:22px;
        margin: 20px 0;
    }
</style>



// WEBPACK FOOTER //
// src/view/news/search.vue