import { Router } from "express";
import { deletePlayer, getPlayer, getPlayerbyId, postPlayer, updatePlayer } from "./controllers/players-controllers";

const router = Router();

router.get("/players", getPlayer);
router.get("/players/:id", getPlayerbyId);
router.post("/players", postPlayer);  
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);

export default router;