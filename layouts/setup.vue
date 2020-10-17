<template>
  <div class="setup-container">
    <Nuxt />
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.setup-container {
  /* background: #ff9966;
  background: -webkit-linear-gradient(to top, #ff5e62, #ff9966);
  background: linear-gradient(to top, #ff5e62, #ff9966); */

  /* background: #36D1DC;
  background: -webkit-linear-gradient(to top, #5B86E5, #36D1DC);
  background: linear-gradient(to top, #5B86E5, #36D1DC); */

  background: #00d2ff;
  background: -webkit-linear-gradient(to bottom, #3a7bd5, #00d2ff);
  background: linear-gradient(to bottom, #3a7bd5, #00d2ff);
}

.links {
  display: flex;
  flex-direction: column;
  max-width: 250px;
  margin: auto;
  margin-top: 64px;
}

v-btn {
  width: 100%;
}

.v-text-field {
  border-radius: 16px !important;
}
</style>
