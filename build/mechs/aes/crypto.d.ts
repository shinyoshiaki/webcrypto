/// <reference types="node" />
import { CryptoKey } from "../../keys";
import { AesCryptoKey } from "./key";
export declare class AesCrypto {
    static AES_KW_IV: Buffer;
    static generateKey(algorithm: AesKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<AesCryptoKey>;
    static exportKey(format: string, key: AesCryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    static importKey(format: string, keyData: JsonWebKey | ArrayBuffer, algorithm: any, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    static encrypt(algorithm: Algorithm, key: AesCryptoKey, data: Uint8Array): Promise<ArrayBuffer>;
    static decrypt(algorithm: Algorithm, key: CryptoKey, data: Uint8Array): Promise<ArrayBuffer>;
    static encryptAesCBC(algorithm: AesCbcParams, key: AesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
    static decryptAesCBC(algorithm: AesCbcParams, key: AesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
    static encryptAesCTR(algorithm: AesCtrParams, key: AesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
    static decryptAesCTR(algorithm: AesCtrParams, key: AesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
    static encryptAesGCM(algorithm: AesGcmParams, key: AesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
    static decryptAesGCM(algorithm: AesGcmParams, key: AesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
    static encryptAesKW(algorithm: Algorithm, key: AesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
    static decryptAesKW(algorithm: Algorithm, key: AesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
    static encryptAesECB(algorithm: Algorithm, key: AesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
    static decryptAesECB(algorithm: Algorithm, key: AesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
}
