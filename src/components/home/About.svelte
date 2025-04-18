<script>
  import Button from "../Button.svelte";
</script>

<section>
  <div class="container">
    <h1>SPEEDCUBING NEW ZEALAND</h1>
    <h4>
      Speedcubing New Zealand is a not-for-profit, incorporated society run
      entirely by volunteers.<br /><br />We support the growth of the
      speedcubing community in New Zealand by organising events, providing
      resources, and fostering a positive environment for cubers of all skill
      levels.
    </h4>
    <Button text="ABOUT US" link="/"></Button>
  </div>
</section>

<style>
  section {
    background-color: var(--colorBlack2);
    color: var(--colorWhite);
  }
  .container {
    margin: 0 auto;
    text-align: center;
    padding: 32px;
  }
</style>
