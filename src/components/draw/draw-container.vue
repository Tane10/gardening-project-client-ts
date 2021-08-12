<template>
  <canvas-container />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CanvasContainer from "./canvas/canvas-container.vue";

@Component({ components: { CanvasContainer } })
export default class DrawContainer extends Vue {}
</script>
<style scoped lang="scss"></style>
