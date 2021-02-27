import * as core from "webcrypto-core";
import { CryptoKey } from "../../keys";
import { EdPrivateKey } from "./private_key";
import { EdPublicKey } from "./public_key";
export declare class EdCrypto {
    static publicKeyUsages: string[];
    static privateKeyUsages: string[];
    static generateKey(algorithm: EcKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair>;
    static sign(algorithm: Algorithm, key: EdPrivateKey, data: Uint8Array): Promise<ArrayBuffer>;
    static verify(algorithm: EcdsaParams, key: EdPublicKey, signature: Uint8Array, data: Uint8Array): Promise<boolean>;
    static deriveBits(algorithm: EcdhKeyDeriveParams, baseKey: CryptoKey, length: number): Promise<ArrayBuffer>;
    static exportKey(format: KeyFormat, key: CryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    static importKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: EcKeyImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    protected static importPrivateKey(asnKey: core.asn1.CurvePrivateKey, algorithm: EcKeyImportParams, extractable: boolean, keyUsages: KeyUsage[]): EdPrivateKey;
    protected static importPublicKey(asnKey: ArrayBuffer, algorithm: EcKeyImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<EdPublicKey>;
}
