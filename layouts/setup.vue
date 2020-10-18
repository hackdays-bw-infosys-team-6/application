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

.title.setup-title {
  color: white;
}

.setup-container {
  background: #56ab2f;
  background: -webkit-linear-gradient(to top, #a8e063, #56ab2f);
  background: linear-gradient(to top, #a8e063, #56ab2f);
}

.links {
  display: flex;
  flex-direction: column;
  width: 270px;
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
