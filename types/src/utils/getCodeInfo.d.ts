declare function _default({ clientId, clientSecret, redirectURI, scopes }: {
    clientId: string;
    clientSecret: string;
    redirectURI: string;
    scopes: string[];
}, code: string): Promise<object>;
export default _default;
