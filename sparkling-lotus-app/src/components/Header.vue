<template>
  <section>
    <header class="fade-in">
      <img src="http://www.meditateinlondon.org/wp-content/uploads/2014/12/sparkling-lotus-800x800.jp" alt="">
    </header>
      <nav class="fade-in">
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/about"> About </RouterLink>
    <main>
      <RouterView></RouterView>
    </main>
  </section>
</template>

<script>
export default {
};
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
}
nav a {
  font-weight: bold;
  line-height: 1.6em;
  letter-spacing: .05em;
  padding: 30px;
  padding-left:20;
  color: black;
  text-decoration: none;
  font-size: 20px;
  /* display: block; */
}
img {
  width: 125px;
  height: 75px;
  z-index:99;
}
.fade-in {
    opacity: 1;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: 1s;
}
@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>