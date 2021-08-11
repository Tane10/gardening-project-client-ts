<template>
  <draw-presenter />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DrawPresenter from "./draw-presenter.vue";

@Component({ components: { DrawPresenter } })
export default class DrawContainer extends Vue {}
</script>
<style scoped lang="scss"></style>
