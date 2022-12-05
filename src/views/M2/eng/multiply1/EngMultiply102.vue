<!--- publishFiles added onLoad -->
<script>
import { useAddNote, useShowNotes} from "@/assets/javascript/notes.js";
import { useFindSummaries, useFindCollapsible, usePopUp } from "@/assets/javascript/app.js";
import { useRevealVideo } from "@/assets/javascript/revealVideo.js";
import Footer from '@/components/FooterGlobal.vue';

export default {
  components: {
    Footer
  },

  methods:{
    addNote(){
      useAddNote(this.$route.name)
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
  mounted () {
    useShowNotes(this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealVideo()
  }
}
</script>
<template>
  <div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>2.</h1></div>
                        <div class="chapter_title ltr"><h1>Relationship and Fellowship</h1></div>
                    </div>
<div id="showVideoOptions"></div>


  <!-- Lesson 2: Relationship and Fellowship -->
<div class="lesson"><img class="lesson-icon" src="@assets/images/look-back.png" />
<div class="lesson-subtitle"><span class="back">LOOKING BACK</span></div>
</div>

<div id="Summary0" class="summary"><h2 class="back">+ Praise</h2></div>
<div class="collapsed" id ="Text0">

<p class="back">Psalm 48:9 &ldquo;O Lord, we meditate on your unfailing love as we worship you.&rdquo;</p>

<ul class="back">
	<li>Let&#39;s pause and tell Jesus how thankful we are for His love for us.</li>
</ul>

</div>

<ul class="back">
</ul>

<h2 class="back">Caring for each other</h2>

<ul class="back">
	<li>What is one highlight from this week?</li>
	<li>What is one challenge from this past week?</li>
	<li>What do you want Jesus to do for you this week?</li>
	<li>Pray for each other&rsquo;s needs.</li>
</ul>

<h2 class="back">Celebrating God&#39;s Faithfulness</h2>

<ul class="back">
	<li>What happened as you trusted God with your goals and <em>I will</em> statements?</li>
</ul>

<div id="Summary1" class="summary"><h2 class="back">+ Motivation and Encouragement</h2></div>
<div class="collapsed" id ="Text1">

<ul>
	<li class="nobreak-final-final">When we accept Christ, our lives are changed forever. <span class="popup-link" @click = "popUp('pop1')"> 2 Corinthians 5:17</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<div>
	<p><sup class="versenum">17&nbsp;</sup>Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!</p>
	</div>
	</div>
	<!-- end bible --></div>
	says, anyone who belongs to Christ is a new creation, the old life has gone, and a new life has begun! That&rsquo;s us! We are new creations and as we follow Christ, our lives will continue to change to be full of purpose and meaning. Let&#39;s encourage each other with this truth as we journey together in this new life.</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@assets/images/look-up.png" />
<div class="lesson-subtitle"><span class="up">LOOKING UP</span></div>
</div>

<div id="Summary2" class="summary"><h2 class="up">+ Context</h2></div>
<div class="collapsed" id ="Text2">

<p class="up">Those who are looked down on in society had been responding to Jesus&rsquo; teaching. The religious leaders (Pharisees) and the teachers of the religious law didn&rsquo;t like Jesus associating with these people. So Jesus told a story about a lost son to explain God&rsquo;s heart towards sinners.</p>

</div>

<h2 class="up">Read</h2>

<ul>
	<li class="up">Read or watch Luke 15:11-24 two times as everyone listens</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Read Luke 15:11-24</button><div class="collapsed" id ="Text0">

<p><sup>11&nbsp;</sup>Jesus continued: &ldquo;There was a man who had two sons.<sup class="versenum">12&nbsp;</sup>The younger one said to his father, &lsquo;Father, give me my share of the estate.&rsquo; So he divided his property between them.</p>

<p><sup class="versenum">13&nbsp;</sup>&ldquo;Not long after that, the younger son got together all he had, set off for a distant country and there squandered his wealth in wild living.<sup class="versenum">14&nbsp;</sup>After he had spent everything, there was a severe famine in that whole country, and he began to be in need.<sup class="versenum">15&nbsp;</sup>So he went and hired himself out to a citizen of that country, who sent him to his fields to feed pigs.<sup class="versenum">16&nbsp;</sup>He longed to fill his stomach with the pods that the pigs were eating, but no one gave him anything.</p>

<p><sup class="versenum">17&nbsp;</sup>&ldquo;When he came to his senses, he said, &lsquo;How many of my father&rsquo;s hired servants have food to spare, and here I am starving to death!<sup class="versenum">18&nbsp;</sup>I will set out and go back to my father and say to him: Father, I have sinned against heaven and against you.<sup class="versenum">19&nbsp;</sup>I am no longer worthy to be called your son; make me like one of your hired servants.&rsquo;<sup class="versenum">20&nbsp;</sup>So he got up and went to his father.</p>

<p>&ldquo;But while he was still a long way off, his father saw him and was filled with compassion for him; he ran to his son, threw his arms around him and kissed him.</p>

<p><sup class="versenum">21&nbsp;</sup>&ldquo;The son said to him, &lsquo;Father, I have sinned against heaven and against you. I am no longer worthy to be called your son.&rsquo;</p>

<p><sup class="versenum">22&nbsp;</sup>&ldquo;But the father said to his servants, &lsquo;Quick! Bring the best robe and put it on him. Put a ring on his finger and sandals on his feet.<sup class="versenum">23&nbsp;</sup>Bring the fattened calf and kill it. Let&rsquo;s have a feast and celebrate.<sup class="versenum">24&nbsp;</sup>For this son of mine was dead and is alive again; he was lost and is found.&rsquo; So they began to celebrate.</p>
<!-- end bible -->Read More </a>

</div>

<button id="MC2/eng/video/multiply1/102.mp4" type="button" class="external-movie">
         Watch &nbsp;"Luke 15:11-24"&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discovery Discussion (Everyone answers)</h2>

<ul class="up">
	<li>What caught your attention (or what did you like best) and why?</li>
	<li>What did you learn about Jesus?</li>
	<li>What did you learn about people?</li>
	<li>How will you obey Jesus now that you know this?</li>
</ul>


    <div class="note-div">
        <form class = "auto_submit_item">
            <textarea class="textarea resize-ta" onkeyup= "addNote('note1Text')"  id ="note1Text"></textarea></div>

<h2 class="up">Read, Tell and Correct</h2>

<ul class="up">
	<li>Read the story again. Have someone tell the story and ask the group to correct if necessary.</li>
</ul>

<div id="Summary3" class="summary"><h2 class="up">+ Summary</h2></div>
<div class="collapsed" id ="Text3">

<p class="up">Our heavenly Father is willing to forgive the sins of His children. Our sin does not change the fact that God is our Father. But sin does have consequences and it does affect our fellowship with God. We do not enjoy our Father. 1 John 1:9 assures us, &quot;If we confess our sins, He is faithful and just and will forgive us our sins and purify us from all wickedness.&quot;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@assets/images/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">LOOKING FORWARD</span></div>
</div>

<div id="Summary4" class="summary"><h2 class="forward">+ Preparing for Mission</h2></div>
<div class="collapsed" id ="Text4">

<p class="forward">God has called us to respond to His love by praying for people and caring for their needs.</p>

<ul class="forward">
	<li>Review your Oikos List and add additional people if needed</li>
	<li>Practice sharing the gospel and leading someone to pray to receive Christ</li>
	<li>Remember what to do when someone says YES to the gospel.</li>
</ul>

</div>

<ul class="forward">
</ul>

<h2 class="forward">Going on the Mission</h2>

<ul class="forward">
	<li>Identify 5 people from your Oikos List with whom you will tell the story or share the gospel with this week. (use &quot;I will __ by __&quot;)</li>
</ul>


    <div class="note-div">
        <form class = "auto_submit_item">
            <textarea class="textarea resize-ta" onkeyup= "addNote('note2Text')"  id ="note2Text"></textarea></div>

<div class="for-enrichment">
<p>For further enrichment: Read <a id = "Return1" href="#" onclick="goToPageAndSetReturn('../tc/tc02.html', '#Return1');">Transferable Concept #2: </a> and discuss with another group member.</p>
</div>


<!--- Language Specific Javascripts-->
<script src="../javascript/mc2VideoOptions.js"></script>

</div><form>
<input type="hidden" name ="notes_page"  id ="notes_page" value="M2-eng-multiply1-multiply102.html">
</form><!--- Created by publishPage-->
</div>
  <Footer/>
</template>
