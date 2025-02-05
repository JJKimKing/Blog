import {defineStore} from "pinia";
import {useDark, useToggle} from '@vueuse/core'


const useAppStore = defineStore('app', () => {
    const isDark = useDark();
    function toggleDark() {
        useToggle(isDark)
    }
    return {isDark, toggleDark}
})
export default useAppStore;
