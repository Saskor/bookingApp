import { mockFetch } from './mock';

const DEV_LAUNCH_PARAMS = 'vk_user_id=1&vk_app_id=0&sign=dev';

const USE_MOCK = import.meta.env.VITE_MOCK === 'true';

let launchParams: string = DEV_LAUNCH_PARAMS;

export function setLaunchParams(params: string) {
  launchParams = params;
}

export function getLaunchParams(): string {
  return launchParams;
}

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  if (USE_MOCK) {
    return mockFetch<T>(path, options);
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `VKMiniApp ${launchParams}`,
    ...(options.headers as Record<string, string> | undefined),
  };

  const res = await fetch(path, { ...options, headers });

  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: res.statusText }));
    throw new ApiError(res.status, body.error || res.statusText);
  }

  return res.json();
}

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
