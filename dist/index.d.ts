#!/usr/bin/env node
import { CorePlugin } from "@fivethree/billy-plugin-core";
export interface CreateIonic extends CorePlugin {
}
export declare class CreateIonic {
    create(n: string): Promise<void>;
}
