module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./src/css')
    eleventyConfig.addPassthroughCopy('./src/robots.txt')
    eleventyConfig.addPassthroughCopy('./src/assets')

    return {
        dir: {
            input: "src",
            output: "build"
        }
    }
}