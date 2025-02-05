import {defineStore} from "pinia";
import defaultSettings from "@/Settings";


export const useSettingsStore = defineStore(
    'settings',
    {
        state: () => ({
            title: defaultSettings.title,
            dataTheme: defaultSettings.theme,
        }),
        actions:{

        }
    }
)
