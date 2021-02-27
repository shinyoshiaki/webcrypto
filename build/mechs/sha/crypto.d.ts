export declare class ShaCrypto {
    static size(algorithm: Algorithm): 160 | 256 | 384 | 512;
    static digest(algorithm: Algorithm, data: ArrayBuffer): ArrayBufferLike;
}
