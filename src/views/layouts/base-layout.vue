<template>
  <div
    id="base-layout"
    class="
      is-flex
      is-flex-direction-column
      is-justify-content-center
      is-align-items-center
      p-5
    "
  >
    <div class="columns is-centered">
      <div
        class="
          column
          is-two-thirds-tablet
          is-two-thirds-desktop
          is-half-widescreen
          is-half-fullhd
        "
      >
        <slot />
      </div>
    </div>
    <div class="mt-3">
      <app-navigation />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
};
</script>

<style lang="scss" scoped>
#base-layout {
  min-height: 100%;

  .columns {
    width: 100%;
  }
}
</style>
