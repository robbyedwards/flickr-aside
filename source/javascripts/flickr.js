// JSON-P Flickr photo widget for Octopress
// (c) Robby Edwards // MIT License
// Loosely based upon the JSON-P Twitter fetcher by Brandon Mathis

function showFlickrFeed(imgs, flickr_user) {
  var timeline = document.getElementById('flickr-box'),
      content = '';

  for (var i in imgs) {
    content += '<li class="flickr_badge_image">'+'<a href="'+imgs[i].link+'"><img src="'+imgs[i].media.m.replace('_m.jpg','_s.jpg')+'" alt="A photo on Flickr" title="'+imgs[i].title+'" height="75" width="75" /></a>'+'</li>';
  }
  timeline.innerHTML = content;
}

function getFlickrFeed(id, count, lang) {
  count = parseInt(count, 10);
  $.ajax({
      url: "http://api.flickr.com/services/feeds/photos_public.gne?id=" + id + "&lang=" + lang + "&format=json&jsoncallback=?"
    , type: 'jsonp'
    , method: 'get'
    , error: function(err) { $('#flickr-box li.loading').addClass('error').text("Flickr's having a massage"); }
    , success: function(data) { showFlickrFeed(data.items.slice(0, count), id); }
  });
}
