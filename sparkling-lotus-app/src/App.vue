<template>
  <div id="app">
    <Header/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
    components: {
        Header,
        Footer
    }
};
</script>

<style>
body {
  margin: 0;
}
</style>