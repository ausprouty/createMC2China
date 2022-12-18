<script>

import { Diagnostic } from '@awesome-cordova-plugins/diagnostic';
import { Capacitor } from '@capacitor/core';
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
    checkPermissions () {
      usecheckPermissions()
    },
    indexAskExternalMediaAuthorization(){
      Diagnostic.requestExternalStorageAuthorization().then((data) => {
        console.log('I have requested authorization')
        console.log(data);

      }).catch(error => {
        console.log(error);
      });
    },
    async mounted () {
      await Diagnostic.isExternalStorageAuthorized().then(async (response) => {
        console.log('revealMedia is looking for external storage')
        if (response == true) {
          console.log('You are authorized to see External Storage')
        }
        else {
          console.log('You are NOT authorized to see External Storage')
          this.indexAskExternalMediaAuthorization()
          console.log('You are asked for  authorization to see External Storage')
        }
      }).catch(error => {
        console.log("error - You can not check External Storage")
        console.log(error);
      });
   },
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

    </div>
    <Footer/>
</div>
<!-- end default library -->
</template>
<!--- Created by publishLibrary-->
