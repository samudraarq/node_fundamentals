function required(name: string): string {
  const value = process.env[name];

  if (value === undefined) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

type Config = {
  port: number;
  appName: string;
  debug: boolean;
};

const config: Config = {
  port: parseInt(required("PORT"), 10),
  appName: required("APP_NAME"),
  debug: required("DEBUG") === "true",
};

export default config;
