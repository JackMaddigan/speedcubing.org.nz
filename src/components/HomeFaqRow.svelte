<script>
  import Button from "./Button.svelte";
</script>

<section>
  <h1>Got questions?</h1>
  <h3>
    You can find lots of common questions and helpful answers on our FAQ page!
  </h3>
  <Button text="FAQ" link="/"></Button>
</section>

<style>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    padding: 32px 24px;
    background-color: #dce3e9;
    border-top: 1px solid #aaaaaa;
    color: black;
  }

  @media screen and (max-width: 991px) {
    section {
      padding: 24px 8px;
    }
  }
</style>
