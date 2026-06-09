import { useQuery } from "@tanstack/react-query";
import { getVkUserInfo } from "./queryKeys";

export const useGetVkUserInfo = () =>
  useQuery({
    queryKey: getVkUserInfo,
    queryFn: () => {
      // bridge.send("VKWebAppGetUserInfo")
      return new Promise<{ id: number }>((resolve) => {
        setTimeout(() => {
          resolve({ id: 12345 });
        }, 0);
      }).then((res) => res);
    },
  });
