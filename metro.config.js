// metro.config.js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Permite resolver módulos .cjs (Firebase usa CommonJS)
  config.resolver.sourceExts = config.resolver.sourceExts || [];
  if (!config.resolver.sourceExts.includes("cjs")) {
    config.resolver.sourceExts.push("cjs");
  }

  // Permite carregar módulos via "package.json:exports"
  config.resolver.unstable_enablePackageExports = false;

  return config;
})();
