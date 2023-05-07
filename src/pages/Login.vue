<template>
    <AuthSection>
      <LoginForm />
    </AuthSection>
</template>

<script>
import LoginForm from "../components/auth/LoginForm.vue";
import AuthSection from "../components/auth/AuthSection.vue";

export default {
  name: "LoginPage",
  components: {
    LoginForm,
    AuthSection,
  },
};
</script>