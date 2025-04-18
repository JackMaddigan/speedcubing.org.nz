<script>
  import Button from "../Button.svelte";
</script>

<section>
  <div class="container">
    <h1>SUBSCRIBE</h1>
    <h4>
      Sign up with your email address to receive competition announcements and
      updates about SNZ!
    </h4>
    <div class="signup">
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email Address" />
      </form>
      <Button text="SIGN UP" link="/"></Button>
    </div>
  </div>
</section>

<style>
  .container {
    margin: 0 auto;
    text-align: center;
    padding: 32px;
  }
  .signup {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 32px;
    padding: 8px;
  }
  input {
    border: none;
    border-bottom: 1px solid var(--colorGrey2);
    background: none;
    padding: 8px;
    color: var(--colorGrey2);
    width: 130px;
  }
  form {
    display: flex;
    gap: 32px;
  }
  input:focus {
    outline: none;
    box-shadow: none;
  }
  section {
    background-color: var(--colorBlack2);
  }
  @media screen and (max-width: 768px) {
    form,
    .signup {
      flex-direction: column;
    }
  }
</style>
