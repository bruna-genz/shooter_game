/* eslint-disable no-console */
import * as Logic from '../src/helpers/GameLogic';

describe('Increase player score by 10', () => {
  test('initial score 0 should return 10', () => {
    const playerData = {
      score: 0,
    };

    Logic.calcIncreaseScore(playerData);

    expect(playerData.score).toBe(10);
  });

  test('initial score 1000000000 should return 1000000010', () => {
    const playerData = {
      score: 1000000000,
    };

    Logic.calcIncreaseScore(playerData);

    expect(playerData.score).toBe(1000000010);
  });

  test('if player score is not a number, it logs an error message on the console', () => {
    console.log = jest.fn();

    const playerData = {
      score: "I'm not a number",
    };

    Logic.calcIncreaseScore(playerData);

    expect(console.log).toHaveBeenCalled();
  });

  test('if player score is not a number, it should return false', () => {
    const playerData = {
      score: "I'm not a number",
    };

    const result = Logic.calcIncreaseScore(playerData);

    expect(result).toBeFalsy();
  });

  test('if player score is a number, it does not log anything on the console', () => {
    console.log = jest.fn();

    const playerData = {
      score: 0,
    };

    Logic.calcIncreaseScore(playerData);

    expect(console.log).not.toHaveBeenCalled();
  });

  test('if player score is a number, it should return true', () => {
    const playerData = {
      score: 150000,
    };

    const result = Logic.calcIncreaseScore(playerData);
    expect(result).toBeTruthy();
  });
});

describe('Decrease player score by 10', () => {
  test('initial score 100 should return 90', () => {
    const playerData = {
      score: 100,
    };

    Logic.calcDecreaseScore(playerData);
    expect(playerData.score).toBe(90);
  });

  test('initial score 1000000000 should return 999999990', () => {
    const playerData = {
      score: 1000000000,
    };

    Logic.calcDecreaseScore(playerData);
    expect(playerData.score).toBe(999999990);
  });

  test("doesn't return a negative number if score is less than 10", () => {
    const playerData = {
      score: 0,
    };

    Logic.calcDecreaseScore(playerData);
    expect(playerData.score).not.toBeLessThan(0);
  });

  test('if player score is not a number, it logs an error message on the console', () => {
    console.log = jest.fn();

    const playerData = {
      score: "I'm not a number",
    };

    Logic.calcDecreaseScore(playerData);

    expect(console.log).toHaveBeenCalled();
  });

  test('if player score is not a number, it should return false', () => {
    const playerData = {
      score: "I'm not a number",
    };

    const result = Logic.calcDecreaseScore(playerData);

    expect(result).toBeFalsy();
  });

  test('if player score is a number, it does not log anything on the console', () => {
    console.log = jest.fn();

    const playerData = {
      score: 100,
    };

    Logic.calcDecreaseScore(playerData);

    expect(console.log).not.toHaveBeenCalled();
  });

  test('if player score is a number, it should return true', () => {
    const playerData = {
      score: 150000,
    };

    const result = Logic.calcDecreaseScore(playerData);
    expect(result).toBeTruthy();
  });
});

describe('Decrease player health by 25', () => {
  test('it should return an integer', () => {
    const playerData = {
      health: 100,
    };

    const result = Logic.decreasePlayerHealth(playerData);
    expect(typeof result).toBe('number');
  });

  test('initial health 100 should return 75', () => {
    const playerData = {
      health: 100,
    };

    Logic.decreasePlayerHealth(playerData);
    expect(playerData.health).toBe(75);
  });

  test('initial health 25 should return 0', () => {
    const playerData = {
      health: 25,
    };

    Logic.decreasePlayerHealth(playerData);
    expect(playerData.health).toBe(0);
  });

  test("doesn't return a negative number if player health is 0", () => {
    const playerData = {
      health: 0,
    };

    Logic.decreasePlayerHealth(playerData);
    expect(playerData.health).not.toBeLessThan(0);
  });

  test('if player health is not a number, it logs an error message on the console', () => {
    console.log = jest.fn();

    const playerData = {
      health: "I'm not a number",
    };

    Logic.decreasePlayerHealth(playerData);
    expect(console.log).toHaveBeenCalled();
  });

  test('if player score is a number, it does not log anything on the console', () => {
    console.log = jest.fn();

    const playerData = {
      health: 100,
    };

    Logic.decreasePlayerHealth(playerData);
    expect(console.log).not.toHaveBeenCalled();
  });
});

describe('Increase player shooting power by 1', () => {
  test('Shooting power 1 should return 2', () => {
    const playerData = {
      shootingPower: 1,
    };

    Logic.increaseShooting(playerData);
    expect(playerData.shootingPower).toBe(2);
  });

  test('Shooting power 2 should return 3', () => {
    const playerData = {
      shootingPower: 2,
    };

    Logic.increaseShooting(playerData);
    expect(playerData.shootingPower).toBe(3);
  });

  test("doesn't increase if shooting power is already 3", () => {
    const playerData = {
      shootingPower: 3,
    };

    Logic.increaseShooting(playerData);
    expect(playerData.shootingPower).not.toBeGreaterThan(3);
  });

  test('if shooting power is not a number, it logs an error message on the console', () => {
    console.log = jest.fn();

    const playerData = {
      shootingPower: "I'm not a number",
    };

    Logic.increaseShooting(playerData);
    expect(console.log).toHaveBeenCalled();
  });

  test('if player score is a number, it does not log anything on the console', () => {
    console.log = jest.fn();

    const playerData = {
      shootingPower: 2,
    };

    Logic.increaseShooting(playerData);
    expect(console.log).not.toHaveBeenCalled();
  });
});

describe('Decrease player shooting power by 1', () => {
  test('Shooting power 3 should return 2', () => {
    const playerData = {
      shootingPower: 3,
    };

    Logic.decreaseShooting(playerData);
    expect(playerData.shootingPower).toBe(2);
  });

  test('Shooting power 2 should return 1', () => {
    const playerData = {
      shootingPower: 2,
    };

    Logic.decreaseShooting(playerData);
    expect(playerData.shootingPower).toBe(1);
  });

  test("doesn't change if shooting power is 1", () => {
    const playerData = {
      shootingPower: 1,
    };

    Logic.decreaseShooting(playerData);
    expect(playerData.shootingPower).toBe(1);
  });

  test('if shooting power is not a number, it logs an error message on the console', () => {
    console.log = jest.fn();

    const playerData = {
      shootingPower: "I'm not a number",
    };

    Logic.decreaseShooting(playerData);
    expect(console.log).toHaveBeenCalled();
  });

  test('if player score is a number, it does not log anything on the console', () => {
    console.log = jest.fn();

    const playerData = {
      shootingPower: 2,
    };

    Logic.decreaseShooting(playerData);
    expect(console.log).not.toHaveBeenCalled();
  });
});

describe('Set up counter', () => {
  test('timer shoot counter should be equal to shoot delay minus 1', () => {
    const playerData = {
      timerShootCounter: 0,
      timerShootDelay: 10,
    };

    Logic.setUpCounter(playerData);
    expect(playerData.timerShootCounter).toBe(9);
  });

  test('if timerShootCounter is not a number, it logs an error message on the console', () => {
    console.log = jest.fn();

    const playerData = {
      timerShootCounter: "I'm not a number",
      timerShootDelay: 10,
    };

    Logic.setUpCounter(playerData);
    expect(console.log).toHaveBeenCalled();
  });

  test('if timerShootDelay is not a number, it logs an error message on the console', () => {
    console.log = jest.fn();

    const playerData = {
      timerShootCounter: 0,
      timerShootDelay: "I'm not a number",
    };

    Logic.setUpCounter(playerData);
    expect(console.log).toHaveBeenCalled();
  });

  test('if timerShootDelay or timerShootCounter are numbers, it does not log anything on the console', () => {
    console.log = jest.fn();

    const playerData = {
      timerShootCounter: 0,
      timerShootDelay: 10,
    };

    Logic.setUpCounter(playerData);
    expect(console.log).not.toHaveBeenCalled();
  });
});

describe('Increase shoot counter by 1', () => {
  test('timer shoot counter 0 should return 1', () => {
    const playerData = {
      timerShootCounter: 0,
    };

    Logic.increaseShootCounter(playerData);
    expect(playerData.timerShootCounter).toBe(1);
  });

  test('timer shoot counter 9 should return 10', () => {
    const playerData = {
      timerShootCounter: 9,
    };

    Logic.increaseShootCounter(playerData);
    expect(playerData.timerShootCounter).toBe(10);
  });

  test('if timer shoot counter is not a number, it logs an error message on the console', () => {
    console.log = jest.fn();

    const playerData = {
      timerShootCounter: "I'm not a number",
    };

    Logic.increaseShootCounter(playerData);
    expect(console.log).toHaveBeenCalled();
  });

  test('if timer shoot counter is a number, it does not log anything on the console', () => {
    console.log = jest.fn();

    const playerData = {
      timerShootCounter: 2,
    };

    Logic.increaseShootCounter(playerData);
    expect(console.log).not.toHaveBeenCalled();
  });
});

describe('Decrease meteor health by 1', () => {
  test('meteor health 3 should return 2', () => {
    const meteorData = {
      health: 3,
    };

    Logic.decreaseMeteorHealth(meteorData);
    expect(meteorData.health).toBe(2);
  });

  test('meteor health 0 should not return negative', () => {
    const meteorData = {
      health: 0,
    };

    Logic.decreaseMeteorHealth(meteorData);
    expect(meteorData.health).not.toBeLessThan(0);
  });

  test('if meteor health is not a number, it logs an error message on the console', () => {
    console.log = jest.fn();

    const meteorData = {
      health: "I'm not a number",
    };

    Logic.decreaseMeteorHealth(meteorData);
    expect(console.log).toHaveBeenCalled();
  });

  test('if meteor is a number, it does not log anything on the console', () => {
    console.log = jest.fn();

    const meteorData = {
      health: 1,
    };

    Logic.decreaseMeteorHealth(meteorData);
    expect(console.log).not.toHaveBeenCalled();
  });
});
