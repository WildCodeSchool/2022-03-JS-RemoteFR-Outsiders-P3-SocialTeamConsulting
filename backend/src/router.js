const express = require("express");

const { userTypeCheck } = require("./helpers/auth");
const {
  middlewareAdministrateur,
} = require("./helpers/middlewareAdministrateur");

const fileMiddleware = require("./helpers/file");

const {
  ItemController,
  IntervenantsController,
  AssociationsController,
  AdministrateursController,
  MissionsController,
  AuthController,
  ModificationsController,
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
router.get(
  "/administrateurs/bymail/:email",
  AdministrateursController.browseByEmail
);
router.get("/administrateurs/:id", AdministrateursController.read);
router.put("/administrateurs/:id", AdministrateursController.edit);
router.post("/administrateurs", AdministrateursController.add);
router.delete("/administrateurs/:id", AdministrateursController.delete);

router.get("/intervenants", IntervenantsController.browse);
router.get("/intervenants/bymail/:email", IntervenantsController.browseByEmail);
router.get("/intervenants/:id", IntervenantsController.read);
router.get("/intervenants/email/:email", IntervenantsController.readByEmail);
router.put("/intervenants/:id", IntervenantsController.edit);
router.put("/intervenants/etat/:id", IntervenantsController.editEtat);
router.post("/intervenants", fileMiddleware, IntervenantsController.add);
router.delete("/intervenants/:id", IntervenantsController.delete);

router.get("/associations", AssociationsController.browse);
router.get("/associations/:id", AssociationsController.read);
router.get("/associations/bymail/:email", AssociationsController.browseByEmail);
router.put("/associations/:id", AssociationsController.edit);
router.put("/associations/etat/:id", AssociationsController.editEtat);
router.post("/associations", AssociationsController.add);
router.delete("/associations/:id", AssociationsController.delete);

// router.get("/missions", MissionsController.browse);
router.get("/missions", MissionsController.browseWithAssociation);
router.get("/missions/validated", MissionsController.browseValidatedMissions);
router.get("/missions/history/:id", MissionsController.browseMissionsHistory);
router.get("/missions/:id", MissionsController.read);
router.get(
  "/missions/nonacceptee/:id",
  MissionsController.browseMissionsNotAccepted
);
router.put("/missions/:id", MissionsController.edit);
router.put("/missions/pourvue/:id", MissionsController.editPourvue);
router.put("/missions/terminee/:id", MissionsController.editTerminee);
router.put("/missions/accepte/:id", MissionsController.editAccepte);
router.post("/missions", MissionsController.add);
router.delete("/missions/:id", MissionsController.delete);

router.post("/modifications", ModificationsController.add);
router.get("/accepte", AccepteController.browse);
router.get("/accepte/validation/:id", AccepteController.readWithIntervenant);
router.get("/accepte/modification/:id", AccepteController.changeInter);
router.put("/accepte/modification/:id", AccepteController.updateChangeInter);
router.get("/accepte/:id", AccepteController.read);
router.post("/accepte/:id", AccepteController.add);
router.put("/accepte/:id", AccepteController.edit);
router.put("/accepte/change/:id", AccepteController.updateRemoveInter);
router.delete("/accepte/:id", AccepteController.delete);

router.post("/messages", MessagesController.add);
router.get(
  "/messages",
  userTypeCheck,
  middlewareAdministrateur,
  MessagesController.browse
);

router.get("/auth/update", userTypeCheck, AuthController.verifCookie);
router.post("/auth", userTypeCheck, AuthController.session);

router.post("/deconnexion", AuthController.disconnect);

module.exports = router;
