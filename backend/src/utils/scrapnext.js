const puppeteer = require('puppeteer');

async function NextMatchs() {
  const browser = await puppeteer.launch({ headless: "new" }); 
  const page = await browser.newPage();

  // Navegar a la página web
  await page.goto('https://www.ligaprofesional.ar/torneo-2024/');

  // Esperar a que la página cargue completamente
  await page.waitForSelector('.Opta-Cf');
  await page.waitForSelector('.Opta-On');
  await page.waitForSelector('a');
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

  // Obtener el enlace correspondiente a la fecha actual
  const fechaActualElement = await page.$('.Opta-Cf .Opta-On');
  const fechaActual = await page.evaluate(fechaActualElement => fechaActualElement.innerText, fechaActualElement);

  // Encontrar el siguiente enlace de fecha
  const siguienteFechaElement = await page.evaluateHandle(() => {
    const fechaActualElement = document.querySelector('.Opta-Cf .Opta-On'); // Elemento de la fecha actual
    const siguienteFechaElement = fechaActualElement.nextElementSibling; // Elemento siguiente al de la fecha actual
    fechaActualElement.classList.remove('Opta-On'); // Remover la clase Opta-On del elemento de la fecha actual
    siguienteFechaElement.classList.add('Opta-On'); // Agregar la clase Opta-On al elemento siguiente
    return siguienteFechaElement.querySelector('a'); // Devolver el enlace dentro del elemento siguiente
  });

  // Hacer clic en el enlace de la siguiente fecha
  await siguienteFechaElement.click();

  await page.waitForSelector('.Opta-fixture');
  
  // Extraer los datos de los partidos de la siguiente fecha
  const results = await page.evaluate(() => {
    const data = [];
    const tournamentDate = [];
    
    const date = document.querySelector(".Opta-Cf .Opta-On a").innerHTML
    tournamentDate.push(date)
    const matches = document.querySelectorAll(".Opta-On div table .Opta-fixture");

    matches.forEach((match) => {
      const matchDate = [];
      const teamsName = [];
      const resultMatch = [];
      const teamsPhoto = [];
      
      const time = match.querySelectorAll(".Opta-Scoreline td abbr");
      const teams = match.querySelectorAll(".Opta-Team");
      const photos = match.querySelectorAll(".Opta-Crest span img");
     
      photos.forEach((team) => {
          const src = team.getAttribute('src');
          teamsPhoto.push(src);
      });
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
  });

  await browser.close();
  return results
};

module.exports = NextMatchs