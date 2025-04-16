<h1 align=center>Hugo Magnolia 🌸 | <a href="https://ololiuhqui.github.io/magnolia-free-hugo-theme/en/" rel="nofollow">Demo</a></h1>

<br>
<div align="center>

[![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/ololiuhqui/magnolia-free-hugo-theme/hugo.yaml?logo=hugo)](https://github.com/ololiuhqui/magnolia-free-hugo-theme/actions/workflows/hugo.yaml)
[![Minimum Hugo Version](https://img.shields.io/static/v1?label=min-HUGO-version&message=>=v0.129.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.129.0)
![GitHub Repo stars](https://img.shields.io/github/stars/ololiuhqui/magnolia-free-hugo-theme)

</div>

<br>

**A simple, customizable, multilingual Hugo theme thought for professionals and small businesses.**

I decided to give my personal _thank you_ to the Hugo developers and community by making this theme available for everyone.

This theme is actually very "hugo noob" friendly, as it provides an **example site** to be used with the latest version of the theme, the main pages are there to be used as they are, with most of the params already in the config files. you can customize the color palette and some of the pages images. This theme also aims to be _very well documented_ in order to be accessible even from a complete stranger and make your site run asap.

I strongly value the open source community as in these years i've been using many open source projects that made my life better and improved my digital freedom in many ways.

Freedom makes us better humans, and makes us improve our status faster and in an easier way.

**Make sure to <a href="https://github.com/ololiuhqui/magnolia-free-hugo-theme"> star this repo!</a>**

## Features ⚡

I built this theme with simplicity in mind, it is small and easily customizable, responsive, modular and multilingual. But it also leaves some space to further in-depth customization since it uses **Bootstrap** and **SCSS**.
This theme is thought to be used as a personal / business theme, it can provide a great landing page or blog for your activity!

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

- Every page has an easily customizable meta description and a unique meta title for better and easier indexing. Each post has the option of adding a featured image, and, if not found, `assets/img/meta-image` will be used instead as meta image for Google, Facebook and Twitter. All pages that do not have a featured image will have the `meta-image` by default (eg. homepage, office etc).
  There is a `robots.txt` file which indicates the correct location of the sitemap index for faster indexing. There's also an option in config to block AI scrapers via robots, this will increase your website **privacy** as well as **digital resiliency**, and also could help avoid altering your analytics.

### 6. Google Analytics supported

- Insert your Google Analytics tag in the `config.toml` file and be ready to track your site performances easily.

### 7. Google Maps included

- The contact page can be easily customized by adding a google maps link to get directions towards your activity location.

### 8. Ready to Blog

- The theme provides some archetypes and a simple directory structure, you can publish articles/posts in more languages, set a publish date, a featured image, an expiration date and tag your posts. You can create and translate custom tags. Latest posts will appear in the homepage, every tag will have its own list page, and every post will show a list of latest related posts based on tagging. If you include titles in your posts, they will be automatically rendered in a table of contents. SEO is carefully taken care of for posts as well. **You can also disable the blog part of the theme entirely if you don't need it!**

## Quick start: how to install 📥

1. Install hugo extended, follow [the official installation guide](https://gohugo.io/installation/). For using this theme you **DO NOT NEED** to execute `hugo new site`, as you will be cloning an example site in step 2.

2. Get [the latest version of the example site](https://github.com/ololiuhqui/magnolia-free-hugo-theme/releases/latest). Download the archive named example-site, it will automatically come with a compatible version of the magnolia theme.

3. The site configurations will be found in `config/_default`. The main configuration file is `config/_default/config.toml`, but most variables are overwritten or defined by the individual language configuration files (eg. `config/_default/languages/.en.toml`)

4. Move to your site directory and see the website preview with `hugo serve -D`

## How to update ♻

- Move into the theme folder `cd themes/Magnolia`

- Run `git checkout <version-tag>`. Choose the version tag from the [releases page](https://github.com/ololiuhqui/magnolia-free-hugo-theme/releases). e.g `git checkout v2.0.0`.

Please check the releases page to make sure the new version of the theme is compatible with your current example-site release. Refer to [Semantic Versioning 2.0.0 | Semantic Versioning](https://semver.org/).

## How to customize 🎨

- Use your preferred color palette by modifying the Bootstrap variables in `assets/scss/custom-variables.scss`.

- Change the config files in `/config/_default` and `/config/_default/languages` adding your own elements to the pages. You can change the page names there as well.

- Edit the homepage content in `content/<language>/_index.html`, markdown supported.

- Edit pages names, slugs and metadescriptions in `content/<language>/pages/<page>/index.html`.

- Change the images of the website from the `content/<language>/pages/<page>/<image>` folders (pages and posts use [Page bundles](https://gohugo.io/content-management/page-bundles/)).

- Add your own favicon, background and default meta-image (the image used in SEO) in `assets/img`. These files can be of any extension but must have the same name of the ones currently in the example site assets directory.

## How to manage posts ✏️

### Enable/Disable Blog

_Wait, you told me this theme was noob friendly, I don't wanna deal with all the blog stuff!_

_I need a simple landing page and all this blog feature is something I don't care about!_

**If you don't need posts you can disable the blog part of the theme entirely from within the config files and just use Magnolia as a simple landing site.**

- To disable _tags only_ rendering and indexing for the entire site -> `config.toml` uncomment `#disableKinds = ['taxonomy', 'term']`.
- To disable _post and tags_ rendering and indexing for the entire site -> `config.toml` uncomment `#disableKinds = ['taxonomy', 'term']` and `#ignoreFiles= ['posts/*']`.

### Content organization

The `/content` folder contains different types of content, the content organization mimicts the site structure.

```
content
├── en
│   ├── _index.md
│   ├── pages
│   ├── posts
│   ├── profile.webp
│   └── tags
└── it
    ├── _index.md
    ├── pages
    ├── posts
    ├── profile.webp
    └── tags
```

For each language, you will find yourself in front of the homepage `_index.md` and the image used for the homepage presentation section (`profile.webp`). The other directories will contain exactly what you expect.

`pages`= normal website pages (office, services etc).
`posts`= site posts.
`tags` = custom tags.

#### Posts

- Create a new post with: `hugo new --kind post-bundle content/<lang>/posts/<post-name>`. This will be its very simple structure:

```
content/en/posts
├── a-poem-about-flowers
│   ├── images
│   │   └── featured.jpg
│   └── index.md
```

- Edit the metadata in `index.md` and add your post content below.

- Add a post featured image by subsituting the `featured.webp` placeholder in `/images`. The featured image has to be called "featured" but can be of any extension. If you wish you can remove the placeholder to have a text-only post.

#### Tags

1. One option is to automatically create tags by adding them to posts frontmatters.

2. The second option is to create a new tag with: `hugo new --kind tag content/<lang>/tags/<tag-name>`. Creating tags this way will allow for a finer manipulation, you can translate tags here by giving the same translationKey in frontmatter in every different language. Hence having your posts sorted the same for each language and have tag pages translations available.

```
content/en/tags
├── flowers
│   └── _index.md
```

For more on content organization refefer to [Content organization | Hugo](https://gohugo.io/content-management/organization/).

## Add new languages 🚩

1. Head to `config/_default/languages`.
2. Duplicate one of the language files, change the language tag, name of the file (en, it, fr etc): this should be compliant with [RFC 5646](https://gohugo.io/content-management/multilingual/). Use the [RFC 5646 Language Tags List](https://gist.github.com/msikma/8912e62ed866778ff8cd) for a quicker setup.
3. Translate the variables values inside the `.toml` file accordingly to the language.
4. In the `/content` directory, duplicate one of the language folders and change the name accordingly to your new language as in step 2.
5. For each of the `.html` file in `/content/pages`, you can change `title` and `slug` freely. `translationKey` should remain untouched or should be changed in every language page file. I strongly suggest you to translate the SEO here as well.
6. For each of the `.md` files in `content/posts/<my-post>` translate the content and the frontmatter values you need (eg. _summary_).

## Custom 404 page

To add the custom 404 page and make it work on github pages, you will have to add it manually when building the site executing `hugo`. This is because github pages looks for a 404 template in the root directory of the project, you can therefore only have one single 404 page for all the languages. To create a symlink to the english 404 version, which will then be used as default 404 once hosting, after running `hugo` run `ln -s public/en/404/index.html public/404.html`.

## Remunerate my time and energy 💫

![Liberapay receiving](https://img.shields.io/liberapay/receives/ololiuhqui)
![GitHub Sponsors](https://img.shields.io/github/sponsors/ololiuhqui)

Designing this theme and making it available for you took a lot of time and effort.

The MIT license means that you are completely free to do whatevere you want with this theme, even [make money from it!](https://opensource.org/license/MIT) With the only obligation to include the attribution!

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

</details>

<details><summary><b> GitHub Sponsors </b></summary>
<a href="https://github.com/ololiuhqui/magnolia-free-hugo-theme">Github Repo</a>

</details>

## Contribute 🛠

**First of all, PRs are welcome here!**

### Notes on how this repo works

This repo includes two main branches: **main** and **exampleSite**.

**main** is an **exampleSite** submodule.

The _exampleSite_ directory will _not_ be shown in **main** branch.
If you clone the **main** branch you will therefore be able to modify the theme and its content only, if you clone the **exampleSite** branch you will be able to modify the exampleSite content only.
As an alternative you can also clone the **exampleSite** with the `recurse-submodules` option, that will also add the theme **main** as submodule, making it available for changes. To clone the repo and submodule at latest commit and main branch run `git clone -b exampleSite --recurse-submodules https://github.com/ololiuhqui/magnolia-free-hugo-theme`, move to the just cloned folder and `git submodule update --remote --merge` to make sure you're working with the latest theme commit.

This will set you up to work on a detatched HEAD with the latest commit on the theme and example site, checkout to your own branches and make pull requests!

#### Content:

| main 🌲     | exampleSite 🌲            |
| ----------- | ------------------------- |
| main branch | exampleSite branch        |
|             | theme as submodule (main) |

### Things that should be probably added to this theme

#### Add a RSS feed template for posts

This would be wonderful for setting up automations that use RSS feed as source like Zapier or FTTT.

#### Add proper Bootstrap theming

Only some bootstrap variables are reassigned, leaving a lot of them to defaults. Properly assigning all the most important variables would make building, modifying and styling the theme much easier with less manual SCSS/CSS needed.

I included the `scss/custom-variable.scss` file to overwrite the default variables, this would need to be updated as well with the variables that get styled in the theme, in order to give the theme user the ability to easily customize the site appeareance.

Refer to:

- [Customize · Bootstrap v5.0](https://getbootstrap.com/docs/5.0/customize/overview/).
- [Example bootstrap themes + easily style with UI](https://bootstrap.build/app/project/UroRGaxfXxdg)

### Ensure accessibility

The website still lacks a focus on accessibility, this needs to be addressed.
