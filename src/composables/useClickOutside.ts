import type {Ref} from "vue";
import {onBeforeUnmount, onMounted} from "vue";

interface ClickOutsideOptions {
    eventName?: string
}

export function useClickOutside<T extends HTMLElement>(
    elementRef: Ref<T | undefined>,
    options?: ClickOutsideOptions
): void {
    const handleClickOutside = (event: MouseEvent) => {
        if (!elementRef.value || elementRef.value.contains(event.target as Node)) return
        elementRef.value!.dispatchEvent(new CustomEvent(options?.eventName || 'clickOutside'))
    };

    onMounted(() => {
        document.addEventListener('click', handleClickOutside);
    })

    onBeforeUnmount(() => {
        document.removeEventListener('click', handleClickOutside);
    })
}
