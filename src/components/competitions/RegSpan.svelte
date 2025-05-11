<script>
  const { comp } = $props();
  const dateDisplayOptions = [
    "en-US",
    {
      month: "short", // "May"
      day: "numeric", // "12"
      hour: "numeric", // "6"
      minute: "numeric", // "00"
      hour12: true, // Use 12-hour clock with AM/PM
    },
  ];
  const now = Date.now();
  const regOpens = new Date(comp.registration.open);
  const regCloses = new Date(comp.registration.close);
  const regMessage =
    regCloses < now
      ? `Registration is closed`
      : regOpens <= now
        ? `Register now until ${regCloses.toLocaleDateString(
            ...dateDisplayOptions
          )}`
        : `Registration opens ${regOpens.toLocaleDateString(
            ...dateDisplayOptions
          )}`;
</script>

<a
  href={comp.externalWebsite || `https://www.worldcubeassociation.org/competitions/${comp.id}/register`}
  target="_blank">
  <h4 class="reg-link">{regMessage}</h4>
</a>

<style>
  .reg-link {
    color: var(--colorGreen1);
    padding-top: 8px;
  }
  a{
    text-decoration: underline;
    color: var(--colorGreen1);
  }
</style>
