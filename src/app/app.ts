import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Skills } from './components/skills/skills';
import { Certificates } from './components/certificates/certificates';
import { Recommendations } from './components/recommendations/recommendations';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    About,
    Experience,
    Skills,
    Certificates,
    Recommendations,
    Contact
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
