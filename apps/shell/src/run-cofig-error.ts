export function renderConfigurationError(error: unknown): void {
  const root = document.body;

  root.innerHTML = `
    <div
      style="
        padding: 40px;
        font-family: sans-serif;
      "
    >
      <h1>
        Application configuration error
      </h1>

      <p>
        The application could not be started.
      </p>

      <pre>
${escapeHtml(error instanceof Error ? error.message : String(error))}
      </pre>
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
