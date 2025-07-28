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

          <p>
            Probably a lot of good things! Such as:
          </p>
          <ul>
            <li> Lit-Review: Marcus Arelius' Meditations </li>
            <li> Lit-Review: Edwin A Abbott's Flatland </li>
            <li> Bitburner Introduction </li>
            <li> Bitburner matplotlib charts </li>
            <li> Exploring the Adafruit GPS chip </li>

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
