<template>
  <div>
    <h2>Torsos</h2>
    The torso is the central part of your robot that holds everything together.
    Choosing the right torso will help ensure your robot functions well with the
    parts you choose.
    <div v-for="(torso, idx) in torsos" :key="idx">
      <h4>{{ torso.title }}</h4>
      <div>{{ torso.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import parts from "../data/parts";

@Component
export default class RobotTorsos extends Vue {
  torsos = parts.torsos;
}
</script>
