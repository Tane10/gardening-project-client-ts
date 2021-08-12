<template>
  <div>
    <div id="canvas-container" style="padding: 20px" />
    <div>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" class="py-2">
            <v-btn-toggle
              v-model="buttonToggle"
              @change="selectedButton"
              ref="buttonToggle"
            >
              <v-btn id="paint-brush" name="paint-brush">
                <font-awesome-icon :icon="['fas', 'paint-brush']" />
              </v-btn>

              <v-btn id="square" name="square">
                <font-awesome-icon :icon="['fas', 'square']" />
              </v-btn>

              <v-btn id="circle" name="circle">
                <font-awesome-icon :icon="['fas', 'circle']" />
              </v-btn>

              <v-btn id="pen" name="pen">
                <font-awesome-icon :icon="['fas', 'pen-nib']" />
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class CanvasPresenter extends Vue {
  public buttonToggle = 0;
  public buttonArray = ["paint-brush", "square", "circle", "pen"];

  mounted() {
    this.$emit("canvas");
  }

  public selectedButton(): void {
    this.$emit("selectedButton", {
      selectedButton: this.buttonArray[this.buttonToggle],
    });
  }
}
</script>
<style scoped lang="scss"></style>
