import { FederationManifest, NativeFederationManifest } from '../interfaces';

export function toNativeFederationManifest(
  manifest: FederationManifest,
  useDevelopmentEntries = false,
): NativeFederationManifest {
  return Object.values(manifest.applications)
    .filter((application) => application.enabled !== false)
    .reduce((result, application) => {
      result[application.remote.name] =
        useDevelopmentEntries && application.remote.developmentEntry
          ? application.remote.developmentEntry
          : application.remote.entry;

      return result;
    }, {} as NativeFederationManifest);
}
