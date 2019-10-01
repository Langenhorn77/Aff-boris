<template>
  <button class="read">
    читать больше
  </button>
</template>

<script>
  export default {
    name: "ReadMore"
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
