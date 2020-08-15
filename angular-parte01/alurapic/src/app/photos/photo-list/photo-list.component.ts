import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Object[] = [];

   // Esse construtor somente é utilizado para injeção de dependência
   constructor(
     private photoService: PhotoService,
     private activatedRoute: ActivatedRoute
     ){}

   ngOnInit(): void{
     const username = this.activatedRoute.snapshot.params.userName;
     this.photoService
     .listFromUser(username)
     .subscribe(photos => this.photos = photos)
   }
}
