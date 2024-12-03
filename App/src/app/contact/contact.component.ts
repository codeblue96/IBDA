import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  model: any = {};

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted!', this.model);
    } else {
      console.log('Form is invalid');
    }
  }
}
