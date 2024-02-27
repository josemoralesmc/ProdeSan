import puppeteer from "puppeteer";

export default async function MatchLeague() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto(
    "https://www.ole.com.ar/estadisticas/futbol/primera-division.html"
  );
  await page.waitForSelector(".czpPJF");
  await page.waitForSelector(".jACbdZ");
  await page.waitForSelector(".PreMatch");
  await page.waitForSelector("p");
  await page.waitForSelector(".kGkfaY");
  await page.waitForSelector("a");
  await page.waitForSelector("h3");
  await page.waitForSelector(".gBDMDL");
  await page.waitForSelector("p");
  await page.waitForSelector(".gfUKDl");
  await page.waitForSelector(".dKPgNG");
  await page.waitForSelector("ul");
  await page.waitForSelector("li");

  const result = await page.evaluate(() => {
    const dateNumber = document.querySelectorAll(".gfUKDl ul li");
    const data = [];
    const tournamentDate = [];
    
    dateNumber.forEach((element) => {
      const opacity = window.getComputedStyle(element).getPropertyValue("opacity");
      if (opacity == "1") {
        tournamentDate.push(element.innerText)
        }
    })
    

    const matches = document.querySelectorAll(".czpPJF");
    
    matches.forEach((match) => {
      const matchDate = [];
      const teamsName = [];
      const resultMatch = [];
      

      const teams = match.querySelectorAll(".kGkfaY a h3");
      teams.forEach((team) => {
        teamsName.push(team.innerText);
      });

      const dateHour = match.querySelectorAll(
        ".jACbdZ .Played p, .jACbdZ .PreMatch p"
      );
      dateHour.forEach((date) => {
        matchDate.push(date.innerText);
      });

      const result = match.querySelectorAll(".gBDMDL p");
      result.forEach((result) => {
        resultMatch.push(result.innerText);
      });

      data.push({ matchDate, teamsName, resultMatch, tournamentDate });
    });

    return data;
  });
  await browser.close();
  return result;
}
