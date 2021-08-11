<template>
  <div class="login">
    <login-presenter @login="login" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LoginPresenter from "./login-presenter.vue";
import { AuthService } from "../../../services/auth.service";
import { Container, Inject } from "typedi";

@Component({ components: { LoginPresenter } })
export default class LoginContiner extends Vue {
  public vaild = true;
  private authService = new AuthService();

  public login(payload: { username: string; password: string }): void {
    this.authService.login(payload.username, payload.password);
  }
}
</script>
