import * as core from "webcrypto-core";
import { CryptoKey } from "../../keys";
import { RsaPrivateKey } from "./private_key";
import { RsaPublicKey } from "./public_key";
export declare class RsaCrypto {
    static publicKeyUsages: string[];
    static privateKeyUsages: string[];
    static generateKey(algorithm: RsaHashedKeyGenParams | RsaKeyGenParams, extractable: boolean, keyUsages: string[]): Promise<CryptoKeyPair>;
    static exportKey(format: KeyFormat, key: CryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    static importKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: RsaHashedImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    static sign(algorithm: Algorithm, key: RsaPrivateKey, data: Uint8Array): Promise<ArrayBuffer>;
    static verify(algorithm: Algorithm, key: RsaPublicKey, signature: Uint8Array, data: Uint8Array): Promise<boolean>;
    static encrypt(algorithm: RsaOaepParams, key: RsaPublicKey, data: Uint8Array): Promise<ArrayBuffer>;
    static decrypt(algorithm: RsaOaepParams, key: RsaPrivateKey, data: Uint8Array): Promise<ArrayBuffer>;
    protected static importPrivateKey(asnKey: core.asn1.RsaPrivateKey, algorithm: RsaHashedImportParams, extractable: boolean, keyUsages: KeyUsage[]): RsaPrivateKey;
    protected static importPublicKey(asnKey: core.asn1.RsaPublicKey, algorithm: RsaHashedImportParams, extractable: boolean, keyUsages: KeyUsage[]): RsaPublicKey;
    protected static getCryptoAlgorithm(alg: RsaHashedKeyAlgorithm): "RSA-SHA1" | "RSA-SHA256" | "RSA-SHA384" | "RSA-SHA512";
    protected static signRsa(algorithm: Algorithm, key: RsaPrivateKey, data: Uint8Array): ArrayBufferLike;
    protected static verifySSA(algorithm: Algorithm, key: RsaPublicKey, data: Uint8Array, signature: Uint8Array): boolean;
    protected static encryptOAEP(algorithm: RsaOaepParams, key: RsaPublicKey, data: Uint8Array): ArrayBufferLike;
    protected static decryptOAEP(algorithm: RsaOaepParams, key: RsaPrivateKey, data: Uint8Array): ArrayBufferLike;
}
