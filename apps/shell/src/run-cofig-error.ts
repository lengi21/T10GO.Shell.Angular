export function renderStartupError(error: unknown): void {
  document.body.innerHTML = `
    <div style="padding: 2rem; font-family: sans-serif;">
      <h1>Application startup failed</h1>
      <p>
        The application could not be started because its
        runtime configuration could not be loaded.
      </p>
      <pre>${escapeHtml(
        error instanceof Error ? error.message : String(error),
      )}</pre>
    </div>
  `;
}

function escapeHtml(value: string): string {
  const map: { [k: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return value.replace(/[&<>"']/g, (ch) => map[ch]);
}
