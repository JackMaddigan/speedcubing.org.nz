<svelte:head>
  <title>Contact | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import "../../app.css";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  let title = "CONTACT";
  let imagePath = "/nzs_best/flags.webp";
</script>
<Header></Header>
<PageTitle {title} {imagePath}></PageTitle>
<Footer></Footer>