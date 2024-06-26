const puppeteer = require('puppeteer');

async function MatchLeague() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto(
    "https://www.ligaprofesional.ar/torneo-2024/"
  );
  await page.waitForSelector(".Opta-TabbedContent");
  await page.waitForSelector(".Opta-On");
  await page.waitForSelector(".Opta-fixture");
  await page.waitForSelector(".Opta-Team");
  await page.waitForSelector("p");
  await page.waitForSelector(".Opta-Scoreline");
  await page.waitForSelector(".Opta-Team-Score");
  await page.waitForSelector(".Opta-Time");
  await page.waitForSelector("a");
  await page.waitForSelector("h3");
  await page.waitForSelector("ul");
  await page.waitForSelector("li");
  await page.waitForSelector("tr");
  await page.waitForSelector("td");
  await page.waitForSelector("span");
  await page.waitForSelector("img");

  // Obtener el texto de la fecha actual
  const fechaActualElement = await page.$('.Opta-Cf .Opta-On');
  const fechaActual = await page.evaluate(fechaActualElement => fechaActualElement.innerText, fechaActualElement);
  const tournamentDate = [fechaActual];

  const result = await page.evaluate((tournamentDate) => {
    const data = [];
    
    const matches = document.querySelectorAll(".Opta-On div table .Opta-fixture");
    
    matches.forEach((match) => {
      const matchDate = [];
      const teamsName = [];
      const resultMatch = [];
      const teamsPhoto = [];
      
      const photos = match.querySelectorAll(".Opta-Crest span img");
      photos.forEach((team) => {
          const src = team.getAttribute('src');
          teamsPhoto.push(src);
      });

      const teams = match.querySelectorAll(".Opta-Team");
      teams.forEach((team) => {
        teamsName.push(team.innerText);
      });

      const dateHour = match.querySelectorAll(".Opta-Time");
      dateHour.forEach((date) => {
        matchDate.push(date.innerText);
      });

      const result = match.querySelectorAll(".Opta-Score .Opta-Team-Score");
      result.forEach((result) => {
        resultMatch.push(result.innerText);
      });

      data.push({ matchDate, teamsName, teamsPhoto, resultMatch, tournamentDate });
    });
    return data;
  }, tournamentDate);  

  await browser.close();
  return result;
}

module.exports = MatchLeague;
