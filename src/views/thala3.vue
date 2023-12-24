<template>
    <div class="tenor-gif-embed" :data-postid="postId" :data-share-method="shareMethod" :data-aspect-ratio="aspectRatio" :data-width="width">
      <a :href="gifLink">Vintage Mahi.Gif GIF</a> from <a :href="searchLink">Vintage Mahi GIFs</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        postId: "5479376778438026686",
        shareMethod: "host",
        aspectRatio: "1.04046",
        width: "100%",
      };
    },
    computed: {
      gifLink() {
        return `https://tenor.com/view/vintage-mahi-gif-cricket-sports-dhoni-gif-${this.postId}`;
      },
      searchLink() {
        return "https://tenor.com/search/vintage+mahi-gifs";
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
  