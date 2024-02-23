import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  selectedTable: string = 'tasks'; 
  activatedTab: number = 0;
  activatedTabIndex: number = 0;
  

  @Output() onTabsChange = new EventEmitter<number>();

  
  tabChange(tabIndex:number){
    this.activatedTabIndex = tabIndex;
  }

  tabsArray: string[] = ['MEMBERS', 'GROUPS', 'REMINDERS' ];



  setTab(index:number){
    this.activatedTab = index;
    this.onTabsChange.emit(this.activatedTab);
  }
}
