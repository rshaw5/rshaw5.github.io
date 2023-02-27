<template>
  <header class="bg-white py-6 border-b border-gray-200">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold"><a href="/" class="text-blue-600 hover:underline">Ross Shaw</a></h1>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="#" @click="showModal = true" class="text-gray-600 hover:text-gray-800 hover:underline">Blog</a></li>
          <li><a href="/projects" class="text-gray-600 hover:text-gray-800 hover:underline">Projects</a></li>
          <li><a href="#" @click="showModal = true" class="text-gray-600 hover:text-gray-800 hover:underline">Second Brain</a></li>
          <li><a href="#" @click="showModal = true" class="text-gray-600 hover:text-gray-800 hover:underline">About</a></li>
          <li><a href="#" @click="showModal = true" class="text-gray-600 hover:text-gray-800 hover:underline">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <Modal v-if="showModal == true" @close-modal="showModal = false"/>
</template>

<script>
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
    }
  },
}
</script>
