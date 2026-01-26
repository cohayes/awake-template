import { CMS } from '../config/_siteConfig.js'
const cms = new CMS()
const runBefore = require(`${__dirname}/../cms/${cms.slug}/hooks/beforeBuild`)
  .default
runBefore()
