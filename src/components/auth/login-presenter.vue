<template>
  <v-form class="loginForm" @submit.prevent="login">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            id="username"
            ref="username"
            v-model="username"
            type="text"
            name="username"
            placeholder="username"
            required
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            id="password"
            ref="password"
            type="password"
            v-model="password"
            placeholder="password"
            required
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-btn type="submit" color="success" class="mr-4"> submit </v-btn>
        </v-col>

        <v-col cols="12" md="4">
          <v-btn color="warning" class="mr-4" @click="this.clear"> Clear </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class LoginPresenter extends Vue {
  private username = "";
  private password = "";

  private login(): void {
    this.$emit("login", { username: this.username, password: this.password });
  }

  private clear(): void {
      this.username = "";
      this.password = "";
  }
}
</script>
<style scoped lang="scss"></style>
