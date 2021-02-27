/// <reference types="node" />
import * as core from "webcrypto-core";
import { SymmetricKey } from "../../keys";
export declare class DesCryptoKey extends SymmetricKey {
    algorithm: core.DesKeyAlgorithm;
    data: Buffer;
    get alg(): string;
    set alg(value: string);
}
