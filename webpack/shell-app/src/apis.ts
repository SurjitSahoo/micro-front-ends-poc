const SERVER_ROOT = 'http://localhost:3000';

async function httpCall(path: string, init?: RequestInit) {
  const res = await fetch(`${SERVER_ROOT}/${path}`, init);
  return await res.json();
}
