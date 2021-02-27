import { CryptoKey } from "./key";
export declare class SymmetricKey extends CryptoKey {
    readonly kty = "oct";
    readonly type: "secret";
}
