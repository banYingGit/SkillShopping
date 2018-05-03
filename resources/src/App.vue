<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view" id="trs">
      </router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data: function () {
      return {
        transitionName: '',
        navPage: ['/index', '/openPrize', '/user']
      }
    },
    watch: {
      '$route'(to, from) {
        this.transitionName = ''
        if (this.$store.state.flag == true) {
          this.transitionName = 'slide-right';
          this.$store.state.flag = false;
        } else if (this.navPage.indexOf(from.path) != -1 && this.navPage.indexOf(to.path) != -1) {
          var oDiv = document.getElementById('trs');
          oDiv.style.transition = "intial";
        } else {
          this.transitionName = 'slide-left'
        }
      }
    }
  }
</script>
