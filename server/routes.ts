import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import fs from "fs";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Log incoming requests for debugging
  app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.path}`);
    next();
  });

  // API Routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store message (handle potential storage errors)
      try {
        const message = await storage.createMessage(validatedData);
        res.status(201).json({ 
          message: "Message sent successfully", 
          data: message 
        });
      } catch (error) {
        res.status(500).json({ 
          message: "Error storing message", 
          error: error instanceof Error ? error.message : "Unknown error" 
        });
      }
    } catch (error) {
      res.status(400).json({ 
        message: "Invalid form data", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Download resume
  app.get("/api/download-resume", (req, res) => {
    const resumePath = path.resolve(process.cwd(), "attached_assets/Resume-Manaya.pdf");
    
    if (fs.existsSync(resumePath)) {
      res.download(resumePath, "Manaya_Pachpor_Resume.pdf", (err) => {
        if (err) {
          console.error("Error sending file:", err);
          res.status(500).json({ message: "Internal server error" });
        }
      });
    } else {
      res.status(404).json({ message: "Resume not found" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
