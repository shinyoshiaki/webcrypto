/// <reference types="node" />
import { CryptoKey } from "../../keys";
export declare class HkdfCryptoKey extends CryptoKey {
    data: Buffer;
    algorithm: KeyAlgorithm;
}
