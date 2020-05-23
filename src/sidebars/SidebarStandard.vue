<template>
  <div class="sidebar">
    Standard Sidebar
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SidebarStandard extends Vue {}
</script>

<style scoped>
.sidebar {
  font-size: 50px;
  transform: rotate(90deg);
}
</style>
