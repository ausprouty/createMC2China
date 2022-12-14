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
      this.$router.push({
        name: returnto,
      })
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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply3-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<h1>Period 3: Expanding to New Territories</h1>
<div id="showVideoOptions"></div>
  <p>
        <script src="sites/default/javascript/pinch-zoom.js"></script>
        <script src="sites/default/javascript/myZoom.js"></script>
        <div class="page pinch-zoom-parent offscreen" id="pinch-zoom-parent">
            <div class="pinch-zoom-close" onclick="zoomClose()">
                <input type="hidden" id="pinch-zoom-id" value="0">
                <img class="close" src="sites/default/images/close.png" />
            </div>
            <div class="pinch-zoom">
                <div><img  id="pinch-zoom-image"  src="@/assets/images/eng/multiply3/Trip1.png" /></div>
            </div>
        </div>
        <div id = "pinch-zoom0" onclick="zoomShow('0', '@/assets/images/eng/multiply3/Trip1.png', )">
             <img  alt="" src="@/assets/images/eng/multiply3/Trip1.png" />
        </div></p>

<p>&nbsp;</p>

<p>(1st Missionary Journey from Antioch) [46-48 AD]</p>

<h2><br />
Summary</h2>

<p>This period covers the travel of the first mission team that the Spirit sent from the church in Antioch. It is marked by miracles, teaching in Synagogues, persecution and church planting among new peoples. Examples of making disciples in different context and situations are found in this period.</p>

<h2>Letters written during this Period</h2>

<ul>
	<li>Galatians, 48 AD</li>
</ul>



</div><!--- Created by publishPage-->

  <Footer/>
</template>
