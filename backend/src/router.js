const express = require("express");

const { userTypeCheck } = require("./helpers/auth");

const {
  ItemController,
  IntervenantsController,
  AssociationsController,
  AdministrateursController,
  MissionsController,
  AuthController,
  AccepteController,
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
router.post("/intervenants", IntervenantsController.add);
router.delete("/intervenants/:id", IntervenantsController.delete);

router.get("/associations", AssociationsController.browse);
router.get("/associations/:id", AssociationsController.read);
router.put("/associations/:id", AssociationsController.edit);
router.post("/associations", AssociationsController.add);
router.delete("/associations/:id", AssociationsController.delete);

// router.get("/missions", MissionsController.browse);
router.get("/missions", MissionsController.browseWithAssociation);
router.get("/missions/:id", MissionsController.read);
router.put("/missions/:id", MissionsController.edit);
router.post("/missions", MissionsController.add);
router.delete("/missions/:id", MissionsController.delete);

router.get("/accepte", AccepteController.browse);
router.get("/accepte/validation", AccepteController.readWithIntervenant);
router.get("/accepte/:id", AccepteController.read);
router.put("/accepte/:id", AccepteController.edit);
router.post("/accepte", AccepteController.add);
router.delete("/accepte/:id", AccepteController.delete);

router.post("/auth", userTypeCheck, AuthController.session);

module.exports = router;
