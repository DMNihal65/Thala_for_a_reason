<template>
    <div class="tenor-gif-embed" :data-postid="postId" :data-share-method="shareMethod" :data-aspect-ratio="aspectRatio" :data-width="width">
      <a :href="gifLink">Ye Jaha Dikh Jata Superman Dikh Jata GIF</a> from <a :href="searchLink">Ye Jaha Dikh Jata GIFs</a>
    </div>
    <div>12334</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        postId: "5166045224443607177",
        shareMethod: "host",
        aspectRatio: "0.801205",
        width: "100%",
      };
    },
    computed: {
      gifLink() {
        return `https://tenor.com/view/ye-jaha-dikh-jata-superman-dikh-jata-arpit-bala-dikh-jata-le-jaao-yaha-se-gif-${this.postId}`;
      },
      searchLink() {
        return "https://tenor.com/search/ye+jaha+dikh+jata-gifs";
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
  