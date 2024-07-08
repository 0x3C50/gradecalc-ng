import {Component, EventEmitter, Input, Output} from '@angular/core';
import GradeEntry from "../grade_entry";
import {FormsModule} from "@angular/forms";
import {SliderModule} from "primeng/slider";
import {InputNumberModule} from "primeng/inputnumber";
import {Button} from "primeng/button";

@Component({
  selector: 'app-grade-editor',
  standalone: true,
  imports: [
    FormsModule,
    SliderModule,
    InputNumberModule,
    Button
  ],
  templateUrl: './grade-editor.component.html',
  styleUrl: './grade-editor.component.css'
})
export class GradeEditorComponent {
  @Input() gradeEntry: GradeEntry = {grade:0,_id:0,weight:0}; // placeholder
  @Output() onDelete = new EventEmitter<GradeEntry>();
}
