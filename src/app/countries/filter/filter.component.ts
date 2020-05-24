import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  submitted = false;
  oppoSuits: any = ["Men", "Women", "Boys", "Inspiration"];

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {}

  oppoSuitsForm = this.fb.group({
    name: ["", [Validators.required]],
  });

  changeSuit(e) {
    this.oppoSuitsForm.get("name").setValue(e.target.value, {
      onlySelf: true,
    });
  }

  /* Select Dropdown error handling */
  public handleError = (controlName: string, errorName: string) => {
    return this.oppoSuitsForm.controls[controlName].hasError(errorName);
  };

  onSubmit() {
    this.submitted = true;
    alert(JSON.stringify(this.oppoSuitsForm.value));
  }
}
