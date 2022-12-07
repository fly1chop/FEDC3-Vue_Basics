<template>
  <h1>Survey</h1>
  <!-- <TextField
    v-model="fields[0].value"
    :title="fields[0].title" />
  <SimpleRadio
    v-model="fields[1].value"
    :title="fields[1].title"
    :items="fields[1].items" /> -->
  <component
    :is="field.component"
    v-for="field in fields"
    :key="'component-' + field.title"
    v-model="field.value"
    :title="field.title"
    :items="field.items" />
  <h1>Result</h1>
  <div
    v-for="field in fields"
    :key="'result-' + field.title">
    {{ field.value }}
  </div>
  <button @click="submit">
    Submit!
  </button>
</template>

<script>
import * as Fieldcomponents from '~/components/fields/index.js'
// import TextField from '~/components/fields/TextField'
// import SimpleRadio from '~/components/fields/SimpleRadio'

export default {
  components: {
    ...Fieldcomponents
    // TextField,
    // SimpleRadio
  },
  data() {
    return {
      fields: [
        {
          component: 'TextField',
          title: 'name',
          value: ''
        },
        {
          component: 'SimpleRadio',
          title: 'age',
          value: '',
          items: ['20s', '30s', '40s', '50s']
        },
      ]
    }
  },
  methods: {
    submit() {
      // submit data 가공하기
      const results = this.fields.map(({ title, value }) => ({
        title,
        value
      }))
      console.log(results)
    }
  }
}
</script>
