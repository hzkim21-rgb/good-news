const KEY = "goodnews_bookmarks";

export function getBookmarks(): string[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function toggleBookmark(id: string): string[] {
  const current = getBookmarks();
  const next = current.includes(id)
    ? current.filter(x => x !== id)
    : [...current, id];
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}
