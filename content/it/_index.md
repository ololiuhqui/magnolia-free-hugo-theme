---
title: ''
description: 'Un tema Hugo gratuito'
draft: false
---

<h1 style="text-align: center;">Come usare questo tema</h1>

#### Avvio rapido: come si installa 📥

1. Installate hugo extended, seguendo [la guida ufficiale all'installazione](https://gohugo.io/installation/). Per l'utilizzo di questo tema non è necessario eseguire `hugo new site`, in quanto si clonerà un sito di esempio nel passaggio 2.

2. Clonate il sito di esempio e il tema dal repo: `git init && git clone -b exampleSite --recurse-submodules https://github.com/ololiuhqui/magnolia-free-hugo-theme *YourSiteName*` (cambiate _YourSiteName_ nel comando con il nome che volete dare al vostro sito).

3. Cancellare il file `config.toml` predefinito dalla cartella principale del sito; le nuove configurazioni si troveranno in `config/_default`. Il file di configurazione principale è `config/_default/config.toml`, ma la maggior parte delle variabili sono sovrascritte o definite dai file di configurazione delle singole lingue (per esempio, `config/_default/languages/.en.toml`).

4. Spostarsi nella directory del sito e vedere l'anteprima del sito con `hugo serve -D`.

#### Come aggiornare ♻

- Dalla directory principale del vostro sito web eseguite: `git submodule update --remote --merge`.

#### Come personalizzare 🎨

- Utilizzare la tavolozza di colori preferita modificando le variabili di Bootstrap in `assets/scss/custom-variables.scss`.

- Modificare i file di configurazione in `/config/_default` e `/config/_default/languages` aggiungendo i propri elementi alle pagine. È possibile cambiare anche i nomi delle pagine.

- Modificare i nomi delle pagine, gli slug e le metadescrizioni in `content/*language*/*page*.html`. Il file `_index.html` nella radice di ogni cartella della lingua dei contenuti è la homepage, si veda [Organizzazione dei contenuti | Hugo](https://gohugo.io/content-management/organization/).

- Cambiare le immagini del sito web dalle cartelle `static` o `content` (alcune pagine usano [Page bundles](https://gohugo.io/content-management/page-bundles/)); si noti che il nome e il formato delle immagini devono essere gli stessi di quelli attualmente presenti nel sito di esempio (che è stato clonato nel passo 2 della guida "come installare").

#### Aggiungere nuove lingue 🚩

1. Andare a `config/_default/languages`.

2. Duplicare uno dei file di lingua, cambiare il tag della lingua e il nome del file (en, it, fr ecc.): questo dovrebbe essere conforme a [RFC 5646](https://gohugo.io/content-management/multilingual/). Per una configurazione più rapida, utilizzare [RFC 5646 Language Tags List](https://gist.github.com/msikma/8912e62ed866778ff8cd).

3. Tradurre i valori delle variabili all'interno del file `.toml` in base alla lingua.

4. Nella cartella `/content`, duplicare una delle cartelle delle lingue e modificarne il nome in base alla nuova lingua, come indicato al punto 2.

5. Per ogni file `.html` in `/content`, è possibile modificare liberamente `title` e `slug`. La `translationKey` deve rimanere intatta.

6. Si consiglia vivamente di aggiornare anche il SEO nel frontmatter nella nuova lingua.

#### Pagina 404 personalizzata ❓

Per aggiungere la pagina 404 personalizzata e farla funzionare su pagine github o altri host, dovrete aggiungerla manualmente durante la costruzione del sito eseguendo `hugo`. Questo perché github pages cerca un modello 404 nella cartella principale del progetto, quindi è possibile avere una sola pagina 404 per tutte le lingue. Per creare un link simbolico alla versione 404 inglese, che sarà poi usata come 404 predefinita una volta ospitata, dopo aver eseguito `hugo` eseguire `ln -s public/en/404/index.html public/404.html`.

#### Remunera il mio tempo e le mie energie 💫

![Ricezione Liberapay](https://img.shields.io/liberapay/receives/ololiuhqui)
![Sponsor GitHub](https://img.shields.io/github/sponsors/ololiuhqui)

Progettare questo tema e renderlo disponibile per voi ha richiesto molto tempo e impegno.

La licenza MIT significa che siete completamente liberi di fare tutto ciò che volete con questo tema, anche [guadagnarci sopra!](https://opensource.org/license/MIT)

Se lo desiderate, potete sostenermi in diversi modi, [vedeteli su Github](https://github.com/ololiuhqui/magnolia-free-hugo-theme?tab=readme-ov-file#remunerate-my-time-and-energy-)
