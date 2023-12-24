<template>
    <div class="tenor-gif-embed" :data-postid="postId" :data-share-method="shareMethod" :data-aspect-ratio="aspectRatio" :data-width="width">
      <a :href="gifLink">Ms Dhoni Dhoni GIF</a> from <a :href="searchLink">Ms Dhoni GIFs</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        postId: "20156626",
        shareMethod: "host",
        aspectRatio: "1.33333",
        width: "100%",
      };
    },
    computed: {
      gifLink() {
        return `https://tenor.com/view/ms-dhoni-dhoni-183ms-dhoni-jaipur-msd-mahi-gif-${this.postId}`;
      },
      searchLink() {
        return "https://tenor.com/search/ms+dhoni-gifs";
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
  