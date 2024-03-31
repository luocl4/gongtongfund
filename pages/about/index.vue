<template>
  <div>
    <company-intro id="control_card"></company-intro>
  </div>
</template>

<script>
import CompanyIntro from "@/components/CompanyIntro.vue";
import "@/plugins/axios";

export default {
  components: {
    CompanyIntro,
  },
  data() {
    return {};
  },
};
</script>
