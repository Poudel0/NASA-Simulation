const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");

let habitablePlanets = [];
// const habitablePlanets
function isHabitable(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanets() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "keplar_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true, // Returns each row in csv as js object as key-value instead of just arrays of values in a row
        })
      )
      .on("data", (data) => {
        if (isHabitable(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("end", () => {
        // console.log(
        //   habitablePlanets.map((planet) => {
        //     return planet["kepler_name"];
        //   })
        // );
        console.log(
          `${habitablePlanets.length} Potential habitable planets have been discovered so far !`
        );
        resolve();
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      });
  });
}

function getHabitablePlanets() {
  return [...habitablePlanets];
}

module.exports = {
  loadPlanets,
  planets: habitablePlanets,
};
