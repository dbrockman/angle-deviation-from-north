'use strict';

const determineAngleDeviationFromNorth = require('..');

const position = (latitude, longitude) => ({ latitude, longitude });

describe('when direction is due north (course = 0)', () => {

  it('should return 0', () => {
    const from = position(59.45337, 18.5579);
    const to = position(59.45347, 18.5579);
    const result = determineAngleDeviationFromNorth(from, to);
    expect(result).toBeCloseTo(0, 6);
  });

});

describe('when direction is due south', () => {

  it('should return 180', () => {
    const from = position(59.45337, 18.5579);
    const to = position(59.45327, 18.5579);
    const result = determineAngleDeviationFromNorth(from, to);
    expect(result).toBeCloseTo(180, 6);
  });

});

describe('when direction is due east', () => {

  it('should return 90', () => {
    const from = position(59.45337, 18.5579);
    const to = position(59.45337, 18.5589);
    const result = determineAngleDeviationFromNorth(from, to);
    expect(result).toBeCloseTo(90, 6);
  });

});

describe('when direction is due west', () => {

  it('should return 270', () => {
    const from = position(59.45337, 18.5579);
    const to = position(59.45337, 18.5569);
    const result = determineAngleDeviationFromNorth(from, to);
    expect(result).toBeCloseTo(270, 6);
  });

});

describe('when direction is due north by northwest -ish', () => {

  it('should return 333', () => {
    const from = position(59.4537, 18.5579);
    const to = position(59.4547, 18.5569);
    const result = determineAngleDeviationFromNorth(from, to);
    expect(result).toBeCloseTo(333.06, 2);
  });

});

describe('when direction is due east across the 180° meridian (anti-meridian)', () => {

  it('should return 90', () => {
    const from = position(0, 179);
    const to = position(0, -179);
    const result = determineAngleDeviationFromNorth(from, to);
    expect(result).toBeCloseTo(90, 6);
  });

});

describe('when direction is due west across the 180° meridian (anti-meridian)', () => {

  it('should return 270', () => {
    const from = position(0, -179);
    const to = position(0, 179);
    const result = determineAngleDeviationFromNorth(from, to);
    expect(result).toBeCloseTo(270, 6);
  });

});
