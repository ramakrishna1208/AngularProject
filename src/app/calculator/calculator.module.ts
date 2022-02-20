import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Ng5SliderModule } from "ng5-slider";
import { CalculatorComponent } from "./calculator.component";






@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      Ng5SliderModule
    ],
    declarations: [CalculatorComponent],
    exports: [CalculatorComponent]
  })
  export class EMIModule { 
    

  }
  