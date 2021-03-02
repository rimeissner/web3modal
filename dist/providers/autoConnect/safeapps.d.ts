import { IProviderAutoConnector } from "src/helpers";
declare class SafeAppAutoConnect implements IProviderAutoConnector {
    private connector;
    private provider;
    private options;
    private safe;
    constructor(connector: any, provider: any, options: any);
    getSafeInfo(): Promise<any>;
    connect(): Promise<any>;
    canConnect(): Promise<boolean>;
}
export default SafeAppAutoConnect;
//# sourceMappingURL=safeapps.d.ts.map