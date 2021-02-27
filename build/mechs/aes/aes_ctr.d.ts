import * as core from "webcrypto-core";
import { AesCryptoKey } from "./key";
export declare class AesCtrProvider extends core.AesCtrProvider {
    onGenerateKey(algorithm: AesKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    onEncrypt(algorithm: AesCtrParams, key: AesCryptoKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onDecrypt(algorithm: AesCtrParams, key: AesCryptoKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onExportKey(format: KeyFormat, key: AesCryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    onImportKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: Algorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    checkCryptoKey(key: CryptoKey, keyUsage?: KeyUsage): void;
}
