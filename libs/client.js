// SDK の初期化
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'shogo0x2e',
  apiKey: process.env.API_KEY,
});