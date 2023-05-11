import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { DateProtectionComponent } from './date-protection/date-protection.component';

const routes: Routes = [ 
  { path: ''  , component: SlideshowComponent},
  { path: 'imprint' , component: ImprintComponent},
  { path: 'date-protection' , component: DateProtectionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
