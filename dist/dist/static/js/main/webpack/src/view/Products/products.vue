<template>
  <div class="pad-top-nav">
    <div class="container products">
      <div class="main-show flex flex-row flex-justify-between">
        <div class="main-info flex flex-cloumn">
          <div class="theme">
            <p>不懂风控盲目申请怎么都下不了款？</p>
            <p>专利算法帮你量身推荐，最高下款率在这里</p>
          </div>
          <div class="desc">
            <p>急用钱，乱申请？坏征信</p>
            <p>套路贷？超利贷？不懂专业损失大 </p>
            <p>网贷是需要专业的事，低成本，能下款，养护征信资质，智能算法</p>
            <p>帮您定位适合您个人征信资质的产品，从此找钱不再难。</p>
          </div>
          <div class="main-img">
            <img src="../../assets/img/img_products.png">
          </div>
        </div>
        <div class="main-form flex flex-cloumn">
          <div class="form-title flex flex-align-center">
            获取产品
          </div>
          <div class="login-row form-row flex flex-row flex-align-center">
            <div class="input-name">
              姓名
            </div>
            <div class="row-input">
              <input type="text" placeholder="请输入您的姓名">
            </div>
          </div>
          <div class="login-row form-row flex flex-row flex-align-center">
            <div class="input-name">
              身份证
            </div>
            <div class="row-input">
              <input type="text" placeholder="请输入您的真实身份证号">
            </div>
          </div>
          <div class="login-row form-row flex flex-row flex-align-center">
            <div class="input-name">
              手机号
            </div>
            <div class="row-input">
              <input type="text" placeholder="请输入您的手机号">
            </div>
          </div>
          <div class="form-btn flex flex-align-center flex-justify-center">
            登录
          </div>
        </div>
      </div>
      <div class="recommend">
        <div class="recommend-title flex flex-row flex-align-center">
            <div class="item-block"></div>
            <span>推荐产品</span>
        </div>
        <div class="recommend-list flex" v-if="false">
            <div class="list-item" v-for="(item, index) in recommendList" :key="index">
                <productsItem  :item = item />
            </div>
        </div>
        <img src="../../assets/img/blurry.png" class="blurry">
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
  .products {
    padding-top: 54px;
  }

  .main-form {
    width: 510px;
    height: 419px;
    border: 1px solid rgba(233, 234, 244, 1);
    box-sizing: border-box;
    padding: 40px 75px 0 75px;
  }

  .login-row {
    width: 100%;
    height: 64px;
  }

  .form-title {
    padding: 10px 0;
    font-size: 20px;
    font-weight: bold;
    color: rgba(48, 132, 255, 1);
  }

  .input-name {
    width: 58px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(159, 162, 179, 1);
  }

  .row-input {
    width: 238px;
    height: 100%;
    position: relative;
  }

  .row-input input {
    height: 100%;
    border: 0;
    outline: none;
    box-sizing: border-box;
    padding: 2px 0 2px 15px;
  }

  .row-input input::-webkit-input-placeholder {
    color: #9FA2B3;
    font-weight: 500;
  }

  .row-input::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1px;
    height: 16px;
    background: #E9EAF4;
  }

  .form-row {
    box-sizing: border-box;
    padding: 20px 0;
    border-bottom: 1px solid #E9EAF4;
  }

  .theme {
    padding-top: 50px;
  }

  .theme p {
    font-size: 20px;
    font-weight: bold;
    color: rgba(48, 50, 52, 1);
  }

  .desc {
    padding-top: 27px;
  }

  .desc p {
    font-size: 14px;
    font-weight: 500;
    color: rgba(102, 105, 128, 1);
  }

  .main-img {
    margin-top: 10px;
    width: 410px;
    height: 205px;
  }

  .main-img img {
    height: 100%;
    width: 100%;
  }
  .form-btn {
    background: #3084FF;
    color: #fff;
    height: 52px;
    margin-top: 40px;
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
.blurry{
    width: 100%;
    height: 144px;

}
</style>



// WEBPACK FOOTER //
// src/view/Products/products.vue