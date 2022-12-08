import { Filesystem } from '@capacitor/filesystem';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic';
import { Capacitor } from '@capacitor/core';

export async function useRevealAudio(series_path) {
  await Diagnostic.isExternalStorageAuthorized().then(async (response)=>{
    console.log ('revealAudio says external storage is Authorized')
     if (response == true){
      setupListeners()
      console.log (findExternalAudioStoragePath(series_path))
     }
     else{
        hideAudios();
     }
  }).catch(error=>{
      console.log("error authorized")
      console.log(error);
  });

   function setupListeners(){
    var template =`  <Audio id="audio" width="100%" controls="controls" preload="metadata" autoplay="autoplay"
        webkit-playsinline="webkit-playsinline" class="AudioPlayer">
        <source src="ZZZ.mp3" type="Audio/mp3">`;
    var coll = document.getElementsByClassName('external-audio')
    var i
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', async function () {
        console.log ('revealing Audio');
        this.classList.toggle('active')
        var id= this.id
        var filePath= localStorage.getItem('Audio_filepath')+ id + '.mp3'
        var readable = await canRead(filePath)
        console.log(readable)
         var content = this.nextElementSibling
        if (readable){
          var audio_url = localStorage.getItem('audio_url')+ id

          if (this.classList.contains('active') ){
            var Audio = template.replace('ZZZ', audio_url)
            content.innerHTML = Audio
            console.log (Audio)
            content.classList.remove('collapsed')
          } else {
            content.classList.add('collapsed')
            content.innerHTML =''
          }
        }
       if (!readable){
          if (this.classList.contains('active') ){
            content.innerHTML = 'Audio files not found on SD Card'
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

  function hideAudios(){
    console.log ('I am hiding Audios')
    var coll = document.getElementsByClassName('external-movie')
    var i
    for (i = 0; i < coll.length; i++) {
      coll[i].remove();
    }
  }

  async function findExternalAudioStoragePath(){
    await Diagnostic.getExternalSdCardDetails().then(async (response)=>{
      var path =  response[0].filePath;
      var Audio_path = path + '/MC2/Audio/'
      localStorage.setItem('Audio_filepath', Audio_path)
      var audio_url= Capacitor.convertFileSrc(Audio_path)
      localStorage.setItem('audio_url', audio_url)
      return audio_url
    }).catch(error=>{
      console.log("error getExternalSdCardDetails")
      console.log(error);
    });
  }


}
