<script>
  import ButtonSpan from "./ButtonSpan.svelte";
  import RegSpan from "./RegSpan.svelte";
  const eventOrder = [
    "333",
    "222",
    "444",
    "555",
    "666",
    "777",
    "333bf",
    "333fm",
    "333oh",
    "clock",
    "minx",
    "pyram",
    "skewb",
    "sq1",
    "444bf",
    "555bf",
    "333mbf",
  ];
  let { tableType, comps } = $props();
  
  function dateToShort(dateString) {
  // param: yyyy-mm-dd
  return new Date(dateString).toLocaleDateString("en-US", {
    timeZone: "Pacific/Auckland",
    day: "numeric",
    month: "short", // Abbreviated month (e.g., "Feb")
  });
}
</script>

<table>
  <thead class={tableType}>
    <tr>
      <th><p>Date</p></th>
      <th><p>Competition</p></th>
      <th><p>Location</p></th>
    </tr>
  </thead>
  <tbody>
    {#each comps as comp}
      <tr>
        <td>
          <span>
            <p class="grey">
              {dateToShort(comp.date.from)}{comp.date.from === comp.date.till
              ? ""
              : `-${dateToShort(comp.date.till)}`}
            </p>
          </span>
        </td>
        <td>
          <a
            href="https://www.worldcubeassociation.org/competitions/{comp.id}"
            target="blank"
            >
            <p class="underline grey">{comp.name}</p>
          </a>
          <span class="eventIconsRow">
            <p>
              {#each comp.events.sort((a, b) => eventOrder.indexOf(a) - eventOrder.indexOf(b)) as event}
                <span class="cubing-icon event-{event} grey"></span>
              {/each}
            </p>
          </span>
          {#if tableType === "green"}
            <RegSpan {comp}></RegSpan>
          {/if}
          {#if tableType === "blue"}
            <ButtonSpan compId={comp.id} groups={true} liveResults={true}
            ></ButtonSpan>
          {/if}
        </td>
        <td>
          <a
            href="https://www.google.com/maps?q={comp.venue.coordinates
              .latitude},{comp.venue.coordinates.longitude}"
          >
            <p class="venueName underline grey">{comp.venue.name}</p>
          </a>
          <br />
          <span><p class="cityName grey"><i>{comp.city}</i></p></span>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  a{
    display: inline;
  }
  table {
    border-collapse: collapse;
    table-layout: auto;
    max-width: 100%;
    min-width: 60%;
    width: auto;
    box-sizing: border-box;
    margin-bottom: 32px;
  }
  th {
    padding: 10px;
    text-align: left;
    border: 1px solid var(--colorBlack1);
    color: #fff;
  }
  td {
    padding: 10px;
    text-align: left;
    border: 1px solid var(--colorBlack1);
  }
  th, td{
    word-break: break-word;
    overflow-wrap: anywhere;
  }
  .green {
    background-color: var(--colorGreen1);
  }
  .red {
    background-color: var(--colorRed1);
  }
  .blue {
    background-color: var(--colorBlue2);
  }
  tbody tr {
    background-color: var(--colorCompTable1);
  }
  tbody tr:nth-child(even) {
    background-color: var(--colorCompTable2);
  }
  .cubing-icon {
    padding: 2px;
  }
  .eventIconsRow {
    display: flex;
    flex-wrap: wrap;
    padding-top: 8px;
  }

  .underline{
    text-decoration: underline;
  }

  .grey{
    color: var(--colorGrey1);
  }

</style>
