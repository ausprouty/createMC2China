<script>

import { useCheckPermissions } from "@/assets/javascript/permission.js"
import Footer from '@/components/FooterGlobal.vue'


export default {
  components: {
    Footer,

  },
  methods:{
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
    checkPermissions(){
      useCheckPermissions();
    }
   },
   mounted(){
    console.log ('in mounted checking permissions')
    this.checkPermissions()
   }

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
  <div class="card-link" @click="vuePush('eng-seek-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/images/eng/standard/Seeking-Jesus.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('eng-multiply1-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/images/eng/standard/Multiply1.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('eng-multiply2-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/images/eng/standard/Multiply2.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('eng-multiply3-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/images/eng/standard/Multiply3.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
<!-- begin mc2 sdcard bookImage -->
<div class="Xapp-link">
  <div class="card-link" @click="vuePush('eng-tc-index')">
    <div class="Xapp-card -Xshadow">
      <img src="@/assets/images/eng/standard/TransferableConcepts.png" class="book-large" />
    </div>
  </div>
</div>
<!-- end mc2 sdcard bookImage -->
This is looking for special
    </div>
    <Footer/>
</div>
<!-- end default library -->
</template>
<!--- Created by publishLibrary-->
