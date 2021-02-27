import * as core from "webcrypto-core";
import { CryptoKey } from "../../keys";
import { DesCryptoKey } from "./key";
export declare type DesCbcParams = core.DesParams;
export declare class DesCbcProvider extends core.DesProvider {
    keySizeBits: number;
    ivSize: number;
    name: string;
    onGenerateKey(algorithm: core.DesKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): Promise<core.CryptoKey>;
    onEncrypt(algorithm: DesCbcParams, key: DesCryptoKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onDecrypt(algorithm: DesCbcParams, key: DesCryptoKey, data: ArrayBuffer): Promise<ArrayBuffer>;
    onExportKey(format: KeyFormat, key: CryptoKey): Promise<JsonWebKey | ArrayBuffer>;
    onImportKey(format: KeyFormat, keyData: JsonWebKey | ArrayBuffer, algorithm: Algorithm, extractable: boolean, keyUsages: KeyUsage[]): Promise<core.CryptoKey>;
    checkCryptoKey(key: CryptoKey, keyUsage?: KeyUsage): void;
}
