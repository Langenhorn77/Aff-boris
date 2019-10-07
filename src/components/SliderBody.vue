<template>
  <div class="slider__body">
    <ul class="slider__dots" ref="dots">
      <li v-for="n in slides" class="slider__dot" :id="n.index" :ref="n.index">
        <img :src="n.img" :alt="n.name" @click="moveToSlide(n.index)">
      </li>
    </ul>
    <div class="slider__body-list" ref="list">
      <div class="slider__body-track" ref="track" :style="{
      width: width.track + 'px',
      transform: 'translate(-' + transform + 'px)',
      transition: 'transform ' + settings.timing + ' ' + settings.speed + 'ms'
      }">
        <slot></slot>
      </div>
    </div>
    <button class="slider__button slider__button--prev" v-bind:disabled="disabled.prev" @click="prevSlide"></button>
    <button class="slider__button slider__button--next" v-bind:disabled="disabled.next" @click="nextSlide"></button>
  </div>

</template>

<script>
  export default {
    name: "SliderBody",
    props: {
      // Количество слайдов на странице
      items: {
        type: Number,
        default: 3
      },
      
      // Навигация
      nav: {
        type: Boolean,
        default: false
      },
      // Точечная навигация
      dots: {
        type: Boolean,
        default: false
      },
      // Перемотка
      loop: {
        type: Boolean,
        default: false
      },
      // Кнопка назад
      prevNav: {
        type: String,
        default: ''
      },
      // Кнопка веред
      nextNav: {
        type: String,
        default: ''
      },
      // Скорость перелистывания (мс)
      speed: {
        type: Number,
        default: 300
      },
      // Анимация перехода (linear, ease-in, ease-out, ease-in-out)
      timing: {
        type: String,
        default: 'ease'
      },
      // Количество смещаемых слайдов
      offset: {
        type: Number,
        default: 1
      },
      
    },
    
    data() {
      return {
        el: {
          track: null,
          slides: null,
        },
        width: {
          document: 0,
          container: 0,
          slide: 200,
          track: 0
        },
        disabled: {
          prev: true,
          next: false,
        },
        
        breakpoints: {
          mobile: 320,
          tablet: 768,
          desktop: 1024
        },
        
        margin: {
          mobile: 20,
          tablet: 288,
          desktop: 288
        },
        
        step: 0,
        
        itemActive: 0,
        // Общее количество реальных слайдов
        numItemAll: 0,
        
        // Количество
        numDot: 0,
        // Активный дот
        numDotActive: 0,
        // Сдвиг по оси Y
        transform: 0,
        // Свойства слайдера
        settings: {
          items: this.items,
          nav: this.nav,
          dots: this.dots,
          loop: this.loop,
          prevNav: this.prevNav,
          nextNav: this.nextNav,
          speed: this.speed,
          timing: this.timing,
          offset: this.offset,
          responsive: this.responsive
        },
        
        mouseDown: false,
        // Дистанция для свайпа
        swipeDistance: 50,
        // Дистанция перемещения курсора
        dragDistance: 0,
      }
    },
    
    mounted() {
      this.$nextTick(function () {
        // Объект контейнера
        this.el.list = this.$refs.list;
        
        // Объект трека
        this.el.track = this.$refs.track;
        
        // Объекты слайдов
        this.el.slides = this.el.track.children;
        
        this.el.dots = this.$refs.dots.children;
        
        /*this.dot = document.getElementById(this.itemActive);*/
        
        
        // Вычисление количества слайдов
        this.numItemAll = this.el.slides.length;
        
        this.setSlideWidth();
        
        this.addActiveClass();
        
        window.addEventListener('resize', this.setSlideWidth);
        
        if ('ontouchstart' in window) {
          this.el.track.addEventListener('touchstart', this.handleMouseDown)
          this.el.track.addEventListener('touchend', this.handleMouseUp)
          this.el.track.addEventListener('touchmove', this.handleMouseMove)
        } else {
          this.el.track.addEventListener('mousedown', this.handleMouseDown)
          this.el.track.addEventListener('mouseup', this.handleMouseUp)
          this.el.track.addEventListener('mousemove', this.handleMouseMove)
        }
      })
    },
    
    computed: {
      slides() {
        return this.$store.getters.SLIDER_LIST;
      }
    },
    
    methods: {
      setSlideWidth() {
        this.getWidthDocument();
        if ((this.width.document >= this.breakpoints.mobile) && (this.width.document < this.breakpoints.tablet)) {
          this.width.slide = 200;
          this.step = this.margin.mobile;
        }
        if ((this.width.document >= this.breakpoints.tablet) && (this.width.document < this.breakpoints.desktop)) {
          this.width.slide = 480;
          this.step = this.margin.tablet;
        }
        
        if (this.width.document >= this.breakpoints.desktop) {
          this.width.slide = 920;
          this.step = this.margin.desktop;
        }
      },
      
      getWidthDocument() {
        this.width.document = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
      },
      
      
      addActiveClass() {
        this.dot = document.getElementById(this.itemActive + 1);
        this.dot.classList.add('active');
      },
      
      removeActiveClass() {
        for (let i = 0; i < this.el.dots.length; i++) {
          this.el.dots[i].classList.remove('active')
        }
      },
      
      setSlideNext(n) {
        this.transform = n * (this.width.slide + this.step);
        this.itemActive += 1;
        this.removeActiveClass();
        this.addActiveClass()
      },
      
      setSlidePrev(n) {
        this.transform = n * (this.width.slide + this.step);
        this.itemActive -= 1;
        this.removeActiveClass();
        this.addActiveClass()
      },
      
      // Следующий слайдер
      nextSlide() {
        let move = this.itemActive + this.settings.offset;
        if (move <= 4) {
          this.setSlideNext(move);
          this.disabled.prev = false;
        } else {
          this.disabled.next = true;
        }
      },
      
      prevSlide() {
        let move = this.itemActive - this.settings.offset;
        if (move >= 0) {
          this.setSlidePrev(move);
          this.disabled.next = false;
        } else {
          this.disabled.prev = true;
        }
      },
      
      moveToSlide(i) {
        this.itemActive = i - 1;
        this.transform = (i - 1) * (this.width.slide + this.step);
        this.removeActiveClass();
        this.addActiveClass()
      },
      
      // Действия мыши
      handleMouseDown(e) {
        if (!e.touches) {
          e.preventDefault()
        }
        this.mouseDown = true;
        this.dragStartX = ('ontouchstart' in window) ? e.touches[0].clientX : e.clientX;
        this.dragStartY = ('ontouchstart' in window) ? e.touches[0].clientY : e.clientY;
      },
      handleMouseMove(e) {
        let positionX = ('ontouchstart' in window) ? e.touches[0].clientX : e.clientX;
        let positionY = ('ontouchstart' in window) ? e.touches[0].clientY : e.clientY;
        let dragDistanceX = Math.abs(positionX - this.dragStartX);
        let dragDistanceY = Math.abs(positionY - this.dragStartY);
        if (dragDistanceX > 3 * dragDistanceY) {
          this.dragDistance = positionX - this.dragStartX
          this.disableScroll()
        }
      },
      handleMouseUp() {
        this.mouseDown = false;
        this.enableScroll()
      },
      disableScroll() {
        document.ontouchmove = function (e) {
        }
      },
      enableScroll() {
        document.ontouchmove = function (e) {
          return true
        }
      }
    },
    
    watch: {
      dragDistance() {
        if (!this.mouseDown) {
          return
        }
        if (this.dragDistance > this.swipeDistance) {
          this.prevSlide();
          this.handleMouseUp()
        }
        if (this.dragDistance < -1 * this.swipeDistance) {
          this.nextSlide();
          this.handleMouseUp()
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .slider {
    
    &__body {
      padding-left: calc((100% - 200px) / 2); /*60px;*/
      box-sizing: border-box;
    }
    
    &__dots {
      display: none;
    }
    
    &__body-track {
      display: flex;
    }
    
    &__button {
      display: none;
    }
  }
  
  @media (min-width: 768px) {
    .slider {
      &__body {
        position: relative;
        padding-left: calc((100% - 480px) / 2);
      }
      
      &__dots {
        display: flex;
        justify-content: space-between;
        width: 480px;
      }
      
      &__dot img {
        width: 80px;
        height: 60px;
        opacity: 0.5;
      }
      
      &__button {
        display: block;
        position: relative;
        width: 50px;
        height: 20px;
        box-sizing: border-box;
        background-color: transparent;
        border: none;
      }
      
      &__button--prev {
        position: absolute;
        bottom: 0;
        left: calc((100% - 480px) / 2);
      }
      
      &__button--next {
        position: absolute;
        bottom: 0;
        left: calc((100% - 480px) / 2 + 430px);
      }
      
      &__button--prev::before {
        content: "";
        position: absolute;
        width: 40px;
        height: 1.5px;
        background-color: #BFBFBF;
        top: 9px;
        left: 1.5px;
      }
      
      &__button--next::before {
        content: "";
        position: absolute;
        width: 40px;
        height: 1.5px;
        background-color: #BFBFBF;
        top: 9px;
        right: 1.5px;
      }
      
      &__button--prev::after {
        content: "";
        position: absolute;
        width: 10.5px;
        height: 12px;
        background-image: url("../assets/arrow-small.svg");
        background-size: 10.5px 12px;
        top: 4px;
        left: 0;
        transform: rotate(180deg);
      }
      
      &__button--next::after {
        content: "";
        position: absolute;
        width: 10.5px;
        height: 12px;
        background-image: url("../assets/arrow-small.svg");
        background-size: 10.5px 12px;
        top: 4px;
        right: 0;
      }
      
    }
    
    .active img {
      opacity: 1;
    }
  }
  
  @media (min-width: 1024px) {
    .slider {
      &__body {
        padding-left: calc((100% - 920px) / 2);
      }
      
      &__dots {
        width: 760px;
      }
      
      &__dot img {
        width: 120px;
        height: 90px;
        
      }
      
      &__button--prev {
        position: absolute;
        bottom: -47px;
        left: calc((100% - 920px) / 2);
      }
      
      &__button--next {
        position: absolute;
        bottom: -47px;
        left: calc((100% - 920px) / 2 + 870px);
      }
    }
    
  }

</style>
