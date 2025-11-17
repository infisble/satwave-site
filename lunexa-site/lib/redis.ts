import { Redis } from "@upstash/redis";

let redis: Redis | null = null;

const url = process.env.REDIS_URL;
const token = process.env.REDIS_TOKEN;

if (url && token) {
  redis = new Redis({ url, token });
}

export default redis;
