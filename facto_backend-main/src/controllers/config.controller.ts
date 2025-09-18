import { Request, Response } from "express";

/**
 * GET /api/getkey
 * Returns the Razorpay key_id to the client
 * (Never expose the secret key in source code or repositories)
 */
export const getRazorpayKey = (req: Request, res: Response) => {
  // Only expose the public key_id from environment variable
  res.status(200).json({ key: process.env.RAZORPAY_KEY_ID });
};