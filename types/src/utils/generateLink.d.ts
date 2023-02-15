declare function _default({ clientId, redirectURI, responseType, scopes, state }: {
    clientId: string;
    redirectURI: string;
    responseType: string;
    scopes: string[];
    state?: string|number;
}): string;
export default _default;
