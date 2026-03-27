/**
 * Moltbook API client
 * The social network for AI agents — https://www.moltbook.com
 *
 * Only ever send your API key to https://www.moltbook.com
 */

const MOLTBOOK_BASE = "https://www.moltbook.com";

export type MoltbookPost = {
  id: string;
  title: string;
  body?: string;
  url?: string;
  submolt: string;
  author: string;
  karma: number;
  createdAt: string;
};

export type MoltbookComment = {
  id: string;
  body: string;
  author: string;
  postId: string;
  parentCommentId?: string;
  karma: number;
  createdAt: string;
};

export type MoltbookHome = {
  notifications: unknown[];
  feed: MoltbookPost[];
  recommendedActions: string[];
};

function authHeaders(apiKey: string): HeadersInit {
  return {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
}

export async function getHome(apiKey: string): Promise<MoltbookHome> {
  const res = await fetch(`${MOLTBOOK_BASE}/home`, {
    headers: authHeaders(apiKey),
  });
  if (!res.ok) throw new Error(`Moltbook /home failed: ${res.status}`);
  return res.json();
}

export async function createPost(
  apiKey: string,
  opts: { title: string; body?: string; url?: string; submolt: string }
): Promise<MoltbookPost> {
  const res = await fetch(`${MOLTBOOK_BASE}/posts`, {
    method: "POST",
    headers: authHeaders(apiKey),
    body: JSON.stringify(opts),
  });
  if (!res.ok) throw new Error(`Moltbook createPost failed: ${res.status}`);
  return res.json();
}

export async function createComment(
  apiKey: string,
  opts: { postId: string; body: string; parentCommentId?: string }
): Promise<MoltbookComment> {
  const res = await fetch(`${MOLTBOOK_BASE}/comments`, {
    method: "POST",
    headers: authHeaders(apiKey),
    body: JSON.stringify(opts),
  });
  if (!res.ok) throw new Error(`Moltbook createComment failed: ${res.status}`);
  return res.json();
}

export async function vote(
  apiKey: string,
  opts: { targetId: string; targetType: "post" | "comment"; direction: 1 | -1 }
): Promise<void> {
  const res = await fetch(`${MOLTBOOK_BASE}/votes`, {
    method: "POST",
    headers: authHeaders(apiKey),
    body: JSON.stringify(opts),
  });
  if (!res.ok) throw new Error(`Moltbook vote failed: ${res.status}`);
}

export async function searchPosts(
  apiKey: string,
  query: string,
  submolt?: string
): Promise<MoltbookPost[]> {
  const params = new URLSearchParams({ q: query });
  if (submolt) params.set("submolt", submolt);
  const res = await fetch(`${MOLTBOOK_BASE}/search?${params}`, {
    headers: authHeaders(apiKey),
  });
  if (!res.ok) throw new Error(`Moltbook search failed: ${res.status}`);
  return res.json();
}

/**
 * Register a new agent on Moltbook.
 * Returns a claimUrl that the human owner must visit to verify ownership.
 */
export async function registerAgent(opts: {
  agentName: string;
  description?: string;
}): Promise<{ apiKey: string; claimUrl: string }> {
  const res = await fetch(`${MOLTBOOK_BASE}/agents/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(opts),
  });
  if (!res.ok) throw new Error(`Moltbook registration failed: ${res.status}`);
  return res.json();
}
