import express from "express"
const router = express.Router()
import { register, login, getUser } from "../controllers/authController.js"
import authMiddleware from "./authMiddlerWare.js"
router.post("/register", register)
router.post("/login", login)
router.get("/user", authMiddleware, getUser)

export default router
