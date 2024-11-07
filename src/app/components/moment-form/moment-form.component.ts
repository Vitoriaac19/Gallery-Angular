import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moment-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './moment-form.component.html',
  styleUrl: './moment-form.component.css'
})
export class MomentFormComponent {
  @Input() btnText!:string;

  momentForm!: FormGroup

  ngOnInit(): void{ //inicializando coisas do angular pra inicializar momentForm
    this.momentForm = new FormGroup({
      id: new FormControl(""),
      title: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      image: new FormControl("")
    })
  }

  get title(){
    return this.momentForm.get("title")!;
  }

  get description(){
    return this.momentForm.get("description")!;
  }

  submit() {
    if (this.momentForm.invalid){
      return
    }
    console.log("enviado")
  }

}
