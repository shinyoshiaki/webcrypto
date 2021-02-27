import * as core from "webcrypto-core";
import { RsaPrivateKey } from "./private_key";
import { RsaPublicKey } from "./public_key";
export declare class RsaSsaProvider extends core.RsaSsaProvider {
    onGenerateKey(algorithm: RsaHashedKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair>;
    onSign(algorithm: Algorithm, key: RsaPrivateKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onVerify(algorithm: Algorithm, key: RsaPublicKey, signature: ArrayBuffer, data: ArrayBuffer): Promise<boolean>;
    onExportKey(format: KeyFormat, key: CryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    onImportKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: RsaHashedImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    checkCryptoKey(key: CryptoKey, keyUsage?: KeyUsage): void;
}
