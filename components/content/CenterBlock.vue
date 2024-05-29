<template>
<section class="sincity-center-block">
  <ContentSlot :use="$slots.default" />
</section>
</template>

<style scoped lang="ts">
css({
'.sincity-center-block': {
  textAlign: 'center',
  paddingBottom: '128px'
},
})
</style>