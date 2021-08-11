<template>
  <div class="login">
    <login-presenter @login="login" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import LoginPresenter from "./login-presenter.vue";

@Component({ components: { LoginPresenter } })
export default class LoginContiner extends Vue {
  public vaild = true;

  public login(payload: { username: string; password: string }): void {
    console.log(payload);
  }

}
</script>
