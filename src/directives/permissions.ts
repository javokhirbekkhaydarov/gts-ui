import { usePermission } from '@/composables/usePermission'
import { Ref } from 'vue'


export const permissionsDirective = {
  mounted(el: HTMLElement, binding: Ref<string[]>) {
    const { hasAccessAction } = usePermission()

    const visible = hasAccessAction(binding.value)
    if (!visible && el.parentNode) {
      el.parentNode.removeChild(el)
    }
  }
}
