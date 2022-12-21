import { Router } from "express";
import passport from "passport";

const router = Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }, function (req, res) {
    res.send("Private or special route");
  })
);

export default router;
