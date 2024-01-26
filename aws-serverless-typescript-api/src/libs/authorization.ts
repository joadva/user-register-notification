const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

const cognitoIssuer = `https://cognito-idp.${process.env.AWS_REGION}.amazonaws.com/${process.env.COGNITO_USER_POOL_ID}`;

const client = jwksClient({
  jwksUri: `${cognitoIssuer}/.well-known/jwks.json`,
});

async function validateToken(token:string, kid:string):Promise<object> {
  const key = await client.getSigningKey(kid);
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      key.getPublicKey(),
      { issuer: cognitoIssuer },
      (err, decoded) => {
        if (err) {
          reject(err);
        } else {
          resolve(decoded);
        }
      }
    );
  });
}

export const authorize = () => ({
  before: async (handler) => {
    const { event } = handler;

    const authHeader =
      event.headers.Authorization || event.headers.authorization;

    if (undefined === authHeader || null === authHeader) {
      throw new Error("Se requiere un token de autorización.");
    }

    if (!authHeader.startsWith("Bearer ")) {
      throw new Error("Token Invalido.");
    }

    const token:string = authHeader.substring(7);

    const decodedToken = jwt.decode(token, { complete: true, json: true });

    const userData = await validateToken(token, decodedToken.header.kid);
    event.user = userData;
   return
  },
});
