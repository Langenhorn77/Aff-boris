<template>
  <nav class="main-menu" :class="{ 'main-menu-footer': isInFooter }">
      <ul class="main-menu__list">
        <li class="main-menu__item" v-for="link in links"><a href="#" v-scroll-to="link.link">{{link.title}}</a></li>
      </ul>
  </nav>
</template>

<script>
  
  
  export default {
    name: "MainMenu",
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
  
  .main-menu {
    display: none;
    
    & a {
      text-decoration: none;
      color: #F5F5F5;
      font-size: 14px;
      line-height: 16px;
    }
  
    &__item {
      text-align: center;
    }
  }
  
  .main-menu-footer {
    
    display: block;
    
    .main-menu__list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .main-menu__item {
      margin-bottom: 18px;
    }
  }
  
  @media (min-width: 768px) {
    .main-menu-footer {
      
      
      .main-menu__list {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
  
  @media (min-width: 1024px) {
    .main-menu {
      display: block;
      
      &__list {
        display: flex;
        justify-content: space-between;
        width: 306px;
        margin: 0;
      }
    }
  }

</style>

