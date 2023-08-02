<script setup lang="ts">
import banks from "nigerian-bank-icons/assets/banks.json"
import { ref, watch } from "vue"

const emit = defineEmits(['onSelect'])
const selected = ref(null)

watch(selected, (nSelected) => {
    emit('onSelect', nSelected)
})
</script>

<template>
  <v-select v-model="selected" label="name" :options="banks">
    <template #selected-option="{ name, code }">
      <span  :class="`nbi nbi-${code}`"></span>
      <span>{{ name }}</span>
    </template>
    <template v-slot:option="option">
      <span :class="`nbi nbi-${option.code}`"></span>
      <span>{{ option.name }}</span>
    </template>
  </v-select>
</template>
