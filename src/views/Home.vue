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
  
		<!-- Success messages -->
		<div v-if="thalaForAReason !== null" :class="{ 'text-white': thalaForAReason, 'text-white': thalaForAReason === false }" class="mt-4 font-bold text-lg">
		  {{ thalaForAReason ? successMessage : 'Moye Moyeeeeee' }}
		</div>
  
		<!-- Heart symbol and additional information -->
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
  
		<img
		  v-if="imageSource === ''"
		  src="./thi.png"
		  alt="Think"
		  class="absolute -top-10 left-96  w-50 h-50 transform scaleX(-1)"
		/>
	  </div>
  
	  <img
		v-if="imageSource !== ''"
		:src="imageSource"
		alt="GIF"
		class="absolute top-0 left-0 w-full h-full object-cover z-0"
	  />
  
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
  
  const getRandomGIF = (folder, prefix, count) => {
	const randomIndex = Math.floor(Math.random() * count) + 1;
	return `${folder}/${prefix}${randomIndex}.gif`;
  };
  
  const getRandomAudio = (folder, prefix, count) => {
	const randomIndex = Math.floor(Math.random() * count) + 1;
	return `${folder}/${prefix}.mp3`;
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
  
	const gifFolder = thalaForAReason.value ? './' : './';
	const audioFolder = thalaForAReason.value ? './' : './';
	const gifPrefix = thalaForAReason.value ? 'thala' : 'moye';
	const audioPrefix = thalaForAReason.value ? 'thala' : 'moye';
  
	const randomGIF = getRandomGIF(gifFolder, gifPrefix, 7);
	const randomAudio = getRandomAudio(audioFolder, audioPrefix, 1);
  
	imageSource.value = (await import(randomGIF)).default;
	audioSource.value = (await import(randomAudio)).default;
  
	await audioElement.value.load();
	playAudio();
	getSuccessMessage();
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
  