<template>
    <div class="tenor-gif-embed" :data-postid="postId" :data-share-method="shareMethod" :data-aspect-ratio="aspectRatio" :data-width="width">
      <a :href="gifLink">Paandi Thala GIF</a> from <a :href="searchLink">Paandi GIFs</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        postId: "18810497",
        shareMethod: "host",
        aspectRatio: "1.02236",
        width: "100%",
      };
    },
    computed: {
      gifLink() {
        return `https://tenor.com/view/paandi-thala-dhoni-ipl-troll-gif-${this.postId}`;
      },
      searchLink() {
        return "https://tenor.com/search/paandi-gifs";
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
  