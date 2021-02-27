import * as core from "webcrypto-core";
import { RsaPrivateKey } from "./private_key";
import { RsaPublicKey } from "./public_key";
export declare class RsaOaepProvider extends core.RsaOaepProvider {
    onGenerateKey(algorithm: RsaHashedKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair>;
    onEncrypt(algorithm: RsaOaepParams, key: RsaPublicKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onDecrypt(algorithm: RsaOaepParams, key: RsaPrivateKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onExportKey(format: KeyFormat, key: CryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    onImportKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: RsaHashedImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    checkCryptoKey(key: CryptoKey, keyUsage?: KeyUsage): void;
    protected mgf1(algorithm: Algorithm, seed: Uint8Array, length?: number): Uint8Array;
}
