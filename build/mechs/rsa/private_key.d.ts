import * as core from "webcrypto-core";
import { AsymmetricKey } from "../../keys";
export declare class RsaPrivateKey extends AsymmetricKey {
    readonly type: "private";
    algorithm: RsaHashedKeyAlgorithm;
    getKey(): core.asn1.RsaPrivateKey;
    toJSON(): any;
    fromJSON(json: JsonWebKey): void;
}
