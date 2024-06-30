import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'musicPlayer';
  songs=[
    {musicurl:"./assets/music/Bilionera.mp3",
      posterurl:"./assets/music/Bilionera.jpeg",
      title:"Bilionera",
      artist:"Otilia Bruma",
      duration:"3:05"
    },
    {musicurl:"./assets/music/Closer.mp3",
      posterurl:"./assets/music/Closer.jpeg",
      title:"Closer",
      artist:"The Chainsmokers",
      duration:"4:05"
    },
    {musicurl:"./assets/music/PlayDate.mp3",
      posterurl:"./assets/music/PlayDate.jpeg",
      title:"Play Date",
      artist:"Melanie Martinez",
      duration:"2:58"
    },
    {musicurl:"./assets/music/Tightrope.mp3",
      posterurl:"./assets/music/Tightrope.jpeg",
      title:"Tightrope",
      artist:"Zayn",
      duration:"3:24"
    },
    {musicurl:"./assets/music/Willow.mp3",
      posterurl:"./assets/music/Willow.jpeg",
      title:"Willow",
      artist:"Taylor Swift",
      duration:"3:34"
    }
  ]
song=new Audio();
poster="./assets/music/Bilionera.jpeg";
songTitle="Bilionera";
songArtist="Otilia Bruma";
playpause=true;
constructor(){
  this.song.src="./assets/music/Bilionera.mp3"
  this.song.load();
}
playSong(song:any){
  this.poster=song.posterurl;
  this.songTitle=song.title;
  this.songArtist=song.artist;
  this.song.src=song.musicurl;
  this.song.load();
  this.song.play();
  this.playpause=false;
}
toggleplaybutton(){
  this.playpause=!this.playpause;
  this.song.play();
}
togglepausebutton(){
  this.playpause=!this.playpause;
  this.song.pause();
}
}