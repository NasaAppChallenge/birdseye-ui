import * as randomCoordinates from 'random-coordinates';
import * as randomDates from 'random-date-generator';

export const geojson = (function generateMockData() {
  const seed = (idx) => ( {
    'type': 'Feature',
    'id': `${idx}`,
    'created': randomDates.getRandomDate(),
    'properties': {
      'login': `Photographer ${idx}`,
      'place': `Place ${idx}`,
      'title': `Name ${idx}`
    },
    'geometry': {
      'coordinates': randomCoordinates.default().split(',').reverse(),
      'type': 'Point'
    }
  })
  const N = 10000;
  return {
    "type": "FeatureCollection",
    "features": Array.apply(null, {length: N}).map(Function.call, (idx) => seed(idx))
  }
})()
console.log(geojson)
