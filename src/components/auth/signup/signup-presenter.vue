<template>
  <v-form class="signupForm" @submit.prevent="signup">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            id="fullname"
            ref="fullname"
            v-model="userDetails.fullname"
            type="text"
            name="fullname"
            placeholder="fullname"
            required
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            id="username"
            ref="username"
            type="text"
            v-model="userDetails.username"
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
            v-model="userDetails.password"
            placeholder="password"
            required
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            id="email"
            ref="email"
            type="email"
            v-model="userDetails.email"
            placeholder="email"
            required
            hide-details
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-autocomplete
            id="userType"
            ref="userType"
            auto-select-first
            clearable
            dense
            v-model="userType"
            :items="userTypes"
          ></v-autocomplete>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-btn type="submit" color="success" class="mr-4"> submit </v-btn>
        </v-col>

        <v-col cols="12" md="4">
          <v-btn color="warning" class="mr-4" @click="this.clear">
            Clear
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IUser } from "../../../model";

@Component({})
export default class SignupPresenter extends Vue {
  public userTypes = ["user", "admin", "demo"];
  public userType = "";
  public userDetails: IUser = {
    username: "",
    password: "",
    email: "",
    type: "",
  };

  private signup(): void {
    // this.userDetails.type = this.userType;
    this.$emit("signup", this.userDetails);
  }

  private clear(): void {
    this.userDetails = { username: "", password: "", email: "", type: "" };
    this.userType = "";
  }
}
</script>
<style scoped lang="scss"></style>
