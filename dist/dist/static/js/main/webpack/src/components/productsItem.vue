<template>
    <div class="productItem flex flex-cloumn flex-justify-between">
        <div class="productItem-info flex flex-justify-between">
            <img src="#" class="productItem-img">
            <div class="productItem-desc flex flex-cloumn flex flex-justify-between">
                <span>额度高达</span>
                <div class="Amount">5000<span>元</span></div>
                <div class="returnMoney">还款周期：12个月</div>
            </div>
        </div>
        <div class="app-info flex flex-row flex-align-center">
            <img src="#" class="app-img">
            <span>{{ item.appName }}</span>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    item: {
      type: [Object, String]
    }
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.productItem{
    width: 242px;
    height: 144px;
    box-sizing: border-box;
    padding: 16px;
    border:1px solid rgba(233,234,244,1);
}
.productItem-info{
    width: 100%;
}
.productItem-img{
    width:78px;
    height:78px;
}
.productItem-desc{
    margin-left: auto;
    font-size:12px;
    font-weight:500;
    color:rgba(159,162,179,1);
    height:78px;
}
.Amount{
    font-size:32px;
    font-weight:bold;
    color:rgba(255,87,87,1);
}
.Amount span{
    font-size:14px;
}
.returnMoney{
    background:rgba(240,244,248,1);
    width:116px;
    height:21px;
    line-height: 21px;
    text-align: center;
    font-weight:bold;
    color:rgba(97,128,168,1);
}
.app-info{
    font-size:14px;
    font-weight:bold;
    color:rgba(75,77,94,1);
}
.app-img{
    height: 18px;
    width: 18px;
    border-radius: 50%;
    margin-right: 9px;
}
</style>



// WEBPACK FOOTER //
// src/components/productsItem.vue