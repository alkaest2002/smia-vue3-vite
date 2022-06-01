<template>
  <div id="hero">
    <router-link id="hero-link" :to="{ name: 'route-home' }">
      <p id="hero-title" :style="heroStyle">SMIA</p>
      <p
        class="mt-0"
        :class="{ 'has-text-weight-bold': isBold }"
        :style="heroSubStyle"
      >
        <span>studio medico izzo-arduino</span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AppHero",
}
</script>

<script setup>
import { computed } from "vue";

  // props
  const props = defineProps({
    size: {
      type: Number,
      default: 6,
    },

    isBold: {
      type: Boolean,
      default: false,
    },
  });

  const heroStyle = computed(() => {
    return {
      "font-size": `${props.size}rem`,
      "line-height": `${props.size}rem`,
    };
  });

  const heroSubStyle = computed(() => {
    return {
      "font-size": `${props.size / 3}rem`,
      "line-height": `${props.size / 3}rem`,
    };
  });

</script>

<style lang="scss" scoped>
#hero {
  #hero-link {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  #hero-title {
    font-family: "adam";
    font-weight: bold;
    margin-bottom: 0;
  }
}
</style>
