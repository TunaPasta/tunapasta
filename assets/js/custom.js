$(document).ready(function(){
  var widget  = SC.Widget($('#cloudplayer').attr('id'));
  var defaultPlayerOptions = {show_artwork: false, show_comments: false, auto_play: true, visual: false}
  var newSoundUrl = 'http://api.soundcloud.com/tracks/13692671';
  var sound = 'https://soundcloud.com/tunapastapodcast/coming-soon';

  $('#click1').click(() => {
  	console.log('yeesss');
    widget.load(newSoundUrl, defaultPlayerOptions);
    widget.play();
  });

  $('#click2').click(() => {
  	console.log('yeesss2');
    widget.load(sound, defaultPlayerOptions);
  });
});
