import * as core from "webcrypto-core";
import { CryptoKey } from "../../keys";
import { EcPrivateKey } from "./private_key";
import { EcPublicKey } from "./public_key";
export declare class EcCrypto {
    static publicKeyUsages: string[];
    static privateKeyUsages: string[];
    static generateKey(algorithm: EcKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair>;
    static sign(algorithm: EcdsaParams, key: EcPrivateKey, data: Uint8Array): Promise<ArrayBuffer>;
    static verify(algorithm: EcdsaParams, key: EcPublicKey, signature: Uint8Array, data: Uint8Array): Promise<boolean>;
    static deriveBits(algorithm: EcdhKeyDeriveParams, baseKey: CryptoKey, length: number): Promise<ArrayBuffer>;
    static exportKey(format: KeyFormat, key: CryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    static importKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: EcKeyImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    protected static assertKeyParameters(parameters: ArrayBuffer | null | undefined, namedCurve: string): void;
    protected static importPrivateKey(asnKey: core.asn1.EcPrivateKey, algorithm: EcKeyImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<EcPrivateKey>;
    protected static importPublicKey(asnKey: core.asn1.EcPublicKey, algorithm: EcKeyImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<EcPublicKey>;
    private static getOpenSSLNamedCurve;
    private static getPointSize;
    private static addPadding;
    private static removePadding;
}
