const postcssCssNext = require('postcss-cssnext');
const postcssImport = require('postcss-import');

module.exports = {
    plugins: [
        postcssImport,
        postcssCssNext
    ]
}; // Note that plugins order here is important, Plugins are applied from last to the first. First postcssCssNext is resoled and then postcssImport is resolved