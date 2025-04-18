<script>
  let { src, title } = $props();
</script>

<iframe
  {title}
  width="100%"
  height="100%"
  {src}
  referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
  frameborder="0"
>
</iframe>

<style>
  iframe {
    border-radius: 16px;
  }
</style>
