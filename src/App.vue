<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const sidebarDefine = [
  { title: "search", path: "/search" },
  { title: "patch", path: "/patch" },
];

const sidebar = computed(() =>
  sidebarDefine.map((sd) => Object.assign(sd, { active: sd.path === route.path }))
);
</script>

<template>
  <va-navbar>
    <template #left></template>
    <template #center>
      <va-navbar-item>AviUtl Hash Finder</va-navbar-item>
    </template>
    <template #right></template>
  </va-navbar>

  <div class="row">
    <va-sidebar width="10rem">
      <va-sidebar-item v-for="s in sidebar" :key="s.title" :active="s.active">
        <RouterLink :to="s.path">
          <va-sidebar-item-content>
            <va-sidebar-item-title>
              {{ s.title }}
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </RouterLink>
      </va-sidebar-item>
    </va-sidebar>

    <main>
      <Suspense>
        <RouterView />
      </Suspense>
    </main>
  </div>
</template>

<style scoped>
.va-sidebar {
  position: sticky;
}

main {
  margin: 10px;
  width: calc(100% - 10rem - 20px);
}
</style>
