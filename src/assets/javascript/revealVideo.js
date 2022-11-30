 import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic';
import { Capacitor } from '@capacitor/core';

export async function revealVideo() {
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
      coll[i].addEventListener('click', async function () {
        console.log ('revealing Video');
        this.classList.toggle('active')
        var id= this.id
        var filePath= localStorage.getItem('video_filepath')+ id + '.mp4'
        var readable = await canRead(filePath)
        console.log(readable)
        if (readable){
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
        }
        else{
           content.innerHTML = 'Video files not found on SD Card'
           content.classList.remove('collapsed')
        }

      })
    }
  }
  async function canRead(file_name){
    let readable = await Filesystem.stat({
      path: file_name
    });
    console.log ('can read')
    console.log (JSON.stringify(readable) )
    console.log (readable.size)
    var can_read= false
    if (typeof(readable.size) !== undefined){
      can_read = true
    }
    return can_read
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
    await Diagnostic.getExternalSdCardDetails().then(async (response)=>{
      var path =  response[0].filePath;
      var video_path = path + '/MC2/video/'
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
