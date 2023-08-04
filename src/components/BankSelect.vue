<script setup lang="ts">
import "nigerian-bank-icons/index.css"
import banks from "nigerian-bank-icons/assets/banks.json"
import vSelect from "vue-select"
import 'vue-select/dist/vue-select.css';
import { ref, watch } from "vue"

const selected = ref(null)
const emit = defineEmits(['onSelect'])

watch(selected, (nSelected) => {
    emit('onSelect', nSelected)
})

</script>

<template>
  <vSelect v-model="selected" label="name" :options="banks">
    <template #selected-option="{ name, code }">
      <span  :class="`nbi nbi-${code}`"></span>
      <span>{{ name }}</span>
    </template>
    <template v-slot:option="option">
      <span :class="`nbi nbi-${option.code}`"></span>
      <span>{{ option.name }}</span>
    </template>
  </vSelect>
</template>
