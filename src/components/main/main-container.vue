<template>
  <draw-container />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import DrawContainer from "../draw/draw-container.vue";

@Component({ components: { DrawContainer } })
export default class MainContainer extends Vue {}
</script>
<style scoped lang="scss"></style>
