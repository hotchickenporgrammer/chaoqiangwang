<template>
  <div class="pad-top-nav container">
    <div class="result flex flex-row">
      <div class="result-show">
        <div class="result-title">
          专利算法：天枰
        </div>
        <div class="result-info flex flex-cloumn flex-justify-between">
          <div class="info-row">
            <span class="row-name">用户征信编码：</span>
            <span class="row-content">150205623496974</span>
          </div>
          <div class="info-row">
            <span class="row-name">定位产品风控：</span>
            <span class="row-content">普通用户</span>
          </div>
          <div class="info-row">
            <span class="row-name">偿债承能比率：</span>
            <span class="row-content">50%</span>
          </div>
        </div>
        <div class="result-text">
          以下<span class="text-active">8</span>款产品是根据您的征信资质标签定位配对的合规下款产品，您可以进行操作申请
        </div>
      </div>
      <div class="result-img">
        <img src="../../assets/img/img_recommend.png">
      </div>
    </div>
    <div class="recommend">
      <div class="recommend-title flex flex-row flex-align-center">
        <div class="item-block"></div>
        <span>推荐产品</span>
      </div>
      <div class="recommend-list flex" v-if="true">
        <div class="list-item" v-for="(item, index) in recommendList" :key="index">
          <productsItem :item=item />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productsItem from '@/components/productsItem'

export default {
  components: {
    productsItem
  },
  data () {
    return {
      recommendList: [
        {
          appName: '有钱花'
        }
      ]
    }
  }
}

</script>
<style scoped>
  .result {
    margin-top: 48px;
  }

  .result-show {
    width: 608px;
    height: 280px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 19px 87px 0px rgba(159, 162, 179, 0.16);
    box-sizing: border-box;
    padding: 40px 32px 0 32px;
  }

  .result-title {
    font-size: 24px;
    font-weight: bold;
    color: rgba(48, 50, 52, 1);
    padding-bottom: 24px;
    border-bottom: 1px solid #E9EAF4;
  }

  .result-info {
    margin: 25px 0 15px 0;
    height: 71px;
  }

  .row-name {
    font-size: 14px;
    font-weight: 500;
    color: rgba(102, 105, 128, 1);
  }

  .row-content {
    font-size: 16px;
    font-weight: bold;
    color: rgba(48, 50, 52, 1);
  }

  .result-text {
    font-size: 14px;
    font-weight: 500;
    color: rgba(102, 105, 128, 1);
  }

  .text-active {
    color: #3084FF;
    font-size: 30px;
    font-weight: bold;
    padding: 0 3px;
  }

  .result-img {
    width: calc(100% - 608px);
    height: 280px;
  }

  .result-img img {
    height: 100%;
    width: 100%;
  }
  .recommend-title{
      margin: 70px 0 30px 0;
      font-size:20px;
    font-weight:bold;
    color:rgba(48,50,52,1);
  }
   .recommend-title span{
       margin-left: 4px;
   }
  .item-block{
    height: 10px;
    width: 10px;
    background: #3084FF;
    transform: rotate(45deg);
}
.recommend{
    padding-bottom: 160px;
}
.recommend-list{
    width: 100%;
    flex-wrap: wrap;
    align-content: center;
}
.list-item{
    margin-right: 20px;
    margin-bottom: 20px;
}
.list-item:nth-child(4n){
    margin-right: 0;
}

</style>



// WEBPACK FOOTER //
// src/view/Products/recommend.vue