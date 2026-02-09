import path from 'path'
import { fileURLToPath } from 'url'
import siteConfig from '../../../config/_siteConfig.js'
import { createPagination, createMeta, createAll } from './helper.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '../../..')
const generateCategoryApi = () => {
  const contentDir = `${rootDir}/content/categories`
  const apiDir = `${rootDir}/static/api`
  const allFile = `${apiDir}/categories.json`
  const metaFile = `${apiDir}/categories-meta.json`
  const pages = siteConfig.categories.perPage
  const doneMessage = `{totalNumber} categories generated in categories API`

  createAll(contentDir, allFile, apiDir)
    .then((all) => {
      const totalPages = createPagination(pages, all, `${apiDir}/categories`)
      createMeta({ totalPages: totalPages }, metaFile)
      console.log(doneMessage.replace('{totalNumber}', all.length))
    })
    .catch((err) => {
      console.log(err)
    })
}
export default generateCategoryApi
