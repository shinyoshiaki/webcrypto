import { IJsonConvertible } from "@peculiar/json-schema";
import * as core from "webcrypto-core";
import { AsymmetricKey } from "../../keys/asymmetric";
export declare class EcPublicKey extends AsymmetricKey implements IJsonConvertible {
    readonly type: "public";
    algorithm: EcKeyAlgorithm;
    getKey(): core.asn1.EcPublicKey;
    toJSON(): any;
    fromJSON(json: JsonWebKey): this;
}
