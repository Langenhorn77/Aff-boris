<template>
  <div>
    <button class="read" @click="saveText">
      <span v-if="!show" @click="show = !show">читать больше</span>
      <span v-else @click="show = !show">скрыть</span>
    </button>
  </div>
 
  
</template>

<script>
  const axios = require('axios');
  
  export default {
    name: "ReadMore",
    data () {
      return {
        show: false,
        str: [],
        errors: [],
        s2: '',
      }
      
    },
    
    created () {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.str = response.data
        })
        .catch(e => {
          this.errors.push(e)
        });
    },
    
    methods: {
      saveText () {
        this.s2 = this.str[1].body;
        this.$emit('arrShow', this.s2);
        this.$emit ('close', this.show)
      },
      
    }
    
  }
</script>

<style scoped lang="scss">
  
  .read {
    font-size: 14px;
    color: #202020;
    letter-spacing: 0.6px;
    background-color: transparent;
    border: none;
    text-align: left;
    
    padding: 0;
    padding-bottom: 20px;
    position: relative;
  
    width: 121px;
    margin-top: 2px;
    
    &::before {
    content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 121px;
      height: 16px;
      background-image: url("../assets/arrow.svg");
      z-index: 2;
    }
    
    & span {
      position: relative;
      display: block;
      height: 34px;
      z-index: 3;
    }
  }

  @media (min-width: 1024px) {
    .read {
      margin-top: 10px;
      margin-right: 20px;
      height: 34px;
    }
  
    &::before {
    
    }
  }

</style>
