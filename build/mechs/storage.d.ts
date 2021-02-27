import * as core from "webcrypto-core";
import { CryptoKey as InternalCryptoKey } from "../keys";
export declare function getCryptoKey(key: core.CryptoKey): InternalCryptoKey;
export declare function setCryptoKey(value: InternalCryptoKey): core.CryptoKey;
