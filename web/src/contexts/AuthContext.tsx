import type { User, GetUserResponse } from '@/interfaces/api';

import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import {
  createContext,
  useEffect,
  useCallback,
  useState,
  PropsWithChildren,
  useMemo,
} from 'react';

import { api } from '@/services/api';

export interface AuthContextData {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
  authenticate(username: string): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({ children }: PropsWithChildren): JSX.Element {
  const router = useRouter();

  const cookies = parseCookies();

  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const authenticate = useCallback(async (username: string) => {
    setIsLoading(true);

    const { data } = await api.post<GetUserResponse>('users', { username });

    setUser(data.user);

    setIsAuthenticated(true);

    setCookie(null, 'chaty.username', data.user.username, {
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    });

    setIsLoading(false);

    router.push('/');
  }, []);

  const load = useCallback(async () => {
    const username = cookies['chaty.username'];

    if (!username) {
      return;
    }

    await authenticate(username);
  }, []);

  useEffect(() => {
    load();
  }, []);

  const value = useMemo(
    () => ({
      isAuthenticated,
      isLoading,
      user,
      authenticate,
    }),
    [isAuthenticated, isLoading, user, authenticate],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
