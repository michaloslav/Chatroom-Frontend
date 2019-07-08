<template lang="pug">
  .MessageDisplay
    span.username {{message.username}}:
    div
      .message {{message.text}}
</template>

<script>
export default {
  name: "MessageDisplay",
  props: {
    message: Object
  }
}
</script>

<style lang="sass">
  .MessageDisplay
    margin: .5rem

    &:not(:last-child)
      margin-bottom: 1.5rem

    .username
      font-size: .85rem

    .message
      min-height: 1.5rem
      min-width: 5rem
      max-width: 85vw
      display: inline-block
      padding: .5rem
      border-radius: 1rem
      margin-top: .25rem

    &.fromUser
      float: right
      text-align: right

      .message
        background-color: #64c1ff

    &:not(.fromUser) .message
      background-color: #e6e6e6
</style>
