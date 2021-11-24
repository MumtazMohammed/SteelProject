<template>
  <div>
    <first-section />
    <second-section />
    <footer-secotion />
  </div>
</template>
<script>
import FirstSection from "../components-main/FirstSectionMain.vue";
import SecondSection from "../components-main/SecondSectionMain.vue";
import FooterSecotion from "../components-main/FooterSection.vue";
export default {
  name: "Home",
  components: {
    FirstSection,
    SecondSection,
    FooterSecotion,
  },
  data() {
    return {};
  },
};
</script>

<style scoped></style>
