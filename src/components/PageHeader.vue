<template>
  <header class="page-header">
    <div class="page-header__wrapper">
      <div class="page-header__wrapper-top">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.8751 12.825C10.6503 12.825 12.9001 10.5752 12.9001 7.79996C12.9001 5.02473 10.6503 2.77496 7.8751 2.77496C5.09987 2.77496 2.8501 5.02473 2.8501 7.79996C2.8501 10.5752 5.09987 12.825 7.8751 12.825Z" stroke="#F5F5F5" stroke-width="1.5" stroke-miterlimit="10"/>
          <path d="M11.4751 11.475L16.2001 16.2" stroke="#F5F5F5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <main-nav></main-nav>
      </div>
      <div class="page-header__wrapper-bottom">
        <about></about>
      </div>
    </div>
    <div class="page-header__image">
      <picture>
        <source media="(min-width: 768px)" srcset="../assets/bg-desktop.jpg">
        <img src="../assets/bg-mobile.jpg" height="125" width="320"/>
      </picture>
    </div>
  </header>
</template>

<script>
  import MainNav from './MainNav.vue'
  import About from './About.vue'
  
  export default {
    name: "PageHeader",
    components: {
      MainNav: MainNav,
      About: About
    }
  }
</script>


<style scoped lang="scss">
  .page-header {
    width: 100%;
    background-color: #202020;
    
    &__wrapper {
      width: 320px;
      margin-left: auto;
      margin-right: auto;
    }
    
    &__wrapper-top {
      display: flex;
      justify-content: space-between;
      padding-top: 30px;
      padding-left: 21px;
      padding-right: 20px;
    }
    
    &__wrapper-bottom {
      margin-top: 65px;
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 60px;
    }
    
    &__image {
      width: 320px;
      margin-left: auto;
      margin-right: auto;
      height: 125px;
    }
    
    &__image img {
      width: 320px;
      height: 125px;
    }
  }
  
  @media (min-width: 768px) {
    .page-header {
      display: flex;
      flex-direction: row-reverse;
  
      &__wrapper {
        width: 450px;
        margin-left: auto;
        margin-right: auto;
      }
  
      &__wrapper-bottom {
        margin-bottom: 30px;
      }
      
      &__image {
        height: 533px;
        margin: 0;
      }
      
      &__image img {
        width: 307px;
        height: 533px;
      }
    }
  }

  @media (min-width: 1024px) {
    .page-header {
  
      &__wrapper {
        width: calc(100% - 460px);
      }
  
      &__wrapper-top {
        width: 100%;
        box-sizing: border-box;
  
        padding-top: 40px;
        padding-left: 80px;
        padding-right: 100px;
      }
  
      &__wrapper-bottom {
        width: 100%;
        box-sizing: border-box;
        margin-top: 190px;
      }
    
      &__image {
        height: 800px;
        width: 460px;
      }
    
      &__image img {
        width: 460px;
        height: 800px;
      }
    }
  }
</style>
