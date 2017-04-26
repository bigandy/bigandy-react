# [bigandy-react](https://bar.bigandy.pw)

React PWA Using Data from [my WordPress site](https://big-andy.co.uk) via the [JSON WordPress API](https://big-andy.co.uk/wp-json/wp/v2/). I am using Jake Archibald's [IDB](https://www.npmjs.com/package/idb) to store and access posts and pages in IndexedDB to prevent doing two fetches (one for pages and one for posts, I don't believe that there's currently a way of combining this into one API call) every time you reload the site. 

I am using [sw-precache](https://github.com/GoogleChrome/sw-precache) to produce a service worker file based on the assets within the build directory. I am using [spa-github-pages](https://github.com/rafrex/spa-github-pages) to help routing when reloading the page on e.g. /pages/cv.


## Technologies
- React
- React Router
- Create React App
- IDB
- Service Worker + sw-precache
- spa-github-pages
- Github Pages for hosting
- WordPress API to provide the data
