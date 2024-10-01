---
title: ''
description: 'A free hugo theme'
draft: false
layout: '_index'
---

<h1 style="text-align: center;">How to use this theme</h1>

#### Quick start: how to install 📥

1. Install hugo extended, follow [the official installation guide](https://gohugo.io/installation/). For using this theme you **DO NOT NEED** to execute `hugo new site`, as you will be cloning an example site in step 2.

2. Clone the exampleSite and the theme from the repo:`git init && git clone -b exampleSite --recurse-submodules https://github.com/ololiuhqui/magnolia-free-hugo-theme *YourSiteName*` (change _YourSiteName_ in the command with the name you wanna give to your site).

3. Delete your default `config.toml` from the root folder of your site; the new configurations will be found in `config/_default`. The main configuration file is `config/_default/config.toml`, but most variables are overwritten or defined by the individual language configuration files (eg. `config/_default/languages/.en.toml`)

4. Move to your site directory and see the website preview with `hugo serve -D`

#### How to update ♻

- From the root directory of your website run: `git submodule update --remote --merge`.

#### How to customize 🎨

- Use your preferred color palette by modifying the Bootstrap variables in `assets/scss/custom-variables.scss`.

- Change the config files in `/config/_default` and `/config/_default/languages` adding your own elements to the pages. You can change the page names there as well.

- Change the pages names, slugs and metadescriptions in `content/*language*/*page*.html`. The `_index.html` in the root of every content language folder is the homepage, refer to [Content organization | Hugo](https://gohugo.io/content-management/organization/).

- Change the images of the website from the `static` or `content` folders (some pages use [Page bundles](https://gohugo.io/content-management/page-bundles/)), please notice that the name and the format of the images should be the same of the ones currently present in the exampleSite (that you cloned in step 2 of "how to install" guide).

#### Add new languages 🚩

1. Head to `config/_default/languages`.

2. Duplicate one of the language files, change the language tag, name of the file (en, it, fr etc): this should be compliant with [RFC 5646](https://gohugo.io/content-management/multilingual/). Use the [RFC 5646 Language Tags List](https://gist.github.com/msikma/8912e62ed866778ff8cd) for a quicker setup.

3. Translate the variables values inside the `.toml` file accordingly to the language.

4. In the `/content` directory, duplicate one of the language folders and change the name accordingly to your new language as in step 2.

5. For each of the `.html` file in `/content`, you can change `title` and `slug` freely. `translationKey` should remain untouched.

6. I strongly suggest you to update the SEO in the frontmatter as well in your new language.

#### Custom 404 page ❓

To add the custom 404 page and make it work on github pages or other hostings, you will have to add it manually when building the site executing `hugo`. This is because github pages looks for a 404 template in the root directory of the project, you can therefore only have one single 404 page for all the languages. To create a symlink to the english 404 version, which will then be used as default 404 once hosting, after running `hugo` run `ln -s public/en/404/index.html public/404.html`.

#### Remunerate my time and energy 💫

![Liberapay receiving](https://img.shields.io/liberapay/receives/ololiuhqui)
![GitHub Sponsors](https://img.shields.io/github/sponsors/ololiuhqui)

Designing this theme and making it available for you took a lot of time and effort.

The MIT license means that you are completely free to do whatevere you want with this theme, even [make money from it!](https://opensource.org/license/MIT)

If you wish you can support me in several ways, [see them on Github](https://github.com/ololiuhqui/magnolia-free-hugo-theme?tab=readme-ov-file#remunerate-my-time-and-energy-)
