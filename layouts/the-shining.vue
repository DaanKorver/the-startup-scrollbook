<template>
  <main>
    <div class="background"></div>
    <Nuxt />
  </main>
</template>

<style scoped>
main {
  overflow: hidden;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--ts-yellow);
  z-index: -1;
  background-image: url("~assets/the-shining/shining-bg.svg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
