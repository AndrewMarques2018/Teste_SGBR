<template>
  <router-view />

  <CustomToast position="bottom-right" />
  <CustomConfirmDialog />
  <!-- <Toast /> -->
  <!-- <ConfirmDialog /> -->
</template>

<script setup lang="ts">
// import Toast from 'primevue/toast'
// import ConfirmDialog from 'primevue/confirmdialog'
import CustomToast from '@/components/CustomToast.vue'
import CustomConfirmDialog from '@/components/CustomConfirmDialog.vue'
</script>