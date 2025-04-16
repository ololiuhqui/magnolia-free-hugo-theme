---
title: ''
description: 'A free hugo theme'
draft: false
---

<h1 style="text-align: center;">How to use this theme</h1>

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

_Wait, you told me this theme was noob friendly, I don't wanna deal with all the blog stuff!_ <br/>
_I need a simple landing page and all this blog feature is something I don't care about!_

**If you don't need posts you can disable the blog part of the theme entirely from within the config files and just use Magnolia as a simple landing site**

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

The MIT license means that you are completely free to do whatevere you want with this theme, even [make money from it!](https://opensource.org/license/MIT)

If you wish you can support me in several ways.

**[Why you should btw?](/posts/why-donating-to-free-and-opensource-software-projects-is-important/)**
