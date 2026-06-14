// src/lib/safeFetch.ts
export async function safeFetch<T>(url: string): Promise<T[]> {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Ошибка запроса ${url}:`, res.status);
    return [];
  }
  try {
    return await res.json();
  } catch {
    console.error(`Некорректный JSON от ${url}`);
    return [];
  }
}
