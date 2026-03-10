import { cookies } from 'next/headers';

const SESSION_COOKIE = 'admin_session';
const SESSION_VALUE = 'authenticated';

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get(SESSION_COOKIE);
  return session?.value === SESSION_VALUE;
}

export function getSessionCookieName() {
  return SESSION_COOKIE;
}

export function getSessionCookieValue() {
  return SESSION_VALUE;
}
