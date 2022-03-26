import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  goTocategory(){
this.route.navigate(['admin/managecategory']);
  }
  clear(){
    localStorage.clear();
    this.route.navigate(['auth/login']);
  }
}
