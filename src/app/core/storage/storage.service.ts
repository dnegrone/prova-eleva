import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root'})

export class StorageService {
    hasSessionStorage(key: string) {
        return !!this.getSessionStorage(key);
    }
    setSessionStorage(key: string, value: any) {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }
    getSessionStorage(key: string) {
        const storageValue: any = window.sessionStorage.getItem(key);
        return JSON.parse(storageValue);
        // let cloneStorageValue: any = [];
        // cloneStorageValue.push(storageValue);
        // console.log("cloneStorageValue", cloneStorageValue);
        // console.log("storageValue", storageValue);
        // console.log("JSON.parse(storageValue)", JSON.parse(storageValue));
    }
    removeSessionStorage(key: string) {
        window.sessionStorage.removeItem(key);
    }
}