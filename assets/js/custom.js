$(document).ready(function(){
  var widget  = SC.Widget($('#cloudplayer').attr('id'));
  var defaultPlayerOptions = {show_artwork: false, show_comments: false, auto_play: true, visual: false};
  var episodes = {
    'mixtape': 'https://soundcloud.com/user-162103925/views-from-the-swamp',
    'promo': 'https://soundcloud.com/tunapastapodcast/coming-soon',
    'ep1': ''
  };

  $('#click1').click(() => {
    widget.load(episodes['mixtape'], defaultPlayerOptions);
  });

  $('#click2').click(() => {
    widget.load(episodes['promo'], defaultPlayerOptions);
  });
});
