import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { CMS } from '../config/_siteConfig.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const cms = new CMS()
const moduleUrl = pathToFileURL(
  path.join(__dirname, '..', 'cms', cms.slug, 'hooks', 'afterBuild.js')
)
const { default: runAfter } = await import(moduleUrl)
runAfter()
