<template>
  <main class="apartment-page">
    <SectionWithHeaderSpacer>
      <Container>
        <div v-if="apartment" class="apartment-page__content">
          <ApartmentsMainInfo :apartment="apartment" />
          <div class="apartment-page__additional-info">
            <ApartmentsOwner
              class="apartment-page__owner"
              :owner="apartment.owner"
            />
            <ApartmentsReviews :reviews="reviewsList" />
          </div>
        </div>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import Container from "../components/shared/Container.vue";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import ApartmentsOwner from "../components/apartment/AprtmentsOwner.vue";
import ApartmentsReviews from "../components/reviews";
import reviewsList from "../components/reviews/reviews.json";
import apartments from "../components/apartment/apartments";
import { getApartmentById } from "../services/apartments.service";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer.vue";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentsOwner,
    ApartmentsReviews,
    SectionWithHeaderSpacer,
  },
  data() {
    return {
      apartment: null,
    };
  },
  computed: {
    reviewsList() {
      return reviewsList;
    },
  },
  async created() {
    try {
      const { id } = this.$route.params;
      const { data } = await getApartmentById(id);

      this.apartment = data;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      this.$notify({ type: "error", text: message });
    } finally {
      if (!this.apartment) this.apartment = apartments.filter((apartment) => {
        return apartment.id === this.$route.params.id;
      })[0];
    }
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>