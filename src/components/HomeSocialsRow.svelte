<script>
  import Button from "./Button.svelte";
  import "bootstrap-icons/font/bootstrap-icons.css";
</script>

<div class="row">
  <section>
    <h1>Stay up to date with the latest news and competitions!</h1>
    <h3>Follow our facebook and instagram below.</h3>
    <div class="icons">
      <a href="https://facebook.com/SpeedcubingNZ" aria-label="facebook">
        <i class="bi bi-facebook icon"></i></a
      >
      <a href="https://instagram.com/SpeedcubingNZ" aria-label="instagram">
        <i class="bi bi-instagram icon"></i></a
      >
    </div>
  </section>
</div>

<style>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    padding: 32px 24px;
    border-top: 1px solid #aaaaaa;
    background-color: #dce3e9;
    color: black;
  }

  .icons {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .icon {
    display: block;
    font-size: 32px;
    color: #3777ff;
  }

  .row {
    background-color: red;
  }

  @media screen and (max-width: 991px) {
    section {
      padding: 24px 8px;
    }
  }
</style>
