# vue-cusdis

```console
npm i @evillt/vue-cusdis
```

## Usage

```html
<template>
  <vue-cusdis
    :attrs="{
      host: 'https://cusdis.com',
      appId: 'APP_ID',
      pageId: 'PAGE_ID',
      pageTitle: 'PAGE_TITLE',
      pageUrl: 'PAGE_URL'
    }"
  ></vue-cusdis>
</template>

<script>
  // For Vue 3
  import VueCusdis from '@evillt/vue-cusdis'
  // For Vue 2
  import VueCusdis from '@evillt/vue-cusdis/dist/vue2.es'

  export default {
    components: { VueCusdis },
  }
</script>
```

## props

### attrs

- Type: `Object`

https://cusdis.com/doc#/advanced/sdk

### lang

- Type: `String`

https://cusdis.com/doc#/advanced/i18n

## License

MIT
