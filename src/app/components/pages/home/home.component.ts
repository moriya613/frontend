import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../services/items.service';
import { Item } from '../../../shared/models/Item';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items:Item[] = [];

  constructor(private itemService:ItemsService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.items = this.itemService.getAllItemsBySearchTerm(params.searchTerm);
      else
      this.items = itemService.getAll();
    })
  }

  ngOnInit(): void {
  }

}