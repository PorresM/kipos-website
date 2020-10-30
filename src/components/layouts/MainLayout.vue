<template>
  <Menu />
  <RouterView id="main-container" />
  <Alert />
  <Footer />
</template>

<script>
import Footer from "@/components/common/Footer";
import Alert from "@/components/common/Alert";
import Menu from "@/components/common/Menu";

export default {
  name: "MainLayout",
  components: { Menu, Footer, Alert }
};
</script>

<style scoped></style>
