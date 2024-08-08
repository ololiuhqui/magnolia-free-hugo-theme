'use strict';

import params from '@params';

const userLang = navigator.language || navigator.userLanguage;
console.log(params.baseurl);

if (userLang === 'it') {
  console.log('language is');
} else {
}
