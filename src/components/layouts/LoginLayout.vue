<template>
  <RouterView />
  <Alert />
  <Footer />
</template>

<script>
import Footer from "@/components/common/Footer";
import Alert from "@/components/common/Alert";

export default {
  name: "LoginLayout",
  components: { Footer, Alert }
};
</script>

<style scoped></style>
