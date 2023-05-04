<template>
  <ContainerComponent>
    <div class="apartments-list">
      <ApartmentsItem
        v-for="{ id, descr, rating, imgUrl, price } in items"
        :key="id"
        :descr="descr"
        :rating="rating"
        :imgSrc="imgUrl"
        :price="price"
        class="apartments-list__item"
      />
    </div>
    <!-- <slot name="title"></slot>
    <div class="apartments-list">
      <template v-for="apartment in items">
        <slot name="apartment" v-bind:apartment="apartment"></slot>
      </template>
    </div> -->
  </ContainerComponent>
</template>

<script>
import ContainerComponent from "../shared/Container.vue";
import ApartmentsItem from "./ApartmentsItem.vue";

export default {
  name: "ApartmentsList",
  components: {
    ApartmentsItem,
    ContainerComponent,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;

  &__item {
    margin-bottom: 30px;
  }
}
</style>
