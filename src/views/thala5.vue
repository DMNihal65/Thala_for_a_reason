<template>
    <div class="tenor-gif-embed" :data-postid="postId" :data-share-method="shareMethod" :data-aspect-ratio="aspectRatio" :data-width="width">
      <a :href="gifLink">Thirumbi Vandhutomnu Sollu.Gif GIF</a> from <a :href="searchLink">Thirumbi Vandhutomnu Sollu GIFs</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        postId: "15527404918480385441",
        shareMethod: "host",
        aspectRatio: "1.25",
        width: "100%",
      };
    },
    computed: {
      gifLink() {
        return `https://tenor.com/view/thirumbi-vandhutomnu-sollu-trending-gif-cricket-sports-gif-${this.postId}`;
      },
      searchLink() {
        return "https://tenor.com/search/thirumbi+vandhutomnu+sollu-gifs";
      },
    },
    mounted() {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://tenor.com/embed.js";
      document.head.appendChild(script);
    },
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here if needed */
  </style>
  