<script setup lang="ts">
import { ref, computed } from "vue";
import { AviUtlModuleRepository } from "@/lib/aviutlModuleRepository";

const repository = await AviUtlModuleRepository.getInstance();

const searchSha256 = ref("");

const items = computed(() => {
  return repository.findAllBySha256(searchSha256.value).map((fi) => {
    return {
      filename: fi.filename,
      name: fi.name,
      version: fi.version,
      build: fi.build,
      author: fi.author,
      url: fi.url,
      sha256: fi.sha256,
    };
  });
});
</script>

<template>
  <va-input v-model="searchSha256" />

  <va-data-table :items="items"></va-data-table>
</template>
