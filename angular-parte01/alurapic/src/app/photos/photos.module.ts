import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { PhotoComponent } from "./photo/photo.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

// Uma boa prática é toda vez que criarmos um módulo já importar o CommonModule
// para estar disponível as diretivas do Angular

@NgModule({
    declarations: [
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ]
})

export class PhotosModule {}