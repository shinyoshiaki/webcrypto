import * as core from "webcrypto-core";
import { AesCryptoKey } from "./key";
export declare class AesKwProvider extends core.AesKwProvider {
    onGenerateKey(algorithm: AesKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    onExportKey(format: KeyFormat, key: AesCryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    onImportKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: Algorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    onEncrypt(algorithm: Algorithm, key: AesCryptoKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onDecrypt(algorithm: Algorithm, key: AesCryptoKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    checkCryptoKey(key: CryptoKey, keyUsage?: KeyUsage): void;
}
