import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../../services/items.service';
import { Item } from '../../../shared/models/Item';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public items:Item[] = [];
  constructor(private itemsService:ItemsService) {
    this.items = itemsService.getAll();
  }

  ngOnInit(): void {
  }

}