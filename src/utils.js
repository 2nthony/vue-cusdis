export const props = {
  attrs: {
    type: Object,
    validator: (value) => {
      return (
        ['appId', 'pageId'].every((k) => value[k]) ||
        console.error(
          'Missing required attrs. Check out `https://cusdis.com/doc#/advanced/sdk`',
        )
      )
    },
  },
  lang: String,
}

export function resolveProps(props) {
  return {
    ...props,
    attrs: {
      host: 'https://cusdis.com',
      ...props.attrs,
    },
  }
}

// trying to make them universal
// cusdis support refresh comment by it self, unload script is uneccessary.
export function injectScripts(props) {
  return new Promise((resolve, reject) => {
    const tasks = []
    const sdkScript = loadScript(`${props.attrs.host}/js/cusdis.es.js`)
    tasks.push(sdkScript)

    if (props.lang) {
      const langScript = loadScript(
        `${props.attrs.host}/js/widget/lang/${props.lang}.js`,
      )
      tasks.push(langScript)
    }

    Promise.all(tasks)
      .then(() => resolve())
      .catch(reject)
  })
}

function loadScript(url) {
  return new Promise((resolve, reject) => {
    let script = document.querySelector(`script[src="${url}"]`)
    if (!script) {
      script = document.createElement('script')
      script.src = url
      script.async = true
      script.defer = true
      document.body.appendChild(script)
      script.addEventListener('load', () => {
        resolve(script)
      })
      script.addEventListener('error', reject)
      script.addEventListener('abort', reject)
      return
    }
    resolve(script)
  })
}
