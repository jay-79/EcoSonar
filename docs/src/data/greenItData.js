const greenItData = [
  {
    name: 'addExpiresOrCacheControlHeaders',
    title: 'Add Expires or Cache-Control HTTP Headers',
    description: 'You should reach 100% of resources cached.',
    correction: "<div class='correction-text'>The Expires and Cache-Control headers determine how long a browser should keep a resource in its cache. You should therefore use them, and configure them correctly for CSS style sheets, JavaScript scripts and images.<br><br>Ideally, these elements should be kept as long as possible so that the browser does not request them again from the server. This saves HTTP requests, bandwidth and CPU power server-side.<br><br>Here is a configuration example for Expires and Cache-Control headers for the Apache web server:<br><br> <pre>&lt;IfModule mod_headers.c></pre><pre>   &nbsp;&lt;FilesMatch &quot&#92.(ico|jpe?g|png|gif|swf|css|gz)$&quot></pre><div><pre>        Header set Cache-Control &quotmax-age=2592000, public&quot</pre><pre>    &lt;/FilesMatch></pre><pre>    &lt;FilesMatch  &quot&#92.(html|htm)$&quot></pre><pre>       Header set Cache-Control &quotmax-age=7200, public&quot</pre><pre>    &lt;/FilesMatch></pre><pre> <br>&lt;/IfModule></pre><br><br>Government Regulation:<br><a target='_blank' href='https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/6.3/'>RGESN 6.3 : Does the digital service use caching mechanisms for all transferred content under its control?</a><br><br> See :<br><a target='_blank' href='http://www.ecometer.org/rules/cache-headers.html'>Cache Header</a><br><a target='_blank' href='https://developer.mozilla.org/fr/docs/Web/HTTP/Headers/Cache-Control'>Cache-Control Headers</a><br><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires'>Expires Headers</a> </div>"
  },
  {
    name: 'compressHttp',
    title: 'Compress ressources',
    description: 'To get an A score, reach 100 % of compression ratio.',
    correction: "<div class='correction-text'>You can compress the content of HTML pages to minimize bandwidth consumption between the client and the server. All modern browsers (for smartphones, tablets, notebook and desktop computers) accept HTML compressed via gzip or Deflate. The easiest way to do so is to configure the web server so that it compresses the HTML data stream, either on-the-fly or automatically, as it leaves the server. This practice (on-the-fly compression) is only beneficial for a HTML data stream as it is constantly evolving. When possible, we recommend that you manually compress static resources (e.g. CSS and JavaScript libraries) all in one go.<br><br> With Apache, the Deflate and gzip compression methods offer considerable savings. A typical 26 KB HTML file is reduced to 6 KB after being compressed with gzip.<br><br><a target='_blank' href=https://www.npmjs.com/package/gzipper>If your frontend framework is one of the following: React / Angular / Vue.js</a> <br> <br> <a target='_blank' href='https://www.npmjs.com/package/compress-create-react-app'>If your front-end framework is React</a> <br><br>Government Regulation;<br><a target='_blank' href='https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/6.4/'>RGESN 6.4 : Has the digital service implemented compression techniques on all transferred resources under its control?</a><br><br> See : <br> <a target='_blank' href='http://www.ecometer.org/rules/http-compress.html'> Http Compress </a><br><a target='_blank' href='https://serpstat.com/blog/how-to-compress-html-code-to-reach-better-website-loading-speed/'>How to compress HTML code ?</a></div>"
  },
  {
    name: 'domainsNumber',
    title: 'Limit the number of domains',
    description: 'You should limit the number of domains to 3 per page.',
    correction: "<div class='correction-text'> When a website or online service hosts a web page’s components across several domains, the browser must establish an HTTP connection with every single one. Once the HTML page has been retrieved, the browser calls the sources as it traverses the DOM (Document Object Model). <br><br> Some resources are essential for the page to work. If they are hosted on another domain which is slow, it may increase the page’s render time. You should therefore, when possible, group all resources on a single domain. <br><br>The only exception to this is for static resources (style sheets, images, etc.), which should be hosted on a separate domain to avoid sending one or multiple cookies for each browser GET HTTP request. This reduces response time and unnecessary bandwidth consumption. <br><br>For a corporate website with heavy traffic, it is better to have two domains: - the application server at www.domain.tld - the cookieless media server at media.domain.tld By doing so, you minimize the number of domains while also avoiding unnecessarily sending a cookie for each GET HTTP request for a static resource.<br><br> Best practices n°82 from '115 bonnes pratiques d'écoconception web v4' <br><br>See : <br> <a target='_blank' href=https://www.wpbeginner.com/beginners-guide/beginners-guide-what-is-a-domain-name-and-how-do-domains-work/>What is a domain number and how does it works</a> <br> <a target ='_blank' href=http://www.ecometer.org/rules/minimize-number-of-domains.html> Minimize the number of domains </a> </div>"
  },
  {
    name: 'dontResizeImageInBrowser',
    title: "Don't resize image in browser",
    description: 'There should be no image resized in browser in your web application. You are resizing an image if you are using the attributes HEIGHT and WIDTH in the HTML tag of the image.',
    correction: "<div class='correction-text'>Do not resize images using HTML height and width attributes. Doing so sends images in their original size, wasting bandwidth and CPU power. A PNG-24 350 x 300 px image is 41 KB. If you resized the same image file using HTML and displayed it as a 70 x 60 px thumbnail, it would still be 41 KB, when it should be no more than 3 KB! Meaning 38 KB downloaded for nothing. The best solution is to resize images using software such as Photoshop, without using HTML. When content added by the website’s users has no specific added value, it is best to prevent them from being able to insert images using a WYSIWYG editor e.g., CKEditor. <br><br> </div><div class=\"compliance-title\">Non Compliant : </div><br/><div class=\"compliance-example\">&lt;img src={LoadingIconPath} alt=”loading icon”  width = 12px\" height = \"12px\" /></div><div class=\"compliance-title\">Compliant : </div><br/><div class=\"compliance-example\">&lt;img  src={LoadingIconPath} alt=”loading icon”  /></div><br><br>Government Regulation;<br><a target='_blank' href='https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/5.2/'>RGESN 5.2 Does the digital service offer image content whose level of compression is appropriate for the content and viewing context?</a><br><br>See : <br> <a target='_blank' href='http://www.ecometer.org/rules/dont-resize-image-in-browser.html'> How to resize image outside the browser</a> </div>"
  },
  {
    name: 'emptySrcTag',
    title: 'Avoid empty src tag',
    description: 'You should have no empty src tags.',
    correction: "<div class='correction-text'>If there is an image tag with an empty src attribute, the browser will call the directory in which the page is located, generating unnecessary, additional HTTP requests.<br><br>The following image tag will request the foo directory’s index file from the server:<br><br><pre>&lt;img src=&quot&quot alt=&quot&quot></pre><br>for a page located at: http://domain.tld/foo/bar.html<br><br>See : <br> <a target='_blank' href='http://www.ecometer.org/rules/empty-src.html'>Delete image tags with empty src attributes</a></div>"
  },
  {
    name: 'externalizeCss',
    title: 'Externalize css',
    description: 'You should reach 0 inline stylesheets.',
    correction: "<div class='correction-text'>Ensure that CSS files and JavaScript code are separate from the page’s HTML code, except for any configuration variables for JavaScript objects. <br><br>  If you include CSS or JavaScript code in the body of the HTML file, and it is used for several pages (or even the whole website), then the code must be sent for each page requested by the user, therefore increasing the volume of data sent.<br><br>  However, if the CSS and JavaScript code are in their own separate files, the browser can avoid requesting them again by storing them in its local cache.<br>    <div class=\"compliance-title\">Non compliant :</div><div class=\"compliance-example\">&lt;style type=\"text/css\" media=\"screen\"><br>    p { color: #333, margin: 2px 0 }<br>/* All the website's CSS declarations */   <br> &lt;/style>    <br/></div></div><div class=\"compliance-title\">    Compliant :</div><div class=\"compliance-example\"><div class=\"\"description\"\">&lt;link href=\"css/styles.css\" rel=\"stylesheet\"><br><br></div></div><br><br>Best practices n°42 from '115 bonnes pratiques d'écoconception web v4'<br><br>  See : <br><a target='_blank' href='http://www.ecometer.org/rules/externalize-css-and-js.html'> Externalize CSS files</a><br><a target='_blank' href='https://www.webucator.com/article/how-to-create-a-css-external-style-sheet/'> How to create a css external stylesheet</a></div>"
  },
  {
    name: 'externalizeJs',
    title: 'Externalize js',
    description: 'You should have no inline JavaScript script in HTML code.',
    correction: "<div class='correction-text'>Ensure that JavaScript code is separate from the page’s HTML code, except for any configuration variables for JavaScript objects. If you include JavaScript code in the body of the HTML file, and it is used for several pages (or even the whole website), then the code must be sent for each page requested by the user, therefore increasing the volume of data sent. However, if the JavaScript code is in his own separate file, the browser can avoid requesting them again by storing them in its local cache.</div>    <div class=\"compliance-title\">Non Compliant : </div>  <div class=\"compliance-example\">File 1<br/><br/> Avoid using script directly into HTML : <br/><ul><li>&lt;script type=\"\"text/javascript\"\"><br/> alert(\"\"Hello Jean ! \"\")<br/>  &lt;/script></li><li>&ltbutton onclick=alert('Hello Jeanne')><br/>Say Hello Jeanne<br/>&lt;/button><br/></li>  <br/></div><div class=\"compliance-title\">Compliant :</div> <div class=\"compliance-example\">Instead use a JavaScript file where the function is defined : <ul><li>script: <br/>function sayHello(name) {<br/>      alert(\"\"Hello\"\" + name +\"\" ! \"\")<br/>}</li><li>&lt;script type=\"\"text/javascript\"\"><br/>sayHello(Jean)<br/>&lt;/script><br/></li></div><br><div class='correction-text'><br><br>Best practices n°42 from '115 bonnes pratiques d'écoconception web v4'<br><br>See : <br> <a target='_blank' href='http://www.ecometer.org/rules/externalize-css-and-js.html'>Externalize JS Files</a><br><a target='_blank' href='https://www.javatpoint.com/external-javascript-file'>Externalize JavaScript Files</a>"
  },
  {
    name: 'httpError',
    title: 'Avoid HTTP request errors',
    description: 'You should not have HTTP errors when loading your pages.',
    correction: "<div class='correction-text'>Requests with HTTP errors consume resources unnecessarily.<br><br>Best practices n°89 from '115 bonnes pratiques d'écoconception web v4'<br><br> See : <br><a target='_blank' href='https://www.geeksforgeeks.org/how-to-troubleshoot-common-http-error-codes/'>How to troubleshoot common http error code</a></div>"
  },
  {
    name: 'httpRequests',
    title: 'Limit the number of HTTP requests',
    description: 'A page’s download time client-side directly correlates to the number and size of files the browser must download. You should not have more than 25 requests to load one page of your application.',
    correction: "<div class='correction-text'>For each file, the browser sends a GET HTTP to the server. It waits for the response, and then downloads the resource as soon as it is available. Depending on the type of web server you use, the more requests per page there are, the fewer pages the server can handle. Reducing the number of requests per page is key to reducing the number of HTTP servers needed to run the website, and consequently its environmental impact.<br><br>There are several ways to reduce the number of requests per page: <ul><li>- Combine static files e.g., CSS and JavaScript libraries</li><li> - Use a CSS sprite to group the interface’s images </li> <li>- Favor glyphs over images and, in general, vectors over bitmaps. </li><li>- Fill in the browser cache as much as possible.</li></ul><br><br>Potential saving: reduced server load, thus minimizing the economic and environmental footprint by reducing the amount of equipment needed (from HTTP servers to application servers and RDBMS).<br><br>Best practices n°47 from '115 bonnes pratiques d'écoconception web v4'<br><br>Government Regulation:<br><a target='_blank' href='https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/6.2/'>RGESN 6.2 : Does the digital service have a limit of requests per screen?</a><br><br>See :<br><a target='_blank' href='http://www.ecometer.org/rules/limit-http-requests.html'>Limit HTTP Requests</a></div>"
  },
  {
    name: 'imageDownloadedNotDisplayed',
    title: 'Do not download unecessary image',
    description: 'You should not request images from the server if they are not going to be displayed in your web application.',
    correction: "<div class='correction-text'>Downloading images that will not necessarily be visible consumes resources unnecessarily. For example, images that are displayed only after a user action.<br><br>Government Regulation:<br><a target='_blank' href='https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/5.2/'>RGESN 5.2 Does the digital service offer image content whose level of compression is appropriate for the content and viewing context?</a></div>"
  },
  {
    name: 'jsValidate',
    title: 'Validate js',
    description: 'You shouldn’t have JavaScript errors when launching your web application.',
    correction: "<div class='correction-text'>JSLint is a JavaScript code quality tool that checks that the JavaScript syntax used will be understood by all browsers. The code produced thus complies with coding rules which enables interpreters to quickly and easily run the code. The CPU is therefore used for a shorter time.<br><br><ul><li>Install eslint to analyse your code</li>   <br/><li>npm install eslint --save-dev or yarn add -D eslint</li><br/><li>Once installed, you can launch eslint project configuration<br/> npx eslint --init</li><br/><li>The command prompt will guide you through the linter configuration adapted to your projet. The file name .eslintrc defines the linter configuration and can be modified according to your requirement.</li><br/><li>To launch the linter analysis :<br/> eslint --ext .js .</li><br/><li>To let the linter fix issues automatically :<br/>eslint --fix --ext .js .</li></ul><br><br>Best practices n°82 from '115 bonnes pratiques d'écoconception web v4'<br><br>See :<br><a target='_blank' href='http://www.ecometer.org/rules/validate-js.html'>Check JavaScript code</a></div>"
  },
  {
    name: 'maxCookiesLength',
    title: 'Max cookies length',
    description: 'Maximum size of your cookies should be the smallest possible as it is sent with each request. Your cookies should not be longer than 512 bytes.',
    correction: "<div class='correction-text'>A cookie makes it possible to maintain a state between the internet user's browser and the remote web server thanks to identifiers. This text file is transferred in each http request. It is therefore necessary to optimize its size as much as possible and delete it as soon as its presence is no longer mandatory.<br><br>    You can automatically delete a cookie when it is no longer useful, by specifying an expiry date, as follows:<br><br>    Set-Cookie: user_myvariable=myvalue; expires=Wed, 12 Dec 2012 07:40:20 UTC<br><br>    See :<br>    <a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies'>Using HTTP cookies</a>    </div>"
  },
  {
    name: 'minifiedCss',
    title: 'Minified css',
    description: 'You should reach 100% of your CSS files minified.',
    correction: "<div class='correction-text'>You can use the Yahoo’s YUI Compressor specialized filters to :<br>- remove comments and white spaces <br>- remove the last semi-colon <br>- remove extra semi-colons <br> - remove empty declarations <br> - remove units of measure when using 0 values and reduce multiple 0s into one <br>- remove 0 for values less than 1 <br> - convert RGB colors into hex values and reduce 6-digit hex values to 3-digit values <br>- remove extra charsets <br>- optimize the alpha layer’s opacity values in Internet Explorer <br> - replace none with 0<br><br>Government Regulation: <br><a target='_blank' href='https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/6.4/'>RGESN 6.4 : Has the digital service implemented compression techniques on all transferred resources under its control?</a><br><br> See : <br><a target='_blank' href='http://www.ecometer.org/rules/css-minification.html'>CSS Minification</a> </div>"
  },
  {
    name: 'minifiedJs',
    title: 'Minified js',
    description: 'You should reach 100% of your JS files minified.',
    correction: "<div class='correction-text'>Use a tool such as YUI Compressor to :<br><ul>- remove unnecessary white spaces</ul> <ul> - remove unnecessary line breaks</ul> <ul>- remove unnecessary semi-colons</ul> <ul>- shorten local variable names</ul> <br><br> This operation can be automated using <a target='_blank' href='https://developers.google.com/speed/pagespeed/module'>Google Apache speed module</a><br>A standard 248 KB JavaScript file will be 97KB after being minified<br><br>Government Regulation: <br><a target='_blank' href='https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/6.4/'>RGESN 6.4 : Has the digital service implemented compression techniques on all transferred resources under its control?</a><br><br>See : <br><a target='_blank' href='http://www.ecometer.org/rules/javascript-minification.html'> JavaScript minification</a> </div>"
  },
  {
    name: 'noCookieForStaticRessources',
    title: 'No cookie for static ressources',
    description: 'You should have 0 static resources with cookies.',
    correction: "<div class='correction-text'>Images, CSS stylesheets, and JavaScript files must be hosted on a cookie-free domain. This prevents the browser from sending a cookie for each resource ... when it is unnecessary. Indeed, although transferred in each http request, the cookie is useless for static content, since it is used to maintain a state between the Internet user's browser and the remote application server thanks to the identifiers contained in the text file..<br><br> It is therefore preferable to store this type of content on a specific domain name, for example static.domainname.com. For static resources, a cookie is unnecessary, so it unnecessarily consumes bandwidth. To avoid this, we can use a different domain for static resources or restrict the scope of cookies created. <br><br>Web Giants are using a dedicated domain to serve static ressources which does not require cookies. For example, Yahoo! uses the domain called yimg.com, Youtube ytimg.com and Amaon images-amazon.com<br><br>Government Regulation: <br><a target='_blank' href='https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/6.11/'> RGESN 6.11 : Does the digital service host the transferred static resources of which it is the issuer on the same domain?</a><br><br>See : <br><a target='_blank' href='https://gtmetrix.com/serve-static-content-from-a-cookieless-domain.html'>Serve static content from a cookieless domain</a><br><a target='_blank' href='https://blog.leaseweb.com/2014/06/05/need-cookie-less-domain/'>Why do you need a cookie-less domain</a></div>"
  },
  {
    name: 'noRedirect',
    title: 'Avoid redirect',
    description: 'Redirections should be avoided as much as possible as they slow down response and drain resources unnecessarily.',
    correction: "<div class='correction-text'>These redirections can take place on various levels: HTML code, JavaScript code, HTTP server and application server. <br><br>Best practices n°112 from '115 bonnes pratiques d'écoconception web v4'<br><br> See :<br> <a href='http://www.ecometer.org/rules/avoid-redirections.html' target='_blank'>Avoid redirections</a><br><a target='_blank' href='https://docs.wp-rocket.me/article/1388-avoid-multiple-page-redirects'>Avoid multiple page redirects</div>"
  },
  {
    name: 'optimizeBitmapImages',
    title: 'Optimize bitmap images',
    description: 'You should optimize all your bitmap images.',
    correction: "<div class='correction-text'>The first step is to choose the correct format between bitmap (e.g., JPEG, PNG & GIF) and vector (SVG).<br><br>    Bitmaps should only be used for photos and interface elements that are not possible though icons or CSS styling.<br><br>The choice of bitmap format depends on the image’s characteristics: black and white or color, color palette, need for transparency, etc. For these characteristics, the ability to use lossy compression on the image is more suited to JPEG and WebP (Google); while the need for transparency and/or lossless compression is more suited to GIF or PNG.<br><br>Tools such as pngcrush, ImageMagick and jpegtran will help you reduce the size of images as much as possible.<br><br>Potential saving: At least 25% saved by fine-tuning the color palette and the compression ratio, and up to over 80% compared to a uncompressed bitmap. WebP is on average 30% smaller than JPEG.<br><br>Government Regulation: <br><a target='_blank' href='https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/5.2/'> RGESN 5.2 Does the digital service offer image content whose level of compression is appropriate for the content and viewing context?</a><br><br> See : <br> <a target='_blank' href='http://www.ecometer.org/rules/optimize-bitmaps.html'>Optimize Bitmap images</a></div>"
  },
  {
    name: 'optimizeSvg',
    title: 'Optimize svg images',
    description: 'All SVG images added into your web application should be optimized.',
    correction: "<div class='correction-text'>Svg images are less heavy than bitmap images, nevertheless they can be optimized and minified via tools (for example, svgo).<br><br>Government Regulation: <br><a target='_blank' href='https://ecoresponsable.numerique.gouv.fr/publications/referentiel-general-ecoconception/critere/5.2/'> RGESN 5.2 Does the digital service offer image content whose level of compression is appropriate for the content and viewing context?</a><br><br> See : <br> <a target='_blank' href='https://css-tricks.com/tools-for-optimizing-svg'> Tools for optimizing SVG</a></div>"
  },
  {
    name: 'plugins',
    title: 'Do not use plugins',
    description: 'You should use no plugin in your web application if possible.',
    correction: "<div class='correction-text'>Avoid using plugins (Flash Player, Java and Silverlight virtual machines, etc.) because they can be a heavy drain on resources (CPU and RAM).<br><br>This is especially true with Adobe’s Flash Player, to such an extent that Apple decided to not install the technology on its mobile devices to maximize battery life. Favor standard technology such as HTML5 and ECMAScript.<br><br> See : <br><a target='_blank' href='http://www.ecometer.org/rules/limit-plugins.html'>Limit plugins</a>  </div>"
  },
  {
    name: 'printStyleSheet',
    title: 'Provide print stylesheet',
    description: 'Each of your pages should have at least one print style sheet to get an A Score.',
    correction: "<div class='correction-text'>In addition to the benefits for the user, this style sheet reduces the number of pages printed, and therefore indirectly minimizes the website’s ecological footprint. It should be as streamlined as possible and employ an ink-light typeface e.g., Century Gothic. Also consider hiding the header, footer, menu and sidebar, as well as deleting all images except those needed for content. This print style sheet makes for a cleaner print by trimming down what is displayed on the screen.</div><div class=\"compliance-title\">Compliant :</div>      <div class=\"compliance-example\"> body { <br>   background-color : #fff;<br>font-family : Serif; <br> font-size:15pt; <br> } <br> #page { <br>  margin: 0; <br>  border: none; <br>  } <br>  #banner, #menuright, #footer { <br>  display: none; <br>  } <br>  h1#top { <br>  margin: 0; <br>  padding: 0; <br>  text-indent: 0; <br>  line-height: 25pt; <br>  font-size: 25pt;<br>   } (...)<br>     </div><div class='correction-text'> <br><br>Best practices n°31 from '115 bonnes pratiques d'écoconception web v4'<br><br> See :<br><a target='_blank' href='http://www.ecometer.org/rules/print-css.html'>Print Stylesheet</a><br><a target='_blank' href='https://www.sitepoint.com/css-printer-friendly-pages/'>CSS Printer Friendly Pages</a><br><a target='_blank' href='https://www.smashingmagazine.com/2011/11/how-to-set-up-a-print-style-sheet/'>How to set up a print stylesheet</a><br><a target='_blank' href='https://inviqa.com/blog/print-stylesheet-definitive-guide'>Print stylesheet guide</a></div>"
  },
  {
    name: 'socialNetworkButton',
    title: 'Do not use standards social button',
    description: 'You should not use social media buttons.',
    correction: "<div class='correction-text'>Social Network like Facebook, Twitter, Pinterest gives plugins to install on web page to get a share button and a like counter. These plugins consume unnecessary resources, it's better to put direct links.<br><br>Best practices n°59 from '115 bonnes pratiques d'écoconception web v4'</div>"
  },
  {
    name: 'styleSheets',
    title: 'Limit Stylesheet files',
    description: 'You should have at most 2 stylesheets per page.',
    correction: "<div class='correction-text'>Minimize the number of CSS files to reduce the number of HTTP requests. If several style sheets are used on all the website’s pages, concatenate them into one single file.<br><br>Some CMS and frameworks offer ways to do such optimization automatically. The HTTP server can also be configured to compress and reduce the size of style sheets.<br><br>With the Apache web server, simply add the following line in the .htaccess configuration file:<br># compress css:<br>AddOutputFilterByType DEFLATE text/css<br><br>This instruction activates the Deflate mode which compresses all the style sheets between the server and the HTTP client.<br><br><a target='_blank' href='http://httpd.apache.org/docs/2.4/mod/mod_deflate.html'>Learn more about Deflate</a><br><br>Best practices n°35 from '115 bonnes pratiques d'écoconception web v4'</div>"
  },
  {
    name: 'useETags',
    title: 'Use ETags',
    description: 'ETags limit the number of server requests and avoid unnecessary use of bandwidth. At least 95 % of your resources should have ETags to have a B Score.',
    correction: "<div class='correction-text'>An ETag is a signature attached to a server response. If the client requests a URL (HTML page, image, style sheet, etc.) whose ETag is identical to the one it already has, the web server will reply that it does not need to download the resource and that it should use the one it already possesses. Using ETags saves huge amounts of bandwidth.<br><br>Refer to the File Etag documentation for Apache:<br> <a target='_blank' href='http://httpd.apache.org/docs/2.0/mod/core.html#fileetag'>Apache documentation on Etag</a><br><br>See : <br><a target='_blank' href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag'> ETags </a><br><a target='_blank' href='http://www.ecometer.org/rules/etag-header.html'> Use ETags Header</a></div>"
  },
  {
    name: 'useStandardTypefaces',
    title: 'Use Standard Typefaces',
    description: 'You should reduce the size of custom fonts used.',
    correction: "<div class='correction-text'>Use standard typefaces as they already exist on the user’s computer, and therefore do not need to be downloaded. This saves bandwidth and improves the website’s render time.<br><br> When possible, use typefaces such as : <br><br> <ul>    <li>Courrier New</li>    <li>Georgia</li>    <li>Arial </li>    <li>Comic </li>    <li>Impact </li>    <li>Tahoma </li>    <li>Trebuchet MS </li>    <li>Times New Roman </li>    <li>Verdana </li>    <li>Segoe UI </li>    </ul><br><br>Best practices n°32 from '115 bonnes pratiques d'écoconception web v4'<br><br> See : <br>     <a href='http://www.ecometer.org/rules/use-standard-typefaces.html' target='_blank'>Use standard typefaces</a><br/> <a href='http://en.wikipedia.org/wiki/List_of_typefaces_included_with_Mac_OS_X' target='_blank'> List of typeface included with MacOS X </a><br/> <a href='http://www.awayback.com/index.php/2010/02/03/revised-font-stack/' target='_blank'> Revised Font Stack</a></div>"
  }
]

export default greenItData