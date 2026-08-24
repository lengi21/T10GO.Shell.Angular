const MANIFEST_URL = '/config/manifest.json';

interface RuntimeFederationManifest {
  readonly applications: Record<
    string,
    {
      readonly enabled?: boolean;
      readonly remote: {
        readonly name: string;
        readonly entry: string;
        readonly developmentEntry?: string;
      };
    }
  >;
}

/** Loads the shell federation manifest before Angular bootstraps. */
export async function loadNativeFederationManifest(): Promise<Record<string, string>> {
  const response = await fetch(MANIFEST_URL, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(
      `Failed to load federation manifest: ${MANIFEST_URL} ` +
        `(${response.status} ${response.statusText})`,
    );
  }

  const manifest = await response.json() as RuntimeFederationManifest;
  const useDevelopmentEntries =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';

  return Object.values(manifest.applications)
    .filter((application) => application.enabled !== false)
    .reduce((nativeManifest, application) => {
      nativeManifest[application.remote.name] =
        useDevelopmentEntries && application.remote.developmentEntry
          ? application.remote.developmentEntry
          : application.remote.entry;

      return nativeManifest;
    }, {} as Record<string, string>);
}
