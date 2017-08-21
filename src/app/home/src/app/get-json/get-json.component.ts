import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { GetJsonService } from './get-json.service';

@Component({
  selector: 'app-get-json',
  templateUrl: './get-json.component.html',
  styleUrls: ['./get-json.component.css'],
})
export class GetJsonComponent implements OnInit {

  linkJsonObject: any;

  constructor(private getJsonService: GetJsonService) {
    this.linkJsonObject = [];
  }

  ngOnInit() {
    this.getJsonService.getLinksFromJson().subscribe(
      data => this.linkJsonObject = data
    );
  }

  // this.linkJsonObject = this.getJsonService.getJsonFile();



}
