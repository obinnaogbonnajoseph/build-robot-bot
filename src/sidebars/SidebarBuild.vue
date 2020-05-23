<template>
  <div class="sidebar">
    Build Sidebar
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class SidebarBuild extends Vue {}
</script>

<style scoped>
.sidebar {
  font-size: 50px;
  transform: rotate(90deg);
  color: green;
}
</style>
