<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Howdy"
      subtitle="A WIP Contact Page"
      image="/uploads/dogfort.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">
                Hello!
              </p>
              <p class="subtitle">
                Feed me cookies!
              </p>
              <figure class="image is-1by1 ">
                <opti-image
                  :src="require('~/assets/uploads/cookie-monster.jpg').src"
                  :srcset="
                    require('~/assets/uploads/cookie-monster.jpg').srcSet
                  "
                />
              </figure>
              <br />
              <div class="content">
                <p>
                  <strong>
                    This page is still being edited.
                  </strong>
                </p>
                <p>
                  I'd like to use minimal cookies and not allow commercial use of any data that is used on this site.
                </p>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-8">
            <article class="tile is-child box">
              <contact-form />
            </article>
          </div>
        </div>
      </template>
      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <!-- Latest Posts -->
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import ContactForm from '~/components/ContactForm'
export default {
  head() {
    return {
      title: `Contact | ${this.$siteConfig.siteName}`
    }
  },
  components: { ContactForm }
}
</script>
