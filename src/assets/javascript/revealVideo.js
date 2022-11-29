 import { File } from '@awesome-cordova-plugins/file';
 import { FilePath } from '@awesome-cordova-plugins/file-path';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic';

export async function revealVideo() {
  console.log ('before await');
  /*
  await Diagnostic.getExternalSdCardDetails().then(async (data2)=>{
      console.log ('here is the video data')
      console.log (data2)
      console.log (data2[0].path)
      console.log ('end of the video data')
  }).catch(error=>{
      console.log("error getExternalSdCardDetails")
      console.log(error);
  });
  */
  await Diagnostic.isExternalStorageAuthorized().then(async (data2)=>{
      console.log ('is authorized?')
      console.log (data2)
      console.log ('end of is authorized?')
  }).catch(error=>{
      console.log("error authorized")
      console.log(error);
  });
  console.log ('after awaits');

  var template =`  <video id="video" width="100%" controls="controls" preload="metadata" autoplay="autoplay"
        webkit-playsinline="webkit-playsinline" class="videoPlayer">
        <source src="video/ZZZ.mp4" type="video/mp4">`;
  var coll = document.getElementsByClassName('external-movie')
  var i
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function () {
      console.log ('revealing Video');
      this.classList.toggle('active')
      var id= this.id
      var content = this.nextElementSibling
      if (this.classList.contains('active') ){
        var video = template.replace('ZZZ', id)
        content.innerHTML = video
        content.classList.remove('collapsed')
      } else {
        content.classList.add('collapsed')
        content.innerHTML =''
      }
    })
  }
}
