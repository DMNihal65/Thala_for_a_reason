<template>
	<div class="min-h-screen flex items-center justify-center relative">
	  <div :class="{ 'text-white': imageSource !== '' }" class="text-center relative z-10">
		<h1 :class="{ 'text-white': imageSource !== '' }" class="text-4xl font-bold mb-4">Thala For A Reason</h1>
		<h2 :class="{ 'text-white': imageSource !== '' }" class="text-lg text-yellow-500 mb-8">If you know, you know</h2>
  
		<div class="mb-4">
		  <label :class="{ 'text-white': imageSource !== '' }" for="input" class="block text-sm font-medium text-yellow-500">Enter Anything</label>
		  <input :class="{ 'text-black': imageSource === '', 'text-black': imageSource !== '' }" v-model="inputValue" id="input" name="input" type="text" placeholder="Know the reason" class="mt-1 p-2 border rounded-md w-60" />
		</div>
  
		<button @click="checkAndAlert" class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
		  Submit
		</button>
  
		<div v-if="thalaForAReason !== null" :class="{ 'text-white': thalaForAReason, 'text-white': thalaForAReason === false }" class="mt-4 font-bold text-lg">
		  {{ thalaForAReason ? successMessage : 'Moye Moyeeeeee' }}
		</div>
  
		<div class="mt-8 ml-10 flex items-center">
		  <span class="mr-2 text-white">❤️</span>
		  <span :class="{ 'text-white': imageSource !== '','text-black': imageSource == '' }" >DM NIHAL |</span>
  
		  <a class="mx-2" href="https://instagram.com/nihaldm_6565" target="_blank">
			<img width="30" height="30" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>
		  </a>
		  <a class="mx-2" href="https://twitter.com/zodiacvirus" target="_blank">
			<img width="30" height="30" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/>
		  </a>
		  <a class="mx-2" href="https://github.com/DMNihal65" target="_blank">
			<img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/github.png" alt="github"/>
		  </a>
		</div>
  
		<div v-if="imageSource === ''" :style="{ backgroundImage: `url(${backgroundImageSource})` }" class="absolute -top-10 left-96 w-50 h-50 transform scaleX(-1)" />
  
		<div data-ref="embedContainer" class="ml-2"></div>
		
	  </div>
  
	  <audio ref="audioElement">
		<source :src="audioSource" type="audio/mp3" />
	  </audio>
	</div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const inputValue = ref('');
  const thalaForAReason = ref(null);
  const imageSource = ref('');
  const audioElement = ref(null);
  const audioSource = ref('');
  const successMessage = ref('');
  const backgroundImageSource = ref(null);
  const selectedEmbedCode = ref('');
  
  const thalaEmbedCodes = [
	'<div class="tenor-gif-embed" data-postid="6108773100921201490" data-share-method="host" data-aspect-ratio="1.36364" data-width="100%"><a href="https://tenor.com/view/aditya-kumar-aaien-6th-class-gif-6108773100921201490">Aditya Kumar GIF</a>from <a href="https://tenor.com/search/aditya-gifs">Aditya GIFs</a></div>',
	// Add more Thala embed codes as needed
  ];
  
  const moyeEmbedCodes = [
	'<div class="tenor-gif-embed" data-postid="14054000742208274238" data-share-method="host" data-aspect-ratio="0.886699" data-width="100%"><a href="https://tenor.com/view/shahid-kapoor-jab-we-met-alina-reaction-hindi-gif-14054000742208274238">Shahid Kapoor.Gif GIF</a>from <a href="https://tenor.com/search/shahid+kapoor-gifs">Shahid Kapoor GIFs</a></div>',
	// Add more Moye embed codes as needed
  ];
  
  const getRandomIndex = (count) => Math.floor(Math.random() * count);
  
  const selectRandomEmbed = (embedCodes) => {
	const randomIndex = getRandomIndex(embedCodes.length);
	return embedCodes[randomIndex];
  };
  
  const loadBackgroundComponent = () => {
	const componentFolder = thalaForAReason.value ? 'thala' : 'moye';
	const embedCodes = thalaForAReason.value ? thalaEmbedCodes : moyeEmbedCodes;
	selectedEmbedCode.value = selectRandomEmbed(embedCodes);
  
	// Clear previous embed container content
	const embedContainer = document.querySelector('[data-ref="embedContainer"]');
	embedContainer.innerHTML = '';
  
	// Append the selected embed code
	embedContainer.innerHTML = selectedEmbedCode.value;
  
	// Append the script tag dynamically
	const scriptTag = document.createElement('script');
	scriptTag.type = 'text/javascript';
	scriptTag.async = true;
	scriptTag.src = 'https://tenor.com/embed.js';
  
	embedContainer.appendChild(scriptTag);
  
	// Clear the image source
	imageSource.value = '';
  };
  
  const checkAndAlert = async () => {
	const inputWithoutSpaces = inputValue.value.replace(/\s/g, '');
  
	if (/^[a-zA-Z]+$/.test(inputWithoutSpaces) && inputWithoutSpaces.length === 7) {
	  const sum = inputWithoutSpaces.toLowerCase().split('').reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0);
	  thalaForAReason.value = true;
	} else if (/^\d+$/.test(inputWithoutSpaces)) {
	  const sum = inputWithoutSpaces.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
	  thalaForAReason.value = sum === 7;
	} else if (inputWithoutSpaces.length === 7) {
	  thalaForAReason.value = true;
	} else {
	  thalaForAReason.value = false;
	}
  
	const gifFolder = thalaForAReason.value ? '/src/' : '/src/';
	const audioFolder = thalaForAReason.value ? '/src/' : '/src/';
	const gifPrefix = thalaForAReason.value ? 'thala' : 'moye';
	const audioPrefix = thalaForAReason.value ? 'thala' : 'moye';
  
	const randomGIF = getRandomGIF(gifFolder, gifPrefix, 7);
	const randomAudio = getRandomAudio(audioFolder, audioPrefix, 1);
  
	imageSource.value = (await import(randomGIF)).default;
	audioSource.value = (await import(randomAudio)).default;
  
	await audioElement.value.load();
	playAudio();
	getSuccessMessage();
  
	await loadBackgroundComponent();
  };
  
  const getRandomGIF = (folder, prefix, count) => {
	const randomIndex = getRandomIndex(count) + 1;
	return `${folder}/${prefix}${randomIndex}.gif`;
  };
  
  const getRandomAudio = (folder, prefix, count) => {
	const randomIndex = getRandomIndex(count) + 1;
	return `${folder}/${prefix}.mp3`;
  };
  
  const playAudio = () => {
	if (audioElement.value) {
	  audioElement.value.play();
	}
  };
  
  const getSuccessMessage = () => {
	const inputWithoutSpaces = inputValue.value.replace(/\s/g, '');
	if (/^[a-zA-Z]+$/.test(inputWithoutSpaces) && inputWithoutSpaces.length === 7) {
	  const sum = inputWithoutSpaces.toLowerCase().split('').reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0);
	  successMessage.value = `${inputWithoutSpaces.split('').join('+')} = ${7} || Thala for a Reason`;
	} else if (/^\d+$/.test(inputWithoutSpaces)) {
	  const sum = inputWithoutSpaces.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
	  successMessage.value = `${inputWithoutSpaces.split('').join('+')} = ${7} || Thala for a Reason`;
	} else {
	  successMessage.value = 'Moye Moyeeeeee';
	}
  };
  </script>
  