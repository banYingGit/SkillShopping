<template>
  <div class="h100">
    <footer-bar :footerData="footerData"></footer-bar>
  </div>
</template>
<script>
  import FooterBar from '../common/footer'

  export default {
    components: {
      FooterBar: FooterBar
    },
    data: function () {
      return {
        footerData: {
          selected: 'open'
        },
      }
    }
  }
</script>
