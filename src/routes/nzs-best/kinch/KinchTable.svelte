<script>
  import kinchData from "$lib/data/kinch.json";

  const events = [
    "333","222","333bf","333oh","333fm","333mbf",
    "444","444bf","555","555bf","666","777",
    "clock","minx","pyram","skewb","sq1"
  ];

  function eventToIcon(eventCode) {
    return `<img src="https://raw.githubusercontent.com/cubing/icons/main/src/svg/event/${eventCode}.svg"
      alt="${eventCode}" width="32" height="32" style="vertical-align:middle;">`;
  }
</script>

<table>
  <thead>
    <tr>
      <th>Rank</th>
      <th>Country</th>
      <th>Overall</th>
      {#each events as e}
        <th>{@html eventToIcon(e)}</th>
      {/each}
    </tr>
  </thead>
  <tbody>
    {#each kinchData as row}
      <tr class:highlight-nz={row.country === "New Zealand"}>
        <td>{row.rank}</td>
        <td>
          <img src={row.flag} alt={row.country} width="24" height="24" style="vertical-align:middle;">
          {row.country}
        </td>
        <td>{row.overall}</td>
        {#each events as e}
          <td>{row.scores[e]}</td>
        {/each}
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    border-collapse: collapse;
    width: 100%;
    background: #1c1c1c;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    font-family: Arial, sans-serif;
    font-size: 13px;
    color: white;
  }

  th, td {
    border: 1px solid #333;
    padding: 6px 8px;
    text-align: center;
    color: white;
  }

  th {
    background-color: #46b04c;
    position: sticky;
    top: 0;
  }

  tr:nth-child(even) {
    background: #262626;
  }

  td:first-child, th:first-child {
    text-align: right;
  }

  td:nth-child(2), th:nth-child(2) {
    text-align: left;
  }

  img {
    vertical-align: middle;
  }

  tr.highlight-nz {
    background: #333 !important;
    font-weight: bold;
  }

  th:nth-child(-n+3), td:nth-child(-n+3) {
    font-weight: bold;
  }
</style>
