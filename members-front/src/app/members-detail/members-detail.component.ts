import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ApiService } from './api.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private api: ApiService, 
    private router: Router,
    private appComponente: AppComponent) { }

  selected_member = { name: '', surname: ''};
  selected_id;

  ngOnInit() {
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id'));
      this.selected_id = id;
      this.loadMember(id);
    });
  }

  loadMember(id) {
    this.api.getMember(id).subscribe(
      data => {
        this.appComponente.members ;
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };

  update(){
    this.api.updateMember(this.selected_member).subscribe(
      data => {
        this.selected_member = data;
      },
      error => {
        console.log("Aconteceu um erro", error.message);
      }
    );
  };


  newMember(){
    this.router.navigate(['new-member']);
  }
}
