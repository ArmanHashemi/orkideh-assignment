type RuntimeConfigNamespace = Record<string, unknown>;
interface PublicRuntimeConfig extends RuntimeConfigNamespace {
    baseUrl: string;
    publicKey: string;
    privateKey: string;
}
