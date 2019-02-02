<template>
  <section>
    <carousel>
    <slide>
      <img src="https://i2.wp.com/navutudreams.com/wp-content/uploads/sites/401/2016/10/Fullmoon.jpg?resize=800%2C675&ssl=1" width="100%" height="100%">
    </slide>
    <slide>
      <img src="https://barefeetpoweryoga.com/wp-content/uploads/2015/10/1000x724xthailand_silhouette-young-woman-practicing-yoga-on-the-beach-at-sunset.jpg.pagespeed.ic_.spsqes8ayyx3b3yvllxf.jpg" width="100%" height="100%">
    </slide>
    <slide>
      <img src="http://thelotustree.com/wp-content/uploads/2016/02/yoga-gay-resort-south-france.jpg" width="100%" height="100%">
    </slide>
    <slide>
      <img src="https://i.pinimg.com/736x/d9/54/5b/d9545ba783b456f9bfe655b72bc3e4ee--yoga-master-partner-yoga.jpg" width="100%" height="100%">
    </slide>
     <slide>
      <img src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjtg5HHyJngAhW6CTQIHWzPAooQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F132082201546593791%2F&psig=AOvVaw3VpV_8qHTT7SwPdAi29ws3&ust=1549077232469120" width="100%" height="100%">
    </slide>
</carousel>
    <div class="fade-in">
    <figure>
      <blockquote>
          <span> Being gay is like glitter, it never goes away. </span>
      </blockquote> 
      <figcaption>
          <span class="span">-- Lady Gaga, </span>
      </figcaption>
  </figure>
    </div>
    <Clients/>
    <Testimony/>
  </section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        Carousel,
        Slide
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:500%7CSorts+Mill+Goudy');
* {
 font-family: 'Sorts Mill Goudy', serif;
}
img {
  margin-top: 50px;
}
figure {
    display: block;
    text-align: center;
    padding: 2vw;
    font-size: 4vh;
    width: 50%;
    margin: 0 auto 0 auto;
    letter-spacing: .03em;
}
blockquote {
    margin: 1vh auto 1vh auto;
}
div {
  margin-top: 40px;
}
.span {
  color: yellow;
  -webkit-text-stroke-width: .4px;
  -webkit-text-stroke-color:rgb(184, 182, 182);
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
