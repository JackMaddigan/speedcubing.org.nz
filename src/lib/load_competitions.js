async function loadCompetitions() {
  const response = await fetch(
    "https://raw.githubusercontent.com/JackMaddigan/snz-comps-updater/main/data.json"
  );

  const comps = (await response.json()).competitions;

  const today = new Date(Date.now())
    .toLocaleDateString("en-NZ", {
      timeZone: "Pacific/Auckland",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");

  const current = [],
    upcoming = [],
    recent = [];

  for (const comp of comps) {
    if (comp.date.from > today) {
      upcoming.push(comp);
    } else if (comp.date.till < today) {
      recent.push(comp);
    } else {
      current.push(comp);
    }
  }

  recent.reverse();
  return {current, upcoming, recent}
}

export  { loadCompetitions };