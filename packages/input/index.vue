<template>
  <Form>
    <el-input type="text"
              name="field"
              :rules="isRequired" />
    <ErrorMessage name="field" />
  </Form>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Field, Form, ErrorMessage } from 'vee-validate'

export default defineComponent({
  name: 'EinInput',
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  props: {
    rules: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  setup(props, { emit }) {
    let value = ref(null)

    function isRequired(value) {
      if (value && value.trim()) {
        return true
      }
      return 'This is required'
    }
    function test() {
      console.log('方法调用了')
    }
    return {
      isRequired,
      test,
    }
  },
})
</script>

<style scoped lang="scss">
</style>