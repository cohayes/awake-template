import Post from './post.js'
import Category from './category.js'
import LifeCycleHooks from './hooks/lifeCycle.js'
class CMS {
  constructor(axios = false) {
    this.name = 'Netlify'
    this.slug = 'netlify'
    this.post = new Post(axios)
    this.category = new Category(axios)
    this.lifeCycleHooks = LifeCycleHooks
  }
}
export default CMS
