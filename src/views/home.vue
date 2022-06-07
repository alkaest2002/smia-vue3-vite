<template>
  <fullheight-layout>
    <div id="home" class="is-flex is-align-items-center is-flex-grow-1">
      <div
        id="home-hero"
        class="is-flex is-flex-direction-column is-justify-content-center"
      >
        <app-hero />
        <div class="mt-0">
          <app-address />
        </div>
      </div>
    </div>
  </fullheight-layout>
</template>

<script>
export default {
  name: "SmiaHome",
};
</script>

<style lang="scss" scoped>
#home-hero {
  min-height: 500px;
}
</style>
