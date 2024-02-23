import { Component, Input, signal } from '@angular/core';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  sidenavCollapsed = signal(false);
  @Input() set collapsed (val: boolean){
    this.sidenavCollapsed.set(val);
  }

  menuItem = signal<MenuItem[]>([
    {
      icon: 'timer',
      label:'Time Tracker',
      route: 'time-tracker'
    },
    {
      icon: 'timer',
      label:'Time Sheet',
      route: 'time-sheet'
    },
    {
      icon: 'dashboard',
      label:'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'work',
      label:'Project',
      route: 'project'
    },
    {
      icon: 'group',
      label:'Team',
      route: 'team'
    },
    {
      icon: 'group',
      label:'Client',
      route: 'client'
    },
    {
      icon: 'bookmark',
      label:'Tags',
      route: 'tags'
    },
    {
      icon: 'settings',
      label:'Settings',
      route: 'settings'
    },
    {
      icon: 'report',
      label:'Report',
      route: 'report-detail'
    },
  ]);



}
