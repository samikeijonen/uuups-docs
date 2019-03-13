---
layout: layouts/base.njk
title: Getting started
---
# Getting started 

You just got everything installed. Hopefully!

## Update BrowserSync proxy URL

BrowserSync proxy URL is the dev URL you want to use with `npm run watch`.

1. Open file `webpack.settings.js`.
1. Locate `BrowserSyncConfig`.
1. Update `proxy` URL. For example `mysite.test`.

## Start developing

Then run this command while developing a theme:

```bash
npm run watch
```

It watches for changes to any files by starting [Browsersync](https://www.browsersync.io/) and rebuilds for a development environment.

By default dev URL is [localhost:3000](localhost:3000). 

This can also be changed in `BrowserSyncConfig` settings.

After this everyone's going to have different starting points for their theme. Some people are going to want to start adding in some basic CSS. Some will want to start customizing HTML or PHP. There's no right answer.

Tip: stop watching files using command `ctrl + c`.

## Editorconfig

Theme has an `.editorconfig` file that sets your code editor settings accordingly. [Download the extension](http://editorconfig.org/#download) for your editor. The settings will automatically be applied when you edit code when you have the extension.
