import jwt from "jsonwebtoken";
import config from "../config/config";

interface Token {
  id: string;
  mail: string;
  username: string;
  exp: number;
  iat: number;
}

export const generateToken = (
  mail: string | undefined,
  id: string | undefined,
  username: string | undefined
) => {
  const newToken = jwt.sign(
    {
      id,
      mail,
      username,
      exp: Date.now() + 3600000,
    },
    config.SECRET_JWT
  );

  return newToken;
};



export const verifyToken = (token: string ): { id: string; mail: string, username:string } | null => {
  const verifiedtoken = jwt.verify(token, config.SECRET_JWT) as Token ;
  const limit = verifiedtoken.exp - 1200000;
  if (verifiedtoken.exp !== undefined && verifiedtoken.exp < Date.now()) {
    throw new Error("Token expirado");
  }
  if (Date.now() < limit) return null;
  return { id: verifiedtoken.id, mail: verifiedtoken.mail, username: verifiedtoken.username };
};

export const refreshToken = (token: any): any => {
    const response = verifyToken(token);
    if (response != null) {
      const newToken = generateToken(response?.id, response?.mail, response?.username);
      return newToken
  }
};


export function extractIdandUserToken(token: string): any {
  
  const { id, username} = jwt.verify(token, config.SECRET_JWT)  as Token
  
  return {id, username}
}
