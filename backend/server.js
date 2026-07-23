import express from "express";
import cors from "cors";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import fs from "node:fs";
import path from "path";
import invoiceRouter from "./routes/invoiceRouter.js";
import businessProfileRouter from "./routes/businessProfileRouter.js";
import aiInvoiceRouter from "./routes/aiInvoiceRouter.js";

const app = express();
const port = Number(process.env.PORT || 4000);
const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";
const uploadsDir = path.join(process.cwd(), "uploads");

// MIDDLEAWARE
app.use(
  cors({
    origin: frontendUrl,
    credentials: true,
  }),
);
app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

// DB
void connectDB();

fs.mkdirSync(uploadsDir, { recursive: true });

// ROUTE
app.use("/uploads", express.static(uploadsDir));

app.use("/api/invoices", invoiceRouter); // plural
app.use("/api/businessProfile", businessProfileRouter);
app.use("/api/ai", aiInvoiceRouter);

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
