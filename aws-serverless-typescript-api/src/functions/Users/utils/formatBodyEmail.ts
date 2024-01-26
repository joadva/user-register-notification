const formatBody= (user:string) => {
    const  bodyEmail = {
        Destination: {
          ToAddresses: [process.env.EMAIL_SEND],
        },
        Message: {
          Body: {
            Text: {
              Data: `El usuario ${user} ha sido registrado`,
            },
          },
          Subject: {
            Data: 'Registro de un usuario',
          },
        },
        Source: process.env.EMAIL_FROM,
      };
      return bodyEmail;
}
export default formatBody;