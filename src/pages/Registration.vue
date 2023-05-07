<template>
  <AuthSection>
    <RegistrationForm />
  </AuthSection>
</template>

<script>
import AuthSection from "../components/auth/AuthSection.vue";
import RegistrationForm from "../components/auth/RegistrationForm.vue";

export default {
  name: "RegistrationPage",
  components: {
    AuthSection,
    RegistrationForm,
  },
};
</script>