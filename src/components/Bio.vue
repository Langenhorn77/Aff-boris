<template>
  <section class="biography" id="biography">
    <div class="biography__wrapper-top">
      <h2 class="biography__header">{{title}}</h2>
      <ul class="biography__list">
        <li class="biography__item" v-for="item in info">
          <span>{{item.year}}</span>
          <p>{{item.content}}</p>
        </li>
        <li class="biography__item" v-if="show">
          <span></span>
          <p class="biography__recieved">{{text}}</p>
        </li>
      </ul>
    </div>
  
    <div class="biography__wrapper-bottom">
      <read-more @arrShow="text = $event" @close="show = $event"></read-more>
      <social></social>
    </div>
  </section>
</template>

<script>
  import ReadMore from './ReadMore.vue'
  import Social from './Social.vue'
  
  export default {
    name: "Bio",
    data() {
      return {
        title: 'биография',
        text: '',
        show: false,
        info: [
          {
            year: '',
            content: 'Борис Кустодиев родился 7 марта 1878 года в Астрахани. Отца, преподавателя духовной семинарии, не стало, когда мальчику было чуть больше года. Мать осталась вдовой в 25 лет и содержала четверых детей.'
          },
          
          {
            year: '1887',
            content: 'Борис сначала учился в церковно- -приходской школе, потом в гимназии. Когда ему было девять лет, в город привезли выставку художников-передвижников. Мальчика настолько впечатлила живопись, что он твердо решил научиться рисовать так же искусно. Мать нашла деньги, чтобы Борис смог брать уроки у известного в Астрахани художника Павла Власова.'
          },
          
          {
            year: '1896',
            content: 'Окончив семинарию, в 1896 году Кустодиев отправился учиться в Москву, но в художественную школу его не приняли: Борису уже исполнилось 18 и он был слишком взрослым. Тогда Кустодиев поехал в Петербург, где подал документы в Высшее художественное училище при Академии художеств.'
          }
        ],
        
       
        
      }
    },
    components: {
      ReadMore: ReadMore,
      Social: Social
    },
    
    methods: {
    
    }
  }
</script>

<style scoped lang="scss">
  .biography {
    width: 320px;
    padding: 60px 20px 44px 20px;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
  
    &__list {
      margin-top: 25px;
    }
  
    &__item {
      margin-bottom: 20px;
    }
  
    &__item span {
      display: block;
      font-size: 20px;
      line-height: 40px;
      letter-spacing: 0.05em;
      color: #BFBFBF;
  
      margin-bottom: 5px;
    }
  
    &__item p {
      letter-spacing: 0.2px;
      line-height: 26px;
    }
    
  }
  
    @media (min-width: 768px) {
      .biography {
        width: 768px;
        
        &__wrapper-top {
          display: flex;
          justify-content: space-between;
        }
        
        &__list {
          width: 450px;
          margin-top: 0;
        }
  
        &__wrapper-bottom {
          display: flex;
          justify-content: space-between;
          flex-direction: row-reverse;
          height: 36px;
        }
      }
    }

  @media (min-width: 1024px) {
    .biography {
      width: 920px;
      padding: 101px 0 100px 0px;
      
      &__wrapper-top {
      justify-content: flex-start;
      }
  
      &__list {
        width: 601px;
        margin-left: 86px;
      }
      
      &__item {
        display: flex;
        margin-bottom: 22px;
      }
      
      &__item span {
        margin-right: 35px;
      }
  
      &__item p {
        width: 520px;
      }
  
      &__item:nth-child(1) p {
        margin-left: 48px;
      }
  
      &__recieved {
        margin-left: 48px;
      }
  
      &__wrapper-bottom {
        margin-top: 20px;
      }
    }
  }
  
</style>
