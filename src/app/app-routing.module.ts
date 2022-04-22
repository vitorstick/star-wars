import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkInProgressComponent } from './components/work-in-progress/work-in-progress.component';
import { CONFIG } from './config/config';
import { FilmsResolver } from './services/films.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: CONFIG.NAVIGATION.FILMS,
    pathMatch: 'full',
  },
  {
    path: CONFIG.NAVIGATION.FILMS,
    loadChildren: () =>
      import('./films/films.module').then((m) => m.FilmsModule),
    resolve: {
      films: FilmsResolver,
    },
  },
  {
    path: CONFIG.NAVIGATION.PEOPLE,
    component: WorkInProgressComponent,
  },
  {
    path: CONFIG.NAVIGATION.PLANETS,
    component: WorkInProgressComponent,
  },
  {
    path: CONFIG.NAVIGATION.SPECIES,
    component: WorkInProgressComponent,
  },
  {
    path: CONFIG.NAVIGATION.STARSHIPS,
    component: WorkInProgressComponent,
  },
  {
    path: CONFIG.NAVIGATION.VEHICLES,
    component: WorkInProgressComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
