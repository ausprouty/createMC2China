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
<h1>Conclusion</h1>
<div id="showVideoOptions"></div>


  <p>During his time in Rome, Paul continued coaching and mentoring believers in Philippi, Colossae and Ephesus through letter writing. Paul also wrote a personal letter to a church leader in Colossae named Philemon. This letter reveals that Paul anticipated being released (<span class="popup-link" @click = "popUp('pop1')"> Philemon 1:22</span>).&nbsp;</p>

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">22&nbsp;</sup>And one thing more: Prepare a guest room for me, because I hope to be restored to you in answer to your prayers.</p>
</div>
</div>
<!-- end bible --></div>

<p>Church history shows us that Paul was indeed released from prison and did more missionary travel (<span class="popup-link" @click = "popUp('pop2')"> Titus 3:12</span>,&nbsp;</p>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">12&nbsp;</sup>As soon as I send Artemas or Tychicus to you, do your best to come to me at Nicopolis, because I have decided to winter there.</p>
</div>
</div>
<!-- end bible --></div>

<p><span class="popup-link" @click = "popUp('pop3')"> 2 Timothy 4:20</span>).&nbsp;</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<div>
<p><sup class="versenum">20&nbsp;</sup>Erastus stayed in Corinth, and I left Trophimus sick in Miletus.</p>
</div>
</div>
<!-- end bible --></div>

<p>He continued church planting and wrote three more personal letters to leaders he had developed.</p>

<p>&nbsp;</p>

<p><br />
Letters written after this period</p>

<ul>
	<li>First Letter to Timothy, 64-64 AD</li>
	<li>First Letter from Peter, 64-65 AD</li>
	<li>Titus, 64-65 AD</li>
	<li>Second Letter to Timothy, 66-67 AD</li>
	<li>Second Letter from Peter, 66-67 AD</li>
	<li>Letter to the Hebrews, late 60&rsquo;s</li>
	<li>Letter from Jude, late 60&rsquo;s</li>
</ul>

<p><br />
Paul and Peter are both killed around 67 AD after their second letters are written around:</p>

<ul>
	<li>First Letter from John, 80-95 AD</li>
	<li>Second Letter from John, 80-95 AD</li>
	<li>Third Letter from John, 80-95 AD</li>
	<li>Letter of Revelation, 80-95 AD</li>
</ul>



</div><!--- Created by publishPage-->
</div>
  <Footer/>
</template>
