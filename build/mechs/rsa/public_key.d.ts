import * as core from "webcrypto-core";
import { AsymmetricKey } from "../../keys/asymmetric";
export declare class RsaPublicKey extends AsymmetricKey {
    readonly type: "public";
    algorithm: RsaHashedKeyAlgorithm;
    getKey(): core.asn1.RsaPublicKey;
    toJSON(): any;
    fromJSON(json: JsonWebKey): void;
}
