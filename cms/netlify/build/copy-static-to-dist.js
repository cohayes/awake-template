import path from 'path'
import { fileURLToPath } from 'url'
import ncpPackage from 'ncp'

const { ncp } = ncpPackage
const __dirname = path.dirname(fileURLToPath(import.meta.url))
ncp.limit = 16

export default () => {
  ncp(
    path.join(__dirname, '../static'),
    path.join(__dirname, '../../../static'),
    (err) => {
      if (err) {
        return console.error(err)
      }
      console.log('Netlify admin generated in dist')
    }
  )
}
