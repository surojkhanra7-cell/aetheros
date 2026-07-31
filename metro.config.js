const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
  config.transformer.minifierConfig = {
    compress: {
      pure_funcs: ['console.log', 'console.info', 'console.debug'],
      drop_console: false,
      dead_code: true,
      unused: true,
      keep_infinity: true,
      reduce_funcs: true,
      keep_classnames: true, // ← যোগ করুন (ডেড কোড এলিমিনেশন থেকে বাঁচাবে)
      keep_fnames: true,     // ← যোগ করুন (ডেড কোড এলিমিনেশন থেকে বাঁচাবে)
    },
    mangle: {
      toplevel: true,
      keep_classnames: true, // ← নাম পরিবর্তন (mangle) থেকে বাঁচাবে
      keep_fnames: true,     // ← নাম পরিবর্তন (mangle) থেকে বাঁচাবে
      safari10: true,
    },
    output: {
      comments: false,
      ascii_only: true,
    },
  };
}

module.exports = config;
