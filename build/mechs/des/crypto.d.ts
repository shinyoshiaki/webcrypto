/// <reference types="node" />
import { DesParams } from "webcrypto-core";
import { CryptoKey } from "../../keys";
import { DesCryptoKey } from "./key";
export declare class DesCrypto {
    static generateKey(algorithm: AesKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<DesCryptoKey>;
    static exportKey(format: string, key: CryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    static importKey(format: string, keyData: JsonWebKey | ArrayBuffer, algorithm: any, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    static encrypt(algorithm: DesParams, key: DesCryptoKey, data: Uint8Array): Promise<ArrayBuffer>;
    static decrypt(algorithm: DesParams, key: CryptoKey, data: Uint8Array): Promise<ArrayBuffer>;
    static encryptDesCBC(algorithm: DesParams, key: DesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
    static decryptDesCBC(algorithm: DesParams, key: DesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
    static encryptDesEDE3CBC(algorithm: DesParams, key: DesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
    static decryptDesEDE3CBC(algorithm: DesParams, key: DesCryptoKey, data: Buffer): Promise<ArrayBufferLike>;
}
