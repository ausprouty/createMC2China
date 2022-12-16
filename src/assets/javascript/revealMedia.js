import { Filesystem } from '@capacitor/filesystem';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic';
import { Capacitor } from '@capacitor/core';

export async function useRevealMedia(series_path) {
  await Diagnostic.isExternalStorageAuthorized().then(async (response)=>{
    console.log ('revealMedia says external storage is Authorized for someone')
    console.log (response)
    console.log ('bob is a genious')
     if (response == true){
      setupMediaListeners()
      console.log (findExternalStoragePath())
     }
     else{
        hideMedia();;
     }
  }).catch(error=>{
      console.log("error authorized")
      console.log(error);
  });

  function setupMediaListeners(){
    let class_name = 'external-movie'
    let template =`
      <video id="video[i]" width="100%" controls="controls" preload="metadata" autoplay="autoplay"
          webkit-playsinline="webkit-playsinline" class="videoPlayer">
          <source src="[url]" type="video/mp4">
      `
    setupMediaListener( class_name, template)
    class_name = 'external-audio'
    template =`
    <audio id="audio[i]" width="100%" controls >
          <source src="[url]" type="audio/mpeg">
          Your browser does not support the audio element.
    </audio>
    `
    setupMediaListener( class_name, template)

  }
  function setupMediaListener(class_name, template){
    var coll = document.getElementsByClassName(class_name)
    var i
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', async function () {
        console.log ('revealing Media');
        this.classList.toggle('active')
        var id= this.id
        var filePath= localStorage.getItem('sd_filepath')+ id
        var readable = await canRead(filePath)
        console.log(readable)
         var content = this.nextElementSibling
        if (readable){
          var url = localStorage.getItem('sd_url')+ id
          if (this.classList.contains('active') ){
            let temp = template.replace('[url]', url)
            let media = temp.replace('[i]', i)
            content.innerHTML = media
            console.log (media)
            content.classList.remove('collapsed')
          } else {
            content.classList.add('collapsed')
            content.innerHTML =''
          }
        }
       if (!readable){
          if (this.classList.contains('active') ){
            content.innerHTML = filePath + 'not found on SD Card'
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

  function hideMedia(){
    console.log ('I am hiding media')
    var coll = document.getElementsByClassName('external-movie')
    var i
    for (i = 0; i < coll.length; i++) {
      coll[i].remove();
    }
    var coll = document.getElementsByClassName('external-audio')
    var i
    for (i = 0; i < coll.length; i++) {
      coll[i].remove();
    }
  }

  async function findExternalStoragePath(){
    await Diagnostic.getExternalSdCardDetails().then(async (response)=>{
      var sd_path =  response[0].filePath;
      localStorage.setItem('sd_filepath', sd_path)
      var sd_url= Capacitor.convertFileSrc(sd_path)
      localStorage.setItem('sd_url', sd_url)
      return sd_url
    }).catch(error=>{
      console.log("error getExternalSdCardDetails")
      console.log(error);
    });
  }


}
