//localStorage只能存储字符串类型的数据，因此需要使用 JSON.stringify() 方法将数据转换成字符串格式存储。
export function localGet(key) {
    const value = window.localStorage.getItem(key);
    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
}
export function localSet(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export function localRemove(key) {
    window.localStorage.removeItem(key);
}

export function clear() {
    window.localStorage.clear();
}
