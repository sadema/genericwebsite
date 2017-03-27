import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import {CacheService} from '../shared/cache.service';

const url = 'http://www.json-generator.com/api/json/get/celLKmqymq';

@Injectable()
export class ProductsService {
	private _products = [];

	private defaultParams = {
		sortBy: 'name',
		sortDir: '<',
		filter:''
	}

	private applyParamsImmutably(params = {}) {
		const applyParams = Object.assign({},this.defaultParams,params);
		const newArray = applyParams.filter
			? this._products.filter(item => { return item[applyParams.filter]==true; })
			: [...this._products];

		return newArray.sort((a,b) => {
			return applyParams.sortDir === '<'
				? a[applyParams.sortBy] > b[applyParams.sortBy] ? 1 : -1
				: a[applyParams.sortBy] < b[applyParams.sortBy] ? 1 : -1;
		});
	}

	public getProducts(params) {
		if(this._products.length) {
			return Observable.of(this.applyParamsImmutably(params));
		} else {
			return this.http.get(url)
				.map(resp=>resp.json())
				.map(products => {
					this._products = products.map(product => {
						product.basketCount = 0;
						return product;
					}).sort((a,b)=> {
						return a[this.defaultParams.sortBy] > b[this.defaultParams.sortBy] ? 1 : -1
					});
					return this.applyParamsImmutably(params);
				})
				.do(_=> {
					this.cache.set('products',this._products);
				});
		}
	}


	public purchase(product, amount, params) {
		const i = this._products.indexOf(product);
		let newProduct = Object.assign({},product,{
			basketCount:amount
		});

		this._products[i] = newProduct;
	
		return Observable.of(this.applyParamsImmutably(params));

	}

	public toggleFavorite(product, params) {
		const i = this._products.indexOf(product);
		let newProduct = Object.assign({},product,{
			isfavorite:!product.isfavorite
		});

		this._products[i] = newProduct;

		return Observable.of(this.applyParamsImmutably(params));
	}

	constructor(private http: Http, private cache: CacheService) {

		if(this.cache.get('products')) {
			this._products = this.cache.get('products');
		}

	}
}