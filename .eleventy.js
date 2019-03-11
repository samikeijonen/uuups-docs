module.exports = function (eleventyConfig) {
    // Copies static files to output.
    eleventyConfig.addPassthroughCopy('dist');

    return {
        passthroughFileCopy: true
    };
};
