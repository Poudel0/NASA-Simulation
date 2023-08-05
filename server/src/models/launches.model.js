// Launches stored here
/**
 * Date
 * Misson name
 * Rocket Type
 * Destination Exoplanet
 * Customers?
 *
 */
const launches = new Map();

const launch = {
  flightNumber: 101,
  mission: "Finding Memo",
  rokcet: "Applejello11",
  launchDate: new Date("2024/01/01"),
  destination: "Keplar-442-b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNo, launch);

function getAllLaunches() {
  return Array.from(launches.values());
}

module.exports = {
  getAllLaunches,
};
