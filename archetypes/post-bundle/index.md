---
title: '{{ replace .File.ContentBaseName `-` ` ` | title }}'
slug: '{{ .File.ContentBaseName }}'
summary: # This is what will be displayed as summary for the post (the theme will automatically generate one from the content you write in the post if left empty)
description: # This is what will be displayed as meta data (the theme will automatically grab it from summary if left empty)
date: '{{ .Date }}'
expiryDate: '' # You want your post to vanish after a certain date? Write it down here! Must be in the same format of `date`
translationKey: # If you have a translated post for this one, set the same translationKey to have the translation displayed
draft:
type: # This is here for future possible development, you can leave it blank
layout: 'single'
# Refer to [Front matter | Hugo](https://gohugo.io/content-management/front-matter/)
---
