import { Routes } from '@angular/router';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

export const routes: Routes = [{path:'contactus',component:ContactusComponent},
    {path:"",component:HomeComponent},
    {path:'products',component:ProductComponent},
    {path:'aboutus',component:AboutusComponent}
    
];
