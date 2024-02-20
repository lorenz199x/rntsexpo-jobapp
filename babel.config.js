module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // ['@babel/plugin-proposal-decorators', { legacy: true }],
      // 'react-native-reanimated/plugin',
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@mocks": "./__mocks__",
            "@tests": "./__tests__",
            "@temps": "./__temps__",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@navigation": "./src/navigation",
            "@recoil": "./src/recoil",
            "@screens": "./src/screens",
            "@shared": "./src/shared",
            "@utils": "./src/utils",
            "@styles": "./src/styles",
            "@themes": "./src/themes",
            "@providers": "./src/providers",
            "@graphql": "./src/graphql",
            "@mobx": "./src/mobx",
            "@context": "./src/context",
            "@services": "./src/services",
          },
        },
      ],
    ],
  };
};
