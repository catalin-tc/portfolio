export function getEnvironmentVariable(name: string): string | undefined;
export function getEnvironmentVariable(name: string, defaultValue: string): string;
export function getEnvironmentVariable(name: string, throwOnNotFound: Error): string;

export function getEnvironmentVariable(name: string, defaultOrError?: string | Error): string | undefined {

  const envVal = process.env[name];

  if (typeof defaultOrError === 'undefined' || typeof envVal !== 'undefined') {
    return envVal;
  }

  if (typeof defaultOrError === 'string') {
    return defaultOrError;
  }

  throw defaultOrError;

}
