<template>
  <figure>
      <blockquote>
          <span>"</span>
                {{quoteBlockText}}
          <span>"</span>
      </blockquote> 
      <figcaption>
          - {{quoteBlockName}}, <i>{{quoteBlockDescription}}</i>
      </figcaption>
  </figure>
</template>

<script>
export default {
    props: {
        quoteBlockName: String,
        quoteBlockDescription: String,
        quoteBlockText: String
    }
};
</script>

<style lang="postcss" scoped>
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
span {
    color: rgb(254, 243, 132);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: rgb(254, 243, 132);
    letter-spacing: .03em;
    font-style: italic;
}
</style>