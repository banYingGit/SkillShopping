<template>
  <div class="h100">
    <header-menu :headerData="headerData">
    </header-menu>
    <br/><br/><br/><br/><br/>
    <router-link :to="{name: 'Order'}">
      Order
    </router-link>
  </div>
</template>
<script>
  import HeaderMenu from '../common/header'

  export default {
    components: {
      HeaderMenu: HeaderMenu
    },
    data: function () {
      return {
        headerData: {
          title: '22'
        },
      }
    }
  }
</script>
