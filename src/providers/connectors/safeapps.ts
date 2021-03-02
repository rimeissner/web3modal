export interface ISafeAppsProviderOptions {
  sdk: any,
  safe: any
}

const ConnectToSafeApp = (
  SafeAppsProvider: any,
  opts: Partial<ISafeAppsProviderOptions> = {}
) => {
  return new SafeAppsProvider(opts.safe, opts.safe);
};

export default ConnectToSafeApp;
