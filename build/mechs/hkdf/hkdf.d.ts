import * as core from "webcrypto-core";
import { CryptoKey } from "webcrypto-core";
import { HkdfCryptoKey } from "./key";
export declare class HkdfProvider extends core.HkdfProvider {
    onImportKey(format: KeyFormat, keyData: ArrayBuffer, algorithm: HmacImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    onDeriveBits(params: HkdfParams, baseKey: HkdfCryptoKey, length: number): Promise<ArrayBuffer>;
    checkCryptoKey(key: CryptoKey, keyUsage?: KeyUsage): void;
}
