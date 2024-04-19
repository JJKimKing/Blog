import {defineStore} from "pinia";
import store from "@/store";
import {useStorage} from "@vueuse/core";
import {resetRouter} from "@/router";


const userStore = defineStore('user', {
    state: () => {
        const token = useStorage(__TOKEN__, "");
        const user={
            roles:[],
        }
        return {token, user}
    },

    actions:{
        getUserInfo: function (store) {

        },

        resetToken: function (store) {
            return new Promise() ((resolve) => {
                store.state.token = '';
                resetRouter();
                resolve();
            });
        },
    }
})


export function useUserStoreHook() {
    return userStore(store);
}
