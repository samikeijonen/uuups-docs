---
layout: layouts/base.njk
title: Build process
---
# Build process

This theme utilizes [Webpack](https://webpack.js.org/) for build process with the theme.

Most of the ideas are based on article [An Annotated webpack 4 Config for Frontend Web Development
](https://nystudio107.com/blog/an-annotated-webpack-4-config-for-frontend-web-development).

In short, run this command while developing a theme:
```bash
npm run watch
```

Run this command when you are ready for production:
```bash
npm run prod
```

## Webpack con­fig files

We have several Webpack config files:

* `webpack.settings.js` — a JSON-ish set­tings file, the only file we need to edit from project to project.
* `webpack.common.js` — com­mon set­tings for both dev and prod.
* `webpack.dev.js` — set­tings for local devel­op­ment builds.
* `webpack.prod.js` — set­tings for pro­duc­tion builds.

## List of commands

The following is a list of commands you can run from the command line:

```bash
# Builds the entire theme ready for packaging for output.
# This command runs through the below `prod` and `i18n` commands.
npm run build

# Processes all of your assets for a development environment.
npm run dev

# Auto-adds a textdomain and/or creates a POT file.
npm run i18n
npm run i18n:textdomain
npm run i18n:pot

# Lint CSS, JavaScript and PHP files.
npm run lint
npm run lint:css
npm run lint:js
npm run lint:php

# Processes all of your assets for a production environment.
npm run prod

# Exports a copy of your theme for distribution.
npm run release

# Rename the theme, slugs, namespace and more.
npm run rename

# Watches for changes to any files and rebuilds for a development environment.
npm run watch
```
