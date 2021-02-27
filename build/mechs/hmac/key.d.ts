/// <reference types="node" />
import { CryptoKey } from "../../keys";
export declare class HmacCryptoKey extends CryptoKey {
    data: Buffer;
    algorithm: HmacKeyAlgorithm;
    protected get alg(): string;
    protected set alg(value: string);
}
