<template>
  <section class="art" id="art">
    <h2 class="art__header">творчество</h2>
    <h3 class="art__desc">{{desc}}</h3>
    <p class="art__text" v-for="text in texts">{{text}}</p>
    <div class="art__picture art__picture--1">
      <img src="../assets/picture-1.png"/>
    </div>
    <div class="art__picture art__picture--2">
      <picture>
        <source media="(min-width: 768px)" srcset="../assets/picture-2-desktop.png">
        <img src="../assets/picture-2.png"/>
      </picture>
    </div>
    <div class="art__wrapper">
      <read-more></read-more>
      <social></social>
    </div>
  </section>
</template>

<script>
  import ReadMore from './ReadMore.vue'
  import Social from './Social.vue'
  
  export default {
    name: "Art",
    data() {
      return {
        title: 'творчество',
        desc: 'Трудно найти другого живописца, настолько горячо\n' +
          '      влюбленного в провинциальную Россию: самобытную, яркую, удивляющую.',
        texts: [
          
          'Как и большинство работ автора, пейзажные полотна Кустодиева отличаются особой яркостью\n' +
          '      и насыщенностью цветовых\n' +
          '      планов. На картинах Кустодиева природа всегда представляет\n' +
          '      собой нечто гораздо большее, чем просто пейзажное изображение. ',
          
          'Особенности творчества художника Бориса Кустодиева: любил жанр портрета-картины, когда характер героя раскрывается\n' +
          '      через окружающий его пейзаж, интерьер или даже служащую фоном жанровую сцену; не жалел для бытовых\n' +
          '      сцен декоративности и зрелищности; с большой симпатией писал жизнь провинции.',
          
          'Даже в самые беспросветные времена полотна Кустодиева лучились здоровьем, радостью и любовью к жизни. Сахарные сугробы и плавящиеся под солнцем купола.\n' +
          '      Полыхающие арбузы и красавицы, не уступающие арбузам ни интенсивностью румянца, ни округлостью форм.'
        ],
      }
    },
    
    components: {
      ReadMore: ReadMore,
      Social: Social
    }
    
  }
</script>

<style scoped lang="scss">
  .art {
    display: flex;
    flex-direction: column;
    padding: 60px 20px 44px 20px;
    box-sizing: border-box;
    width: 320px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    border-bottom: 1px solid #E5E5E5;
    
    
    &__header {
      order: 1;
    }
    
    &::before {
      content: "";
      position: absolute;
      top: 343px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #E5E5E5;
    }
    
    &__desc {
      width: 230px;
      margin-top: 23px;
      margin-bottom: 83px;
      font-weight: 400;
      font-size: 20px;
      letter-spacing: 0.4px;
      line-height: 30px;
      color: #BFBFBF;
      order: 2;
    }
    
    & p:nth-child(3) {
      order: 3;
      margin-bottom: 40px;
    }
    
    &__text {
      letter-spacing: 0.3px;
      font-size: 16px;
      line-height: 26px;
      color: #4B4B4B;
    }
    
    &__picture--1 {
      order: 4;
      margin-bottom: 17px;
    }
    
    &__picture--2 {
      order: 5;
      margin-bottom: 37px;
    }
    
    & p:nth-child(4) {
      order: 6;
      margin-bottom: 20px;
    }
    
    & p:nth-child(5) {
      order: 7;
      margin-bottom: 22px;
    }
    
    &__wrapper {
      order: 8;
    }
    
  }
  
  @media (min-width: 768px) {
    .art {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 768px;
      
      &::before {
        top: 218px;
      }
      
      &__desc {
        margin: 0;
        width: 400px;
      }
      
      & p:nth-child(3) {
        margin-top: 80px;
        width: 350px;
      }
      
      &__picture--1 {
        margin-top: 85px;
      }
      
      &__picture--2 img {
        width: 728px;
        height: 530.4px;
      }
      
      & p:nth-child(4) {
        width: 330px;
      }
      
      & p:nth-child(5) {
        width: 330px;
      }
      
      &__wrapper {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        width: 520px;
      }
    }
  }

  @media (min-width: 1024px) {
    .art {
      width: 920px;
      justify-content: flex-start;
      padding: 100px 0 84px 0;
  
      &::before {
        top: 230px;
      }
  
      &__header {
        width: 257px;
        margin-right: 63px;
      }
  
      &__desc {
        width: 480px;
        letter-spacing: 0.25px;
      }
  
      & p:nth-child(3) {
        margin-top: 83px;
        margin-left: 80px;
        width: 426px;
      }
  
      &__picture--1 {
        margin-top: 82px;
        margin-left: 95px;
      }
  
      &__picture--1 img {
        width: 240px;
        height: 173px;
      }
  
      &__picture--2 {
        margin-top: 17px;
      }
  
      &__picture--2 img {
        width: 920px;
        height: 667px;
      }
  
      & p:nth-child(4) {
        width: 440px;
        margin-right: 40px;
      }
  
      & p:nth-child(5) {
        width: 435px;
      }
  
      &__wrapper {
        margin-top: 35px;
        width: 620px;
      }
    }
  }
</style>
