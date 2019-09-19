import glob from 'glob'

let files = glob.sync('**/*.md', { cwd: 'content' })
files = files.map(d => d.substr(0, d.lastIndexOf('.')))

module.exports = {
    modules: [
        '@nuxtjs/sitemap'
    ],
    sitemap: {
        hostname: 'https://www.example.com'
    },
    generate: {
        routes: files
    },
    build: {
      extend (config) {
        config.module.rules.push({
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader'
        })
      }
    }
  }