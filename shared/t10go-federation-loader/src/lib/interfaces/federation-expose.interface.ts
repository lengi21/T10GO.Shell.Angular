export interface FederationExpose {
  /**
   * Native Federation module name.
   *
   * Example:
   * "./WeddingCalculator"
   */
  exposedModule: string;

  /**
   * Exported TypeScript symbol.
   *
   * Example:
   * "WeddingCalculatorComponent"
   */
  exportName: string;

  /**
   * What this expose represents.
   */
  type?: FederationExposeType;

  /**
   * Optional metadata.
   */
  metadata?: Record<string, unknown>;
}

export type FederationExposeType =
  'component' | 'service' | 'module' | 'routes';
