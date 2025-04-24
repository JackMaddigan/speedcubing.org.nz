<script>
  import "../../app.css";
  import Footer from "../../components/Footer.svelte";
  import Header from "../../components/Header.svelte";
  import PageTitle from "../../components/PageTitle.svelte";
  let imagePath = "/image_row/IMG_0885.webp";
  let title = "GETTING STARTED";

</script>
<Header></Header>
<PageTitle {title} {imagePath}>
  <h4>The Rubik's Cube has been puzzling millions of people for over 50 years! 
    Here, you can learn how to solve it, as well as a variety of other puzzles.
    <br /><br />
    You can also learn more about the sport of speedcubing, find resources on how to get faster, and more.
    <br /><br />
    Happy cubing!
  </h4>
</PageTitle>
<Footer></Footer>