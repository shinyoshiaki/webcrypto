import * as core from "webcrypto-core";
import { SubtleCrypto } from "./subtle";
export declare class Crypto extends core.Crypto {
    subtle: SubtleCrypto;
    getRandomValues<T extends ArrayBufferView>(array: T): T;
}
