import {defineStore} from "pinia";
import store from "@/store";


export const usePermissionStore = defineStore("permission", () => {

    function generateRoutes() {

    }

    return {
        generateRoutes,
    }
});


export function permissionStore() {
    return usePermissionStore(store);
}
