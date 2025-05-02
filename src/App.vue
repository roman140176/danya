<template>
  <div class="danya">
    <div class="danya__img">
      <img src="/media/photos/6.jpg" alt="">
    </div>
    <h2>Привет, я Даня!</h2>
  </div>
    <div class="flex gap-4 mb-4 buttons">
      <button class="button" @click="open('photos')">📸 Мои фотки</button>
      <button class="button" @click="open('videos')">🎥 Мои видосы</button>
    </div>
  <main class="p-4">
    <!-- Кнопки всегда на месте -->

    <!-- Галерея с условным отображением -->
    <transition name="fade-scale">
      <div v-if="type === 'photos'" class="relative">
        <button class="absolute top-0 right-0 p-2 text-xl close" @click="close">✖</button>
        <div class="grid grid-cols-2 gap-3">
        <div class="photo-box" v-for="(img, index) in photos">
            <img              
              :key="index"
              :src="img"
              class="rounded cursor-pointer"
              @click="openPhotoViewer(index)"
            />
        </div>
        </div>
      </div>
    </transition>

    <transition name="fade-scale">
      <div v-if="type === 'videos'" class="relative">
        <button class="absolute top-0 right-0 p-2 text-xl close" @click="close">✖</button>
        <div class="grid grid-cols-2 gap-3">
        <div class="photo-box" v-for="(video, index) in videos">
          <video
            
            :key="index"
            controls
            :src="video"
            class="w-full rounded"
          />
        </div>
        </div>
      </div>
    </transition>

    <VueEasyLightbox
      :visible="lightboxVisible"
      :imgs="photos"
      :index="lightboxIndex"
      @hide="lightboxVisible = false"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

const type = ref<'photos' | 'videos' | null>(null)
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)

const photos = [
  'media/photos/1.jpg',
   'media/photos/2.jpg', 
   'media/photos/3.jpg',
   'media/photos/4.jpg',
   'media/photos/5.jpg',
   'media/photos/6.jpg',
   'media/photos/7.jpg',
   'media/photos/8.jpg',
   'media/photos/9.jpg',
  
]
const videos = [
  'media/videos/1.mp4', 
  'media/videos/2.mp4',
  'media/videos/3.mp4',
  'media/videos/4.mp4',
  
]

function open(contentType: 'photos' | 'videos') {
  type.value = contentType
}

function close() {
  type.value = null
}

function openPhotoViewer(index: number) {
  lightboxIndex.value = index
  lightboxVisible.value = true
}
</script>
