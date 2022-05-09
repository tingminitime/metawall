<template>
  <div>
    <Listbox v-model="selectFilter">
      <div class="relative">
        <ListboxButton class="relative py-2 px-3 w-full text-left bg-white border-2 border-black cursor-default">
          <span class="inline-block truncate align-middle">{{ selectFilter.name }}</span>
          <span class="inline-block align-middle material-symbols-outlined">expand_more</span>
        </ListboxButton>
        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions class="overflow-auto absolute py-1 mt-1 w-full max-h-60 bg-white border-2 border-black">
            <ListboxOption
              v-for="type in filterType"
              v-slot="{ active }"
              :key="type.key"
              :value="type"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                  'relative cursor-default select-none py-2 px-3'
                ]"
              >
                <span class="block truncate">{{ type.name }}</span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  } from '@headlessui/vue'

  const filterType = [
    { 
      key: 0,
      name: '最新貼文',
      sort: 'createdTimeDescending',
    },
    { 
      key: 1,
      name: '較舊貼文',
      sort: 'createdTimeAscending',
    },
  ]

  const selectFilter = ref(filterType[0])

</script>

<style>
</style>