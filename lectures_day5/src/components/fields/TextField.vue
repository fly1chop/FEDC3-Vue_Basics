<template>
  <div>
    <h3>{{ title }}</h3>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script>
import fieldMixin from '~/mixins/fieldMixin'

export default {
  mixins: [fieldMixin]
  // props: {
  //   title: {
  //     type: String,
  //     default: ''
  //   },
  //   modelValue: {
  //     type: String,
  //     default: ''
  //   }
  // },
  // emits: ['update:modelValue']
}
</script>
