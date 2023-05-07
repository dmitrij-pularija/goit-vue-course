<template>
  <div class="auth-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "AuthContainer",
};
</script>

<style lang="scss" scoped>
.auth-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 30px;
  max-width: 410px;
  width: 100%;
  background: #fff;
}
</style>