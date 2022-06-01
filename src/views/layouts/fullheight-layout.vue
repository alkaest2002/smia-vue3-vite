<template>
  <div
    id="fullheight-layout"
    class="
      is-flex
      is-flex-direction-column
      is-justify-content-space-between
      is-align-items-center
      p-5
    "
  >
    <slot />
    <app-navigation />
  </div>
</template>

<script>
export default {
  name: "FullheightLayout",
};
</script>

<style lang="scss" scoped>
#fullheight-layout {
  min-height: 100%;
}
</style>
