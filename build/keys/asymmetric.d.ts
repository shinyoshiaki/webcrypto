import { CryptoKey } from "./key";
export declare abstract class AsymmetricKey extends CryptoKey {
    abstract type: "public" | "private";
    pem?: string;
}
