<template>
  <section>
    <div>
      <h2>Our Mission Statement</h2>
      <blockquote class="mission"> Sparkling Lotus is an inspirational website for queers. We are here to {{ verb }}
        the repressive {{ noun }} of heteronorms. We hope to bring {{ adjective }} thoughts into your lives that 
        {{ verb }} you while {{ adverb }} uplifting you . 
        LIVE, LOVE, LAUGH, SPARKLE!
      </blockquote>
    </div>
    <div class="fade-in">
    <figure>
      <blockquote>
          <span> You're only given a little spark of madness. You mustn't lose it. </span>
      </blockquote> 
      <figcaption>
          <span class="span">-- Robin Williams </span>
      </figcaption>
  </figure>
    </div>
  </section>
</template>

<script>
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:500%7CSorts+Mill+Goudy');
* {
  font-family: 'Sorts Mill Goudy', serif;
}
h2 {
  margin-top: 100px;
  text-align:center;
   font-size: 4vh;
   text-decoration: underline;
}
.mission {
   display: block;
    text-align: center;
    padding: 2vw;
    font-size: 4vh;
    width: 75%;
    margin: 0 auto 0 auto;
}
figure {
    display: block;
    text-align: center;
    padding: 2vw;
    font-size: 4vh;
    width: 50%;
    margin: 0 auto 0 auto;
}
blockquote {
    margin: 1vh auto 1vh auto;
    letter-spacing: .03em;
}
.span {
    color: rgb(254, 243, 132);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(254, 243, 132);
    letter-spacing: .03em;
    font-style: italic;
}
</style>
