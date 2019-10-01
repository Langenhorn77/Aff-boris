<template>
  <div class="about">
    <p class="about__date">{{date}}</p>
    <h2 class="about__name">{{name}}</h2>
    <p class="about__text">{{text}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        date: '1878-1927',
        name: 'борис кустодиев',
        text: 'Художник, запечатлевший на своих ярких и жизнерадостных полотнах сцены русских\n' +
          '      будней и праздников. Обладал редким безграничным талантом, которому, в первую очередь,\n' +
          '      было присуще особое чувство и восприятие родной природы.'
      }
    },
    name: "About"
  }
</script>

<style scoped lang="scss">
  .about {
    color: #F5F5F5;
    
    &__date {
      font-family: "Yeseva One", sans-serif;
      font-weight: 400;
      font-size: 20px;
      line-height: 18px;
    }
    
    &__name {
      line-height: 44px;
      margin-top: 18px;
    }
    
    &__text {
      font-size: 16px;
      line-height: 29px;
      margin-top: 19px;
      margin-bottom: 60px;
    }
  }

  @media (min-width: 768px) {
    .about {
      &__text {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 1024px) {
    .about {
      width: 100%;
      
      box-sizing: border-box;
      /*position: relative;*/
      
      &__date {
        width: 320px;
        font-size: 64px;
        line-height: 91.49%;
        transform: rotate(270deg);
        position: absolute;
        /*top: 113px;
        right: 73.5%;*/
        top: 360px;
        left: 28.5%;
      }
  
      &__name {
        width: 56%;
        font-size: 80px;
        line-height: 80px;
        margin-left: 19%;
      }
  
      &__text {
        width: 57%;
        margin-top: 30px;
        margin-left: 19%;
      }
    }
  }
  

</style>
