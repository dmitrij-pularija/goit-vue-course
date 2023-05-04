<template>
  <div id="app">
<ApartmentsList :items="apartments"/>
  </div>
</template>

<script>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import apartments from "./components/apartment/apartments";

export default {
  name: "App",
  components: {
    ApartmentsList,
  },
  data() {
    return {
      apartments,
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}
</style>
