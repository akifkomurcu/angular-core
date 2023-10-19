import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Selector, State } from "@ngxs/store";
import { AuthService } from "src/app/core/services/auth.service";


@State<any>({
  name: "common",
  defaults: {
    test: null
  },
})

@Injectable()
export class CommonState {
  constructor(private authService: AuthService, private router: Router) {}


  @Selector()
  static test(state: any) {
    return state.test;
  }
}
