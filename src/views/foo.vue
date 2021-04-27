<template>
  <div>Foo</div>
  <vue-cusdis
    :attrs="{
      host: 'https://cusdis.com',
      appId: '93dffca4-d9a3-49e0-b728-00add49b7bce',
      pageId: 'foo',
    }"
  ></vue-cusdis>
</template>

<script>
import VueCusdis from '../VueCusdis'
// import VueCusdis from '../../dist/VueCusdis.es'
export default {
  components: { VueCusdis },
}
</script>