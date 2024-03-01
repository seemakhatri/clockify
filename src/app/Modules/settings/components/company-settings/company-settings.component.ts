import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-company-settings',
  templateUrl: './company-settings.component.html',
  styleUrls: ['./company-settings.component.scss']
})
export class CompanySettingsComponent {
  selectedTable: string = 'tasks'; 
  activatedTab: number = 0;
  activatedTabIndex: number = 0;
  

  @Output() onTabsChange = new EventEmitter<number>();

  
  tabChange(tabIndex:number){
    this.activatedTabIndex = tabIndex;
  }

  tabsArray: string[] = ['SETTINGS' ];



  setTab(index:number){
    this.activatedTab = index;
    this.onTabsChange.emit(this.activatedTab);
  }
}
