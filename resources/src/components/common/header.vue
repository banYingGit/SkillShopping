<template>
  <div class="header-box">
    <mt-header :title="headerData.title" fixed>
      <div slot="left" class="icon" @click="goBack">
        <img src="../../assets/images/common/goback-f.png"/>
      </div>
      <div slot="right">
        <slot>
        </slot>
      </div>
    </mt-header>
  </div>
</template>
<script>
  // import router from 'Router'
  export default {
    name: 'header-menu',
    data: function () {
      return {}
    },
    props: {
      headerData: {
        type: Object,
        title: ''
      }
    },
    methods: {
      goBack: function () {
        this.$store.dispatch('UPDATE_ANIMATE', true);
        if (this.headerData.path) {
          this.$router.replace({name: this.headerData.path})
        } else {
          this.$router.back()
        }

      }
    }
  }
</script>
