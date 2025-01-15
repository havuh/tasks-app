import { setAuthTokenToCookie } from "@/lib/utils/auth";
import { loginWithCredentials } from "@/services/auth";
import { PATHS } from "@core/settings/paths";
import { useAuth } from "@core/stores/auth";
import { LoginFormValues } from "@core/types";
import { useRouter } from "next/router";
import { useState } from "react";

type UseLoginReturn = {
  isLoading: boolean;
  signIn: (data: LoginFormValues) => void | Promise<void>;
};

export function useLoginForm(): UseLoginReturn {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const setUser = useAuth((state) => state.setUser);

  const signIn = async (values: LoginFormValues) => {
    setIsLoading(true);

    const data = {
      username: values?.username ?? '',
      password: values?.password ?? '',
    };

    loginWithCredentials(data)
      .then((res) => {
        setAuthTokenToCookie(res);
        setUser(res.user);
        setIsLoading(false);

        const nextUrl = new URL(PATHS.taskPaths.taskList, window.location.origin);

        const timeout = setTimeout(() => {
          router.push(nextUrl.pathname);

          clearTimeout(timeout);
        }, 50);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    signIn,
  };
}
