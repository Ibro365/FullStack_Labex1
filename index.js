const fs = require('fs').promises;
/*
fs.unlink("canada.txt", (err) => {
    console.log("canada.txt Deleted Successfully...")
})
*/

async function openFile() {
    try {
      const csvHeaders = 'country, year, population'
      await fs.writeFile('canada.txt', csvHeaders);
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

  async function addData(country,year,population) {
    try {
      const csvLine = `\n${country},${year},${population}`
      await fs.writeFile('canada.txt', csvLine, { flag: 'a' });
    } catch (error) {
      console.error(`Got an error trying to write to a file: ${error.message}`);
    }
  }

  (async function () {
    await openFile();
    await addData('Canada', 1957, 17010154);
    await addData('Canada', 1962, 18985849);
    await addData('Canada', 1972, 22284500);
    await addData('Canada', 1982, 25201900);
    await addData('Canada', 1987, 26549700);
    await addData('Canada', 1992, 28523502);

  })();