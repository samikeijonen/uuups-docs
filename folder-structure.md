---
layout: layouts/base.njk
title: Folder structure
---
# Folder structure

This tutorial will walk you through the folder structure. Familiarizing yourself with how things are organized will help you understand a little more about what's going on.

## Default structure

By default, everything is set up like so:

```
/uuups
	/app
	/dist
	/resources
	...files
```

99% of the work that you do with your theme will be in either the `/app` folder or `/resources` folder.  This is pretty much where all your custom code will go. All the other files outside of that can, of course, be tweaked. But, for getting started, you only need to know about those two folders.

## root

The root theme folder has several files, some of which shouldn't be edited.

* `.editorconfig` - Used for configuring code editors for consistent styles. See: [EditorConfig](http://editorconfig.org/).
* `.eslintignore` - Used for listing files to ignore for JS linting.
* `.eslintrc` - Configuration file for JS linting.
* `.gitattributes` - Attributes for Git.
* `.gitignore` - Files and folders that Git should ignore when committing and pushing to a repo.
* `phpcs.xml.dist` - PHP coding standards configuration file.
* `.stylelintignore` - Used for listing files to ignore for style linting.
* `.stylelintrc` - Configuration file for style linting.
* `.travis.yml` - Configuration file for Travis CI.
* `changelog.md` - Change log of the theme.
* `composer.json` - Used for listing Composer dependencies.
* `functions.php` - Functions file first called by WordPress to bootstrap the theme.
* `index.php` - Unused fallback template that's required in WP's system.
* `package-lock.json` - Used by NPM to lock dependencies (don't edit).
* `package.json` - Setup for node scripts and dependencies (used by NPM and Yarn).
* `postcss.config.js` - Configuration file for [PostCSS](https://postcss.org/).
* `readme.md` - Readme file used by GitHub and other systems to describe the theme.
* `screenshot.png` - A 4:3 screenshot image of the theme.
* `style.css` - Needed by WP to know this is a theme. We use this for configuration, essentially.
* `themeclaim.json` - Configuration file for renaming the theme info.
* `webpack.common.js` - Handles Webpack configuration for dev and prod.
* `webpack.dev.js` - Handles Webpack configuration for dev.
* `webpack.prod.js` - Handles Webpack configuration for prod.
* `webpack.release.js` - Handles configuration for releasing public theme as `.zip` file.
* `webpack.settings.js` - Handles Webpack settings. Most of the Webpack related changes should happen in this file.

That's a lot of config files indeed. But most of them are set and forget type of files.

## /app

The `/app` folder is where your "app" lives. This is the **PHP code** for your theme. Generally speaking, you'll have 3 types of PHP files that live within this folder or its sub-folders:

* `bootstrap-{$name}.php` - Holds code to bootstrap something in the theme.
* `functions-{$name}.php` - Holds a group of related functions.
* Classes in their own subfolders.

### What does `bootstrap-{$name}.php` files do

* `bootstrap-app.php`: This file is used to create a new application instance and bind items to the container.
* `bootstrap-autoload.php`: Autoload classes and functions in the theme.
* `bootstrap-compat.php`: WP and PHP compatibility file. This is only needed for public themes.

### Adding new `bootstrap-{$name}.php` file

Sometimes you need to add or remove any of the `bootstrap-{$name}.php` files.

1. Open file `functions.php` in the root of the theme.
1. Add or remove `require_once` function calls.
1. For example add new line: `require_once get_parent_theme_file_path( 'app/bootstrap-example.php' );`.

### What does `functions-{$name}.php` files do

* `functions-assets.php`: Handles enqueueing or dequeueing the assets in front-end and in the editor. And other assets related functions.
* `functions-filters.php`: This file holds functions that are used for filtering.
* `functions-setup.php`: This file holds basic theme setup functions executed on appropriate hooks. For example adding support for block editor color palette or align wide blocks.
* `functions-svg.php`: This file holds SVG related functions. For example `get_svg` function and social menu link icon system.
* `functions-template.php`: This file holds template related functions like `post_thumbnail`.

### Adding new `functions-{$name}.php` file

It's common to add or remove `functions-{$name}.php` files. Here is how to add new file called `functions-example.php`.

1. Open file `app/bootstrap-autoload.php`.
1. Locate `array_map`.
1. Add `functions-example` in the array.
1. Note that there is no need for `.php` in the end.

## /dist

The `/dist` folder is for holding our compiled assets for distribution. **These files should not be edited directly**. The sub-folders are organized on par with the sub-folders in `/resources`.

* `js` - Holds the compiled scripts.
* `css` - Holds the compiled stylesheets.

Note that the `/resources/views` and `/resources/lang` folders are not copied over to `/dist`.

## /resources

The `/resources` folder is where much of the magic of theme development will happen.  This is essentially the stuff that you will be editing the vast majority of the time when creating a theme.

* `css` - SCSS/CSS files.
* `fonts` - Font files.
* `img` - PNG, JPG, and most other image files.
* `js` - JavaScript files.
* `lang` - POT and any other MO or PO language files.
* `svg` - SVG icons.
* `svg` - SVG files.
* `views` - The template files for the theme.

## /node_modules

NPM packages folder. Do not edit files inside this folder.

## /vendor

Composer packages folder. Do not edit files inside this folder.
