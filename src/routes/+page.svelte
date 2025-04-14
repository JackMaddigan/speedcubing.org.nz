<script>
  import "../app.css";
  import Carousel from "../components/Carousel.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import HomeAbout from "../components/HomeAbout.svelte";
</script>

<Header></Header>
<section class="top">
  <Carousel></Carousel>
  <HomeAbout></HomeAbout>
</section>
<Footer></Footer>

<style>
  .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0px 20px;
    background-color: #f5f5f5;
  }

  @media screen and (max-width: 991px) {
    .top {
      flex-direction: column;
      gap: 0;
    }
  }
</style>
