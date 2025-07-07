import { promises as fs } from "fs";
import path from "path";

export const getAgents = async () => {
await new Promise(resolve => setTimeout(resolve, 1000));
const rootDir = path.join(process.cwd(),'data')
  const response =  await fs.readFile(rootDir + "/mock-agents.json", "utf8");
  return JSON.parse(response);
  }