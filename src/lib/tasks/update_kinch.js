import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";

const URL = "https://wca.cuber.pro/kinch-rankings"; // real URL

const eventMap = {
  "3x3": "333",
  "2x2": "222",
  "4x4": "444",
  "5x5": "555",
  "6x6": "666",
  "7x7": "777",
  "3x3 Blindfolded": "333bf",
  "3x3 One-Handed": "333oh",
  "3x3 Fewest Moves": "333fm",
  "Clock": "clock",
  "Megaminx": "minx",
  "Pyraminx": "pyram",
  "Skewb": "skewb",
  "Square-1": "sq1",
  "4x4 Blindfolded": "444bf",
  "5x5 Blindfolded": "555bf",
  "3x3 Multi-Blind": "333mbf",


};

async function scrape() {
  const { data } = await axios.get(URL);
  const $ = cheerio.load(data);

  const countries = [];

  $("table tbody tr").each((i, row) => {
    const tds = $(row).find("td");

    const rank = parseInt($(tds[0]).text().trim(), 10);
    const country = $(tds[1]).text().trim();
    const flag = $(tds[1]).find("img").attr("src");
    const overall = parseFloat($(tds[2]).text().trim()); // 3rd column is overall

    const scores = {};
    Object.keys(eventMap).forEach((eventName, idx) => {
      const code = eventMap[eventName];
      scores[code] = parseFloat($(tds[idx + 3]).text().trim()); // events start at 4th td
    });

    countries.push({ country, rank, flag, overall, scores });
  });

  fs.writeFileSync(
    "./src/lib/data/kinch.json",
    JSON.stringify(countries, null, 2)
  );

}

scrape();
