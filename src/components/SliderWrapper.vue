<template>
  <div class="slider__wrapper">
    <div class="slider">
      <slider-body v-bind="options">
        <div class="slider__item" v-for="slide in slides">
          <p class="slider__item-name">{{slide.name}}</p>
          <img :src="slide.img" :alt="slide.name">
          <p class="slider__item-count">{{slide.index}}<span>/{{slides.length}}</span></p>
        </div>
      </slider-body>
      <a class="slider__link" href="#">все картины</a>
    </div>
  </div>
</template>

<script>
  import SliderBody from './SliderBody.vue'
  
  export default {
    name: "SliderWrapper",
    data() {
      return {
        options: {
          items: 1,
          nav: true,
          dots: true,
          offset: 1,
          sl: this.$store.getters.SLIDER_LIST
        },
      }
    },
    
    components: {
      SliderBody: SliderBody
    },
    
    computed: {
      slides() {
        return this.$store.getters.SLIDER_LIST;
      }
    }
  }

</script>

<style scoped lang="scss">
  .slider {
    box-sizing: border-box;
    padding-top: 60px;
    overflow: hidden;
    
    &__wrapper {
      height: 389px;
      background: #202020;
      width: 100%;
    }
    
    &__link {
      display: block;
      position: relative;
      text-align: left;
      text-decoration: none;
      color: #BFBFBF;
      font-size: 14px;
      line-height: 20px;
      width: 100px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 57px;
    }
    
    &__link::before {
      content: "";
      position: absolute;
      top: 7px;
      right: 3px;
      width: 7px;
      height: 8px;
      background-image: url("../assets/arrow-small.svg");
    }
    
    
    &__item-name {
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #F5F5F5;
      margin-bottom: 20px;
    }
    
    &__item {
      margin-right: 20px;
    }
    
    &__item img {
      width: 200px;
      height: 156px;
    }
    
    &__item-count {
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #F5F5F5;
      margin-top: 12px;
      margin-left: 65px;
      width: 50px;
    }
    
    &__item-count span {
      color: #BFBFBF;
    }
  }
  
  @media (min-width: 768px) {
    .slider {
      padding-top: 20px;
      
      &__wrapper {
        height: 653px;
      }
      
      &__item {
        margin-right: 288px;
      }
      
      &__item img {
        width: 480px;
        height: 374.4px;
      }
      
      &__item-count {
        margin-top: 12px;
        margin-left: auto;
        margin-right: auto;
        width: 50px;
      }
    }
  }
  
  @media (min-width: 1024px) {
    .slider {
      position: relative;
      padding-top: 24px;
      height: 803px;
      
      &__wrapper {
        height: 803px;
      }
      
      &__link {
        position: absolute;
        top: 19px;
        right: 260px;
      }
      
      &__item {
        margin-right: 288px;
        position: relative;
      }
      
      &__item img {
        width: 920px;
        height: 530px;
        margin-top: 20px;
      }
      
      &__item-name {
        width: 250px;
        position: absolute;
        bottom: -57px;
        left: 335px;
      }
      
      &__item-count {
        position: absolute;
        bottom: -63px;
        left: 435px;
      }
    }
  }
</style>
