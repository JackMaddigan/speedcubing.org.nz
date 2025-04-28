<script>
  let { img, title, text, link } = $props();
</script>

<section>
    <a href={link}>
      <img alt="cuber" src={img} />
      <div class="textBoxes">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </a>
</section>

<style>
  section {
    position: relative;
    transition: transform 0.3s ease;
    width: 100%;
    height: 100%;
  }
  h5,
  p {
    margin: auto;
    text-align: center;
    padding: 8px;
    background-color: var(--colorBlack3);
    color: white;
  }
  h5 {
    font-weight: 400;
    width: 40%;
  }
  p {
    font-weight: 100;
    width: 50%;
  }
  .textBoxes {
    position: absolute;
    transform: translateX(-50%);
    transform: translateY(-120%);
    display: flex;
    flex-direction: column;
    gap: 20px 0px;
    width: 100%;
  }
  img {
    object-fit: cover;
    object-position: center;
    display: block;
    width: 100%;
    height: 100%;
  }
  section:hover {
    transform: scale(1.1);
  }
</style>
