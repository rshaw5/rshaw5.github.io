<template>
  <div class="container mx-auto">
    <Header />
    <main class="px-6">
      <section class="my-12">
        <h2 class="text-2xl font-medium mb-6">My Work</h2>
        <div class="grid grid-cols-3 gap-4">
          <div class="project-card rounded-lg p-5" @click="showModal = true">
            <h3 class="text-xl font-medium">AI as Mental Prosthesis</h3>
            <p class="text-sm font-light">AI and the Neurodivergent Mind</p>
          </div>
          <div class="project-card rounded-lg p-5" @click="showModal = true">
            <h3 class="text-xl font-medium">Ethics in AI</h3>
            <p class="text-sm font-light">Finding meaning in absurdity</p>
          </div>
          <div class="project-card rounded-lg p-5" @click="showModal = true">
            <h3 class="text-xl font-medium">My Digital Garden</h3>
            <p class="text-sm font-light">Practicing the art of public learning</p>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <p class="text-center">Copyright © {{ new Date().getFullYear() }}</p>
    </footer>
  </div>

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
      showModal: false
    }
  }
}
</script>

<style>
.project-card {
  @apply hover:bg-gradient-to-br from-maya-blue via-white to-amaranth-pink
}
</style>
