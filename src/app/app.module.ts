import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CandidateComponent } from './candidate/candidate.component';
import { PoliticalIssuesComponent } from './political-issues/political-issues.component';
import { FactCheckerComponent } from './fact-checker/fact-checker.component';
import { SnippetButtonComponent } from './snippet-button/snippet-button.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CandidateComponent, PoliticalIssuesComponent, FactCheckerComponent, SnippetButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
