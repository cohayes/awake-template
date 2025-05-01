<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Who dis?"
      subtitle=""
      image="/uploads/vaina.png"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Howdy</h3>

          <p>
            A gaming enthusiast with a passion for tabletop and PC games. Relatable characters
            and conflicts draw me to these fictional worlds, where challenges can be solved by
            combining imagination and strategy. As a youth I read avidly, enjoying science fiction and fantasy
            from the likes of Robert Heinlein, Ben Bova, Robert Asprin, Lynn Abbey, and Gene 
            Wolfe. As an adult, I enjoy searching out classics from authors as John
            Steinbeck, Thomas Wolfe, and Henry Miller.
          </p>
          <p>
            My working career has centered on geospatial data, with a degree in Geography
            from the University of Washington. I have held geo-data curator
            positions at Apple and Microsoft. Additionally, I've worked for civil 
            engineering and startup companies. My experience has not always been so office-centric though,
            I greatly value my time spent in a kitchen, manufacturing 
            glasses, and teaching English in Japan.
          </p>
          <p>
            My current objective is to learn and apply my knowledge to problems facing the global community.
          </p>

        </div>

      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
import QuoteCard from '~/components/cards/QuoteCard'
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`
    }
  },
  components: { QuoteCard }
}
</script>
