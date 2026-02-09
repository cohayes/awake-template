import path from 'path'
import { fileURLToPath } from 'url'
import siteConfig from '../../../config/_siteConfig.js'
import { createPagination, createMeta, createAll } from './helper.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../../..')
const generatePostApi = () => {
  const contentDir = `${rootDir}/content/posts`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/posts.json`
  const metaFile = `${apiDir}/posts-meta.json`
  const pages = siteConfig.posts.perPage
  const doneMessage = `{totalNumber} posts generated in posts API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/posts`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generatePostApi
