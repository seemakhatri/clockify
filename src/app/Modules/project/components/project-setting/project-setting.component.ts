import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-project-setting',
  templateUrl: './project-setting.component.html',
  styleUrls: ['./project-setting.component.scss']
})
export class ProjectSettingComponent {

  selectedTable: string = 'tasks'; 
  activatedTab: number = 0;
  activatedTabIndex: number = 0;
  

  @Output() onTabsChange = new EventEmitter<number>();

  
  tabChange(tabIndex:number){
    this.activatedTabIndex = tabIndex;
  }

  tabsArray: string[] = ['TASKS', 'ACCESS', 'STATUS', 'SETTINGS' ];



  setTab(index:number){
    this.activatedTab = index;
    this.onTabsChange.emit(this.activatedTab);
  }


}
