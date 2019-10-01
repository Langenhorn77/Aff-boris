<template>
  <section class="museum" id="museum">
    <h2 class="museum__header">{{title}}</h2>
    <div class="museum__map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31978.35561444765!2d30.31527388131096!3d59.93799573079852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310ec0116b85%3A0xedb58eeb763b5455!2z0KDRg9GB0YHQutC40Lkg0LzRg9C30LXQuQ!5e0!3m2!1sru!2sua!4v1569682855930!5m2!1sru!2sua"  allowfullscreen=""></iframe>
    </div>
    <ul class="museum__list">
      <li class="museum__item" v-for="item in info">
        <h3 class="museum__item-header"><a href="#">{{item.name}}</a></h3>
        <div class="museum__item-adress">
          <p>{{item.adress.city}}</p>
          <p>{{item.adress.street}}</p>
          <p>{{item.adress.phone}}</p>
        </div>
      </li>
    </ul>
  </section>

</template>

<script>
  export default {
    name: "Museum",
    data() {
      return {
        title: 'музеи',
        info: [
          {
            name: 'Русский музей',
            adress: {
              city: '191186, Санкт-Петербург,',
              street: 'Инженерная ул., 4,',
              phone: '+7 (812) 595-42-40'
            }
          },
          {
            name: 'Третьяковская галерея',
            adress: {
              city: '119017, Москва,',
              street: 'Лаврушинский переулок,10',
              phone: '+7 (495) 957-07-27'
            }
          },
          {
            name: 'Мультимедиа Арт Музей',
            adress: {
              city: '105064, Москва,',
              street: 'Гороховский переулок, 7',
              phone: '+7 (495) 632–16–81'
            }
          }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
  .museum {
    width: 100%;
    padding-top: 60px;
    padding-bottom: 42px;
    
    &__header {
      text-align: center;
      width: 280px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 40px;
    }
    
    &__map {
      width: 100%;
      height: 514px;
      background-image: url("../assets/map.jpg");
      background-repeat: no-repeat;
      background-position: top center;
    }
    
    &__map iframe {
      width: 100%;
      height: 514px;
      margin-left: auto;
      margin-right: auto;
      border: none;
    }
    
    &__list {
      width: 320px;
      margin-left: auto;
      margin-right: auto;
    }
    
    &__item {
      box-sizing: border-box;
      padding-top: 25px;
      height: 188px;
      margin-bottom: 15px;
    }
    
    &__item:not(:last-of-type) {
      border-bottom: 1px solid #E5E5E5;
    }
    
    &__item-header {
      font-size: 16px;
      line-height: 26px;
      position: relative;
      margin: 0;
      margin-bottom: 23px;
      margin-left: 53px;
    }
  
    &__item-header a {
      text-decoration: none;
      color: #202020;
    }
  
    &__item-header::before {
      content: "";
      position: absolute;
      left: -28px;
      top: 5px;
      width: 13.25px;
      height: 18px;
      background-image: url("../assets/point.svg");
      background-size: 100% 100%;
    }
    
    &__item-adress {
      font-size: 14px;
      line-height: 24px;
      color: #BFBFBF;
      margin-left: 24px;
      width: 180px;
    }
  }

  @media (min-width: 768px) {
    .museum {
      &__list {
        width: 660px;
      }
      
      &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }

  @media (min-width: 1024px) {
    .museum {
      padding-top: 40px;
      padding-bottom: 74px;
  
      &__header {
        margin-bottom: 43px;
      }
  
      &__list {
        display: flex;
        width: 920px;
        justify-content: space-between;
        margin-top: 40px;
      }
  
      &__item {
        width: 280px;
        height: 157px;
        align-items: flex-start;
        padding-top: 0;
      }
  
      &__item:not(:last-of-type) {
        border-bottom: none;
        border-right: 1px solid #E5E5E5;
      }
  
      &__item-header {
        margin-left: 28px;
      }
  
      &__item-adress {
        margin-left: 0;
      }
    }
  }
</style>
