module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@app': './src/app',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@components': './src/app/components',
          '@navigations': './src/app/navigations',
          '@screens': './src/app/screens',
        },
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
          '.svg',
          '.jpg',
          '.ios.js',
          '.android.js',
        ],
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
