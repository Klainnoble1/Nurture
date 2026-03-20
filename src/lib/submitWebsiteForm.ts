type SubmitPayload = Record<string, unknown>;

export async function submitWebsiteForm(payload: SubmitPayload) {
  const response = await fetch('/api/submit-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const body = await response
    .json()
    .catch(() => ({ error: 'Unable to submit the form right now.' }));

  if (!response.ok) {
    throw new Error(
      typeof body?.error === 'string'
        ? body.error
        : 'Unable to submit the form right now.'
    );
  }

  return body;
}
