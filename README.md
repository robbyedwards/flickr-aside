# README #

JSON-P Flickr photo widget for Octopress
(c) Robby Edwards // MIT License
Mostly based upon the JSON-P Twitter fetcher by Brandon Mathis

Version: 0.2

## Getting Started #

Put `flickr.js` in the `/source/javascripts` folder. Then add the `flickr.html` file to `/source/_includes/custom/asides`.

Modify `_config.yml`:

- Add `custom/asides/flickr.html` to the asides list where ever it should appear.
- Add and modify the following lines to the **3rd Party Settings** section:

   # Flickr
   flickr_user_id:
   flickr_user_name:        
   flickr_photo_count: 12
   flickr_photo_size: s
   flickr_lang: en-us

- `flickr_user_id` is your Flickr NSID. Use something like http://idgettr.com/ to find yours.
- `flickr_user_name` is the value that is in the url for your photos, i.e. http://www.flickr.com/photos/username/
- `flickr_photo_count` is the number of images to display
- `flickr_photo_size` is the photo size to display. See http://www.flickr.com/services/api/misc.urls.html for a list of the available sizes. Also not all sizes may be available, and the original will not be available at all.
- `flickr_lang` is the language of the feed. See http://www.flickr.com/services/feeds/ for the available language codes.

Adjust these settings as appropriate. Without a value for `flickr_user_id` the aside will not display.

Style the resulting HTML to your liking.

Have fun! And enjoy the pretty pictures.


## License #

Copyright (c) 2012 Robby Edwards, http://robbyedwards.com/
Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the ‘Software’), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED ‘AS IS’, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
