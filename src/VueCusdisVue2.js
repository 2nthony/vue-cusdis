import { props, resolveProps, injectScripts } from './utils.js'

export default {
  props,

  computed: {
    props: ({ $props }) => resolveProps($props),
  },

  mounted() {
    injectScripts(this.props).then(() => {
      const render = window.renderCusdis
      const target = this.$refs.cusdisRef

      if (render && target) render(target)
    })
  },

  render(h) {
    return h('div', {
      id: 'cusdis_thread',
      ref: 'cusdisRef',
      attrs: {
        'data-host': this.props.attrs.host,
        'data-page-id': this.props.attrs.pageId,
        'data-app-id': this.props.attrs.appId,
        'data-page-title': this.props.attrs.pageTitle,
        'data-page-url': this.props.attrs.pageUrl,
        'data-theme': props.attrs.theme,
      },
    })
  },
}
