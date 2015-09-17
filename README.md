# css-background-slideshow
jquery and modernizr background slideshow example

### Description
This repository contains an example of CSS3 and Modernizr with an optional JQuery style switch. The CSS3 demo demonstrates on how to have a fullscreen background slideshow with uploaded image files.

### Installation

If you need an apache server, I use Apache Tomcat for Java development. The download links are below:

Download Apache Tomcat here: http://tomcat.apache.org/index.html

Download jquery here: https://jquery.com/download/

To build a modernizr.js file, simply go to the modernizr URL provided in the index.html file. There you'll customize your own modernizr.js file to specify what type of features and resources that you would like to use. 

If you'd like to know what build I've gone with in the file, take a look at the beginning of the file in modernizr.js. Find the comment tag <code>/*! modernizr 3.0.0-alpha.4 (Custom Build) | MIT */</code> and below there is the full URL and its parameters that I have chosen for to generate the build.

Build and download Modernizr here: https://modernizr.com/download

### API Reference

jQuery have a ton of functionalities and it is important to keep an update on its features and bugs. Also, keep in mind of cross-browser issues as you may encounter them in the future. Below is the link for the jQuery API documentation:

jQuery API Documentation: https://api.jquery.com/

Modernizr is a small piece of JavaScript code that automatically detects the availability of next-generation web technologies in your user's browsers. The full description is located at the link below:

Modernizr Documentation: https://modernizr.com/docs

### Testing and Understanding

JQuery is not the main highlight of this example, it's implemented to create a switch between two different types of slideshows by choosing CSS files (v1.css and v2.css).

IMPORTANT: High-resolution and large file size images may have trouble loading for each transition. The result of each delay may vary for each browser.

The example is straight-forward, as it utilizes the use of CSS3 selectors and special animation attributes in the v1.css and v2.css files.

Experiment with the different CSS attributes (along with its cross-browser attributes), such as:
<ul>
<li><code>animation</code></li>
<li><code>animation-delay</code></li>
<li><code>animation-timing-function</code></li>
<li><code>@keyframes</code> (http://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp)</li>
</ul>

Note: <code>button-set</code> element is not used. Enable by uncomment whole element block.

### License

The MIT License is a free software license originating at the Massachusetts Institute of Technology (MIT). It is a permissive free software license, meaning that it permits reuse within proprietary software provided all copies of the licensed software include a copy of the MIT License terms and the copyright notice. Such proprietary software retains its proprietary nature even though it incorporates software under the MIT License. The license is also GPL-compatible, meaning that the GPL permits combination and redistribution with software that uses the MIT License.

Source: https://en.wikipedia.org/wiki/MIT_License

Additional Information: http://choosealicense.com/

### README.md Mastering Markdown

https://guides.github.com/features/mastering-markdown/
