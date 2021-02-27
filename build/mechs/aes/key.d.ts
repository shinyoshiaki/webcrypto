/// <reference types="node" />
import { SymmetricKey } from "../../keys";
export declare class AesCryptoKey extends SymmetricKey {
    algorithm: AesKeyAlgorithm;
    data: Buffer;
    get alg(): string;
    set alg(value: string);
}
