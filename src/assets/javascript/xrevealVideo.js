import { Filesystem } from '@capacitor/filesystem';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic';
import { Capacitor } from '@capacitor/core';

export async function useRevealVideo(series_path) {
  await Diagnostic.isExternalStorageAuthorized().then(async (response)=>{
    console.log ('revealVideo says external storage is Authorized')
     if (response == true){
      setupListeners()
      console.log (findExternalStoragePath(series_path))
     }
     else{
        hideVideos();
     }
  }).catch(error=>{
      console.log("error authorized")
      console.log(error);
  });

   function setupListeners(){
    var template =`  <video id="video" width="100%" controls="controls" preload="metadata" autoplay="autoplay"
        webkit-playsinline="webkit-playsinline" class="videoPlayer">
        <source src="ZZZ.mp4" type="video/mp4">`;
    var coll = document.getElementsByClassName('external-movie')
    var i
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', async function () {
        console.log ('revealing Video');
        this.classList.toggle('active')
        var id= this.id
        var filePath= localStorage.getItem('video_filepath')+ id + '.mp4'
        var readable = await canRead(filePath)
        console.log(readable)
         var content = this.nextElementSibling
        if (readable){
          var video_url = localStorage.getItem('video_url')+ id

          if (this.classList.contains('active') ){
            var video = template.replace('ZZZ', video_url)
            content.innerHTML = video
            console.log (video)
            content.classList.remove('collapsed')
          } else {
            content.classList.add('collapsed')
            content.innerHTML =''
          }
        }
       if (!readable){
          if (this.classList.contains('active') ){
            content.innerHTML = 'Video files not found on SD Card'
            content.classList.remove('collapsed')}
          else{
            content.classList.add('collapsed')
            content.innerHTML =''
          }
        }
      })
    }
  }
  async function canRead(file_name){
    await Filesystem.stat({
      path: file_name
    }).then(async (response) =>{
    console.log ('can read')
    console.log (JSON.stringify(response) )
    return true
    }).catch(error=>{
      console.log("error canRead")
      console.log(error);
      return false
    });
  }

  function hideVideos(){
    console.log ('I am hiding videos')
    var coll = document.getElementsByClassName('external-movie')
    var i
    for (i = 0; i < coll.length; i++) {
      coll[i].remove();
    }
  }
  //path: "/M2/eng/multiply1/multiply101",
  async function findExternalStoragePath(series_path){
    await Diagnostic.getExternalSdCardDetails().then(async (response)=>{
      var sdpath =  response[0].filePath;
      var video_path = sdpath + series_path
      localStorage.setItem('video_filepath', video_path)
      var video_url= Capacitor.convertFileSrc(video_path)
      localStorage.setItem('video_url', video_url)
      return video_url
    }).catch(error=>{
      console.log("error getExternalSdCardDetails")
      console.log(error);
    });
  }


}
