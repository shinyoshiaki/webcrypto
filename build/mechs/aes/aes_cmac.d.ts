import * as core from "webcrypto-core";
import { AesCryptoKey } from "./key";
export declare class AesCmacProvider extends core.AesCmacProvider {
    onGenerateKey(algorithm: AesKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    onSign(algorithm: AesCmacParams, key: AesCryptoKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onVerify(algorithm: AesCmacParams, key: AesCryptoKey, signature: ArrayBuffer, data: ArrayBuffer): Promise<boolean>;
    onExportKey(format: KeyFormat, key: AesCryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    onImportKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: Algorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    checkCryptoKey(key: CryptoKey, keyUsage?: KeyUsage): void;
}
