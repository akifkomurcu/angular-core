import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AuthService } from "src/app/core/services/auth.service";
import { commonAction } from "./actions/common.action";


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

  @Action(commonAction)
  commonAction(
    { patchState }: StateContext<any>,
    { payload }: commonAction
    ) {
    patchState({ test: payload });
    console.log('payload', payload);
  }
}
