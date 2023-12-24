<template>
    <div class="tenor-gif-embed" :data-postid="postId" :data-share-method="shareMethod" :data-aspect-ratio="aspectRatio" :data-width="width">
      <a :href="gifLink">Bhai Kya Kar Raha Hai Tu Ashneer Grover GIF</a> from <a :href="searchLink">Bhai Kya Kar Raha Hai Tu GIFs</a>
    </div>
    <div>12334</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        postId: "25024532",
        shareMethod: "host",
        aspectRatio: "1",
        width: "100%",
      };
    },
    computed: {
      gifLink() {
        return `https://tenor.com/view/bhai-kya-kar-raha-hai-tu-ashneer-grover-shark-tank-gif-${this.postId}`;
      },
      searchLink() {
        return "https://tenor.com/search/bhai+kya+kar+raha+hai+tu-gifs";
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
  