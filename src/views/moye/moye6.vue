<template>
    <div class="tenor-gif-embed" :data-postid="postId" :data-share-method="shareMethod" :data-aspect-ratio="aspectRatio" :data-width="width">
      <a :href="gifLink">Aditya Kumar GIF</a> from <a :href="searchLink">Aditya GIFs</a>
    </div>
    <div>12334</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        postId: "6108773100921201490",
        shareMethod: "host",
        aspectRatio: "1.36364",
        width: "100%",
      };
    },
    computed: {
      gifLink() {
        return `https://tenor.com/view/aditya-kumar-aaien-6th-class-gif-${this.postId}`;
      },
      searchLink() {
        return "https://tenor.com/search/aditya-gifs";
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
  