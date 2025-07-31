// current Mission won't use this middleware
// future reference for firebase token authentication

import * as admin from "firebase-admin";
import { DecodedIdToken } from "firebase-admin/auth";
import { Request, Response, NextFunction } from "express";

admin.initializeApp();

export interface AuthenticatedRequest extends Request {
  user?: DecodedIdToken;
}

export const verifyTokenFirebase = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const header: string | undefined = req.headers.authorization;
  if (!header || header.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Missing or invalid Authorization header" });
  }

  const token = header.split("Bearer ")[1];

  try {
    req.user = await admin.auth().verifyIdToken(token);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
