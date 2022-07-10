import * as crypto from 'crypto';
import { getEnvironmentVariable } from './env-utils';

describe('The getEnvironmentVariable function', () => {

  const ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // Resets the Jest State before each test
    process.env = { ...ENV }; // Resets the env variables
  });

  afterAll(() => {
    process.env = ENV; // Restore the old environment
  });

  it('should return the environment variable if it exists', () => {
    const varName = crypto.randomUUID(); // Create a random UUID to not clash with any existing env variable
    const varValue = 'Test12345';
    process.env[varName] = varValue;
    const valueFromFunction = getEnvironmentVariable(varName);
    expect(valueFromFunction).toEqual(varValue);
  });

  it('should return undefined if the variable doesn`t exist and no default value or error is provided', () => {
    const valueFromFunction = getEnvironmentVariable(crypto.randomUUID());
    expect(valueFromFunction).toBeUndefined();
  });

  it('should return a default value if the variable doesn`t exist and a default value is provided', () => {
    const defaultVal = 'Test12345';
    const valueFromFunction = getEnvironmentVariable(crypto.randomUUID(), defaultVal);
    expect(valueFromFunction).toEqual(defaultVal);
  });

  it('should throw and error if the variable doesn`t exist and an error is provided', () => {
    const err = new Error('Err');
    expect(() => getEnvironmentVariable(crypto.randomUUID(), err)).toThrow(err);
  });

});
