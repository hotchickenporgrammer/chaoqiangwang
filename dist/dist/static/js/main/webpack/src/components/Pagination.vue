<template>
    <div class="pagination flex flex-row flex-align-center">
        <div @click="prevPage">
            <img src="../assets/img/icon_back_foot.png">
        </div>
        <div class="item"
         v-for="(item, index) in list"
         @click="theFoucs(item,index)"
         :class="isFoucs === item?'itemActive':''"
         :key="index">
            {{ item }}
         </div>
        <div @click="nextPage">
            <img src="../assets/img/icon_forward_foot.png">
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      pageList: [],
      isFoucs: 1,
      listData: 50,
      start: 0,
      end: 0,
      list: []
    }
  },
  mounted () {
    this.pageHandle()
  },
  computed: {
    changeEnd () {
      return this.end
    }
  },
  watch: {
    changeEnd () {
      const { start, end, pageList, listData } = this
      console.log(start, end, listData)

      for (let i = 0; i < listData; i++) {
        pageList.push(~~i + 1)
      }
      this.list = pageList.slice(start, end)
    }
  },
  methods: {
    nextPage () {
      if (this.isFoucs !== this.listData) {
        if (this.isFoucs === this.end) {
          this.start += 3
          this.end += 3
        }
        this.isFoucs++
      }
    },
    prevPage () {
      if (this.isFoucs - 1 !== 0) {
        if (this.isFoucs - 1 === this.start) {
          this.start -= 3
          this.end -= 3
        }
        this.isFoucs--
      }
    },
    theFoucs (item, i) {
      this.isFoucs = item
    },
    pageHandle () {
      if (this.listData < 5) {
        this.end = this.this.listData
      } else {
        this.end = 5
      }
    }
  }
}
</script>
<style scoped>
.pagination{
    margin: 50px 0;
    padding-left: 120px;
}
.pagination div{
    padding: 5px 10px;
    font-size:15px;
    font-weight:bold;
    color: #9FA2B3;
    margin-right: 5px;

}
.pagination .item:hover{
    background: #3388FF;
    color: #fff;
}
.itemActive{
    background: #3388FF;
    color: #fff !important;
}
.pagination img{
    height: 14px;
    width: 14px;
    transform: translateY(2px);
    cursor: pointer;
}
</style>



// WEBPACK FOOTER //
// src/components/Pagination.vue