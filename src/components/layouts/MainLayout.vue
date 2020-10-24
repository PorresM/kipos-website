<template>
  <RouterView id="main-container" />
  <Alert />
  <Footer />
</template>

<script>
import Footer from "@/components/common/Footer";
import Alert from "@/components/common/Alert";

export default {
  name: "MainLayout",
  components: { Footer, Alert }
};
</script>

<style scoped></style>
