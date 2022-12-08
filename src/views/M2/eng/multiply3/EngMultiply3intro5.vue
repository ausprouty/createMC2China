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
      useGoToPageAndSetReturn(goto, this.$route.name)
    },
    pageGoBack(){
      usePageGoBack()
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
  <div>
<div class="page_content ltr">
<h1>Period 5: Sending, Multiplying and Coaching Movements</h1>
<div id="showVideoOptions"></div>


  <h2>3rd Missionary Journey from Antioch</h2>

<p><img alt="" src="@/assets/eng/multiply3/Trip3.png" /></p>

<p>[52 -57 AD]</p>

<h2>Summary</h2>

<p>This period covers about five years. Several movement centers have already been multiplying disciples and churches for over 6 years. During this period, a large mission-sending movement center is established in Ephesus. While church planting work is taking root in Ephesus, leaders are being sent out and existing churches are being coached. The period is marked by daily training, dramatic miracles, letter writing and Kingdom expansion so that the entire Eastern part of the Roman Empire can eventually be reached.</p>

<h2>Letters written during this period</h2>

<ul>
	<li>1 Corinthians, 55 AD</li>
	<li>2 Corinthians, 56 AD</li>
	<li>Romans, 57 AD</li>
</ul>



</div><!--- Created by publishPage-->
</div>
  <Footer/>
</template>
