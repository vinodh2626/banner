import { Component, inject } from '@angular/core';
import { Shared } from '../../Services/shared';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  shared = inject(Shared);
  detials:any = [];
  ngOnInit(){
    this.shared.getNames().subscribe((res: any)=>{
      this.detials= res.products;
      console.log(this.detials);
    })
  }
}
