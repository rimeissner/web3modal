import { IProviderAutoConnector } from "src/helpers";

class SafeAppAutoConnect implements IProviderAutoConnector {
  private connector: any
  private provider: any
  private options: any
  private safe: any
  constructor(connector: any, provider: any, options: any) {
    this.connector = connector
    this.provider = provider
    if (!options.sdk) throw Error("Safe Apps sdk not provided")
    this.options = options
    this.getSafeInfo()
  }

  async getSafeInfo(): Promise<any> {
    if (!this.safe)
      try {
        this.safe = await Promise.race([
          this.options.sdk.getSafeInfo(),
          new Promise((resolve) => setTimeout(resolve, 100))
        ])
      } catch (e) {
        this.safe = undefined
      }
    return this.safe
  }

  async connect(): Promise<any> {
    const safe = await this.getSafeInfo()
    return this.connector(this.provider, { ...this.options, safe })
  }

  async canConnect(): Promise<boolean> {
    return await this.getSafeInfo() != undefined
  }
}

export default SafeAppAutoConnect;
