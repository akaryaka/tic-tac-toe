<script setup lang="ts">
  import { changeValue } from '../constants';

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean
    }
  })
</script>

<template>
  <div class="cells__type ">
    <label :for="value">{{ title }}</label>
    <input name="change" :value="value" :id="value" type="radio" v-model="changeValue" :checked="checked" />
  </div>
</template>
