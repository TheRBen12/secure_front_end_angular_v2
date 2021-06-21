import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';



@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    exports: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSelectModule,
        MatInputModule,
        FormsModule,
        MatExpansionModule,
        MatButtonModule,
        MatIconModule,
        RouterModule,
    ]
})
export class UaaModule { }
