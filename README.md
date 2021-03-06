React Cusdis: https://github.com/Cusdis/sdk/tree/master/packages/react-cusdis

# vue-cusdis

```console
npm i vue-cusdis
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
  import VueCusdis from 'vue-cusdis'
  // For Vue 2
  import VueCusdis from 'vue-cusdis/dist/vue2.es'

  export default {
    components: { VueCusdis },
  }
</script>
```

## props

### attrs

- Type: `Object`

Cusdis SDK attributes: https://cusdis.com/doc#/advanced/sdk

### lang

- Type: `String`

For i18n, Available languages: https://cusdis.com/doc#/advanced/i18n

## BREAKING CHANGES

Please migrate `@evillt/vue-cusdis` to `vue-cusdis`.

In `v2.0.0`, we rename the filename for vue2 version. Just make this change:

```diff
- import VueCusdis from '@evillt/vue-cusdis/dist/V2.es'
+ import VueCusdis from '@evillt/vue-cusdis/dist/vue2.es'
```

We thought `V2.es` was misleading.

## Thanks

- [Frost Ming](https://github.com/frostming)

## License

MIT
