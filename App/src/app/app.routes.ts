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
import { BlogReadingComponent } from './blog-reading/blog-reading.component';
import { BlogComponent } from './blog/blog.component';
import { NewsComponent } from './news/news.component';
import { CareersComponent } from './careers/careers.component';
import { IndustriesComponent } from './industries/industries.component';
import { CommunityComponent } from './community/community.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

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
  {
    path: 'blog-reading',
    component: BlogReadingComponent,
    title: 'Blog-reading',
  },
  { path: 'blogs', component: BlogComponent, title: 'Blogs' },
  { path: 'news', component: NewsComponent, title: 'News' },
  { path: 'careers', component: CareersComponent, title: 'Careers' },
  { path: 'industries', component: IndustriesComponent, title: 'Industries' },
  { path: 'community', component: CommunityComponent, title: 'Community' },
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' },

];
