import { Injectable } from '@angular/core';
import { Item } from '../shared/models/Item';
import { sample_items } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getAll():Item[]{
    return sample_items;
  }

  getAllItemsBySearchTerm(searchTerm:string){
    return this.getAll().filter(item => item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

  getItemById(id:string):Item{
   return this.getAll().find(item => item.id==id)?? new Item();
  }
}
