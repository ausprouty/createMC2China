<script>
import { useAddNote, useShowNotes} from "@/assets/javascript/notes.js"
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useGoToPageAndSetReturn, usePageGoBack } from "@/assets/javascript/travel.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import Footer from '@/components/FooterGlobal.vue'

export default {
  components: {
    Footer
  },

  methods:{
    addNote(){
      useAddNote(this.$route.name)
    },
    goToPageAndSetReturn(goto){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: goto,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      vuePush(returnto)
    },
    popUp(verse){
      usePopUp(verse)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  mounted() {
    useFindSummaries()
    useFindCollapsible()
    let route_path = this.$route.path
    let last = route_path.lastIndexOf('/')
    let series_path = route_path.substr(0, last)
    console.log (series_path)
    useRevealMedia(series_path)
    useShowNotes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('eng--index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<h1>Period 6: Representing the Movement of Jesus</h1>
<div id="showVideoOptions"></div>
  <p><img alt="" src="@/assets/images/eng/multiply3/Trip4.png" /></p>

<p>[57- 62 AD]</p>

<h2>Summary:</h2>

<p>After laying the foundation of 6-7 movement centers across the eastern part of the Roman Empire, Paul&rsquo;s role now shifts to opportunities to defend the faith. This period is marked by long journeys, prison, dangerous circumstances, and legal defenses before the highest government leaders in Judea and Rome.</p>

<h2>Letters written during this period</h2>

<ul>
	<li>Colossians, 60-62 AD</li>
	<li>Philemon, 60-62 AD</li>
	<li>Ephesians, 60-62 AD</li>
	<li>Philippians, 60-62 AD</li>
</ul>



</div><!--- Created by publishPage-->

  <Footer/>
</template>
