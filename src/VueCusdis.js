import { h, ref, onMounted } from 'vue'
import cusdis from 'cusdis'
import attrs from './attrs'

export default {
  props: {
    attrs,
  },

  setup(props) {
    const cusdisRef = ref()

    onMounted(() => {
      const el = cusdisRef.value
      if (el) {
        new cusdis({
          target: el,
          props: {
            attrs: props.attrs,
          },
        })
      }
    })

    return () =>
      h('div', {
        ref: cusdisRef,
      })
  },
}
