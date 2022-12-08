import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  constructor(private settingService: SettingsService) {}

  ngOnInit(): void {
    customInitFunctions();
  }
}
function customInitFunctions() {
  throw new Error('Function not implemented.');
}
