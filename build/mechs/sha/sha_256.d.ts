import * as core from "webcrypto-core";
export declare class Sha256Provider extends core.ProviderCrypto {
    name: string;
    usages: never[];
    onDigest(algorithm: Algorithm, data: ArrayBuffer): Promise<ArrayBuffer>;
}
