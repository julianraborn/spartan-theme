# Getting Started 

Follow the these steps to get your child theme configured for your site: 

1. Rename the child theme folder with the name of your site. 
2. Open style.css and rename the Theme Name. 
3. Open package.json and rename "name", "description", "repository", and the local dev link down on line 68.


## Introduction

This Divi Child theme is using the WordPress recommended development scripts so that you can utilize sass, js modules, browser sync, and more. It may feel a bit overkill, but being able to use sass and js modules comes in handy for my complex websites. If your site is very simple, feel free to just use the style.css file for your static overrides. 

### Overview of the file structure 

    .
    ├── build
    |   ├── index.asset.php             # Creates a random file version number for cache busting.
    |   ├── index.css                   # The compiled style from our src folder.
    |   ├── index.js                    # The compiled js from our src folder.
    ├── src
    |   ├── js
        |   ├── main.js                 # Add global js here. Break the components into their own files and import them into the index.js file if needed.
    |   |   ├── index.js                # Import all our js component files here.
    |   ├── scss
    |   |   ├── base
    |   |   |   ├── navigation.scss     # For each component you are writing custom style for, add a file and import it into index.scss         
    |   |   ├── index.scss              # Import the scss components here.
    |   ├── index.js                    # This file is used by webpack to compile our scss and javascript.
    ├── functions.php                   # Required file for all WordPress Themes - add all the functions you need here. 
    ├── lefthook.yml                    # Pre-commit commands - wont let you commit if there are linting errors.
    ├── style.css                       # Required file for all WordPress themes - add static overrides here if needed.
    ├── node_modules                    # Npm packages will save here.
    ├── vendor                          # Composer packages will save here.
    ├── .FILENAME                       # These are all the rc configurations for our packages and ignore files.
    ├── composer.json                   # Our composer packages.
    ├── composer.lock                   # Our composer packages lock file.
    ├── package.json                    # Our node package list and run command scripts.
    ├── package.lock                    # Our node package lock file.
    ├── phpcs.xml.dist                  # Our PHP Code Sniffer configuration.
    ├── postcss.config.js               # Post CSS configuration. 
    ├── README.md
    ├── webpack.config.js               # Webpack settings for our scripts.
    ├── webpack.prod.js                 # Webpack settings for production script - optimizes images and minifies our css.


### Development

To install our packages open a new terminal in your parent folder and run: 
>Note: You will need to have Composer and NPM 7 installed first.

	npm i --legacy-peer-deps
	composer install
	npm run build

From the command line, type any of the following to perform an action:

Command | Action
:- | :-
`npm run watch` | Builds assets and starts Live Reload and Browsersync servers
`npm run start` | Builds assets and starts Live Reload server
`npm run build` | Builds production-ready assets for a deployment
`npm run lint` | Check all CSS, JS, MD, and PHP files for errors
`npm run format` | Fix all CSS, JS, MD, and PHP formatting errors automatically
`npm run bundle` | Creates a ready to go zip file of all the required files for the theme

### Year Shortcode

In functions.php there is a function that adds the short code below that you can use to add the year to the disclaimer.

	[year]

### Mobile Menu Collapsing

In main.js there is code that collapses the sub pages under the parent navigation item.
