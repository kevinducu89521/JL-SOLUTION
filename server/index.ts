import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import nodemailer from "nodemailer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Middleware para parsear JSON
  app.use(express.json());

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, ".."); // Servir desde la raíz del proyecto

  app.use(express.static(staticPath));

  // Ruta para enviar correos
  app.post("/send-email", async (req, res) => {
    const { name, email, phone, service, message } = req.body;

    // Configurar transporter de Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jeld.solution@gmail.com", // Tu correo
        pass: process.env.GMAIL_APP_PASSWORD, // Contraseña de app de Gmail
      },
    });

    const mailOptions = {
      from: "jeld.solution@gmail.com",
      to: "jeld.solution@gmail.com", // Enviar a ti mismo
      subject: `Nuevo mensaje de contacto de ${name}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Servicio de Interés:</strong> ${service || 'No especificado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Correo enviado exitosamente" });
    } catch (error) {
      console.error("Error enviando correo:", error);
      res.status(500).json({ message: "Error enviando correo" });
    }
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
