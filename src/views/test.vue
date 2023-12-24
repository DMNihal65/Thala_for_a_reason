<template>
    <div>
      <!-- Render the selected embed link -->
      <div ref="embedContainer"></div>
  
      <!-- Button to trigger random selection -->
      <button @click="selectRandomEmbed">Random Embed</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        embedCodes: [
          '<div class="tenor-gif-embed" data-postid="6108773100921201490" data-share-method="host" data-aspect-ratio="1.36364" data-width="100%"><a href="https://tenor.com/view/aditya-kumar-aaien-6th-class-gif-6108773100921201490">Aditya Kumar GIF</a>from <a href="https://tenor.com/search/aditya-gifs">Aditya GIFs</a></div>',
          '<div class="tenor-gif-embed" data-postid="14054000742208274238" data-share-method="host" data-aspect-ratio="0.886699" data-width="100%"><a href="https://tenor.com/view/shahid-kapoor-jab-we-met-alina-reaction-hindi-gif-14054000742208274238">Shahid Kapoor.Gif GIF</a>from <a href="https://tenor.com/search/shahid+kapoor-gifs">Shahid Kapoor GIFs</a></div>',
        ],
        selectedEmbedCode: '',
      };
    },
    methods: {
      selectRandomEmbed() {
        // Generate a random index to pick a random embed code
        const randomIndex = Math.floor(Math.random() * this.embedCodes.length);
  
        // Set the selected embed code
        this.selectedEmbedCode = this.embedCodes[randomIndex];
  
        // Clear previous script tags
        const embedContainer = this.$refs.embedContainer;
        embedContainer.innerHTML = '';
  
        // Append the HTML content
        embedContainer.innerHTML = this.selectedEmbedCode;
  
        // Append the script tag dynamically
        const scriptTag = document.createElement('script');
        scriptTag.type = 'text/javascript';
        scriptTag.async = true;
        scriptTag.src = 'https://tenor.com/embed.js';
  
        embedContainer.appendChild(scriptTag);
      },
    },
    mounted() {
      // Initial random embed selection on component mount
      this.selectRandomEmbed();
    },
  };
  </script>
  