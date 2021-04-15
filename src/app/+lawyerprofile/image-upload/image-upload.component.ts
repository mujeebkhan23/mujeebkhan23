import { Lawyer } from './../../model/lawyer.model';
import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/imageservice';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public imageUrl: string, public file: File) {}
}

@Component({
  selector: 'image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})


export class ImageUploadComponent {

 @Input()  objlawyer: Lawyer = new Lawyer;

  selectedFile!: ImageSnippet;
  imageUrl: any;

  constructor(private imageService: ImageService){}

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.imageUrl = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res:any) => {
          console.log(res.data);
          this.objlawyer.imageFileId=res.data.fileId;
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });
       reader.onload = (event: any) => {
         this.imageUrl = event.target.result;
       }
    reader.readAsDataURL(file);
  }
  
}