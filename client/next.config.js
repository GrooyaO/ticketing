import { setConfig } from './.next/static/chunks/main';

module.epxorts = {
  webpackDevMiddleware: (config) => {
    setConfig.watchOptions.poll = 300;
    return config;
  },
};
