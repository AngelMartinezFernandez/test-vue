<template>
  <div></div>
</template>

<script>
import { mount } from '@vue_test_utils'

export default {

}
const $route = {
  path: '/',
  hash: '',
  params: { id: '123' },
  query: { msg: 'hello' }
}
mount(Component, {
  mocks: {
    $route
  }
})
</script>

<style scoped>

</style>
