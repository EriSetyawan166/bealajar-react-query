// src/services/api.ts
const BASE_URL = "/api";

const simulateDelay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};

export const fetchPosts = async () => {
  await simulateDelay(3000); // Simulasi delay 1 detik
  const response = await fetch(`${BASE_URL}/posts`);
  return handleResponse(response);
};

export const fetchPostById = async (id: string) => {
  await simulateDelay(3000); // Simulasi delay 1 detik
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  return handleResponse(response);
};

export const createPost = async (postData: { title: string; content: string }) => {
  await simulateDelay(3000); // Simulasi delay 1 detik
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  return handleResponse(response);
};

export const updatePost = async (id: string, postData: { title: string; content: string }) => {
  await simulateDelay(3000); // Simulasi delay 1 detik
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  return handleResponse(response);
};

export const deletePost = async (id: string) => {
  await simulateDelay(3000); // Simulasi delay 1 detik
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
  });
  return handleResponse(response);
};
