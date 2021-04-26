export default {
  type: Object,
  validator: (value) => {
    return (
      ['host', 'appId', 'pageId'].every((k) => value[k]) ||
      console.error(
        'Missing required attrs. Check out `https://cusdis.com/doc#/advanced/sdk`',
      )
    )
  },
}
