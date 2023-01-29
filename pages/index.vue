<template>
  <div class="min-h-screen">
    <header>
      <nav class="bg-gray-800">
        <div class="container mx-auto flex items-center justify-between py-4">
          <a href="#" class="text-white font-medium text-2xl">Ross Shaw</a>
          <div class="flex items-center">
            <a href="#about" class="text-white mr-6">About</a>
            <a href="#projects" class="text-white mr-6">Projects</a>
            <a href="#contact" class="text-white">Contact</a>
          </div>
        </div>
      </nav>
    </header>
    <main class="px-6">
      <section class="my-12">
        <h2 class="text-2xl font-medium mb-6">My work</h2>
        <div class="grid grid-cols-3 gap-4">
          <div class="project-card hover:bg-gray-200">
            <img src="../static/lorem.png" alt="project name">
            <h3 class="text-xl font-medium">Project Name</h3>
            <p class="text-sm font-light">A short description of the project</p>
          </div>
          <div class="project-card hover:bg-gray-200">
            <img src="../static/lorem.png" alt="project name">
            <h3 class="text-xl font-medium">Project Name</h3>
            <p class="text-sm font-light">A short description of the project</p>
          </div>
          <div class="project-card hover:bg-gray-200">
            <img src="../static/lorem.png" alt="project name">
            <h3 class="text-xl font-medium">Project Name</h3>
            <p class="text-sm font-light">A short description of the project</p>
          </div>
        </div>
      </section>
    </main>
    <footer class="pin-b bg-white p-6">
      <p class="text-center">Copyright © {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<style>
  .project-card {
    position: relative;
  }
  
  body {
    background: linear-gradient(#49bbf3, #3a63e0);
  }
  
  .project-card img {
    transition: transform 0.3s ease;
  }

  .project-card:hover img {
    transform: scale(1.1);
  }

  .project-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom right, #3498db, #8e44ad);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .project-card:hover::before {
    opacity: 0.8;
  }
</style>

