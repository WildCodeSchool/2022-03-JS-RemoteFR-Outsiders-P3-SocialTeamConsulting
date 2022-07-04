const express = require("express");

const { userTypeCheck } = require("./helpers/auth");

const fileMiddleware = require("./helpers/file");

const {
  ItemController,
  IntervenantsController,
  AssociationsController,
  AdministrateursController,
  MissionsController,
  AuthController,
  AccepteController,
  MessagesController,
} = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/administrateurs", AdministrateursController.browse);
router.get("/administrateurs/:id", AdministrateursController.read);
router.put("/administrateurs/:id", AdministrateursController.edit);
router.post("/administrateurs", AdministrateursController.add);
router.delete("/administrateurs/:id", AdministrateursController.delete);

router.get("/intervenants", IntervenantsController.browse);
router.get("/intervenants/:id", IntervenantsController.read);
router.put("/intervenants/:id", IntervenantsController.edit);
router.post("/intervenants", fileMiddleware, IntervenantsController.add);
router.delete("/intervenants/:id", IntervenantsController.delete);

router.get("/associations", AssociationsController.browse);
router.get("/associations/:id", AssociationsController.read);
router.put("/associations/:id", AssociationsController.edit);
router.post("/associations", AssociationsController.add);
router.delete("/associations/:id", AssociationsController.delete);

// router.get("/missions", MissionsController.browse);
router.get("/missions", MissionsController.browseWithAssociation);
router.get("/missions/validated", MissionsController.browseValidatedMissions);
router.get("/missions/history/:id", MissionsController.browseMissionsHistory);
router.get("/missions/:id", MissionsController.read);
router.put("/missions/:id", MissionsController.edit);
router.put("/missions/pourvue/:id", MissionsController.editPourvue);
router.post("/missions", MissionsController.add);
router.delete("/missions/:id", MissionsController.delete);

router.get("/accepte", AccepteController.browse);
router.get("/accepte/validation", AccepteController.readWithIntervenant);
router.get("/accepte/:id", AccepteController.read);
router.post("/accepte/:id", AccepteController.add);
router.delete("/accepte/:id", AccepteController.delete);

router.post("/messages", MessagesController.add);
router.get("/messages", MessagesController.browse);

router.post("/auth", userTypeCheck, AuthController.session);

module.exports = router;
