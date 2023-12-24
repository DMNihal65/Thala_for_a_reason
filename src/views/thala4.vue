<template>
    <div class="tenor-gif-embed" :data-postid="postId" :data-share-method="shareMethod" :data-aspect-ratio="aspectRatio" :data-width="width">
      <a :href="gifLink">Dhoni Presents India Ka Apna Mantra​.Gif GIF</a> from <a :href="searchLink">Dhoni Presents India Ka Apna Mantra​ GIFs</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        postId: "8462828600339946640",
        shareMethod: "host",
        aspectRatio: "1.34328",
        width: "100%",
      };
    },
    computed: {
      gifLink() {
        return `https://tenor.com/view/dhoni-presents-india-ka-apna-mantra%E2%80%8B-msd-ms-dhoni-captain-cool-wink-gif-${this.postId}`;
      },
      searchLink() {
        return "https://tenor.com/search/dhoni+presents+india+ka+apna+mantra%E2%80%8B-gifs";
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
  