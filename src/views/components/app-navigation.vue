<template>
  <div id="navigation" class="is-flex is-flex-wrap-wrap">
    <router-link class="navigation-link" :to="{ name: 'route-home' }">
      <img src="@/assets/images/home.svg" alt="home" />
      <span>Home</span>
    </router-link>
    <router-link class="navigation-link" :to="{ name: 'route-reservations' }">
      <img src="@/assets/images/reservations.svg" alt="prenotazioni" />
      <span>Prenotazioni</span>
    </router-link>
    <router-link class="navigation-link" :to="{ name: 'route-certificates' }">
      <img src="@/assets/images/certificates.svg" alt="certificati" />
      <span>Certificati</span>
    </router-link>
    <router-link class="navigation-link" :to="{ name: 'route-therapy' }">
      <img src="@/assets/images/therapies.svg" alt="terapie" />
      <span>Terapie</span>
    </router-link>
    <router-link class="navigation-link" :to="{ name: 'route-about' }">
      <img src="@/assets/images/about.svg" alt="about" />
      <span>About</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AppNavigation",
};
</script>

<style lang="scss" scoped>
.navigation-link {
  margin-right: 15px;
  margin-bottom: 5px;

  span {
    position: relative;
    top: -3px;
  }

  img {
    margin-right: 3px;
  }

  &:hover {
    text-decoration: none;
  }
}
</style>
