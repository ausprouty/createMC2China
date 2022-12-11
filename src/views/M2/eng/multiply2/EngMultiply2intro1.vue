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
    pageGoBack(){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage");
        vuePush(returnto)
      }
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
<h1>Period 1 -- Preparation</h1>
<div id="showVideoOptions"></div>


  <p class="year">
        <script src="sites/default/javascript/pinch-zoom.js"></script>
        <script src="sites/default/javascript/myZoom.js"></script>
        <div class="page pinch-zoom-parent offscreen" id="pinch-zoom-parent">
            <div class="pinch-zoom-close" onclick="zoomClose()">
                <input type="hidden" id="pinch-zoom-id" value="0">
                <img class="close" src="sites/default/images/close.png" />
            </div>
            <div class="pinch-zoom">
                <div><img  id="pinch-zoom-image"  src="@/assets/images/eng/multiply2/Period1.png" /></div>
            </div>
        </div>
        <div id = "pinch-zoom0" onclick="zoomShow('0', '@/assets/images/eng/multiply2/Period1.png', )">
             <img  alt="<img alt="Stage of Ministry" src="@/assets/images/eng/multiply2/Period1.png" />
        </div>
<!-- end linkInternal sdcard-->
</span><br />
Period 1: Preparation: around 4 B.C. &ndash; 26 AD</p>

<h2><br />
Preparing for a life and movement of multiplication</h2>

<p>This period lasts from Jesus&rsquo; birth around 4 BC to about 30 years of age. This period is characterized by the following:</p>

<ul>
	<li>Becoming the person He sought to multiply in others</li>
	<li>Preparing for a godly life and a movement of multiplication</li>
</ul>

<p>&nbsp;</p>

<ul>
	<li class="nobreak-final-final">Over the first 30 years of His life, Jesus &ldquo;grew and became&rdquo; (<span class="popup-link" @click = "popUp('pop1')"> Luke 2:40</span>,&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">40&nbsp;</sup>And the child grew and became strong; he was filled with wisdom, and the grace of God was on him.</p>
	</div>
	</div>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop2')"> &nbsp;Luke 2:51-52</span>)&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">51&nbsp;</sup>Then he went down to Nazareth with them and was obedient to them. But his mother treasured all these things in her heart.<sup class="versenum">52&nbsp;</sup>And Jesus grew in wisdom and stature, and in favor with God and man.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;the Person He was going to multiply in others. All of this took place before His public ministry started. It was evident, from the beginning of His ministry, that Jesus had been praying, planning and clarifying what His ministry would be and how He would do it.</li>
</ul>

<p>The passion of His heart was pure. His purpose was clear. The ministry process He decided on was simple. He would connect with the lost, win them to Himself, build them in what it means to be a follower, train them in fishing for others and send them to multiply the same process with others.<br />
Jesus determined that He would seek out and work through the people His Father had prepared.</p>



</div><!--- Created by publishPage-->
</div>
  <Footer/>
</template>
