import * as core from "webcrypto-core";
import { RsaPrivateKey } from "./private_key";
import { RsaPublicKey } from "./public_key";
export declare class RsaPssProvider extends core.RsaPssProvider {
    onGenerateKey(algorithm: RsaHashedKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair>;
    onSign(algorithm: RsaPssParams, key: RsaPrivateKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onVerify(algorithm: RsaPssParams, key: RsaPublicKey, signature: ArrayBuffer, data: ArrayBuffer): Promise<boolean>;
    onExportKey(format: KeyFormat, key: CryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    onImportKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: RsaHashedImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    checkCryptoKey(key: CryptoKey, keyUsage?: KeyUsage): void;
}
