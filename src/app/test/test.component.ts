import {Component, OnInit} from '@angular/core';
import {Address, Test} from "../test";
import {TestService} from "../test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  tests: Test[] = [];
  user: Test | undefined;

  constructor(private service: TestService) {
  }
  ngOnInit() {
    this.service.getPokemon().subscribe(pokemonTranslate => {
      this.tests = pokemonTranslate;
      // console.log(this.tests.galleries.name);
    })

  }

  viewOneUser(id: number){
    this.service.getUserById(id).subscribe(userResult =>{
      this.user = userResult
    })
  }

}
