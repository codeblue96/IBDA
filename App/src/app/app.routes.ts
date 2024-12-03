import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { AboutComponent } from './about/about.component';
import { AiMlComponent } from './our-services/ai-ml/ai-ml.component';
import { WebDevComponent } from './our-services/web-dev/web-dev.component';
import { EdTechComponent } from './our-services/ed-tech/ed-tech.component';
import { EmbeddedComponent } from './our-services/embedded/embedded.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
  { path: 'work', component: WorkComponent, title: 'Work' },
  { path: 'services', component: OurServicesComponent, title: 'Services' },
  { path: 'about', component: AboutComponent, title: 'About us' },
  { path: 'ai-ml', component: AiMlComponent, title: 'AI-ML' },
  { path: 'web-dev', component: WebDevComponent, title: 'Web-Development' },
  { path: 'ed-tech', component: EdTechComponent, title: 'Ed-Tech' },
  { path: 'embedded', component: EmbeddedComponent, title: 'Embedded' },
];
