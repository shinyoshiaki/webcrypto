import * as core from "webcrypto-core";
import { RsaPrivateKey } from "./private_key";
import { RsaPublicKey } from "./public_key";
export declare class RsaEsProvider extends core.ProviderCrypto {
    name: string;
    usages: {
        publicKey: core.KeyUsages;
        privateKey: core.KeyUsages;
    };
    onGenerateKey(algorithm: RsaKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair>;
    checkGenerateKeyParams(algorithm: RsaKeyGenParams): void;
    onEncrypt(algorithm: Algorithm, key: RsaPublicKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onDecrypt(algorithm: Algorithm, key: RsaPrivateKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onExportKey(format: KeyFormat, key: CryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    onImportKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: RsaHashedImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    checkCryptoKey(key: CryptoKey, keyUsage?: KeyUsage): void;
    private toCryptoOptions;
}
