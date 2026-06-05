import { ref } from 'vue'

export const isSettingsOpen = ref<boolean>(false)

export function toggleSettings() {
  isSettingsOpen.value = !isSettingsOpen.value
}