<template>
  <select
    v-on="listeners"
    v-bind="$attrs"
    v-model="selectedValue"
    class="custom-select"
  >
    <option v-for="item in formatedItems" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "CustomSelect",
  emits: ["update:input"],
  data() {
    return {
      selectedValue: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.selectedValue = newValue;
    },
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    listeners() {
      return {
        input: (event) => this.$emit("update:input", event.target.value),
      };
    },
    formatedItems() {
      return this.items.map((item) => {
        return typeof item === "object" ? item : { value: item, label: item };
      });
    },

    computedValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("update:input", newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.custom-select {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  border-radius: 5px;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
}
</style>