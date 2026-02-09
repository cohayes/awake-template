import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(__dirname, '..')

const requiredFiles = [
  path.join(rootDir, 'static', 'api', 'posts.json'),
  path.join(rootDir, 'static', 'api', 'categories.json'),
  path.join(rootDir, 'static', 'admin', 'index.html')
]

const missingFiles = requiredFiles.filter((file) => !fs.existsSync(file))

if (missingFiles.length > 0) {
  console.error('Missing expected build artifacts:')
  missingFiles.forEach((file) => {
    console.error(`- ${file}`)
  })
  process.exit(1)
}

console.log('Verified build artifacts.')
