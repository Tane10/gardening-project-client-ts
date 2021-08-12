<template>
  <canvas-presenter @canvas="canvasSetup" @selectedButton="buttonSelected" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CanvasPresenter from "./canvas-presenter.vue";
import Canvas from "./utils/canvas";

@Component({ components: { CanvasPresenter } })
export default class CanvasContainer extends Vue {
  public canvasSetup(): void {
    const canvas = new Canvas();
    canvas.setUp();
  }

  public buttonSelected(selectedButton: string): void {
    console.log(selectedButton)

  }
}
</script>
<style scoped lang="scss"></style>
