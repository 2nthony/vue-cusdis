import { h, ref } from 'vue'
import { props, resolveProps, injectScripts } from './utils'

export default {
  props,

  setup(origProps) {
    const cusdisRef = ref()
    const props = resolveProps(origProps)

    injectScripts(props).then(() => {
      const render = window.renderCusdis
      const target = cusdisRef.value

      if (render && target) render(target)
    })

    return () =>
      h('div', {
        id: 'cusdis_thread',
        ref: cusdisRef,
        'data-host': props.attrs.host,
        'data-page-id': props.attrs.pageId,
        'data-app-id': props.attrs.appId,
        'data-page-title': props.attrs.pageTitle,
        'data-page-url': props.attrs.pageUrl,
      })
  },
}
