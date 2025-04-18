<script>
  import CompTable from "./CompTable.svelte";
  import { loadCompetitions } from "$lib/load_competitions";
  let { comps } = $props();
  let data = loadCompetitions();
</script>

{#await data}
  <div class="loading bgCol">Loading Competitions...</div>
{:then { current, upcoming, recent }}
  <section class="compSection bgCol">
    <section class="current">
      {#if current.length}
        <h1>CURRENT COMPETITIONS</h1>
        <CompTable tableType="blue" comps={current}></CompTable>
      {/if}
    </section>
    <section class="upcoming">
      <h1>UPCOMING COMPETITIONS</h1>
      <CompTable tableType="green" comps={upcoming}></CompTable>
    </section>
    <section class="recent">
      <h1>RECENT COMPETITIONS</h1>
      <CompTable tableType="red" comps={recent}></CompTable>
    </section>
    <h4>
      To see all past competitions, click <a
        class="blueLink"
        href="https://www.worldcubeassociation.org/competitions?region=NZ&state=past"
        target="_blank">here</a
      >.
    </h4>
  </section>
{/await}

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
