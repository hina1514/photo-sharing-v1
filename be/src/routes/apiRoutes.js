import express from "express";
import {
  photosOfUser,
  testInfo,
  userById,
  userList,
} from "../controllers/photoSharingController.js";

const router = express.Router();

// Assignment API
router.get("/test/info", testInfo);
router.get("/user/list", userList);
router.get("/user/:id", userById);
router.get("/photosOfUser/:id", photosOfUser);

export default router;
