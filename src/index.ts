#!/usr/bin/env node
import {
  App,
  Command,
  Hook,
  onStart,
  ParamOptions,
  isNonExistingPath,
  isString,
  param,
  usesPlugins
} from "@fivethree/billy-core";
import { CorePlugin } from "@fivethree/billy-plugin-core";

const name: ParamOptions = {
  name: "name",
  gitStyle: true,
  description: "What's the name of your app?",
  optional: false,
  validators: [isString, isNonExistingPath]
};

export interface CreateIonic extends CorePlugin {}
@App()
export class CreateIonic {
  @usesPlugins(CorePlugin)
  @Hook(onStart)
  @Command("Clone and setup the fivethree ionic 4 capacitor starter")
  async create(@param(name) n: string) {
    console.log("⏬ Cloning ionic4-capacitor-starter");
    await this.git_clone(
      "https://github.com/fivethree-team/ionic4-capacitor-starter",
      n
    );
    await this.exec(
      `cd ${n}/scripts && npm i && npm run build && node . init --name ${n}`,
      true
    );
  }

  // @Hook(afterAll)
  // afterAll(@context() ctx: Context) {
  //     ctx.api.printHistory();
  // }
}
