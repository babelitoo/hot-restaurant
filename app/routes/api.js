import { Router } from "express";
const router = new Router();
router.get("/", (_, res) => {
  res.send("Hello api");
});
router.get("/tables", (_, res) => {
  res.send("Hello tables!");
});
router.get("/waitlist", (_, res) => {
  res.send("Hello waitlist!");
});
export default router;