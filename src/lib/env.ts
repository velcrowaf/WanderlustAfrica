// Environment configuration with type safety and validation

interface Environment {
  VITE_SANITY_PROJECT_ID: string;
  VITE_SANITY_DATASET: string;
  VITE_SANITY_API_VERSION: string;
  VITE_SANITY_TOKEN?: string;
}

function getEnvVar(key: keyof Environment, required = true): string {
  const value = import.meta.env[key];
  
  if (required && !value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  
  return value || '';
}

export const env: Environment = {
  VITE_SANITY_PROJECT_ID: getEnvVar('VITE_SANITY_PROJECT_ID'),
  VITE_SANITY_DATASET: getEnvVar('VITE_SANITY_DATASET'),
  VITE_SANITY_API_VERSION: getEnvVar('VITE_SANITY_API_VERSION'),
  VITE_SANITY_TOKEN: getEnvVar('VITE_SANITY_TOKEN', false),
};

export const isDevelopment = import.meta.env.DEV;
export const isProduction = import.meta.env.PROD;