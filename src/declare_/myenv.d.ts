/**
 * Author: pengwenlei pengwenlei@pengwenlei
 * Date: 2023-02-20 10:41:46
 * LastEditors: pengwenlei pengwenlei@pengwenlei
 * LastEditTime: 2023-02-20 14:53:48
 */
import "dotenv";

declare module "dotenv" {
  interface DotenvParseOutput {
    VITE_BASE_URL: string;
    VITE_HOST: string;
    VITE_PORT: number;
    VITE_PROXY_DOMAIN: string;
  }
}

export interface D {
  username: string;
}
