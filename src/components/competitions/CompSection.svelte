<script>
  import CompTable from "./CompTable.svelte";
  import { loadCompetitions } from "$lib/load_competitions";
  import { onMount } from "svelte";

  let data;

  onMount(async () => {
    data = await loadCompetitions();
  })
</script>

{#if !data}
  <div class="loading bgCol">Loading Competitions...</div>
{:else}
  <section class="compSection bgCol">
    <section class="current">
      {#if data.current.length}
        <h1>CURRENT COMPETITIONS</h1>
        <CompTable tableType="blue" comps={data.current}></CompTable>
      {/if}
    </section>
    <section class="upcoming">
      <h1>UPCOMING COMPETITIONS</h1>
      <CompTable tableType="green" comps={data.upcoming}></CompTable>
    </section>
    <section class="recent">
      <h1>RECENT COMPETITIONS</h1>
      <CompTable tableType="red" comps={data.recent}></CompTable>
    </section>
    <h4>
      To see all past competitions, click <a
        class="blueLink"
        href="https://www.worldcubeassociation.org/competitions?region=NZ&state=past"
        target="_blank">here</a
      >.
    </h4>
  </section>
{/if}

<style>
  .loading {
    height: 500px;
    padding-top: 32px;
    text-align: center;
  }

  .upcoming,
  .current,
  .recent {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    max-width: 800px;
    margin: auto;
    padding: 16px;
  }
</style>
