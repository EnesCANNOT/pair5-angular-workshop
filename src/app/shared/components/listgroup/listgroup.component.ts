import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

type Status = 'active' | 'disabled' | '';
type Variant = 'default'
| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark';
type Flush = '' | 'list-group-flush'
type Horizontal = '' | 'list-group-horizontal'
@Component({
  selector: 'app-listgroup',
  templateUrl: './listgroup.component.html',
  styleUrls: ['./listgroup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListgroupComponent implements OnInit { 
  @Input() flush: Flush = '';
  @Input() horizontal: Horizontal = '';
  @Input() items: { text: string, status?: Status, variant?: Variant}[] = [];

  ngOnInit() {
    this.items = this.items.map(item => ({
      ...item,
      status: item.status || 'active',
      variant: item.variant || 'primary'
    }));
  }
}