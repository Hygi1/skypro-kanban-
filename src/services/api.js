const API_BASE_URL = "https://wedev-api.sky.pro/api";

export async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem("token");

  const headers = {
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(options.headers || {}),
  };

  let body = options.body;
  if (
    body &&
    typeof body === "object" &&
    !(body instanceof FormData) &&
    !(body instanceof URLSearchParams)
  ) {
    body = JSON.stringify(body);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
    body,
  });

  let responseData;
  try {
    responseData = await response.json();
  } catch {
    responseData = {};
  }

  if (!response.ok) {
    const errorMessage =
      responseData.error || `Ошибка HTTP: ${response.status}`;
    if (response.status === 401) throw new Error("UNAUTHORIZED");
    throw new Error(errorMessage);
  }

  return responseData;
}
