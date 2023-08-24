import {localGet,localSet,localRemove} from "@/utils/localStorage";

const TokenKey = window.__TOKEN__;

export function getToken() {
    return localGet(TokenKey);
}

export function setToken(key, value) {
    return localSet(key, value);
}

export function removeToken(key) {
    return localRemove(key);
}
