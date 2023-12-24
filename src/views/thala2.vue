<template>
    <div class="tenor-gif-embed" :data-postid="postId" :data-share-method="shareMethod" :data-aspect-ratio="aspectRatio" :data-width="width">
      <a :href="gifLink">Dhoni Funny Dance Bole Jo Koyal Bago Me GIF</a> from <a :href="searchLink">Dhoni Funny Dance Bole Jo Koyal Bago Me GIFs</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        postId: "903768382747681435",
        shareMethod: "host",
        aspectRatio: "0.777108",
        width: "100%",
      };
    },
    computed: {
      gifLink() {
        return `https://tenor.com/view/dhoni-funny-dance-bole-jo-koyal-bago-me-gif-${this.postId}`;
      },
      searchLink() {
        return "https://tenor.com/search/dhoni+funny+dance+bole+jo+koyal+bago+me-gifs";
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
  