<script setup lang="ts">
import { PatchDebugInfoParser } from "@/lib/patchDebugInfoParser";
import type { PatchDebugInfoModule } from "@/lib/patchDebugInfoParser";
import { AviUtlModuleRepository } from "@/lib/aviutlModuleRepository";
import { ref, watch } from "vue";
import type { Ref } from "vue";

interface KnownModule {
  originalFilename: string;
  currentFilename: string;
  name: string;
  version: string;
  build: string;
  author: string;
  url: string;
  sha256: string;
}

const repo = await AviUtlModuleRepository.getInstance();

const file: Ref<File | undefined> = ref(undefined);

const tabs = ["known", "unknown"];
const currentTab = ref(tabs[0]);

const known: Ref<KnownModule[]> = ref([]);
const unknown: Ref<PatchDebugInfoModule[]> = ref([]);

watch(file, async (newFile) => {
  if (newFile) {
    const text = await newFile.text();
    known.value.splice(0);
    unknown.value.splice(0);
    const mods = unknown.value.concat(PatchDebugInfoParser.getModules(text));
    for (const mod of mods) {
      const fi = repo.findBySha256(mod.sha256);
      if (fi) {
        known.value.push({
          originalFilename: fi.filename,
          currentFilename: mod.filename,
          name: fi.name,
          version: fi.version,
          build: fi.build,
          author: fi.author,
          url: fi.url,
          sha256: fi.sha256,
        });
      } else {
        unknown.value.push(mod);
      }
    }
  }
});
</script>

<template>
  <va-file-upload
    v-model="file"
    dropzone
    type="single"
    drop-zone-text="Drag'n'drop a patch.aul debug info file or"
  />
  <va-tabs v-model="currentTab">
    <template #tabs>
      <va-tab v-for="tab in tabs" :key="tab" :name="tab">
        {{ tab }}
      </va-tab>
    </template>
  </va-tabs>
  <template v-if="currentTab === 'known'">
    <va-data-table :items="known" striped>
      <template #cell(url)="{ value }">
        <a :href="value">{{ value }}</a>
      </template>
    </va-data-table>
  </template>
  <template v-else-if="currentTab === 'unknown'">
    <va-data-table :items="unknown" striped></va-data-table>
  </template>
</template>
