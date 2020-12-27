import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { PhotosService } from '../../services/photos.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumsId = [1, 2, 3];
  constructor(public photosService: PhotosService) { }

  ngOnInit(): void {
    this.photosService.getPhotos().subscribe(
      photos => {
        console.log(photos);
        this.photos = photos;
      }
      ,
      err => console.log(err)
    );
  }

  click(): void {
    alert('¡Hiciste click!');
  }

}
