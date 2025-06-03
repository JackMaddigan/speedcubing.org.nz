<script>
  import "bootstrap-icons/font/bootstrap-icons.css";
  import { onMount } from "svelte";
  let slides;
  let index = 0;
  const imgSrcs = [
    "gallery/gallery1.jpg",
    "gallery/gallery2.jpg",
    "gallery/gallery3.jpg",
    "gallery/gallery5.webp",
    "gallery/gallery6.webp",
    "gallery/gallery7.webp",
    "gallery/gallery8.webp",
  ];
  let interval = setInterval(next, 5000);

  function next() {
    index = (index + 1) % imgSrcs.length;
    resetInterval();
  }

  function prev() {
    index = (index - 1 + imgSrcs.length) % imgSrcs.length;
    resetInterval();
  }

  function resetInterval(){
    clearInterval(interval);
    interval = setInterval(next, 5000);
  }

  $: offset = `translateX(-${index * 100}%)`;
  let carousel;

  onMount(() => {
    if(window.innerWidth <= 768){ carousel.style.height = `calc(${window.innerHeight}px - 280px)`}
    else { carousel.style.height = `calc(${window.innerHeight}px - 180px)`; }
  })
</script>

<div class="carousel" bind:this={carousel}>
  <div class="slides" style:transform={offset}>
    {#each imgSrcs as src}
      <img src={src} alt="">
    {/each}
  </div>

  <button on:click={prev} class="left" aria-label="left"
    ><i class="bi bi-chevron-left"></i></button
  >
  <button on:click={next} class="right" aria-label="right"
    ><i class="bi bi-chevron-right"></i></button
  >
</div>

<style>
  .carousel {
    overflow: hidden;
    position: relative;
    background-color: var(--colorBlack2);
    touch-action: manipulation;
    height: calc(100vh - 180px); /* will get overridden by onmount, but as default this is good */
  }

  .slides{
    display: flex;
    flex-direction: row;
    transition: transform 1s ease;
    height: 100%;
    width: 100%;
  }
 
  img {
    object-fit: cover;
    object-position: center;
    min-width: 100%;
    height: 100%;
  }

  button {
    background: none;
    border: none;
    color: var(--colorWhite);
    position: absolute;
    top: 50%;
    font-size: 32px;
    cursor: pointer;
  }

  .left {
    left: 2%;
  }
  .right {
    right: 2%;
  }

  @media screen and (max-width: 768px){
    .carousel {
      height: calc(100vh - 280px); /* will get overridden by onmount but as default this is good */
    }
  }
</style>
