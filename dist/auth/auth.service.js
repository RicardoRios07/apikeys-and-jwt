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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const account_service_1 = require("../account/account.service");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(accountsService, jwtTokenService) {
        this.accountsService = accountsService;
        this.jwtTokenService = jwtTokenService;
        this.apiKeys = [
            "ca03na188ame03u1d78620de67282882a84",
            "d2e621a6646a4211768cd68e26f21228a81",
        ];
    }
    async validateCredentials(username, password) {
        const account = await this.accountsService.getAccount({ username });
        console.log(account);
        if (!account) {
            throw new common_1.NotAcceptableException("No se pudo encontrar e usuario");
        }
        const passwordValid = await bcrypt.compare(password, account.password);
        console.log(passwordValid);
        if (!passwordValid) {
            throw new common_1.NotAcceptableException("Contraseña incorrecta");
        }
        if (account && passwordValid) {
            return account;
        }
        return null;
    }
    validateApiKey(apiKey) {
        return this.apiKeys.find(apiK => apiKey === apiK);
    }
    async loginWithCredentials(user) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtTokenService.sign(payload),
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [account_service_1.AccountService, jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map