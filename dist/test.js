"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
describe('formatPhoneNumber', () => {
    test('should format a 10-digit number correctly', () => {
        const result = (0, functions_1.formatPhoneNumber)(4155448375);
        expect(result).toBe('(415) 544-8375');
    });
    test('should format a 10-digit string correctly', () => {
        const result = (0, functions_1.formatPhoneNumber)('4155448375');
        expect(result).toBe('(415) 544-8375');
    });
    test('should throw an error for numbers less than 10 digits', () => {
        expect(() => {
            (0, functions_1.formatPhoneNumber)(41554483);
        }).toThrow('The input should be a 10-digit number or string.');
    });
    test('should throw an error for numbers more than 10 digits', () => {
        expect(() => {
            (0, functions_1.formatPhoneNumber)(415544837511);
        }).toThrow('The input should be a 10-digit number or string.');
    });
    test('should throw an error for strings with non-numeric characters', () => {
        expect(() => {
            (0, functions_1.formatPhoneNumber)('41554X8375');
        }).toThrow('The input should be a 10-digit number or string.');
    });
});
