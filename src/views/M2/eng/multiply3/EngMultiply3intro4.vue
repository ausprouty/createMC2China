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
<h1>Period 4: Training Leaders for New Movement Centers</h1>
<div id="showVideoOptions"></div>
  <p><img alt="" src="@/assets/images/eng/multiply3/Trip2.png" />&nbsp;</p>

<p>(2nd Missionary Journey from Antioch) [49 - 51 AD]</p>

<h2>Summary</h2>

<p>This period covers the journey of the second mission team that was sent from Antioch. It is marked by new provincial centers being opened to the gospel, growing movements of disciple making, and additional Kingdom laborers being raised up.</p>

<h2>Letters written during this Period</h2>

<ul>
	<li>1 Thessalonians, 50/51 AD</li>
	<li>2 Thessalonians, 50/51 AD</li>
</ul>



</div><!--- Created by publishPage-->

  <Footer/>
</template>
