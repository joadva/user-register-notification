import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export class EmailSender {
  private client: SESClient;

  constructor(region: string) {
    this.client = new SESClient({ region });
  }

  async sesEmail(params): Promise<string> {
    try {
      const command = new SendEmailCommand(params);
      const response = await this.client.send(command);
      return response.MessageId;
    } catch (error) {
      throw new Error(`Error al enviar el correo: ${error.message}`);
    }
  }
}
