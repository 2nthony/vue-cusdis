import cusdis from 'cusdis'
import attrs from './attrs'

export default {
  props: {
    attrs,
  },

  mounted() {
    const el = this.$refs.cusdisRef
    if (el) {
      new cusdis({
        target: el,
        props: {
          attrs: this.$props.attrs,
        },
      })
    }
  },

  render(h) {
    return h('div', {
      ref: 'cusdisRef',
    })
  },
}
