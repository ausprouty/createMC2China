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
    <div class="nav full internal-link" @click="this.pageGoBack('eng-multiply2-index')">
        <img src="@/assets/images/ribbons/back-ribbon-mc2.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<h1>Period 5 -- Leadership Multiplication </h1>
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
                <div><img  id="pinch-zoom-image"  src="@/assets/images/eng/multiply2/Period5.png" /></div>
            </div>
        </div>
        <div id = "pinch-zoom0" onclick="zoomShow('0', '@/assets/images/eng/multiply2/Period5.png', )">
             <img  alt="Stage of Ministry" src="@/assets/images/eng/multiply2/Period5.png" />
        </div>
<!-- end linkInternal sdcard-->
</span></p>

<p class="year">Period 5: Leadership Multiplication:&nbsp;around Late 28 AD &ndash; Spring 30 AD</p>

<p><br />
Multiplication of the movement: prayerfully selecting and developing new leaders, sending proven multipliers to continue as movement building leaders</p>

<ul>
	<li class="nobreak-final-final">This period lasts for about 15 months and begins with the appointing of the Twelve as Apostles. The Apostles become &ldquo;leaders in training&rdquo; within the larger group of ministry workers. There is still a larger group of followers and seekers (<span class="popup-link" @click = "popUp('pop1')"> Luke 6:12-19</span>).&nbsp;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<h3>The Twelve Apostles</h3>

	<p><sup class="versenum">12&nbsp;</sup>One of those days Jesus went out to a mountainside to pray, and spent the night praying to God.<sup class="versenum">13&nbsp;</sup>When morning came, he called his disciples to him and chose twelve of them, whom he also designated apostles:<sup class="versenum">14&nbsp;</sup>Simon (whom he named Peter), his brother Andrew, James, John, Philip, Bartholomew,<sup class="versenum">15&nbsp;</sup>Matthew, Thomas, James son of Alphaeus, Simon who was called the Zealot,<sup class="versenum">16&nbsp;</sup>Judas son of James, and Judas Iscariot, who became a traitor.</p>

	<p><sup class="versenum">17&nbsp;</sup>He went down with them and stood on a level place. A large crowd of his disciples was there and a great number of people from all over Judea, from Jerusalem, and from the coastal region around Tyre and Sidon,<sup class="versenum">18&nbsp;</sup>who had come to hear him and to be healed of their diseases. Those troubled by impure spirits were cured,<sup class="versenum">19&nbsp;</sup>and the people all tried to touch him, because power was coming from him and healing them all.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;The Twelve are the fruit of Jesus&rsquo; deliberate selection, appointment, training and personal investment. This is further demonstrated after Pentecost through the Kingdom expansion captured in the Book of Acts.</li>
	<li class="nobreak-final-final">Later in this period, Jesus sent out 72&nbsp;others (<span class="popup-link" @click = "popUp('pop2')"> Luke 10:1</span>) .
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">1 </sup>After this the Lord appointed seventy-two others and sent them two by two ahead of him to every town and place where he was about to go.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;Even though they were not given the same formal leadership status within the Gospel record as the Twelve, they too were commissioned as &ldquo;apostles&rdquo; (i.e. sent ones). We see the built-in multiplication of leaders as this new group was commanded to pray for the next generation of workers that would be raised up through their work (<span class="popup-link" @click = "popUp('pop3')"> Luke 10:2</span>).&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">2&nbsp;</sup>He told them, &ldquo;The harvest is plentiful, but the workers are few. Ask the Lord of the harvest, therefore, to send out workers into his harvest field.</p>
	</div>
	</div>
	<!-- end bible --></div>
	&nbsp;No doubt many of these un-named 72&nbsp;missionaries were present in the early church, among the 120 in the upper room and included among the 500 people Jesus appeared to after His resurrection (<span class="popup-link" @click = "popUp('pop4')"> 1 Corinthians 15:6</span>).&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">6&nbsp;</sup>After that, he appeared to more than five hundred of the brothers and sisters at the same time, most of whom are still living, though some have fallen asleep.</p>
	</div>
	</div>
	<!-- end bible --></div>
	</li>
</ul>



</div><!--- Created by publishPage-->

  <Footer/>
</template>
