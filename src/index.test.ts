import { describe, it, expect } from "bun:test";
import { Result, Err, unwrap } from './index';

describe('index.ts functions', () => {
  describe('Result function', () => {
    it('should create a result object with a value', () => {
      const result = Result(42);
      expect(result).toEqual({ result: 42, error: null });
    });
  });

  describe('Err function', () => {
    it('should create an error object with a message', () => {
      const error = Err({ message: 'Error occurred' });
      expect(error).toEqual({ result: null, error: { message: 'Error occurred' } });
    });
  });

  describe('unwrap function', () => {
    it('should return the result if present', () => {
      const result = Result('success');
      expect(unwrap(result)).toBe('success');
    });

    it('should throw an error if result is null', () => {
      const error = Err({ message: 'Failure' });
      expect(() => unwrap(error)).toThrow('Failure');
    });
  });
});
