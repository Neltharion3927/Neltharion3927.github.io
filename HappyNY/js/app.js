function $$(selector, context) {
    context = context || document;
    var elements = context.querySelectorAll(selector);
    return Array.prototype.slice.call(elements);
}

$$('.circular').forEach(function(el) {
    var NS = "http://www.w3.org/2000/svg";
    var xlinkNs = "http://www.w3.org/1999/xlink";
    var svg = document.createElementNS(NS, "svg");
    var circle = document.createElementNS(NS, "path");
    var text = document.createElementNS(NS, "text");
    var textPath = document.createElementNS(NS, "textPath");
    svg.setAttribute("viewBox", "0 0 100 100");

    circle.setAttribute("d", "M0,50 a50,50 0 1,1 0,1z");
    circle.setAttribute("id", "circle");

    textPath.setAttributeNS(xlinkNs, 'xlink:href', '#circle');
    textPath.textContent = el.textContent;

    text.appendChild(textPath);
    svg.appendChild(circle);
    svg.appendChild(text);
    el.textContent = '';
    el.appendChild(svg);
});


window.onload = function(){
  var music = document.getElementById("music");
  var audio = document.getElementsByTagName("audio")[0];

  //当音乐停止时，停止转动
  audio.addEventListener("ended",function(event){
    music.setAttribute("class","");
  },false);

  //点击时，音乐停止
  // music.onclick = function(){
  //   if(audio.paused)
  //   {
  //     audio.play();
  //     //this.setAttribute("class","play");
  //     this.style.animationPlayState = "running";
  //   }
  //   else
  //   {
  //     audio.pause();
  //     //this.setAttribute("class","");
  //     this.style.animationPlayState = "paused";
  //   }
  // }

  music.addEventListener("touchstart",function(event){
    if(audio.paused)
    {
      audio.play();
      this.setAttribute("class","play");
      //this.style.animationPlayState = "running";
    }
    else
    {
      audio.pause();
      this.setAttribute("class","");
      //this.style.animationPlayState = "paused";
    }
  },false);

};
