<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <div class="texts center">
      <h1 class="texts__title"></h1>
      <img class="logo" src="../assets/logo-aromapan.png" alt="">
    </div>
  </header>
  <section class="buttons">
    <router-link class="buttons__btn buttons__btn--login" to="/login">Login</router-link>

    <router-link class="buttons__btn buttons__btn--register" to="/register">Register</router-link>
  </section>
</template>

<style scoped>
header {
  width: 100%;
  height: 750px;
  background-image: url(../assets/hero.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
  clip-path: polygon(100% 0, 100% 70%, 50% 100%, 0 70%, 0 0);
  margin-bottom: 50px;
}

.texts {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.texts__title {
  font-size: 3.5rem;
}

.logo {
  filter: brightness(0) invert(1);
  width: 350px;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons {
  display: flex;
  justify-content: space-evenly;
  position: relative;
  position: relative;
}

.buttons__btn {
  text-decoration: none;
  padding: 1.3em 3em;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  background-color: #282828;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  left: 0;
  top: 0;
  margin-top: -250px;
}

.buttons__btn--login:hover {
  background-color: #FFECC6;
  color: #3F1702;
  box-shadow: 0px 15px 20px rgba(41, 207, 141, 0.4);
  transform: translateY(-7px);
}

.buttons__btn--register:hover {
  background-color: #FFECC6;
  color: #3F1702;
  box-shadow: 0px 15px 20px rgba(41, 207, 141, 0.4);
  transform: translateY(-10px);
}

.buttons__btn:active {
  transform: translateY(-1px);
}
</style>
