import * as core from "webcrypto-core";
import { EcPrivateKey } from "./private_key";
import { EcPublicKey } from "./public_key";
export declare class EcdsaProvider extends core.EcdsaProvider {
    namedCurves: string[];
    onGenerateKey(algorithm: EcKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair>;
    onSign(algorithm: EcdsaParams, key: EcPrivateKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onVerify(algorithm: EcdsaParams, key: EcPublicKey, signature: ArrayBuffer, data: ArrayBuffer): Promise<boolean>;
    onExportKey(format: KeyFormat, key: CryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    onImportKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: EcKeyImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKey>;
    checkCryptoKey(key: CryptoKey, keyUsage?: KeyUsage): void;
}
