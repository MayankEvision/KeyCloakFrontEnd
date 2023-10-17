// apiService.js

const apiUrl = "http://localhost:9090/api/user/all-users";

export async function fetchUserDetails() {
  const token = localStorage.getItem("loginResponse");
  const authToken = JSON.parse(token);
  const accessToken = authToken.access_token;
//   const refreshToken = authToken.refresh_token;
  
//   const refreshTokenData = { 'token': refreshToken };
  
  const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Access-Control-Allow-Origin': 'http://localhost:9090',
  };

  try {
    const response = await fetch(apiUrl, {
      headers,
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch user details: " + error.message);
  }
}

