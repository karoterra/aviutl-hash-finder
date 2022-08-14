<script setup lang="ts">
import { ref, computed } from "vue";
import { AviUtlModuleRepository } from "@/lib/aviutlModuleRepository";
import type { DataTableColumn } from "vuestic-ui";

const repository = await AviUtlModuleRepository.getInstance();

const searchText = ref("");

const items = computed(() => {
  return repository.search(searchText.value);
});

function onChange(e: Event) {
  const input = e.target as HTMLInputElement;
  searchText.value = input.value;
}
</script>

<template>
  <va-input :model-value="searchText" @change="onChange" />

  <va-data-table :items="items" striped>
    <template #cell(url)="{ value }">
      <a :href="value">{{ value }}</a>
    </template>
  </va-data-table>
</template>
