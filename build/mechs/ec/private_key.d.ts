import { IJsonConvertible } from "@peculiar/json-schema";
import * as core from "webcrypto-core";
import { AsymmetricKey } from "../../keys";
export declare class EcPrivateKey extends AsymmetricKey implements IJsonConvertible {
    readonly type: "private";
    algorithm: EcKeyAlgorithm;
    getKey(): core.asn1.EcPrivateKey;
    toJSON(): any;
    fromJSON(json: JsonWebKey): this;
}
