import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import express from "express";
import cors from "cors";
import { contents } from "./utils/dataMockup";
import { FieldValue } from "firebase-admin/firestore";

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/mainVideoBelajar", (req, res) => {
  res.send(contents);
});

app.post("/addPendingTx", async (req, res) => {
  try {
    const { userId, productId } = req.body;
    if (!userId || !productId) {
      res.status(400).send("userId and productId are required");
      return;
    }

    await db
      .collection("pending_txs")
      .doc(userId)
      .set(
        {
          data: FieldValue.arrayUnion(String(productId)),
        },
        { merge: true }
      );

    res.status(200).send({
      success: true,
      message: "Pending transaction added or updated",
    });
  } catch (error) {
    console.error("Error in putPendingTx:", error);
    res.status(500).send("Internal server error");
  }
});

app.delete("/removePendingTx", async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      res.status(400).send("userId is required");
      return;
    }

    await db.collection("pending_txs").doc(userId).delete();

    res.status(200).send({
      success: true,
      message: "Pending transaction removed",
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Error removing pending transaction",
      error: error.message,
    });
  }
});

app.put("/addOwnedProduct", async (req, res) => {
  try {
    const { userId, productId } = req.body;
    if (!userId || !productId) {
      res.status(400).send("userId and productId are required");
      return;
    }

    await db
      .collection("owned_products")
      .doc(userId)
      .set(
        {
          data: FieldValue.arrayUnion(String(productId)),
        },
        { merge: true }
      );

    res.status(200).send({
      success: true,
      message: "Owned product added",
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Error adding owned product",
      error: error.message,
    });
  }
});

export const api = functions.https.onRequest(app);
