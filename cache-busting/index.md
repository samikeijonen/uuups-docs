---
layout: layouts/base.njk
title: Cache busting
---
# Cache busting

There are many ways to [bust the cache](https://www.alainschlesser.com/bust-cache-content-hash/). In this theme we use [Webpack Manifest Plugin](https://github.com/danethurber/webpack-manifest-plugin) via NPM.

This will generate a `dist/manifest.json` file with a mapping of all source file names to their corresponding output file. In dev mode it looks like this:

```json
{
  "js/app.js": "js/app.js",
  "js/customizeControls.js": "js/customizeControls.js",
  "js/customizePreview.js": "js/customizePreview.js",
  "css/editor.css": "css/editor.css",
  "js/editorScripts.js": "js/editorScripts.js",
  "css/style.css": "css/style.css"
}
```

In production mode it looks like this:

```json
{
  "js/app.js": "js/app.js?id=5b7625bed5a248539e50dfb6e774f6af",
  "js/customizeControls.js": "js/customizeControls.js?id=010ee485b42018fe89ba4e94cc5e7d91",
  "js/customizePreview.js": "js/customizePreview.js?id=74d1380d3f18a3f3466f29b482dd3f3f",
  "css/editor.css": "css/editor.css?id=a25ccc94164cc8e37dc36b85a60004cb",
  "js/editorScripts.js": "js/editorScripts.js?id=073d4045b18fdb9e7205edfde21a8b1b",
  "css/style.css": "css/style.css?id=4e9c97436c5f8ea206212ced7c216115"
}
```

In the production version we have file chunk hash as query strings. This will only be updated if the file content have changed.

This is nice since we don't bust the cache for assets that haven't changed.

## Reading the manifest.json

In `app/Providers/AppServiceProvider.php` we read the content of the `manifest.json` using `file_get_contents` PHP function.

Some says that `file_get_contents` is slow but I'm not sure if there is big performance hit in this case. I _think_ performance hit is really low.

## Enqueue using `asset` function

In `app/functions-assets.php` there is `asset` function. We use this to map our `manifest.json` content in correct assets.

Example for main styles:

```php
// Main styles.
wp_enqueue_style( 'uuups-style', asset( 'css/style.css' ), null, null );
```

* `uuups-style` is stylesheet handle.
* `asset( 'css/style.css' )` checks if we have `css/style.css` key in `manifest.json`. If we do, enqueue it from `dist` folder using the hash as query string.
* Note that we set version parameter to `null` since we don't want WP to add it's default version number.
