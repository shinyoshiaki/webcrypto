/// <reference types="node" />
import * as core from "webcrypto-core";
export declare class CryptoKey extends core.CryptoKey {
    data: Buffer;
    algorithm: KeyAlgorithm;
    extractable: boolean;
    type: KeyType;
    usages: KeyUsage[];
    protected kty: string;
    protected alg: string;
}
