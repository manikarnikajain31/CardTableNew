import { APP_BOOTSTRAP_LISTENER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { GridModule } from '@angular/flex-layout';
import { from, pipe } from 'rxjs';
import { SortPipe } from './shared/pipes/sort.pipe';
import { PicsumComponent } from './picsum/picsum.component';
import { PicsumService } from './services/picsum.service';
// import { PaginationDirective } from './directives/pagination.directive';
import { MaterialModule } from './material.module';
// import { SEARCHComponent } from './search/search.component';
//import { FilterComponent } from './filter/filter.component';
import { FilterPipe } from './Pipes/filter.pipe';
// import { DialogService } from './services/dialog.service';
// import { MatConfigDialogComponent } from './mat-config-dialog/mat-config-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { SearchfilterPipe } from './searchfilter.pipe';
import { MatInputModule } from '@angular/material/input';

const Material = [
  MatToolbarModule,
  MatIconModule,
  FormsModule,
  MatTableModule
];

@NgModule({
  declarations: [
    AppComponent,
    SortPipe,
    PicsumComponent,
    PicsumComponent,
    // PaginationDirective,
    // SEARCHComponent,
    //FilterComponent,
    FilterPipe,
    // MatConfigDialogComponent,
    SearchfilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    FlexModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatGridListModule,
    GridModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    //MatTableDataSource,
    MatTableModule,
    //SearchfilterPipe,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PicsumComponent, //MatConfigDialogComponent
  ],
  exports: [SearchfilterPipe]

})
export class AppModule { }
