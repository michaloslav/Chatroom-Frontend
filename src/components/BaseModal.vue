<template lang="pug">
  div.modalRoot
    .content
      slot
    .blur(v-if="!dontBlur" @click="close")
</template>

<script>
export default {
  name: "BaseModal",
  props: {
    dontBlur: Boolean,
  },
  methods: {
    close(){
      this.$emit("close")
    }
  },
}
</script>

<style lang="sass">
  .modalRoot
    position: absolute
    top: 0
    left: 0
    height: 100vh
    width: 100vw
    display: flex
    justify-content: center
    align-items: center
    

    .content
      z-index: 100
      position: absolute
      display: block
      background-color: white
      min-height: 40vh
      min-width: 50vw
      border-radius: 2rem
      padding: 3rem
    
    .blur
      height: 100vh
      width: 100vw
      z-index: 99
      background-color: #000000aa;
</style>
