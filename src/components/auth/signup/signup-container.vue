<template>
  <div class="signup">
    <signup-presenter @signup="signup" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SignupPresenter from "./signup-presenter.vue";
import { AuthService } from "../../../services/auth.service";
import { IUser } from "../../../model";

@Component({ components: { SignupPresenter } })
export default class SignupContiner extends Vue {
  public vaild = true;
  private authService = new AuthService();

  public signup(payload: IUser): void {
    console.log(payload);
    this.authService.sign(payload);
  }
}
</script>
