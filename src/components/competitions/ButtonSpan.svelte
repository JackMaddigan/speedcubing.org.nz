<script>
  let { compId, liveResults, groups } = $props();
</script>

<span>
  {#if liveResults}
    <a
      class="compActionLink"
      href="https://live.worldcubeassociation.org/link/competitions/{compId}"
      target="_blank"
    >
      LIVE RESULTS
    </a>
  {/if}
  {#if groups}
    <a
      class="compActionLink"
      href="https://www.competitiongroups.com/competitions/{compId}"
      target="_blank"
    >
      GROUPS
    </a>
  {/if}
</span>

<style>
  span {
    display: flex;
    gap: 16px;
  }
  .compActionLink {
    background-color: var(--colorBlue2);
    color: var(--colorWhite);
    padding: 8px;
    border-radius: 5px;
    text-decoration: none;
    font-size: 16px;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    span {
      flex-direction: column;
      gap: 8px;
    }
  }
</style>
