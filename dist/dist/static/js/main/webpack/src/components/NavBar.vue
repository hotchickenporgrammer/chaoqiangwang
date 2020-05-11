<template>
    <div class="NavBar" :class="isShowBg?'nav-bg':''">
        <div class="container height-100">
            <!-- 占位符 -->
            <div class="null-bar" />
            <div class="item-group flex flex-justify-between">
                <div class="nav-left flex flex-align-center">
                    <div
                    v-for="(i, index) in navList" :key="index"
                    :class="isShowBg ? 'nav-items' : 'index-nav-items'"
                    @click="toNav(i.path)"
                    >
                    <span :class="isCurrent(i.pathType)">{{ i.name }}</span>
                    </div>
                </div>
                <div class="nav-right flex flex-align-center">
                    <div :class="isShowBg?'nav-items':'index-nav-items'"  @click="toNav('/login')">你好，请登录</div>
                    <div class="nav-items login"  @click="toNav('/login')">免费注册</div>
                    <div :class="isShowBg?'nav-items':'index-nav-items'">
                      <span>客服服务</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
  name: 'NavBar',
  data () {
    return {
      navList: [
        {
          name: '首页',
          pathType: 'index',
          path: '/'
        },
        {
          name: '借贷APP集市',
          pathType: 'market',
          path: '/market'
        },
        {
          name: '攻略',
          pathType: 'Raiders',
          path: '/Raiders'
        },
        {
          name: '资讯',
          pathType: 'news',
          path: '/news'
        },
        {
          name: '产品推荐',
          pathType: 'Products',
          path: '/Products'
        }
      ],
      isShowBg: true
    }
  },
  mounted () {
    this.judgePath()
  },
  methods: {
    toNav (path) {
      this.$router.replace(path)
    },
    judgePath () {
      if (this.$route.path === '/') {
        this.isShowBg = false
      } else {
        this.isShowBg = true
      }
    },
    isCurrent (pathType) {
      const meta = this.$route.meta
      if (pathType === meta) {
        if (this.isShowBg) {
          return 'on'
        } else {
          return 'index-on'
        }
      }
    }
  },
  computed: {
  },
  watch: {
    '$route' () {
      console.log(this.$route.path)
      this.judgePath()
    }
  }
}
</script>

<style scoped>
    .NavBar {
        width: 100%;
        height: 110px;
        z-index: 999;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
    }
    .nav-bg {
        background-color: #F7F8FC;
    }
    .null-bar{
        width: 100%;
        height: 32px;
    }
    .item-group{
        height: calc(100% - 32px);
    }
    .nav-left .index-nav-items,
    .nav-left .nav-items{
      margin-right: 40px;
    }
    .nav-right .index-nav-items,
    .nav-right .nav-items{
      margin-left: 40px;
    }
    .nav-items, .index-nav-items {
        font-size: 14px;
        font-weight:bold;
    }
    .nav-items{
        color: #4B4D5E;
    }
    .nav-items:hover{
        cursor: pointer;
        color: #3084FF;
    }
    .index-nav-items{
        color: #fff;
    }
    .index-nav-items:hover{
        cursor: pointer;
        color: #06CDBD;
    }

    .nav-items.login {
        padding: 4px 6px;
        color: #fff;
        background: #FF5757;
    }
    .on {
      color: #3084FF;
    }
    .index-on{
      color: #06CDBD;
    }
</style>



// WEBPACK FOOTER //
// src/components/NavBar.vue