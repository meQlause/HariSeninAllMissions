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

app.get("/txHistory", async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId || typeof userId !== "string") {
      res.status(400).send("userId is required");
      return;
    }

    const txs = await db.collection("tx_history").doc(userId).get();

    res.status(200).send({
      success: true,
      transactions: txs,
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Error fetching transaction history",
      error: error.message,
    });
  }
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
          createdAt: new Date(),
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

    const pendingDocRef = db.collection("pending_txs").doc(userId);
    const pendingDoc = await pendingDocRef.get();

    const txData = pendingDoc.data();

    if (txData) {
      await db
        .collection("tx_history")
        .doc(userId)
        .set(
          {
            data: FieldValue.arrayUnion({
              ...txData,
              removedAt: new Date(),
            }),
          },
          { merge: true }
        );
    }

    await pendingDocRef.delete();

    res.status(200).send({
      success: true,
      message: "Pending transaction moved to history and removed",
    });
  } catch (error: any) {
    res.status(500).send({
      success: false,
      message: "Error processing transaction",
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

    const pendingDocRef = db.collection("pending_txs").doc(userId);
    const pendingDoc = await pendingDocRef.get();

    const txData = pendingDoc.data();

    if (txData) {
      await db
        .collection("tx_history")
        .doc(userId)
        .set(
          {
            data: FieldValue.arrayUnion({
              ...txData,
              removedAt: new Date(),
            }),
          },
          { merge: true }
        );
    }

    await pendingDocRef.delete();

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
