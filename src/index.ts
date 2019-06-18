#!/usr/bin/env node
import { App, Command, Hook, onStart, ParamOptions, isNonExistingPath, isString, param, afterAll, context, Context, usesPlugins } from "@fivethree/billy-core";
import { CorePlugin } from '@fivethree/billy-plugin-core';

const name: ParamOptions = {
    name: 'name',
    description: 'What\'s the name of your app?',
    optional: false,
    validators: [isString, isNonExistingPath]
}

export interface CreateIonic extends CorePlugin { }
@App()
export class CreateIonic {
    @usesPlugins(CorePlugin)

    @Hook(onStart)
    @Command('Clone and setup the fivethree ionic 4 capacitor starter')
    async create(@param(name) n: string) {
        this.git_clone('', n)
    }

    @Hook(afterAll)
    afterAll(@context() ctx: Context) {
        ctx.api.printHistory();
    }


}
