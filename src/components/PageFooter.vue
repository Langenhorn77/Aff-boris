<template>
  <footer class="page-footer">
    <div class="page-footer__wrapper">
      <main-nav is-in-footer></main-nav>
      <social is-in-footer></social>
    </div>
  </footer>

</template>

<script>
  import MainNav from './MainNav.vue'
  import Social from './Social.vue'
  
  export default {
    name: "PageFooter",
    components: {
      MainNav: MainNav,
      Social: Social
    }
  }
</script>

<style scoped lang="scss">
  .page-footer {
    background-color: #202020;
    padding-top: 23px;
    min-height: 268px;
    box-sizing: border-box;
    width: 100%;
    
    &__wrapper {
      width: 320px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media (min-width: 768px) {
    .page-footer {
      min-height: 180px;
    }
  }

  @media (min-width: 1024px) {
    .page-footer {
      padding-top: 43px;
  
      &__wrapper {
        width: 305px;
      }
    }
  }
</style>
