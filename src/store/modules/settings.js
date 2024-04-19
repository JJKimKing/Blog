import {defineStore} from "pinia";
import defaultSettings from "@/Settings";


const useSettingsStore = defineStore(
    'settings',
    {
        state: () => ({
            title: defaultSettings.title,
            theme: defaultSettings.theme,
        }),
        actions:{

        }
    }
)

export default useSettingsStore;

