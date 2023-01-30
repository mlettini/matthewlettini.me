const pluginRss = require('@11ty/eleventy-plugin-rss')
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight')

const dateFilter = require('./src/js/date-filter.js')
const dateFilterShorthand = require('./src/js/date-filter-shorthand.js')

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(syntaxHighlight)

  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/fonts')
  eleventyConfig.addPassthroughCopy('src/images')
  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addPassthroughCopy('CNAME')

  eleventyConfig.addPassthroughCopy({'node_modules/medium-zoom/dist/medium-zoom.min.js': 'js/medium-zoom.min.js'})

  eleventyConfig.addFilter('dateFilter', dateFilter)
  eleventyConfig.addFilter('dateFilterShorthand', dateFilterShorthand)

  eleventyConfig.addCollection('harvest_work', function(collection) {
    const coll = collection.getFilteredByGlob('./src/work/harvest/*.md');
    for(let i = 0; i < coll.length ; i++) {
      const prevPost = coll[i-1];
      const nextPost = coll[i + 1];
      coll[i].data['prevPost'] = prevPost;
      coll[i].data['nextPost'] = nextPost;
    }
    return coll.sort((a, b) => a.data.order - b.data.order);
    // return coll.reverse();
  })

  eleventyConfig.addCollection('older_work', function(collection) {
    const coll = collection.getFilteredByGlob('./src/work/older/*.md');
    for(let i = 0; i < coll.length ; i++) {
      const prevPost = coll[i-1];
      const nextPost = coll[i + 1];
      coll[i].data['prevPost'] = prevPost;
      coll[i].data['nextPost'] = nextPost;
    }
    return coll.sort((a, b) => a.data.order - b.data.order);
    // return coll.reverse();
  })

  eleventyConfig.addCollection('posts', function(collection) {
    const coll = collection.getFilteredByGlob('./src/posts/*/*.md');
    for(let i = 0; i < coll.length ; i++) {
      const prevPost = coll[i-1];
      const nextPost = coll[i + 1];
      coll[i].data['prevPost'] = prevPost;
      coll[i].data['nextPost'] = nextPost;
    }
    return coll.reverse();
  })

  eleventyConfig.addCollection('recent_posts', collection => {
    const coll = collection.getFilteredByGlob('./src/posts/*/*.md');
    return coll.reverse().slice(0, 2);
  })

  return {
    dir: {
      input: 'src',
      output: 'public'
    }
  }
}
