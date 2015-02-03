#JS1K 2015 Shim

Grunt workflow built for the [JS1K 2015](http://js1k.com/2015-hypetrain/) JavaScript golf competition.

This includes the shim complete with the menu bar at the top of the page so it should be possible to test exactly how your demo will look once submitted to the site.

###Installing:
Ensure you have [npm](https://www.npmjs.com/) and [Grunt](http://gruntjs.com/) installed
- Clone the repo
- ```npm install```

###Running:

To run the project just run ```grunt```. This will:

- build the project (see below)
- Open the shim in your default browser
- Start a watcher for changes to ```src/shim.html``` or ```src/demo.js```

###Working on your demo

Your demo should be written in the ```src/demo.js``` file. If you need to change any of the options such as turning on WebGL shim features you can edit the ```src/shim.html``` file.

When either of these files are changed the following happens:

- Remove the existing running demo shim file
- The demo.js file is minified using [Uglify](https://github.com/mishoo/UglifyJS)
- The minified JS is then run through [JS Crush](http://www.iteral.com/jscrush/)
- The crushed and minified JS source size is checked to ensure it is less than 1024 bytes
- Crushed and minified source is copied inline into the shim
- Watcher keeps waiting for next file change to rinse and repeat the above
 
This flow allows you to make changes to your demo, refresh the browser to see changes, if you have gone over the allowed 1024 byte limit you will get a page not found error and can then check the console output.

The console output will always tell you what the current size of your demo is once it has been minified and crushed.
