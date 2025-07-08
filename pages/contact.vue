<template>
  <div id="contact-page" class="page-wrapper contact-page content-page">
    <site-hero
      title="Howdy"
      subtitle="What's on Your Mind?"
      image="/uploads/vole-berry.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="subtitle">
                Hard at work
              </p>
              <figure class="image is-1by1 ">
                <opti-image
                  :src="require('~/assets/uploads/hippogryph.png').src"
                  :srcset="
                    require('~/assets/uploads/hippogryph.png').srcSet
                  "
                />
              </figure>
              <br />
              <div class="content">
                <p>
                  All comments, questions, or suggestions are welcome.
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
