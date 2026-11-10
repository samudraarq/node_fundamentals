import config from "./config.ts";
import os from "node:os";

export default function logConfig() {
  console.log("Configuration:");
  console.log(`Config: ${JSON.stringify(config)}`);
  console.log(`Node Version: ${process.version}`);
  console.log(`Platform: ${process.platform}`);
  console.log(`OS: ${os.platform()} ${os.release()}`);
  console.log(`Uptime: ${process.uptime()} seconds`);
  console.log(`Memory Usage: ${JSON.stringify(process.memoryUsage())}`);
}
