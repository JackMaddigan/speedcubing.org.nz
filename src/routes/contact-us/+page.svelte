<svelte:head>
  <title>Contact Us | Speedcubing New Zealand</title>
</svelte:head>

<script>
  import ContentColumn from "$lib/components/ContentColumn.svelte";
  import PageTitle from "$lib/components/PageTitle.svelte";

  import Form from "./Form.svelte";
  import ContactInfo from "./ContactInfo.svelte";

</script>

<ContentColumn>
    <h2>CONTACT US</h2>
    <ContactInfo></ContactInfo>
    <Form></Form>
</ContentColumn>