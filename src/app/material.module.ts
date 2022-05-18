import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

const modules = [
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule
];
@NgModule({
    imports: modules,
    exports: modules
})

export class MaterialModule {

}