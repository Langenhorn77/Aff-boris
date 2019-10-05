import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sliderList: [
      {
        img: 'src//assets/image-1.jpg',
        index: 1,
        name: 'Осень в провинции. Чаепитие'
      },
      {
        img: 'src//assets/image-2.jpg',
        index: 2,
        name: 'Купчихи'
      },
      {
        img: 'src//assets/image-3.jpg',
        index: 3,
        name: 'Деревенский праздник'
      },
      {
        img: 'src//assets/image-4.jpg',
        index: 4,
        name: 'Масленница'
      },
      {
        img: 'src/assets/image-5.jpg',
        index: 5,
        name: 'Купчиха за чаем'
      },
    ]
  },

  getters: {
    SLIDER_LIST: state => {
      return state.sliderList
    },
  }

})
