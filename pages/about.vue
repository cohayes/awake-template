<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Who is it?"
      subtitle=""
      image="/uploads/vaina.png"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h3>Hello There</h3>

          <p>
            I'm a person with a passion for well written stories and games. Well written fictional spaces will
            invite the audience to empathize with the characters inhabiting that space, and join them in overcoming the 
            challenges those figures must tackle. When we, the audience, imagine ourselves in the shoes of a fictional
            protaganist, it develops problem solving skills and empathy as we puzzle through the journey those characters
            are undertaking and imagine why they must do so.
          </p>
          <p>
            Theoretical problem solving is an important first step to executing solutions of any complexity.
            Listing out the available resources, visualizing necessary steps, and imagining any possible outcomes, intended or otherwise,
            are all important parts to carrying out a successful plan of action. By imagining the lifecycle of any process
            (or fictional story) from start to finish, we are better prepared for undertaking those challenges firsthand.
          </p>
          <p>
            Further, I believe that solutions the general public believe to be feasible are those which they are most familiar
            with, or have spent the most time imagining. These "feasible solutions" to the general public are those most 
            visible in popular media. For this reason, I believe it is important for creative artists to emphasize 
            cooperation and non-violent problem solving in their commercial works whenever possible.
          </p>
          <h4>. . .</h4>
          <p>
            As a youth I read avidly, delving into bodies of work by authors such as
            Robert Heinlein, Ben Bova, Robert Asprin, Lynn Abbey, and Gene Wolfe. As an adult,
            I enjoy searching out classic writing from authors as John
            Steinbeck, Thomas Wolfe, Henry Miller, and more. The trend is that I began with joy for
            fantasy and science fiction, but have developed an appreciation for historical fiction.
          </p>
          <p>
            In my working career, I constantly strive towards positions of greater challenge and responsibility.
            Obtaining my major in Geography from the University of Washington with strong foundations in science
            and mathematics, geo-spatial data has been at the core of my pursuits thus far. 
            Through positions with vendors for Apple and Microsoft, I have curated datasets of geographic information.
            My accomplishments include taking on a team lead position for 20 map editors at the start of Covid lockdowns,
            and holding remote meetings and trainings with all of those members.
          </p>
          <p>
            Additional work experiences include drafting site plans for an ISP civil engineering company and drawing indoor maps
            at a GIS startup that aimed to provide "shelf-specific" accuracy to their clients. I also consider
            valuable my time spent manufacturing prescription glasses, working in a kitchen, and teaching English in Japan.
          </p>
          <p>
            If you'd like to message or connect with me on LinkedIn,
            my profile can be found <a href="https://www.linkedin.com/in/cohayes9/">here</a>.
          </p>
          <p>
            My current objective is to develop the skills and experiences that will position me
            for tackling problems faced by our global community.
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
