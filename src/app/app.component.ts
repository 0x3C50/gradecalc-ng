import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import GradeEntry from "./grade_entry";
import {GradeEditorComponent} from "./grade-editor/grade-editor.component";
import {Button} from "primeng/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GradeEditorComponent, Button],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gradecalc-ng';
  gradeEntries: GradeEntry[] = [];

  newEntry() {
    this.gradeEntries.push({
      grade: 1,
      _id: Math.random(),
      weight: 1
    })
  }

  remove(ev: GradeEntry) {
    let index = this.gradeEntries.indexOf(ev);
    this.gradeEntries.splice(index, 1)
  }

  getGrade() {
    if (this.gradeEntries.length == 0) return "N/A";
    let sGrades = 0;
    let sWS = 0;
    for (let gradeEntry of this.gradeEntries) {
      sGrades += gradeEntry.grade * gradeEntry.weight;
      sWS += gradeEntry.weight;
    }
    let res = sGrades / sWS;
    res = Math.max(Math.min(res, 6), 1);
    return res.toFixed(2);
  }

  totalHours() {
    if (this.gradeEntries.length == 0) return "N/A";
    return this.gradeEntries.map(it => it.weight).reduce((p, c) => p+c);
  }
}
