const express = require("express");

const { userTypeCheck } = require("./helpers/auth");
const { verifyMDP } = require("./helpers/middlewareVerifyMDP");

const fileMiddleware = require("./helpers/file");

const {
  IntervenantsController,
  AssociationsController,
  AdministrateursController,
  MissionsController,
  AuthController,
  ModificationsController,
  AccepteController,
  MessagesController,
} = require("./controllers");
const {
  middlewareAdministrateur,
} = require("./helpers/middlewareAdministrateur");

const { middlewareIntervenant } = require("./helpers/middlewareIntervenant");

const { middlewareAssociation } = require("./helpers/middlewareAssociation");

const { middlewareAll } = require("./helpers/middlewareAll");

const router = express.Router();
/* eslint-disable */

router.post("/accepte/:id", AccepteController.add);
router.get(
  "/accepte/validation/:id",
  middlewareAll,
  AccepteController.readWithIntervenant
);
router.get(
  "/accepte/refuseduser/:userId",
  middlewareAll,
  AccepteController.readRefusedIntervenantByMission
);
router.get(
  "/accepte/modification/:id",
  middlewareAll,
  AccepteController.changeInter
);
router.put(
  "/accepte/annulation/:missionId/:userId",
  AccepteController.deleteAppliedMissionByIntervenant
);
router.put("/accepte/modification/:id", AccepteController.updateChangeInter);
router.put("/accepte/:id", AccepteController.edit);
router.put("/accepte/change/:id", AccepteController.updateRemoveInter);
// router.get("/accepte/:id", middlewareAll, AccepteController.read);
// router.get("/accepte", middlewareAll, AccepteController.browse);
// router.delete("/accepte/:id", middlewareAdministrateur, AccepteController.delete);

router.get(
  "/administrateurs",
  middlewareAdministrateur,
  AdministrateursController.browse
);
router.get(
  "/administrateurs/bymail/:email",
  middlewareAdministrateur,
  AdministrateursController.browseByEmail
);
router.put(
  "/administrateurs/:id",
  middlewareAdministrateur,
  AdministrateursController.edit
);
router.put(
  "/administrateurs/mpd/:id",
  verifyMDP,
  AdministrateursController.editMDP
);
router.post(
  "/administrateurs",
  middlewareAdministrateur,
  AdministrateursController.add
);
// router.delete("/administrateurs/:id",middlewareAdministrateur,AdministrateursController.delete);
// router.get("/administrateurs/:id",middlewareAdministrateur,AdministrateursController.read);

router.get("/associations", middlewareAll, AssociationsController.browse);
router.get(
  "/associations/bymail/:email",
  middlewareAll,
  AssociationsController.browseByEmail
);
router.put("/associations/:id", AssociationsController.edit);
router.put("/associations/etat/:id", AssociationsController.editEtat);
router.put("/associations/mpd/:id", verifyMDP, AssociationsController.editMDP);
router.post("/associations", AssociationsController.add);
// router.get("/associations/:id", middlewareAll, AssociationsController.read);
// router.delete("/associations/:id",middlewareAdministrateur,AssociationsController.delete);

router.get("/auth/update", userTypeCheck, AuthController.verifCookie);
router.post("/auth", userTypeCheck, AuthController.session);
router.post("/deconnexion", AuthController.disconnect);

router.get("/intervenants", middlewareAll, IntervenantsController.browse);
router.get(
  "/intervenants/bymail/:email",
  middlewareAll,
  IntervenantsController.browseByEmail
);
router.get(
  "/intervenants/download/:filename",
  middlewareAdministrateur,
  IntervenantsController.download
);
router.get(
  "/intervenants/findpath/:filename",
  middlewareAdministrateur,
  IntervenantsController.browsePath
);
router.put("/intervenants/:id", middlewareAll, IntervenantsController.edit);
router.put(
  "/intervenants/etat/:id",
  middlewareAdministrateur,
  IntervenantsController.editEtat
);
router.put(
  "/intervenants/mpd/:id",
  middlewareAll,
  verifyMDP,
  IntervenantsController.editMDP
);
router.post("/intervenants", fileMiddleware, IntervenantsController.add);
// router.get("/intervenants/:id", middlewareAll, IntervenantsController.read);
// router.delete("/intervenants/:id",middlewareAdministrateur,IntervenantsController.delete);

router.post("/messages", MessagesController.add);
router.get("/messages", middlewareAdministrateur, MessagesController.browse);
router.put("/messages/:id", MessagesController.close);

router.get(
  "/missions",
  middlewareAll,
  MissionsController.browseWithAssociation
);
router.get(
  "/missions/accepte",
  middlewareAll,
  MissionsController.browseMissionAccepte
);
router.get(
  "/missions/validated",
  middlewareAll,
  MissionsController.browseValidatedMissions
);
router.get(
  "/missions/history/:id",
  middlewareIntervenant,
  MissionsController.browseMissionsHistory
);
router.get(
  "/missions/assohistory/:id",
  middlewareAssociation,
  MissionsController.browseAssoMissionsHistory
);
router.get(
  "/missions/nonacceptee/:id",
  middlewareAll,
  MissionsController.browseMissionsNotAccepted
);
router.put("/missions/:id", MissionsController.edit);
router.put("/missions/pourvue/:id", MissionsController.editPourvue);
router.put("/missions/terminee/:id", MissionsController.editTerminee);
router.put("/missions/accepte/:id", MissionsController.editAccepte);
router.post("/missions", MissionsController.add);
// router.get("/missions/:id", middlewareAll, MissionsController.read);
// router.get("/missions", MissionsController.browse);
// router.delete("/missions/:id",middlewareAdministrateur,MissionsController.delete);

router.post("/modifications", ModificationsController.add);

/* eslint-enable */
module.exports = router;
