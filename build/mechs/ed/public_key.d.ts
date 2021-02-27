import { IJsonConvertible } from "@peculiar/json-schema";
import { AsymmetricKey } from "../../keys/asymmetric";
export declare class EdPublicKey extends AsymmetricKey implements IJsonConvertible {
    readonly type: "public";
    algorithm: EcKeyAlgorithm;
    getKey(): ArrayBuffer;
    toJSON(): JsonWebKey & {
        x: string;
    };
    fromJSON(json: JsonWebKey): this;
}
