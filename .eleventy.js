const pluginRss = require('@11ty/eleventy-plugin-rss')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

const dateFilter = require('./src/filters/date-filter.js')
const dateFilterShorthand = require('./src/filters/date-filter-shorthand.js')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPassthroughCopy('src/favicon.png')
  eleventyConfig.addPassthroughCopy('src/favicon.svg')
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/fonts')
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addPassthroughCopy('CNAME')

  eleventyConfig.addFilter('dateFilter', dateFilter)
  eleventyConfig.addFilter('dateFilterShorthand', dateFilterShorthand)

  eleventyConfig.addCollection('all_posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md')
    ].reverse()
  })

  eleventyConfig.addCollection('recent_posts', collection => {
    return [
      ...collection.getFilteredByGlob('./src/posts/*.md')
    ].reverse().slice(0, 2)
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
