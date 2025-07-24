import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    // Handle array queryKey properly
    let url: string;
    
    if (typeof queryKey[0] === 'string') {
      if (queryKey.length > 1 && typeof queryKey[1] === 'string') {
        // Handle special case for course detail
        if (queryKey[0] === '/api/courses' && queryKey[1]) {
          url = `/api/courses/${queryKey[1]}`;
          console.log(`Making request to: ${url}`);
        } else {
          // Generic case
          url = `${queryKey[0]}/${queryKey[1]}`;
        }
      } else {
        url = queryKey[0];
      }
    } else {
      throw new Error('Invalid queryKey format');
    }
    
    // Add detailed logging for debugging
    console.log(`[Query] Making request to: ${url}`);
    
    const res = await fetch(url, {
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    console.log(`[Query] Response status: ${res.status} for ${url}`);

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      console.log(`[Query] Unauthorized access to ${url}`);
      return null;
    }

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`[Query] Request failed for ${url}: ${res.status} - ${errorText}`);
      throw new Error(`${res.status}: ${errorText || res.statusText}`);
    }

    const jsonData = await res.json();
    console.log(`[Query] Success for ${url}:`, jsonData.success ? 'Data loaded successfully' : 'API returned success: false');
    return jsonData;
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 3, // Allow retries
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
    mutations: {
      retry: 1,
    },
  },
});
