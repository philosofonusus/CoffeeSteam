module.exports = function(eleventyConfig){

    eleventyConfig.addPassthroughCopy('./src/css')
    eleventyConfig.addPassthroughCopy('./src/robots.txt')
    eleventyConfig.addPassthroughCopy('./src/ru')
    eleventyConfig.addPassthroughCopy('./src/en')
    eleventyConfig.addPassthroughCopy('./src/assets')

    return {
        dir: {
            input: "src",
            output: "build"
        }
    }
}