<script setup lang="ts">
import "nigerian-bank-icons/index.css";
import banks from "nigerian-bank-icons/assets/banks.json"

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

interface Bank {
    name: string
    slug: string
    code: string
    ussd: string
    logo: string
}

const updateValue = (nValue: Bank) => {
    emit('update:modelValue', nValue)
}

</script>

<template>
  <v-select :value="modelValue" @input="updateValue" label="name" :options="banks">
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
