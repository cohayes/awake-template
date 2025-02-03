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
            I'm a gaming enthusiast with a passion for tabletop and PC games. The ability
            for these mediums to tell stories in worlds that parallel our own is what draws
            me to them. As a youth I was an avid reader, enjoying works of sci-fi and fantasy
            from authors like Robert Heinlein, Ben Bova, Robert Asprin, Lynn Abbey, and Gene 
            Wolfe. As my palate matures, I find greater enjoyment from classic authors as John
            Steinbeck, Thomas Wolfe, and Henry Miller.
          </p>
          <p>
            My working career has revolved around geospatial data, being formally educated in
            GIS and Geography from the University of Washington. I have held geo-data curator
            positions at Apple and Microsoft. Additionally, I've worked on drafts for civil 
            engineers and maps for startups. My experience has not always been so office-centric,
            I greatly value the time I've spent working in a kitchen, manufacturing prescription
            glasses, and teaching English language in Japan.
          </p>
          <p>
            My current objectives are to learn and contribute to the global community.
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
