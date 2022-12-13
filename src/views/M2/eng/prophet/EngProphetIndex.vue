<script>
import Footer from '@/components/FooterGlobal.vue'

export default {
  components: {
    Footer
  },
  methods:{
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
}
</script>
<template>
  <!-- sdcard template from mc2 -->

<div class="page_content" dir="ltr">
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('eng-index')">
        <img src="@/assets/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
  <div  class="app-series-header">
    <img src="@/assets/images/standard/Stories-of-the-Prophets.png" class="app-series-header" />
  </div>
  <div>
    These stories allow a group to have a safe place to explore questions about life and God.  These stories show how prophets  prepared the way of Jesus.
  </div>
  <br />
  <br />
  <!-- begin chapters -->
    <!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('eng-prophet01')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">1.</div>
                            <div class="chapter_title series ltr">The Prophet Adam</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr">Genesis 2:15-3:21</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('eng-prophet02')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">2.</div>
                            <div class="chapter_title series ltr">The Prophet Noah</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr">Genesis 6:9 – 8:22</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('eng-prophet03')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">3.</div>
                            <div class="chapter_title series ltr">The Prophet Abraham</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr">Genesis 12:1-8, Genesis 15:1-6, Genesis 22:1-19</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('eng-prophet04')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">4.</div>
                            <div class="chapter_title series ltr">The Prophet Moses</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr">Exodus 12:1-12, Exodus 12:28-30</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('eng-prophet05')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">5.</div>
                            <div class="chapter_title series ltr">The Prophets David and Isaiah</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr">Isaiah 53, Psalm 2</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('eng-prophet06')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">6.</div>
                            <div class="chapter_title series ltr">Birth and Purpose of Jesus</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr">Luke 1:26-38, Luke 2:1-20</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('eng-prophet07')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">7.</div>
                            <div class="chapter_title series ltr">Jesus is Powerful</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr">Luke 5:17-26</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('eng-prophet08')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">8.</div>
                            <div class="chapter_title series ltr">Jesus is Glorified </div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr">Luke 23:26-24:7, 35-36</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->
<!-- begin mc2 sdcard chapterText-->
<div class="app-link">
  <div class="card-link" @click="vuePush('eng-prophet09')">
    <div class="app-card -shadow">
      <div class="chapter ltr ">
        <div class="chapter-title ltr">
                    <!-- chapter title begin -->
                        <div class="block ltr">
                            <div class="chapter_number series ltr">9.</div>
                            <div class="chapter_title series ltr">We Have a Choice</div>
                        </div>
                    <!-- chapter title end -->
</div>
        <div class="chapter-description ltr">John 3:1-21</div>
      </div>
    </div>
  </div>
</div>
<!-- end mc2 sdcard chapterText-->

   <!-- end chapters -->
  <div>
    <Footer/>>
  </div>
</div>
</template>
<!--- Created by publishSeries-->
