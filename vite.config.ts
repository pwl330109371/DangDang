/**
 * Author: pengwenlei pengwenlei@pengwenlei
 * Date: 2023-02-14 09:55:23
 * LastEditors: pengwenlei pwl330109371@gmail.com
 * LastEditTime: 2023-03-20 14:34:57
 */
import { defineConfig, CommonServerOptions } from "vite";
import vue from "@vitejs/plugin-vue";
import dotenv, { DotenvParseOutput } from "dotenv";
import fs from "fs";
// https://vitejs.dev/config/
export default defineConfig((mode) => {
  console.log("mode", mode.mode);
  const envFileName: string = ".env";
  const curEnvFileName = `${envFileName}.${mode.mode}`;
  let server: CommonServerOptions = {};
  console.log("curEnvFileName", curEnvFileName);
  console.log(fs.readFileSync);

  const envData = fs.readFileSync(curEnvFileName);
  const eveConf: DotenvParseOutput = dotenv.parse(envData);
  if (mode.mode === "development") {
    console.log("我是开发者环境");
    // server = {
    //   host: eveConf.VITE_HOST,
    //   port: Number(eveConf.VITE_PORT),
    //   proxy: {
    //     [eveConf.VITE_BASE_URL]: {
    //       target: eveConf.VITE_PROXY_DOMAIN,
    //     },
    //   },
    // };
  } else if (mode.mode === "production") {
    server = {
      host: eveConf.VITE_HOST,
      port: Number(eveConf.VITE_PORT),
    };
  }
  console.log("我是生产环境", server);
  return {
    plugins: [vue()],
    server,
  };
});

// export default defineConfig({
//   plugins: [vue()],
// })
