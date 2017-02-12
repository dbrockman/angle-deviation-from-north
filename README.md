# angle-deviation-from-north

Determines the clockwise angle deviation from the North direction.

The implementation uses the Rhumb line algorithm which is efficient and accurate for short distances.


## Install

```
$ npm install --save angle-deviation-from-north
```


## Usage

```js
const determineAngleDeviationFromNorth = require('angle-deviation-from-north');

const from = { latitude: 59.45337, longitude: 18.5579 };
const to = { latitude: 59.45337, longitude: 18.5569 };

const result = determineAngleDeviationFromNorth(from, to);
expect(result).toBeCloseTo(270, 6);

determineAngleDeviationFromNorth(a, b);
//=> 270
```


## API

### determineAngleDeviationFromNorth(fromPosition, toPosition)

Gives the heading of the line from one position to another.

For example, if you draw an arrow from `fromPosition` to `toPosition` then the arrow will have the heading returned by this function.

The returned angle is in degrees and can be `[0.0, 360.0)`, greater than or equal `0` and less than `360`.

The two positions must have the properties `latitude` and `longitude`.
