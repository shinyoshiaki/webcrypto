import * as core from "webcrypto-core";
import { CryptoKey } from "../../keys";
export declare class EcdhEsProvider extends core.EcdhEsProvider {
    onGenerateKey(algorithm: EcKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<CryptoKeyPair>;
    onDeriveBits(algorithm: EcdhKeyDeriveParams, baseKey: core.CryptoKey, length: number): Promise<ArrayBuffer>;
    onExportKey(format: KeyFormat, key: CryptoKey): Promise<ArrayBuffer | JsonWebKey>;
    onImportKey(format: KeyFormat, keyData: ArrayBuffer | JsonWebKey, algorithm: EcKeyImportParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<core.CryptoKey>;
}
