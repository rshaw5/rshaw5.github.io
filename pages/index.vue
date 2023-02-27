<template>
  <div class="container mx-auto">
    <Header />
    <main class="px-6">
      <section class="my-12">
        <h1 class="text-2xl font-medium mb-6">Hi there!</h1>
        <p>I'm Ross, a lead developer at <a href="https://www.leasecake.com">Leasecake</a> with a focus on software team leadership, full-stack web development, and accounting services.</p>
        <p>Most recently, we launched a tool to generate <a href="https://leasecake.com/asc-842-what-is-it-and-what-exactly-is-changing/">ASC 842</a> accounting reports.</p>
        <p>I'm always looking to learn and grow as a developer, so please feel free to connect with me and share your thoughts on my work.</p>
      </section>
      <section class="my-12">
        <h2 class="text-xl font-bold mb-2">What I'm Working On</h2>
        <ul class="list-disc pl-8">
          <li>Standing up this website</li>
          <li>Investigating the uses and ethical concerns of <a href="https://huggingface.co/spaces/stabilityai/stable-diffusion">Stable Diffusion</a>, <a href="https://openai.com/blog/chatgpt/">ChatGPT</a>, and others</li>
          <li>Developing my <a href="https://www.buildingasecondbrain.com/">Second Brain</a> in <a href="https://obsidian.md/">Obsidian.md</a></li>
        </ul>
      </section>
      <section class="my-12">
        <h2 class="text-xl font-bold mb-2">What I'm Interested In</h2>
        <ul class="list-disc pl-8">
          <li>Democratizing access to research, training, and execution of AI systems</li>
          <li>Personal productivity with a focus on the GTD methodology</li>
          <li>Organizational structure, including Holacracy</li>
          <li>Personal knowledge management using Zettelkasten</li>
          <li>3D printing using FDM and SLA</li>
        </ul>
      </section>
      <section class="my-12">
        <h2 class="text-xl font-bold mb-2">Get in Touch</h2>
        <p class="text-gray-700">The best way to reach me for now is via iCloud's email forwarding at <a href="mailto:judges.earls0i@icloud.com" class="text-blue-600 hover:underline">judges.earls0i@icloud.com</a>. I hope to expand the methods of contact in the future.</p>
      </section>
      <section class="my-12">
        <h2 class="text-xl font-bold mb-2">Fun Fact</h2>
        <p class="text-gray-700">You can check me out in the movie <a href="https://www.imdb.com/name/nm5822028/" class="text-blue-600 hover:underline">"Spare Parts"</a>!</p>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

  export default {
    name: 'IndexPage',
    components: {
      Header,
      Footer,
    }
  }
</script>
