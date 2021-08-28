let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#trackImage');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');
let dark = document.querySelector('#dark');


let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;


let track = document.createElement('audio');



let All_song = [
	{
	  name: "IMAGINE",
	  path: "music/song1.mp3",
	  img: "images/mood1.png",
	  singer: "BY: LUKREMBO"
	},
	{
	  name: "MUG",
	  path: "music/song2.mp3",
	  img: "images/mood2.png",
	  singer: "BY: LUKREMBO"
	},
	{
	  name: "TOGETHER",
	  path: "music/song3.mp3",
	  img: "images/mood3.png",
	  singer: "BY: LUKREMBO"
	},
	{
	  name: "ROSE",
	  path: "music/song4.mp3",
	  img: "images/mood4.png",
	  singer: "BY: LUKREMBO"
	},
	{
	  name: "BORED",
	  path: "music/song5.mp3",
	  img: "images/mood5.png",
	  singer: "BY: LUKREMBO"
	}
 ];
 
function dark_switch(){

	document.body.style.backgroundColor = "red";
	document.getElementById('main').style.backgroundColor = "red";
	dark.innerHTML = 'light';
	}
	



function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);




 function justPlay(){
 	if(Playing_song==false){
 		playSong();

 	}else{
 		pauseSong();
 	}

}



 function reset_slider(){
 	slider.value = 0;
 } 





let audio = document.getElementById("play");

function justPlay() {
  if (track.paused) {
    track.play();
	play.innerHTML = '<i class="fa fa-pause"></i>';
	document.getElementById("trackImage").style.animationPlayState = "running";

  } else {
    track.pause();
	play.innerHTML = '<i class="fa fa-play"></i>';
	document.getElementById("trackImage").style.animationPlayState = "paused";

  }
}



function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		document.getElementById("trackImage").style.animationPlayState = "paused";
		play.innerHTML = '<i class="fa fa-play"></i>';
		justPlay();
	}else{
		index_no = 0;
		load_track(index_no);
		document.getElementById("trackImage").style.animationPlayState = "running";
		play.innerHTML = '<i class="fa fa-pause"></i>';
		justPlay();
	}
}




function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playSong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playSong();
	}
}




function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}






function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "#dbd9d3";
	}else{
       autoplay = 1;
       auto_play.style.background = "#d3d0c9";
	}
}

 



function range_slider(){
	let position = 0;
        
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
     
       if(track.ended) {
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
			document.getElementById("trackImage").style.animationPlayState = "paused";
           if(autoplay==1) {
		       index_no += 1;
		       load_track(index_no);
		       justPlay();
		   }
		}
}




