---
layout: layouts/base.njk
title: Linting
---
# Linting

We lint PHP, CSS, and JS to analyze source code for errors, bugs, stylistic details, and keeping track of best practises.

* **PHP**: Custom [PHPCS ruleset](https://github.com/samikeijonen/phpcs-composer) as a composer package.
* **CSS**: Custom [Styleling config](https://github.com/samikeijonen/stylelint-config) as a NPM package.
* **JS**: [WordPress ESLing plugin](https://www.npmjs.com/package/@wordpress/eslint-plugin) as a NPM package.

## Linting before committing using `lint-staged`

We run linting before committing using [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky) NPM packages.

Husky gives us posibility to lint using `pre-commit` Git hook. Here is example of config in `package.json` file:

```json
"husky": {
	"hooks": {
		"pre-commit": "lint-staged"
	}
},
"lint-staged": {
	"*.js": [
		"eslint"
	],
	"*.css": [
		"stylelint"
	],
	"*.php": [
		"./vendor/bin/phpcs --warning-severity=8"
	]
},
```

* If commit files includes JS files, we run `eslint` on those files.
* If commit files includes CSS files, we run `stylelint` on those files.
* If commit files includes PHP files, we run `PHPCS` on those files.

In other words we only lint files that have changed using correct lint tool.

## Linting PHP

We set the custom ruleset in `composer.json` file under `require-dev`. 

```json
"require-dev": {
	"samikeijonen/phpcs-composer": "dev-master"
}
```

Update PHPCS ruleset or any other composer package by running:

```bash
composer up
```

Our ruleset is called `Foxland-Default` and we set it in `.phpcs.xml.dist` file. There are also couple of other theme related configs like checking theme text-domain.

You can switch to any other PHPCS ruleset, for example to [WPThemeReview](https://github.com/WPTRT/WPThemeReview).

Lint PHP by running:

```bash
npm run lint:php
```

## Linting CSS

We set custom stylelint config in `package.json` file called `@foxland/stylelint-config`. 

We set this in `.stylelintrc` file.

Lint CSS by running:

```bash
npm run lint:css
```

## Linting JS

We set custom ESLint config in `package.json` file called `@wordpress/eslint-plugin`.

We set this in `.eslintrc` file.

Lint JS by running:

```bash
npm run lint:js
```

## Lint all

You can also lint PHP, CSS, and JS using command:

```bash
npm run lint
```
