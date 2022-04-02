import { sumPoints } from '../src/homework6';

const validData = {
        Anna: 10,
        Olga: 1,
        Ivan: 5,
        }

describe('summing the points', () => {
    test('summing student points', () => {
        expect(sumPoints(validData)).toEqual(16);
    });
});

const invalidData1 = {
    Anna: 10,
    Olga: 23,
    Ivan: -2,
    }

describe('summing the points', () => {
    test('summing student points', () => {
        expect(sumPoints(invalidData1)).toEqual('invalid value');
    });
});

const invalidData2 = {
    Anna: 10,
    Olga: 'invalid',
    Ivan: 23,
    }

describe('summing the points', () => {
    test('summing student points', () => {
        expect(sumPoints(invalidData2)).toEqual('invalid value');
    });
});