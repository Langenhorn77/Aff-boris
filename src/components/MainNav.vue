<template>
  <nav class="main-nav" :class="{ 'main-nav-footer': isInFooter }">
    <transition name="fade" mode="out-in">
      <button class="main-nav__burger" v-if="!show" @click="show = !show">
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="2" rx="1" fill="#F5F5F5"/>
          <rect y="7" width="24" height="2" rx="1" fill="#F5F5F5"/>
          <rect y="14" width="24" height="2" rx="1" fill="#F5F5F5"/>
        </svg>
      </button>
      <button class="main-nav__cross" v-else @click="show = !show">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23.867px" height="23.867px" viewBox="0 0 23.867 23.867" enable-background="new 0 0 23.867 23.867" xml:space="preserve">
             <path fill="#FFFFFF" d="M15.087,11.933l8.56-8.559c0.293-0.293,0.293-0.768,0-1.061L21.554,0.22C21.414,0.079,21.223,0,21.023,0 c-0.199,0-0.391,0.079-0.529,0.22l-8.561,8.56l-8.56-8.56c-0.282-0.282-0.78-0.282-1.061,0L0.22,2.313 c-0.293,0.293-0.293,0.768,0,1.061l8.56,8.559l-8.56,8.559c-0.293,0.293-0.293,0.768,0,1.062l2.093,2.094 c0.141,0.142,0.331,0.22,0.53,0.22c0.199,0,0.39-0.078,0.53-0.22l8.561-8.56l8.56,8.56c0.141,0.142,0.332,0.22,0.53,0.22 c0.199,0,0.39-0.078,0.53-0.22l2.093-2.094c0.293-0.294,0.293-0.769,0-1.062L15.087,11.933z"/>
         </svg>
      </button>
    </transition>
    <transition name="fade">
      <ul class="main-nav__list" v-if="show">
        <li class="main-nav__item" v-for="link in links"><a href="#" v-scroll-to="link.link">{{link.title}}</a></li>
      </ul>
    </transition>
  </nav>
</template>

<script>
  
  
  export default {
    name: "MainNav",
    data() {
      return {
        links: [
          {
            title: 'биография',
            link: '#biography'
          },
          {
            title: 'творчество',
            link: '#art'
          },
          {
            title: 'картины',
            link: '#slider'
          },
          {
            title: 'музеи',
            link: '#museum'
          },
        ],
        show: false
      }
    },
    methods: {
    
    },
    props: {
      isInFooter: {
        type: Boolean,
        default: false
      }
    },
    
  }
  
  
</script>

<style scoped lang="scss">
  
  .main-nav {
    position: relative;
    
    & a {
      text-decoration: none;
      color: #F5F5F5;
      font-size: 14px;
      line-height: 16px;
    }
    
    &__burger {
      width: 24px;
      height: 16px;
      margin-top: 2px;
      padding: 0;
      border: none;
      background-color: transparent;
    }
  
    &__cross {
      width: 24px;
      height: 20px;
      margin-top: 2px;
      padding: 0;
      border: none;
      background-color: transparent;
    }
  
    &__cross svg {
      width: 16px;
      height: 16px;
    }
    
    &__list {
      position: absolute;
      right: 0;
      top: 20px;
    }
    
    &__item {
      text-align: center;
    }
  }
  
  .main-nav-footer {
    .main-nav__burger {
      display: none;
    }
    
    .main-nav__list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .main-nav__item {
      margin-bottom: 18px;
    }
  }
  
  @media (min-width: 768px) {
    .main-nav-footer {
      
      .main-nav__list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
  
  @media (min-width: 1024px) {
    .main-nav {
      &__burger {
        display: none;
      }
      
      &__cross {
        display: none;
      }
      
      &__list {
        display: flex;
        justify-content: space-between;
        width: 306px;
        margin: 0;
      }
    }
  }

</style>
