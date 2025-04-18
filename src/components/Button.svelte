<script>
  let { text, link } = $props();
</script>

<button aria-label="button" href={link}>
  {text}
</button>

<style>
  button {
    font-weight: 300;
    font-size: 1rem;
    border: 1px solid var(--colorGrey1);
    border-radius: 5px;
    background: none;
    color: var(--colorGrey1);
    padding: 10px 24px;
    cursor: pointer;
    font-size: 16px;
    min-width: 130px;
  }

  button:hover {
    transition: color 0.3s ease;
    transition: background-color 0.3s ease;
    background-color: var(--colorGrey1);
    color: var(--colorBlack3);
  }
</style>
