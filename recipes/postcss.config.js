const postcssCssNext = require('postcss-cssnext');
const postcssImport = require('postcss-import');

module.exports = {
    plugins: [
        postcssCssNext,
        postcssImport
    ]
}; // Note that plugins order here is important, Plugins are applied from last to the first. First postcssImport is resoled and then postcssCssNext is resolved