import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Contact inquiry endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const newInquiry = await storage.createContactInquiry(contactData);
      
      // Send email notification
      await sendContactEmail(contactData);
      
      return res.status(201).json({
        message: "Contact inquiry submitted successfully",
        inquiry: newInquiry
      });
    } catch (error) {
      console.error("Error processing contact inquiry:", error);
      return res.status(400).json({ 
        message: "Error processing your request. Please try again." 
      });
    }
  });

  // Get all contact inquiries (admin-only in a real app)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      return res.status(200).json(inquiries);
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      return res.status(500).json({ 
        message: "Error fetching contact inquiries" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
