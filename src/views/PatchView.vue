<script setup lang="ts">
import { PatchDebugInfoParser } from "@/lib/patchDebugInfoParser";
import type { PatchDebugInfoModule } from "@/lib/patchDebugInfoParser";
import { AviUtlModuleRepository } from "@/lib/aviutlModuleRepository";
import { ref, computed, watch, onMounted } from "vue";
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
const dropZoneText = computed(() => {
  return file.value
    ? file.value.name
    : "Drag'n'drop a patch.aul debug info file or";
});

const tabs = ["known", "unknown"];
const currentTab = ref(tabs[0]);

const known: Ref<KnownModule[]> = ref([]);
const unknown: Ref<PatchDebugInfoModule[]> = ref([]);
const items = computed(() => {
  return currentTab.value === "known" ? known.value : unknown.value;
});

const knownCols = ref([
  { key: "originalFilename", sortable: true },
  { key: "currentFilename", sortable: true },
  { key: "name", sortable: true },
  { key: "version", sortable: true },
  { key: "build", sortable: true },
  { key: "author", sortable: true },
  { key: "url", sortable: true },
  { key: "sha256", sortable: true },
]);
const unknownCols = ref([
  { key: "filename", sortable: true },
  { key: "sha256", sortable: true },
]);
const columns = computed(() => {
  return currentTab.value === "known" ? knownCols.value : unknownCols.value;
});

const tableElem = ref();
const tableHeight = ref(100);

function updateTableHeight() {
  const y = tableElem.value.getBoundingClientRect().y;
  tableHeight.value = window.innerHeight - y;
}

onMounted(() => {
  updateTableHeight();
  window.addEventListener("resize", () => {
    updateTableHeight();
  });
});

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
    hide-file-list
    :drop-zone-text="dropZoneText"
    upload-button-text="Select file"
  />
  <va-tabs v-model="currentTab">
    <template #tabs>
      <va-tab v-for="tab in tabs" :key="tab" :name="tab">
        {{ tab }}
      </va-tab>
    </template>
  </va-tabs>
  <div ref="tableElem">
    <va-data-table
      :items="items"
      :columns="columns"
      striped
      :height="tableHeight"
      sticky-header
    >
      <template #cell(url)="{ value }">
        <a :href="value">{{ value }}</a>
      </template>
    </va-data-table>
  </div>
</template>
