async function login(mail: string, password: string): Promise<any> {
  try {
    const response = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    throw error;
  }
}

async function register(userName: string, mail: string, password: string): Promise<any> {
  try {
    const response = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, mail, password }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al registrar:", error);
    throw error;
  }
}

export default { login, register };
