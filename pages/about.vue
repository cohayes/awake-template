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
          <h3>Hello There</h3>

          <p>
            I'm passionate about well written stories and game design. Fictional spaces with 
            empathetic characters can immerse the reader/player in the challenges of that world.
            A participant's problem solving skills will develop whenever they begin to imagine potential 
            solutions and outcomes. This development is important to the solving of our real-world problems,
            as possible courses of action are often limited by our conceptual ability. A solution
            the general public believes to be possible will correlate with the solutions shown in popular media.
            Therefore I believe it is important to emphasis cooperation and non-violent problem solving in
            the work of any creative artist.
          </p>
          <p>
            As a youth I was an avid reader, delving into the bodies of work by such authors as
            Robert Heinlein, Ben Bova, Robert Asprin, Lynn Abbey, and Gene Wolfe. As an adult,
            I have begun to enjoy searching out classic writing from authors like John
            Steinbeck, Thomas Wolfe, and Henry Miller. The clear trend is that I began with a taste for
            fantasy and science fiction, and have developed towards an appreciation for historical fiction.
          </p>
          <p>
            In my working career, I strive towards positions of greater challenge and responsibility.
            Formally educated in Geography from the University of Washington (with a strong background in science
            and mathematics), work with geo-spatial data is at the core of my accomplishments thus far. 
            Through vendor positions, I have curated geographic information for both Apple and Microsoft.
            Some of my additional experiences include working for civil engineers and a GIS startup. Also
            valuable is my time working in a kitchen, manufacturing perscription glasses, and teaching English in Japan.
          </p>
          <p>
            My objective is to develop skills and experience which will contribute to solving the problems faced
            in our global community.
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
