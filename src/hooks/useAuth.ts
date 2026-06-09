import { useEffect, useState } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { setLaunchParams } from '../api/client';

const DEV_LAUNCH_PARAMS = 'vk_user_id=1&vk_app_id=0&sign=dev';

export function useAuth() {
  const [vkUserId, setVkUserId] = useState<number>(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function init() {
      try {
        // VKWebAppInit hangs outside VK iframe — race with a timeout
        await Promise.race([
          bridge.send('VKWebAppInit'),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), 1500),
          ),
        ]);
      } catch {
        // Outside VK or timeout — proceed in dev mode
      }

      const launchParams = window.location.search
        ? window.location.search.slice(1)
        : DEV_LAUNCH_PARAMS;
      setLaunchParams(launchParams);

      const params = new URLSearchParams(launchParams);
      const uid = Number(params.get('vk_user_id')) || 1;
      setVkUserId(uid);
      setReady(true);
    }
    init();
  }, []);

  return { vkUserId, ready };
}
