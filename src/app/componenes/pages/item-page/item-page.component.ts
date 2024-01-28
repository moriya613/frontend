import { Component } from '@angular/core';
import { Item } from '../../../shared/models/Item';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../../services/items.service';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrl: './item-page.component.css'
})
export class ItemPageComponent {
  item!: Item;
  
  constructor(activatedRoute:ActivatedRoute, itemService:ItemsService) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      this.item = itemService.getItemById(params.id);
    })
   }


}
