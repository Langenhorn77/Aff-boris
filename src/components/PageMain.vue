<template>
  <div>
    <bio></bio>
    <slider-wrapper></slider-wrapper>
    <art></art>
    <museum></museum>
  </div>
</template>

<script>
  
  import Bio from './Bio.vue'
  import Main2 from './Main.vue'
  import Art from './Art.vue'
  import Museum from './Museum.vue'
  import SliderWrapper from './SliderWrapper.vue'
  
  export default {
    name: "PageMain",
    components: {
      Bio: Bio,
      Main2: Main2,
      Art: Art,
      Museum: Museum,
      SliderWrapper: SliderWrapper
    }
  }
</script>

<style scoped>

</style>
