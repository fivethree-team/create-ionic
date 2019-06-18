#!/usr/bin/env node
import { Context } from "@fivethree/billy-core";
import { CorePlugin } from '@fivethree/billy-plugin-core';
export interface CreateIonic extends CorePlugin {
}
export declare class CreateIonic {
    create(n: string, ctx: Context): Promise<void>;
}
