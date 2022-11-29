
export function revealVideo() {
  console.log ('videoReveal');
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
        //plyr.setup('#video')
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

/* consider
 <a href="javascript:void(0);" onclick="shareVideo([video])">
                <img class="social" src="/content/M2/images/standard/share_video.png" />
            </a>
*/