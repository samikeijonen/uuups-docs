---
layout: layouts/base.njk
title: Installation
---
# Installation

The following is a step-by-step guide for installing and setting up the Uuups starter theme.

## Install programs

You'll need a few tools installed on your computer before getting started. More than likely, you already have one or more of these as a theme developer.

* [Git](https://git-scm.com/) for version control.
* [Composer](https://getcomposer.org/) for managing PHP dependencies.
* [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/en/) (your choice) for managing JS dependencies.

## Installing the theme

Open the command line utility on your computer.

Themes belong in your `wp-content/themes` folder. You can directly download and install the theme if you wish. Or, you can use the command line to do so.

First, you must switch to the proper folder:

```bash
cd path/to/wp-content/themes
```

Then, create a new project with Composer. Replace `theme-name` in the below with the folder name for your theme. This will automatically clone the theme and install any dependencies you need.

```bash
composer create-project samikeijonen/uuups theme-name
```

Once the installation is complete, you may be presented with the following question:

```bash
Do you want to remove the existing VCS (.git, .svn..) history? [Y,n]?
```

Simply type `Y` and hit the `Enter` key. This is so that you're working on your own theme project and not the primary Uuups repository.

After that, you need to make sure that you're in the proper folder to follow the next steps:

```bash
cd theme-name
```

## Installing Node dependencies

Uuups has many Node dependencies that it uses for the build process. To install them, you can either use NPM or Yarn.

```bash
npm install
```

## Renaming the theme

At this point, the theme is installed and ready to go. You'll likely want to rename the theme to something that suits your project. You can do this manually or use the included `rename` command, which will walk you through a series of questions and set up everything for you.

```bash
npm run rename
```

After this process has run, you'll want to regenerate your Composer autoload files using the following command.

```bash
composer dump-autoload
```
