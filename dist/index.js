#!/usr/bin/env node
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const billy_core_1 = require("@fivethree/billy-core");
const billy_plugin_core_1 = require("@fivethree/billy-plugin-core");
const name = {
    name: 'name',
    description: 'What\'s the name of your app?',
    optional: false,
    validators: [billy_core_1.isString, billy_core_1.isNonExistingPath]
};
let CreateIonic = class CreateIonic {
    create(n, ctx) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('⏬ Cloning ionic4-capacitor-starter');
            yield this.git_clone('https://github.com/fivethree-team/ionic4-capacitor-starter', n);
            yield this.exec(`npm run --prefix ${n} init --name ${n}`, true);
        });
    }
};
__decorate([
    billy_core_1.usesPlugins(billy_plugin_core_1.CorePlugin),
    billy_core_1.Hook(billy_core_1.onStart),
    billy_core_1.Command('Clone and setup the fivethree ionic 4 capacitor starter'),
    __param(0, billy_core_1.param(name)), __param(1, billy_core_1.context()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CreateIonic.prototype, "create", null);
CreateIonic = __decorate([
    billy_core_1.App()
], CreateIonic);
exports.CreateIonic = CreateIonic;
