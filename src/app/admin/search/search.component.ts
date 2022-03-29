import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public searchService:SearchService) { }
  SearchForm:FormGroup= new FormGroup({
    dateFrom :new FormControl(),
    dateTo :new FormControl(),
  })
  ngOnInit(): void {
    this.searchService.sreach(this.SearchForm.value.dateFrom,this.SearchForm.value.dateTo);
  }
  getSearch()
  {
    this.searchService.sreach(this.SearchForm.value.dateFrom,this.SearchForm.value.dateTo);
  }
}
