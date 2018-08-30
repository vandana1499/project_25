
//var pause=document.getElementsByClassName('pause')[0];
//var allow=document.getElementsByClassName('allow')[0];


var Songs=['audio1.mp3','audio.mp3'];;
var name=document.getElementsByTagName('h1')[0];    
var button=document.getElementsByTagName('button')[1];
var play=document.getElementsByClassName('play')[0];
var pause=document.getElementsByClassName('pause')[0];
var box=document.getElementsByClassName('box')[0];
var currentSong=0;
function playPause(cur){

    if(button.getAttribute('class')==='play')
    {
   
    playS();
    let audio='<audio src=" '+Songs[cur]+'" id="audio1"></audio>';
   
    box.innerHTML+=audio;
    let audio1=document.getElementById('audio1');
    audio1.play();

    }
  else if(button.getAttribute('class')==='pause')
    {
           
        pauseS();
      
        let audio1=document.getElementById('audio1');
        audio1.pause();
        audio1.currenTime=0;
      
    }

}

function playS()
{
    button.innerHTML='<img src="pause.jpg" width="50px" height="50px"></img>';
    button.setAttribute('class','pause');
   
}
function pauseS()
{
    button.innerHTML='<img src="play.jpg" width="50px" height="50px"></img>';
    button.setAttribute('class','play');
    console.log(button);
   
}
function stopAllAudio()
{
    for(i=0;i<songs.length;i++)
    {
        songs[i].pause();
    }
}



function next()
{
 currentSong++;
 if(currentSong>songs.length)
  playPause(songs.length);
 else
 {
     playPause(currentSong);
 }
}


function previous()
{
    currentSong--;
    if(currentSong<0)
    {
        playPause(0);
    }
    else{
        playPause(currentSong);
    }
}

