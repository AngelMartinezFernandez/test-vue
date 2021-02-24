import { createLocalVue, mount } from '@vue/test-utils'
import { Plugin } from '@/components/Plugin'

const localVue = createLocalVue()
localVue.use(Plugin)

// const $route = {
//   path: '/',
//   hash: '',
//   params: { id: '123' },
//   query: { msg: 'hello' }
// }

// mount(Component, {localVue})
