<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import parts from "../data/parts";

/* eslint-disable @typescript-eslint/no-explicit-any */
@Component
export default class PartInfo extends Vue {
  @Prop({
    type: String
  })
  partype!: string;

  @Prop({
    type: [Number, String],
    validator: value => {
      return Number.isInteger(Number(value));
    }
  })
  id!: number | string;

  get part() {
    return parts[this.partype].find((part: any) => part.id === +this.id);
  }

  set part(part: any) {
    this.part = part;
  }
}
</script>
