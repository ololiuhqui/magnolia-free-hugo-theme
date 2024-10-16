---
title: ''
description: 'Un tema Hugo gratuito'
draft: false
---

<h1 style="text-align: center;">Come usare questo tema</h1>

### Avvio rapido: come si installa 📥

1. Installate hugo extended, seguendo [la guida ufficiale all'installazione] (https://gohugo.io/installation/). Per l'utilizzo di questo tema non è necessario eseguire `hugo new site`, in quanto si clonerà un sito di esempio nel passo 2.

2. Clonate il sito di esempio e il tema dal repo: `git init && git clone -b exampleSite --recurse-submodules https://github.com/ololiuhqui/magnolia-free-hugo-theme <YourSiteName>` (cambiate \<YourSiteName\> nel comando con il nome che volete dare al vostro sito).

3. Cancellare il file `config.toml` predefinito dalla cartella principale del sito; le nuove configurazioni si troveranno in `config/_default`. Il file di configurazione principale è `config/_default/config.toml`, ma la maggior parte delle variabili sono sovrascritte o definite dai file di configurazione delle singole lingue (per esempio, `config/_default/languages/.en.toml`).

4. Spostarsi nella directory del sito e vedere l'anteprima del sito con `hugo serve -D`.

### Come aggiornare ♻

- Dalla directory principale del vostro sito web eseguite: `git submodule update --remote --merge`.

### Come personalizzare 🎨

- Utilizzare la tavolozza di colori preferita modificando le variabili di Bootstrap in `assets/scss/custom-variables.scss`.

- Modificare i file di configurazione in `/config/_default` e `/config/_default/languages` aggiungendo i propri elementi alle pagine. È possibile cambiare anche i nomi delle pagine.

- Modificare il contenuto della homepage in `content/<language>/pages/_index.html`, con il supporto di markdown.

- Modificare i nomi delle pagine, gli slug e le metadescrizioni in `content/<language>/pages/<page>/index.html`.

- Modificare le immagini del sito web dalle cartelle `content/<language>/pages/<page>/<image>` (pagine e post usano [Page bundles](https://gohugo.io/content-management/page-bundles/)).

### Come gestire i post ✏️

La cartella `/content` contiene diversi tipi di contenuto; la struttura della cartella content imita la struttura del sito.

```
contenuto
├── it
│ ├── _index.md
│ ├── pagine
│ ├── post
𥔂 ├── profilo.webp
│ └─── tag
└─── it
    ├─── _index.md
    ├─── pagine
    ├─── messaggi
    ├─── profilo.webp
    └── tag
```

Per ogni lingua, ci si troverà di fronte alla homepage `_index.md` e all'immagine utilizzata per la sezione di presentazione della homepage (`profile.webp`). Le altre directory conterranno esattamente ciò che ci si aspetta.

`pages`= le normali pagine del sito (ufficio, servizi, ecc.).
`posts`= i vostri messaggi.
`tags` = tag personalizzati.

#### Post

- Creare un nuovo post con: `hugo new --kind post-bundle content/<lang>/posts/<nome-post>`. Questa sarà la sua struttura molto semplice:

```
contenuto/it/post
├── a-poema-su-fiori
│ ├── immagini
│ │ └── featured.jpg
│ └─── index.md
```

- Modificare i metadati in `index.md` e aggiungere il contenuto del post.

- Aggiungere un'immagine in evidenza al post, inserendo il segnaposto `featured.webp` in `/images`. L'immagine in evidenza deve essere chiamata "featured", ma può essere di qualsiasi estensione. Se si desidera, è possibile rimuovere il segnaposto per avere un post di solo testo.

#### Tag

1. Un'opzione è quella di creare automaticamente i tag aggiungendoli ai frontmatter dei post.

2. La seconda opzione è quella di creare un nuovo tag con: `hugo new --kind tag content/<lang>/tags/<nome-tag>`. La creazione di tag in questo modo permette una manipolazione più fine, si possono tradurre i tag dando la stessa translationKey in frontmatter in ogni lingua diversa. In questo modo i post saranno ordinati nello stesso modo per ogni lingua e le traduzioni delle pagine dei tag saranno disponibili.

```
content/it/tags
├── fiori
│ └── _index.md
```

Per ulteriori informazioni sull'organizzazione dei contenuti, fare riferimento a [Organizzazione dei contenuti | Hugo](https://gohugo.io/content-management/organization/).

### Aggiungere nuove lingue 🚩

1. Andare a `config/_default/languages`.
2. Duplicare uno dei file di lingua, cambiare il tag della lingua e il nome del file (en, it, fr ecc.): questo dovrebbe essere conforme a [RFC 5646](https://gohugo.io/content-management/multilingual/). Per una configurazione più rapida, utilizzare [RFC 5646 Language Tags List](https://gist.github.com/msikma/8912e62ed866778ff8cd).
3. Tradurre i valori delle variabili all'interno del file `.toml` in base alla lingua.
4. Nella cartella `/content`, duplicare una delle cartelle delle lingue e modificarne il nome in base alla nuova lingua, come indicato al punto 2.
5. Per ogni file `.html` in `/content/pages`, è possibile modificare liberamente `title` e `slug`. La `translationKey` deve rimanere intatta o deve essere modificata in ogni file di pagina in lingua. Suggerisco vivamente di tradurre il SEO anche qui.
6. Per ogni file `.md` in `content/posts/<my-post>` traducete il contenuto e i valori di frontmatter necessari (es. _summary_).

### Pagina 404 personalizzata

Per aggiungere la pagina 404 personalizzata e farla funzionare sulle pagine di github, è necessario aggiungerla manualmente durante la costruzione del sito eseguendo `hugo`. Questo perché github pages cerca un modello 404 nella cartella principale del progetto, quindi è possibile avere una sola pagina 404 per tutte le lingue. Per creare un link simbolico alla versione 404 inglese, che sarà poi usata come 404 predefinita una volta ospitata, dopo aver eseguito `hugo` eseguire `ln -s public/en/404/index.html public/404.html`.

### Remunera il mio tempo e le mie energie 💫

![Ricezione Liberapay](https://img.shields.io/liberapay/receives/ololiuhqui)
![Sponsor GitHub](https://img.shields.io/github/sponsors/ololiuhqui)

Progettare questo tema e renderlo disponibile per voi ha richiesto molto tempo e impegno.

La licenza MIT significa che siete completamente liberi di fare tutto ciò che volete con questo tema, anche [guadagnarci sopra!](https://opensource.org/license/MIT)

Se lo desiderate, potete supportarmi in diversi modi.

**[Perché mai dovresti farlo?](/posts/perché-donare-a-progetti-di-software-opensource-è-importante)**
