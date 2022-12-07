<template>
  <h3>{{ title }}</h3>
  <ul>
    <li
      v-for="item in items"
      :key="item">
      <label>
        <input
          type="radio"
          :value="item"
          :name="title"
          @input="$emit('update:modelValue', $event.target.value)" />
        {{ item }}</label>
    </li>
  </ul>
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
  //   },
  //   items: {
  //     type: Array,
  //     default: () => ([]) //need to use factory function to pass objects, arrays as props
  //   }
  // },
  // emits: ['update:modelValue']
}
</script>
