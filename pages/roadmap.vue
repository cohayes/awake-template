<template>
  <div id="roadmap-page" class="page-wrapper roadmap-page content-page">
    <site-hero
      title="Upcoming Features"
      subtitle=""
      image="/uploads/packing.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>What's ahead</h3>
          <ul>
            <li> Now building: A Dosadi soup kitchen (Python and Unity) <https://github.com/cohayes/soup-kitchen> </li>
            <li> Next: Bitburner Refinement (JavaScript and Python.matplotlib) </li>
            <li> Later: Marcus Arelius' Meditations (Writing) </li>
            <li> Later: Edwin A Abbott's Flatland (Writing) </li>
            <li> Later: Exploring the Adafruit GPS chip (Python and C++) </li>

          </ul>
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
      title: `Roadmap | ${this.$siteConfig.siteName}`
    }
  },
  components: { QuoteCard }
}
</script>
