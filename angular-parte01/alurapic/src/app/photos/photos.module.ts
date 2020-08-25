import { NgModule } from "@angular/core";

import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

// Uma boa prática é toda vez que criarmos um módulo já importar o CommonModule
// para estar disponível as diretivas do Angular

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})

export class PhotosModule {}