export const register = async (data: { email: string; name?: string; password: string }) => {
  return fetch('http://localhost:8087/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const login = async (data: { email: string; password: string }) => {
  const response = await fetch('http://localhost:8087/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const result = await response.json();

  // ✅ Store the token safely
  sessionStorage.setItem('accessToken', result.token);

  return result;
};
