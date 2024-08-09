# Hugo Magnolia Theme

**A simple, completely customizable, multilingual Hugo theme thought for professionals and small businesses.**

I decided to give my personal _thank you_ to the Hugo developers and community by making this theme available for everyone.

I strongly value the open source community as in these years i've been using many open source projects that made my life better and improved my digital freedom in many ways.

Freedom makes us better humans, and makes us improve our status faster and easier.

## Remunerate my time and energy 💫

Designing this theme and making it available for you took a lot of time and effort.

If you find yourself using this theme and you like it and pheraps you also [make money from it](https://opensource.org/license/MIT), consider remunerating my work and my time with a donation.
You can choose your favorite way to support me.

[<img src=".readme_images/bmc-brand-logo.svg">](https://buymeacoffee.com/ololiuhqui)

![Bitcoin](.readme_images/bitcoin.svg)

**bc1q26f4gscc5ksujdx6wzxfnlqeqt02p3sjcqwvln**

It doesn't really cost anything to you but it would definitely motivate me to work more with Hugo and improve this theme, or working on other cool open source projects.

Also please make sure to [**star this repo!**](https://github.com/ololiuhqui/magnolia-free-hugo-theme)

## Features 🔎

I built this theme with simplicity in mind, it is small and easily customizable, responsive, modular and multilingual. But it also leaves some space to further in-depth customization since it uses **Bootstrap** and **SCSS**.

### 1. Responsive

- The theme is fully responsive and shows perfectly on every screen size.

### 2. Modular

- Hide and show some elements easily from the config file.

### 3. Multilingual

- The default content language is english (it can be changed), but you can add as many languages as you want very easily, the theme includes an italian language example and a dropdown menù for easily switching between languages.

### 4. Customizable

These are the currently customizable sections:

- Landing page
- "Services" page with arbitrary number of points
- "Office" page with integrated google maps view for directions
- Contacts page with FormSpree connected form and opening hours

### 5. SEO ready

- Every page has an easily customizable meta description and a unique meta title for better and easier indexing. The theme will use the image `static/img/meta-image` as meta image for Google, Facebook and Twitter.
  There is a `robots.txt` file which indicates the correct location of the sitemap index for faster indexing.

### 6. Localized permalinks

- Permalinks can be localized in each language (eg. you can have `/contacts` for english and `/contatti` for italian).

### 6. Google Analytics supported

- Insert your Google Analytics tag in the `config.toml` file and be ready to track your site performances easily.

## How to install 📥

1. Install hugo extended, follow [the official installation guide](https://gohugo.io/installation/).
2. Create a new site: `hugo new site <sitename>`.
3. Clone the theme repo as a submodule into your new site:`git init && git submodule add --depth=1 https://github.com/ololiuhqui/magnolia-free-hugo-theme themes/Magnolia`.
4. Copy the content from "examplesite" to your site, from the root of your new website folder: `cp -rv themes/Magnolia/exampleSite/* ./`
5. See the website preview with `hugo serve -D`

## How to update ♻

- From the root directory of your website run: `git submodule update --remote --merge`.

## How to customize 🎨

- Use your preferred color palette by modifying the Bootstrap variables in `assets/scss/custom-variables.scss`.

- Change the config files adding your own elements to the pages. You can change the page names there as well.

- Change the pages metadescriptions in `content/<language>/<page>.html`. The `_index.html` in the root of every content language folder is the homepage, refer to [Content organization | Hugo](https://gohugo.io/content-management/organization/).

- Change the images of the website from the `static` or `content` folders (some pages use [Page bundles](https://gohugo.io/content-management/page-bundles/)), please notice that the name and the format of the images should be the same of the ones currently present in the exampleSite (that you cloned in step 2 of "how to install" guide).

## Add new languages 🚩

1. Head to `config/_default/languages`.
2. Duplicate one of the language files, change the language tag, name of the file (en, it, fr etc): this should be compliant with [RFC 5646](https://gohugo.io/content-management/multilingual/). Use the [RFC 5646 Language Tags List](https://gist.github.com/msikma/8912e62ed866778ff8cd) for a quicker setup.
3. Translate the variables values inside the `.toml` file accordingly to the language.
4. In the `/content` directory, duplicate one of the language folders and change the name accordingly to your new language as in step 2.
5. For each of the `.html` file in `/content`, you can change `title` and `slug` freely. `translationKey` should remain untouched.

## Custom 404 page

To add the custom 404 page and make it work on github pages or other hostings, you will have to add it manually when building the site executing `hugo`. This is because github pages looks for a 404 template in the root directory of the project, you can therefore only have one single 404 page for all the languages. To create a symlink to the english 404 version, which will then be used as default 404 once hosting, after running `hugo` run `ln -s public/en/404/index.html public/404.html`.

## Contribute 🛠

### Known issues:

- A better styling of the language dropdown menù is needed.

### To add:

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
