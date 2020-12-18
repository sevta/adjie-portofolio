<template>
  <a :href="href" target="_blank" class="w-6 h-6 cursor-pointer ">
    <v-icon :name="name" class="text-gray-600 dark:text-gray-300"></v-icon>
  </a>
</template>

<script>
export default {
  props: ['href', 'name']
}
</script>
