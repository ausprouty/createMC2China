<script>
import Footer from '@/components/FooterGlobal.vue'

export default {
  components: {
    Footer
  },
  methods:{
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
    <div>
      
    </div>
    <div>
      <!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('eng-hope-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/images/standard/Stories-of-Hope.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('eng-prophet-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/images/standard/Stories-of-the-Prophets.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->

    </div>
    <Footer/>
</div>
<!-- end default library -->
</template>
<!--- Created by publishLibrary-->
