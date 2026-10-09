import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class Shared {
    http = inject(HttpClient)
    getNames() {
        return this.http.get<any>('https://dummyjson.com/products');
    }                                                                           
}

