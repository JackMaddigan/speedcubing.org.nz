<script>
  let { img, title, text, link } = $props();
</script>

<section>
    <a href={link}>
      <img alt="cuber" src={img} />
      <div class="textBoxes">
        <h3>{title}</h3>
        <h4>{text}</h4>
      </div>
    </a>
</section>

<style>
  section {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  h3,
  h4 {
    margin: auto;
    text-align: center;
    padding: 8px;
    background-color: var(--colorBlack3);
    color: white;
  }
  .textBoxes {
    position: absolute;
    transform: translateX(-50%);
    transform: translateY(-120%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px 0px;
    width: 100%;
    margin: 4px;
  }
  img {
    object-fit: cover;
    object-position: center;
    display: block;
    transition: transform 0.3s ease;
    width: 100%;
    height: 100%;
  }
  img:hover {
    transform: scale(1.1);
  }
</style>
