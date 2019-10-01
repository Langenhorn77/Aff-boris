<template>
  <div>
    <bio></bio>
    <!--<main2></main2>-->
    <slider2></slider2>
    <art></art>
    <museum></museum>
  </div>
</template>

<script>
  
  import Bio from './Bio.vue'
  import Main2 from './Main.vue'
  import Slider2 from './Slider2.vue'
  import Art from './Art.vue'
  import Museum from './Museum.vue'
  
  export default {
    name: "PageMain",
    components: {
      Bio: Bio,
      Main2: Main2,
      Slider2: Slider2,
      Art: Art,
      Museum: Museum
    }
  }
</script>

<style scoped>

</style>
