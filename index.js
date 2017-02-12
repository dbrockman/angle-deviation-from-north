'use strict';

const toRadians = degrees => degrees * (Math.PI / 180);
const toDegrees = radians => radians * (180 / Math.PI);

function determineAngleDeviationFromNorth(from, to) {
  const toLat = toRadians(to.latitude);
  const fromLat = toRadians(from.latitude);
  let dLon = toRadians(to.longitude - from.longitude);
  const dPhi = Math.log(Math.tan(toLat / 2 + Math.PI / 4) / Math.tan(fromLat / 2 + Math.PI / 4));

  // if dLon over 180° take shorter rhumb across 180° meridian:
  if (Math.abs(dLon) > Math.PI) {
    dLon = dLon > 0 ? -(2 * Math.PI - dLon) : 2 * Math.PI + dLon;
  }

  const result = toDegrees(Math.atan2(dLon, dPhi));
  return (result + 360) % 360;
}

module.exports = determineAngleDeviationFromNorth;
