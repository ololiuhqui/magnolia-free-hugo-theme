<h1 align=center>Hugo Magnolia 🌸 | <a href="https://ololiuhqui.github.io/magnolia-free-hugo-theme/en/" rel="nofollow">Demo</a></h1>

<br>
<div style="text-align: center">

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ololiuhqui/magnolia-free-hugo-theme/hugo.yaml?logo=hugo)](https://github.com/ololiuhqui/magnolia-free-hugo-theme/actions/workflows/hugo.yaml)
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=>=v0.111.3&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.111.3)
![GitHub Repo stars](https://img.shields.io/github/stars/ololiuhqui/magnolia-free-hugo-theme)

</div>

<br>

**A simple, completely customizable, multilingual Hugo theme thought for professionals and small businesses.**

I decided to give my personal _thank you_ to the Hugo developers and community by making this theme available for everyone.

I strongly value the open source community as in these years i've been using many open source projects that made my life better and improved my digital freedom in many ways.

Freedom makes us better humans, and makes us improve our status faster and in an easier way.

**Make sure to <a href="https://github.com/ololiuhqui/magnolia-free-hugo-theme"> star this repo!</a>**

## Features ⚡

I built this theme with simplicity in mind, it is small and easily customizable, responsive, modular and multilingual. But it also leaves some space to further in-depth customization since it uses **Bootstrap** and **SCSS**.

This theme is thought to be used as a personal / business theme, it can provide a great landing page for your activity!

### 1. Responsive

- The theme is fully responsive and shows perfectly on every screen size.

### 2. Modular

- Hide and show some elements easily from the config file.

### 3. Multilingual

- The default content language is english (it can be changed), but you can add as many languages as you want very easily, the theme includes an italian language example and a dropdown menù for easily switching between languages. Permalinks can be localized in each language (eg. you can have `/contacts` for english and `/contatti` for italian).

### 4. Customizable

These are the currently customizable sections:

- Landing page
- "Services" page with arbitrary number of points
- "Office" page with integrated google maps view for directions
- Contacts page with FormSpree connected form and opening hours

### 5. SEO ready

- Every page has an easily customizable meta description and a unique meta title for better and easier indexing. The theme will use the image `static/img/meta-image` as meta image for Google, Facebook and Twitter.
  There is a `robots.txt` file which indicates the correct location of the sitemap index for faster indexing.

### 6. Google Analytics supported

- Insert your Google Analytics tag in the `config.toml` file and be ready to track your site performances easily.

### 7. Google Maps included

- The contact page can be easily customized by adding a google maps link to get directions towards your activity location.

## Quick start: how to install 📥

1. Install hugo extended, follow [the official installation guide](https://gohugo.io/installation/). For using this theme you **DO NOT NEED** to execute `hugo new site`, as you will be cloning an example site in step 2.

2. Clone the exampleSite and the theme from the repo:`git init && git clone -b exampleSite --recurse-submodules https://github.com/ololiuhqui/magnolia-free-hugo-theme <YourSiteName>` (change \<YourSiteName\> in the command with the name you wanna give to your site).

3. Delete your default `config.toml` from the root folder of your site; the new configurations will be found in `config/_default`. The main configuration file is `config/_default/config.toml`, but most variables are overwritten or defined by the individual language configuration files (eg. `config/_default/languages/.en.toml`)

4. Move to your site directory and see the website preview with `hugo serve -D`

## How to update ♻

- From the root directory of your website run: `git submodule update --remote --merge`.

## How to customize 🎨

- Use your preferred color palette by modifying the Bootstrap variables in `assets/scss/custom-variables.scss`.

- Change the config files in `/config/_default` and `/config/_default/languages` adding your own elements to the pages. You can change the page names there as well.

- Change the pages names, slugs and metadescriptions in `content/<language>/<page>.html`. The `_index.html` in the root of every content language folder is the homepage, refer to [Content organization | Hugo](https://gohugo.io/content-management/organization/).

- Change the images of the website from the `static` or `content` folders (some pages use [Page bundles](https://gohugo.io/content-management/page-bundles/)), please notice that the name and the format of the images should be the same of the ones currently present in the exampleSite (that you cloned in step 2 of "how to install" guide).

## Add new languages 🚩

1. Head to `config/_default/languages`.
2. Duplicate one of the language files, change the language tag, name of the file (en, it, fr etc): this should be compliant with [RFC 5646](https://gohugo.io/content-management/multilingual/). Use the [RFC 5646 Language Tags List](https://gist.github.com/msikma/8912e62ed866778ff8cd) for a quicker setup.
3. Translate the variables values inside the `.toml` file accordingly to the language.
4. In the `/content` directory, duplicate one of the language folders and change the name accordingly to your new language as in step 2.
5. For each of the `.html` file in `/content`, you can change `title` and `slug` freely. `translationKey` should remain untouched.
6. I strongly suggest you to update the SEO in the frontmatter as well in your new language.

## Custom 404 page

To add the custom 404 page and make it work on github pages or other hostings, you will have to add it manually when building the site executing `hugo`. This is because github pages looks for a 404 template in the root directory of the project, you can therefore only have one single 404 page for all the languages. To create a symlink to the english 404 version, which will then be used as default 404 once hosting, after running `hugo` run `ln -s public/en/404/index.html public/404.html`.

## Remunerate my time and energy 💫

![Liberapay receiving](https://img.shields.io/liberapay/receives/ololiuhqui)
![GitHub Sponsors](https://img.shields.io/github/sponsors/ololiuhqui)

Designing this theme and making it available for you took a lot of time and effort.

The MIT license means that you are completely free to do whatevere you want with this theme, even [make money from it!](https://opensource.org/license/MIT)

If you wish you can support me in several ways:

### Single donation:

<details><summary><b> BuyMeACoffee </b></summary>

<a href="https://www.buymeacoffee.com/ololiuhqui" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: auto ;width: 150px;" ></a>

</details>
<br>
<details><summary><b> Bitcoin (BTC) </b></summary>

```
bc1q26f4gscc5ksujdx6wzxfnlqeqt02p3sjcqwvln
```

![btc-bc1q26f4gscc5ksujdx6wzxfnlqeqt02p3sjcqwvln](https://raw.githubusercontent.com/ololiuhqui/magnolia-free-hugo-theme/main/images/.readme_images/bitcoin-qr.png)

</details>

### Recurring donations:

<details><summary><b> LiberaPay </b></summary>

<a href="https://liberapay.com/ololiuhqui/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>

Or GitHub sponsors

</details>

## Contribute 🛠

### Notes on how this repo works

**main** is the main branch, **exampleSite** is in another [git worktree](https://www.gitkraken.com/learn/git/git-worktree) which only includes the **exampleSite** branch . The **exampleSite** branch of course uses the _Magnolia theme_, simply added as a submodule on it.

So while the _exampleSite_ directory will be shown in **main**, every change in the _exampleSite_ directory will be considered a change in the **exampleSite worktree 🌲**.

To clarify the difference between branches and worktrees list all worktrees from the root of the theme by running `git worktree list`

> **output:** <br>
> dc079af [main] <br>
> 41ac063 [exampleSite]

And see the different outcomes if you run `git status` in the different directories:

> **output (if run from theme root):** <br>
> On branch main

> **output (if run from exampleSite directory):** <br>
> On branch exampleSite

If you clone this repo you will have **2** different worktrees:

| main 🌲     | exampleSite 🌲            |
| ----------- | ------------------------- |
| main branch | exampleSite branch        |
|             | theme as submodule (main) |

### Things to add to this theme

#### Add a blog functionality

Currently the theme doesn't properly support a blog functionality: you can add as many pages as you want but they do not appear anywhere in the site unless you share the direct link.

This is because the theme is thought to host a very simple landing website. It might be cool to include an optional blog feature though.

Some layout would need to be redesigned to include posts.

A very simple _single_ layout is already included. A _list_ layout is lacking.

Some taxonomies are disabled in `config.toml` to avoid indexing of empty pages, these would need to be re-enabled for making use of tags and categories.

#### Add proper Bootstrap theming

Only some bootstrap variables are reassigned, leaving a lot of them to defaults. Properly assigning all the most important variables would make building, modifying and styling the theme much easier with less manual SCSS/CSS needed.

I included the `scss/custom-variable.scss` file to overwrite the default variables, this would need to be updated as well with the variables that get styled in the theme, in order to give the theme user the ability to easily customize the site appeareance.

Refer to:

- [Customize · Bootstrap v5.0](https://getbootstrap.com/docs/5.0/customize/overview/).
- [Example bootstrap themes + easily style with UI](https://bootstrap.build/app/project/UroRGaxfXxdg)

#### Add different configuration environments

Hugo adds the possibility to use a production environment, specifying some defaults. Despite we make use of the `_default` folder name in the configs, a better implementation, which includes a development and a production environment would yet need to be made. Check [Glossary of terms - Environment | Hugo](https://gohugo.io/getting-started/glossary/#environment) and [Configure Hugo | Hugo](https://gohugo.io/getting-started/configuration/).

### Ensure accessibility

The website still lacks a focus on accessibility, this needs to be addressed.
