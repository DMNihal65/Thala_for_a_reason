<template>
    <div class="tenor-gif-embed" :data-postid="postId" :data-share-method="shareMethod" :data-aspect-ratio="aspectRatio" :data-width="width">
      <a :href="gifLink">Arpit Bala GIF</a> from <a :href="searchLink">Arpit Bala GIFs</a>
    </div>
    <div>12334</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        postId: "18207868398790320263",
        shareMethod: "host",
        aspectRatio: "1.30435",
        width: "100%",
      };
    },
    computed: {
      gifLink() {
        return `https://tenor.com/view/arpit-bala-gif-${this.postId}`;
      },
      searchLink() {
        return "https://tenor.com/search/arpit+bala-gifs";
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
  