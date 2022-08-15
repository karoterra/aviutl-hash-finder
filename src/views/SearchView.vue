<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { AviUtlModuleRepository } from "@/lib/aviutlModuleRepository";

const repository = await AviUtlModuleRepository.getInstance();

const searchText = ref("");

const items = computed(() => {
  return repository.search(searchText.value);
});
const columns = ref([
  { key: "filename", sortable: true },
  { key: "name", sortable: true },
  { key: "author", sortable: true },
  { key: "version", sortable: true },
  { key: "build", sortable: true },
  { key: "url", sortable: true },
  { key: "sha256", sortable: true },
]);

const PER_PAGE = 100;
const pages = computed(() => {
  return Math.ceil(items.value.length / PER_PAGE);
});
const currentPage = ref(1);

const tableElem = ref();
const tableHeight = ref(100);
const paginationElem = ref();
let pagenationHeight = 36;

function updateTableHeight() {
  const tableY = tableElem.value.getBoundingClientRect().y;
  tableHeight.value = window.innerHeight - tableY - pagenationHeight - 8 * 2;
}

onMounted(() => {
  pagenationHeight = paginationElem.value.getBoundingClientRect().height;

  updateTableHeight();
  window.addEventListener("resize", () => {
    updateTableHeight();
  });
});

function onChange(e: Event) {
  const input = e.target as HTMLInputElement;
  searchText.value = input.value;
  currentPage.value = 1;
}

function onClear() {
  searchText.value = "";
  currentPage.value = 1;
}
</script>

<template>
  <va-input
    class="search"
    :model-value="searchText"
    clearable
    @change="onChange"
    @clear="onClear"
  >
    <template #prependInner>
      <va-icon name="search" />
    </template>
  </va-input>

  <div ref="tableElem">
    <va-data-table
      :items="items"
      :columns="columns"
      striped
      sticky-header
      :height="tableHeight"
      :per-page="PER_PAGE"
      :current-page="currentPage"
    >
      <template #cell(url)="{ value }">
        <a :href="value">{{ value }}</a>
      </template>
    </va-data-table>
  </div>
  <div class="table-footer">
    <div class="pagination-container" ref="paginationElem">
      <va-pagination v-model="currentPage" :pages="pages" input />
    </div>
  </div>
</template>

<style scoped>
.search {
  width: 100%;
  max-width: 640px;
}

.table-footer {
  text-align: center;
  margin-top: 8px;
}

.pagination-container {
  display: inline-block;
}
</style>
