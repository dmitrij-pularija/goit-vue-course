<template>
  <div id="app">
    <!-- <AppNotifications /> -->
    <div class="content">
      <AppHeader />
      <router-view></router-view>
    <!-- <ApartmentsFilterForm @submit="filter"/>  
<ApartmentsList :items="filtredApartments">
  <template v-slot:apartment="{ apartment }">
  <ApartmentsItem
        :key="apartment.id"
        :descr="apartment.descr"
        :rating="apartment.rating"
        :imgSrc="apartment.imgUrl"
        :price="apartment.price"
      />
    </template>   
</ApartmentsList> -->  

    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/header";
import AppFooter from "./components/Footer.vue";
// import ApartmentsFilterForm  from "./components/apartment/ApartmentsFilterForm.vue";
// import ApartmentsList  from "./components/apartment/ApartmentsList.vue";
// import ApartmentsItem  from "./components/apartment/ApartmentsItem.vue";
// import apartments  from "./components/apartment/apartments";

// import AppNotifications from "./components/Notifications.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    // ApartmentsFilterForm,
    // ApartmentsList,
    // ApartmentsItem,
    // AppNotifications,
  },
//   data() {
//     return {
//       text: '',
//       apartments,
//       filters: {
//         city: '',
//         price: 0
//       }
//     }
//   },
//   computed: {
//     filtredApartments() {
//       return this.filterByCityName(this.filterByPrice(apartments));
//     }
//   },
//   methods: {
//       filter({ city, price }) {
//         this.filters.city = city
//         this.filters.price = price
//       },
//       filterByCityName(apartments) {
//   if (!this.filters.city) return apartments

// return apartments.filter( apartment => {
//   return apartment.location.city === this.filters.city
// })
// },
// filterByPrice(apartments) {
//   if (!this.filters.price) return apartments
// return apartments.filter( apartment => {
//   return apartment.location.price >= this.filters.price
// })
// },
//   },
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
