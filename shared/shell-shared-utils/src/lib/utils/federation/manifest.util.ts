import { FederationManifest, NativeFederationManifest } from '../../interfaces';

export function toNativeFederationManifest(
  manifest: FederationManifest,
): NativeFederationManifest {
  return Object.values(manifest.applications)
    .filter((application) => application.enabled !== false)
    .reduce((result, application) => {
      result[application.remote.name] = application.remote.entry;

      return result;
    }, {} as NativeFederationManifest);
}
