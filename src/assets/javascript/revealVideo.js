 import { File } from '@awesome-cordova-plugins/file';
 import { FilePath } from '@awesome-cordova-plugins/file-path';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic';
import { Capacitor } from '@capacitor/core';

export async function revealVideo() {
  console.log ('before await');
  /*

  */

  await Diagnostic.isExternalStorageAuthorized().then(async (response)=>{
    console.log ('revealVideo says external storage is Authorized')
     if (response == true){
      setupListeners()
      console.log (findExternalStoragePath())
     }
     else{
        hideVideos();
     }
  }).catch(error=>{
      console.log("error authorized")
      console.log(error);
  });
  console.log ('after awaits');

  function setupListeners(){
    var template =`  <video id="video" width="100%" controls="controls" preload="metadata" autoplay="autoplay"
        webkit-playsinline="webkit-playsinline" class="videoPlayer">
        <source src="ZZZ.mp4" type="video/mp4">`;
    var coll = document.getElementsByClassName('external-movie')
    var i
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function () {
        console.log ('revealing Video');
        this.classList.toggle('active')
        var id= this.id
        var video_url = localStorage.getItem('video_url')+ id
        var content = this.nextElementSibling
        if (this.classList.contains('active') ){
          var video = template.replace('ZZZ', video_url)
          content.innerHTML = video
          console.log (video)
          content.classList.remove('collapsed')
        } else {
          content.classList.add('collapsed')
          content.innerHTML =''
        }
      })
    }
  }
  function hideVideos(){
    console.log ('I am hiding videos')
    var coll = document.getElementsByClassName('external-movie')
    var i
    for (i = 0; i < coll.length; i++) {
      coll[i].remove();
    }
  }

  async function findExternalStoragePath(){
    console.log ('entered findExternalStorage')
    await Diagnostic.getExternalSdCardDetails().then(async (response)=>{
      var path =  response[0].filePath;
      var video_path = path + '/MC2/video/'
      var video_url= Capacitor.convertFileSrc(video_path)
      console.log (video_url)
      localStorage.setItem('video_url', video_url)
      return video_url
  }).catch(error=>{
      console.log("error getExternalSdCardDetails")
      console.log(error);
  });
  }


}
