-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 04 juil. 2022 à 21:45
-- Version du serveur : 8.0.28
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `stc_data_base`
--

-- --------------------------------------------------------

--
-- Structure de la table `accepte`
--

DROP TABLE IF EXISTS `accepte`;
CREATE TABLE IF NOT EXISTS `accepte` (
  `intervenants_id` varchar(255) NOT NULL,
  `missions_id` int NOT NULL,
  `isvalidated` tinyint(1) NOT NULL,
  PRIMARY KEY (`intervenants_id`,`missions_id`),
  KEY `missions_id` (`missions_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `accepte`
--

INSERT INTO `accepte` (`intervenants_id`, `missions_id`, `isvalidated`) VALUES
('0dd38f24-a2ab-4eaa-9c7d-83ae7f0358b5', 1, 0),
('0dd38f24-a2ab-4eaa-9c7d-83ae7f0358b5', 2, 0),
('75c0887a-e2e6-47ab-a27d-dada6363ba50', 2, 0),
('A1', 1, 0),
('A1', 2, 0),
('B4', 1, 0),
('B4', 2, 0);

-- --------------------------------------------------------

--
-- Structure de la table `administrateurs`
--

DROP TABLE IF EXISTS `administrateurs`;
CREATE TABLE IF NOT EXISTS `administrateurs` (
  `id` varchar(255) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `administrateurs`
--

INSERT INTO `administrateurs` (`id`, `nom`, `prenom`, `telephone`, `email`, `password`) VALUES
('a1', 'Doe', 'John', '0123456789', 'john.doe@gmail.com', 'azerty'),
('b2', 'McFly', 'Marty', '0987654321', 'marty.macfly@lonepine.com', 'dolorean'),
('c3', 'Gump', 'Forrest', '0147258369', 'forrest.gump@bubbagump.com', 'runrunrun');

-- --------------------------------------------------------

--
-- Structure de la table `associations`
--

DROP TABLE IF EXISTS `associations`;
CREATE TABLE IF NOT EXISTS `associations` (
  `id` varchar(255) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `code_postal` varchar(5) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pre_inscription_message` varchar(500) DEFAULT NULL,
  `etat` varchar(255) NOT NULL,
  `description` varchar(800) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `modifications_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `modifications_id` (`modifications_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `associations`
--

INSERT INTO `associations` (`id`, `nom`, `adresse`, `code_postal`, `ville`, `email`, `telephone`, `password`, `pre_inscription_message`, `etat`, `description`, `logo`, `modifications_id`) VALUES
('18679c5f-dc33-475e-8630-45c971d38cab', 'ins', '2 rue lambert', '63800', 'romagnat', 'test@test.fr', '0745628759', '$argon2id$v=19$m=65536,t=5,p=1$f89tsXGRMjYW/sIFH3zC2g$hf9wFP3WvF9RGTApz93njoKnHdxYk+sUBn5HVxSgqsk', 'gfsgs', 'pré-inscrit', NULL, NULL, NULL),
('26c52bca-579f-467c-874f-3f8618c79634', 'MY ORGA', '20 rue st gorges', '20000', 'laLand', 'uneadresse4@hello.fr', '0755667788', '$argon2id$v=19$m=65536,t=5,p=1$9dOM67CRc3YAQhj/+ItVIw$vKqASWRYB1Q4gOnwgEbbxg9SvdwmhTD5aQlBVwz+duA', 'hello message', 'pré-inscrit', NULL, NULL, NULL),
('6c7d9968-b005-426b-bf36-3308bb3b11fc', 'LATESTOO', '4 avenue lala', '76888', 'truuc', 'test33@testo.fr', '0123456789', '$argon2id$v=19$m=65536,t=5,p=1$JwZ4T5CL9EXfarcuTPI1ng$Rfn3AwMwsMrzm91h0zNZeKMGU4Sj3uCsR0yqWIT+o98', 'hello my friiiiend', 'pré-inscrit', NULL, NULL, NULL),
('77ea3b3d-a434-4fa2-8aae-ad5c3e9d72e7', 'LATESTOO', '4 avenue lala', '76888', 'truuc', 'asso20252@test.fr', '0123456789', '$argon2id$v=19$m=65536,t=5,p=1$c9vdbl5W4cJu1soCRv1oFg$y9/hnA/0O9qnrXMelEHUjndvdGqxbKr5S3XNvLtn5NE', 'hello my friiiiend', 'pré-inscrit', NULL, NULL, NULL),
('8f094b64-c00e-498b-b4d7-2bd793eab8a9', 'HELLOHERE', '2 rue lambert', '63800', 'romagnat', 'test@test.fr', '0745628759', '$argon2id$v=19$m=65536,t=5,p=1$EQrgqStuQJedtIZlxwXh+w$oybFSL9Seh8IxNHv9cl2BW20emvg98Qrq8VXz+Qz4zc', 'gfsgs', 'pré-inscrit', NULL, NULL, NULL),
('asso1', 'INS', '17 rue Jean Jaures', '63000', 'Clermont-ferrand', 'asso@test.fr', '0123456789', 'qwerty', NULL, 'pré-inscrit', NULL, NULL, NULL),
('asso2', 'ABC', '4 rue Florence', '63530', 'Sayat', 'abc@test.fr', '0234567891', 'abc', NULL, 'pré-inscrit', NULL, NULL, NULL),
('asso3', 'test', '2 rue testland', '62000', 'Test', 'test@test.fr', '0369258147', 'test', NULL, 'pré-inscrit', NULL, NULL, NULL),
('c8adf0c0-4012-4c49-a1e3-5621d07c70bf', 'INSSS', '3 rue jean', '43555', 'Latesto', 'test33@testo.fr', '0123456789', '$argon2id$v=19$m=65536,t=5,p=1$C/ddOz89CHHvvt+cYX6aog$ztALT/IuSk/nCzpr7Sc8sCt/7nJd2SJ3M4pRxLcHPYY', 'fds', 'pré-inscrit', NULL, NULL, NULL),
('d35a1d27-11c4-4801-90ff-d1b2057cadce', 'LATESTOO', '4 avenue lala', '76888', 'truuc', 'abcasso0000@test.fr', '0123456789', '$argon2id$v=19$m=65536,t=5,p=1$QMtJD5pz2T6pfRslyeOHfw$ZbKNRAqmKOsfGVjVUoclxATflyijzUzooPht7h0JxvY', 'hello my friiiiend', 'pré-inscrit', NULL, NULL, NULL),
('fd60a922-8374-48a5-8c47-8ea81131e676', 'LATESTOO', '4 avenue lala', '76888', 'truuc', 'test33@testo.fr', '0123456789', '$argon2id$v=19$m=65536,t=5,p=1$bROuJIvM9Srf9zagOJUfNw$Sty1qX8EdCl5/WSR3EAJl+HLbRtO37M6iSaB9JcxhGs', 'hello my friiiiend', 'pré-inscrit', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `historiques`
--

DROP TABLE IF EXISTS `historiques`;
CREATE TABLE IF NOT EXISTS `historiques` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `type_action` varchar(255) NOT NULL,
  `intervenants_id` varchar(255) DEFAULT NULL,
  `administrateurs_id` varchar(255) DEFAULT NULL,
  `associations_id` varchar(255) DEFAULT NULL,
  `missions_id` int DEFAULT NULL,
  `modifications_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `modifications_id` (`modifications_id`),
  KEY `missions_id` (`missions_id`),
  KEY `associations_id` (`associations_id`),
  KEY `administrateurs_id` (`administrateurs_id`),
  KEY `intervenants_id` (`intervenants_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `intervenants`
--

DROP TABLE IF EXISTS `intervenants`;
CREATE TABLE IF NOT EXISTS `intervenants` (
  `id` varchar(255) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `image_cv` varchar(255) NOT NULL,
  `image_carte_vitale` varchar(255) NOT NULL,
  `image_statut_autoentrepreneur` varchar(255) NOT NULL,
  `etat` varchar(255) NOT NULL,
  `pre_inscription_message` varchar(500) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `code_postal` varchar(5) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `image_diplomes` varchar(255) DEFAULT NULL,
  `image_iban` varchar(255) DEFAULT NULL,
  `image_siret` varchar(255) DEFAULT NULL,
  `image_identite` varchar(255) DEFAULT NULL,
  `image_justificatif_de_domicile` varchar(255) DEFAULT NULL,
  `modifications_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `modifications_id` (`modifications_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `intervenants`
--

INSERT INTO `intervenants` (`id`, `nom`, `prenom`, `email`, `password`, `telephone`, `image_cv`, `image_carte_vitale`, `image_statut_autoentrepreneur`, `etat`, `pre_inscription_message`, `adresse`, `code_postal`, `ville`, `image_diplomes`, `image_iban`, `image_siret`, `image_identite`, `image_justificatif_de_domicile`, `modifications_id`) VALUES
('0dd38f24-a2ab-4eaa-9c7d-83ae7f0358b5', 'Puigrenier', 'Sébastien', 'ed@stc.com', '$argon2id$v=19$m=65536,t=5,p=1$0ucVCvbAMdjdx1O27cuDbw$eatTG2jX8swv2so69jQsHhEQh7HHIYdgIrW6bMBnoaM', '0608921811', '11cb2825bef026a70b0a8b708.png', '11cb2825bef026a70b0a8b707.png', '11cb2825bef026a70b0a8b706.jpg', 'pré-inscrit', 'gsfgrg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('146d50df-a3df-40bb-b04b-ac80048fcf6c', 'ORGALALALALA', 'MY', 'uneadresse6@hello.fr', '$argon2id$v=19$m=65536,t=5,p=1$1vkMDxZQQXJwaOgwonryRA$UfGv0YLiFtZ2FbHAlJN+Gqv74w0PQQzEbj4q7gXK5yk', '0755667782', 'd4c0d52a70cb3303b865c5004.png', 'd4c0d52a70cb3303b865c5003.png', 'd4c0d52a70cb3303b865c5002.png', 'pré-inscrit', 'un messageeeefs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('49a152c5-bf8a-45c6-a427-c39006dbcfd4', 'ORGAlalala2222', 'MY', 'uneadresse1234@hello.fr', '$argon2id$v=19$m=65536,t=5,p=1$Sr6PwEd4AhrjFZgbQZUjRQ$arqDAhZtbMPXczp9cKA/tdoUwIREvGJee4Au3VuHjJw', '0755667788', 'd4c0d52a70cb3303b865c500a.png', 'd4c0d52a70cb3303b865c5009.png', 'd4c0d52a70cb3303b865c5008.png', 'pré-inscrit', 'lkhgdbds', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('59c05536-fa4e-43f5-84a4-2aec1b20340e', 'ORGA', 'MY', 'uneadresse66@hello.fr', '$argon2id$v=19$m=65536,t=5,p=1$qwpWD092TlXme2MkRqJQCg$JX5CaSshGnWa2h9mFusLXJes83RLi+SNxlNP3KZMmzo', '0755667788', 'ca6dc756258cb8ab21ba19f02.png', 'ca6dc756258cb8ab21ba19f01.png', 'ca6dc756258cb8ab21ba19f00.png', 'pré-inscrit', 'jtjdf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('72d72f88-f23e-444a-84e9-2957636c466a', 'cat', 'copy', 'copycat@test.fr', '$argon2id$v=19$m=65536,t=5,p=1$BOIb3+c5dnl0r18xR8LCFA$I5AVVrpZffSKJM8ju6g+Wb/zokJ1pF/K67Yicj+A15U', '0745628760', 'cv', 'carte vitale', 'autoentrepreneur', 'pré-inscrit', 'hfdbs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('75c0887a-e2e6-47ab-a27d-dada6363ba50', 'Pau', 'Pole', 'paupole@test.com', '$argon2id$v=19$m=65536,t=5,p=1$480cC62RXWZyXpyKWMfsog$D5KP+qAp3N2qrEMNG8AimxC0OXgwiI8kbXxrscpyVmM', '0768665377', 'cv', 'carte vitale', 'autoentrepreneur', 'validé', 'my message heeeere', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('82e678c4-4813-45e0-a419-844d821810a7', 'ins', 'Ophélie', 'testmytest@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$T1rbY/kXgTos6vpZXErf3g$/v/lJzunBBcxy18LN3aMntvULm1YhyxxDY/pDaNJglQ', '0745628759', 'cv', 'carte vitale', 'autoentrepreneur', 'pré-inscrit', 'gfdhs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('A1', 'Wayne', 'Bruce', 'batman@wayneco.com', 'joker', '0123456789', 'https://pbs.twimg.com/media/Cx9GQDoUQAEQhYh.jpg', 'https://secu-jeunes.fr/wp-content/uploads/2016/09/carte-vitale-300x292.png', 'https://teleservices-greffe.fr/static/img/sample-kbis.jpg', 'validé', 'je veux vous rejoindre car je sais plus quoi faire de mes nuits', '1007 Mountain Drive', '12345', 'Gotham City', 'https://hansen-hypnose.com/wp-content/uploads/2017/11/DIPLOME-PRATICIEN-HYPNOSE-SPECIMEN.jpg', 'https://dk85klopn8z0j.cloudfront.net/wp-content/uploads/2015/11/specimen-rib.png', 'https://www.anafagc.fr/webroot/uploads/fraude%20n%C2%B0SIRET.jpg', 'https://i.servimg.com/u/f62/17/60/83/74/tm/cibatm10.jpg', 'https://www.maitriser-mon-energie.fr/wp-content/uploads/sites/8/2020/01/attestation-de-domicile-page-001_censored-724x1024.jpg', NULL),
('B4', 'Stark', 'Tony', 'ironman@starkco.com', 'elonmusk', '0123456789', 'https://mir-s3-cdn-cf.behance.net/projects/404/1b6c6293552649.Y3JvcCwxMjAwLDkzOCwwLDA.jpg', 'https://secu-jeunes.fr/wp-content/uploads/2016/09/carte-vitale-300x292.png', 'https://teleservices-greffe.fr/static/img/sample-kbis.jpg', 'validé', '', '', '', '', '', '', '', '', '', NULL),
('b7e7266a-47b9-4866-8585-f99c5233d9df', 'myname', 'opouiih', 'mytestadress@mail.fr', '$argon2id$v=19$m=65536,t=5,p=1$L5OPR0z6E86S9eqzp13bjA$MwKWzA8099fz2sT9z3b4d9oMrxcUgZ068nLbFetjWY0', '0745626987', 'cv', 'carte vitale', 'autoentrepreneur', 'pré-inscrit', 'HELLO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('d70602b2-1107-4077-a73b-14d0d2b7de17', 'ORGAlalala2222', 'MY', 'uneadresse1234@hello.fr', '$argon2id$v=19$m=65536,t=5,p=1$zV+ILBwHRcOdVP+qBVZGPQ$uK+QgKCo9u0JDy0TUIA3jezLyoMnU/tRkY16KGExVUI', '0755667724', 'd4c0d52a70cb3303b865c5007.png', 'd4c0d52a70cb3303b865c5006.png', 'd4c0d52a70cb3303b865c5005.png', 'pré-inscrit', 'lkhgd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE IF NOT EXISTS `messages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `telephone` varchar(10) DEFAULT NULL,
  `message` varchar(500) NOT NULL,
  `ishandled` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `messages`
--

INSERT INTO `messages` (`id`, `nom`, `prenom`, `email`, `telephone`, `message`, `ishandled`) VALUES
(1, 'Association', '', 'asso@asso.com', '0123458697', 'Bonjour, j aimerais avoir plus d information sur votre structure et les moyens d affectations d intervenants', 0),
(2, 'Doe', 'John', 'john@autoentrepreneur.com', '0123458697', 'Bonjour, j aimerais comment je peux choisir une mission', 1);

-- --------------------------------------------------------

--
-- Structure de la table `missions`
--

DROP TABLE IF EXISTS `missions`;
CREATE TABLE IF NOT EXISTS `missions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `intitule` varchar(255) NOT NULL,
  `metier` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `code_postal` varchar(5) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `description` varchar(800) NOT NULL,
  `horaire_debut` time NOT NULL,
  `horaire_fin` time NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `total_heure` int NOT NULL,
  `etat` varchar(255) NOT NULL,
  `note_intervenant` int DEFAULT NULL,
  `note_association` int DEFAULT NULL,
  `commentaire_intervenant` varchar(500) DEFAULT NULL,
  `commentaire_association` varchar(500) DEFAULT NULL,
  `associations_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `associations_id` (`associations_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `missions`
--

INSERT INTO `missions` (`id`, `intitule`, `metier`, `adresse`, `code_postal`, `ville`, `description`, `horaire_debut`, `horaire_fin`, `date_debut`, `date_fin`, `total_heure`, `etat`, `note_intervenant`, `note_association`, `commentaire_intervenant`, `commentaire_association`, `associations_id`) VALUES
(1, 'Recherche assistante de service social', 'Assistante de service social', '2 avenue Julien', '33000', 'Bordeaux', 'Suite à la réouverture vous serez amené à gérer l\'accueil client et répondre aux questions des clients', '07:30:00', '14:00:00', '2022-06-15', '2022-06-15', 5, 'acceptée', NULL, NULL, NULL, NULL, 'asso1'),
(2, 'Encadrement d\'un groupe de jeunes', 'Educateur spécialisé', '4 rue Lambert', '15000', 'Cantal', 'Vous aiderez à surveiller ponctuellement, diriger un groupe de jeunes, agés de 7 à 15 ans', '09:00:00', '19:00:00', '2022-06-17', '2022-06-17', 8, 'acceptée', NULL, NULL, NULL, NULL, 'asso1'),
(3, 'Recherche un chef de service', 'Chef de service', '15 rue de la Wild', '75000', 'Paris', 'Vous serez en autonomie', '09:30:00', '17:30:00', '2022-06-18', '2022-06-18', 7, 'acceptée', NULL, NULL, NULL, NULL, 'asso1'),
(4, 'MY ORGA', 'assistante de service social', '20 rue st gorges', '20000', 'laLand', 'fdsbs', '17:56:00', '20:56:00', '2022-06-21', '2022-06-21', 3, 'acceptée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(5, 'MY second ORGA', 'éducateurs', '230 rue st gorges', '22000', 'laLand', 'blablabla', '18:02:00', '23:03:00', '2022-06-21', '2022-06-21', 5, 'en attente', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(6, 'MY thirdORGA', 'éducateurs', '230 rue st gorges', '22000', 'laLand', 'testestest', '18:02:00', '23:03:00', '2022-06-21', '2022-06-21', 5, 'en attente', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(7, 'Recherche chef de projet experimente', 'chef de service', '20 rue st gorges', '20000', 'laLand', 'asfbcxbx', '08:45:00', '20:45:00', '2022-06-28', '2022-06-30', 10, 'en attente', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(8, 'Recherche chef de projet experimente', 'chef de service', '20 rue st gorges', '20000', 'laLand', 'asfbcxbx', '08:45:00', '20:45:00', '2022-06-28', '2022-06-30', 10, 'en attente', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab');

-- --------------------------------------------------------

--
-- Structure de la table `modifications`
--

DROP TABLE IF EXISTS `modifications`;
CREATE TABLE IF NOT EXISTS `modifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `logo` varchar(255) DEFAULT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `code_postal` varchar(5) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `image_cv` varchar(255) DEFAULT NULL,
  `image_carte` varchar(255) DEFAULT NULL,
  `image_carte_vitale` varchar(255) DEFAULT NULL,
  `telephone` varchar(10) DEFAULT NULL,
  `image_diplomes` varchar(255) DEFAULT NULL,
  `image_iban` varchar(255) DEFAULT NULL,
  `image_siret` varchar(255) DEFAULT NULL,
  `image_identite` varchar(255) DEFAULT NULL,
  `image_justificatif_de_domicile` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `image_statut_autoentrepreneur` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `accepte`
--
ALTER TABLE `accepte`
  ADD CONSTRAINT `accepte_ibfk_1` FOREIGN KEY (`missions_id`) REFERENCES `missions` (`id`),
  ADD CONSTRAINT `accepte_ibfk_2` FOREIGN KEY (`intervenants_id`) REFERENCES `intervenants` (`id`);

--
-- Contraintes pour la table `associations`
--
ALTER TABLE `associations`
  ADD CONSTRAINT `associations_ibfk_1` FOREIGN KEY (`modifications_id`) REFERENCES `modifications` (`id`);

--
-- Contraintes pour la table `historiques`
--
ALTER TABLE `historiques`
  ADD CONSTRAINT `historiques_ibfk_1` FOREIGN KEY (`modifications_id`) REFERENCES `modifications` (`id`),
  ADD CONSTRAINT `historiques_ibfk_2` FOREIGN KEY (`missions_id`) REFERENCES `missions` (`id`),
  ADD CONSTRAINT `historiques_ibfk_3` FOREIGN KEY (`associations_id`) REFERENCES `associations` (`id`),
  ADD CONSTRAINT `historiques_ibfk_4` FOREIGN KEY (`administrateurs_id`) REFERENCES `administrateurs` (`id`),
  ADD CONSTRAINT `historiques_ibfk_5` FOREIGN KEY (`intervenants_id`) REFERENCES `intervenants` (`id`);

--
-- Contraintes pour la table `intervenants`
--
ALTER TABLE `intervenants`
  ADD CONSTRAINT `intervenants_ibfk_1` FOREIGN KEY (`modifications_id`) REFERENCES `modifications` (`id`);

--
-- Contraintes pour la table `missions`
--
ALTER TABLE `missions`
  ADD CONSTRAINT `missions_ibfk_1` FOREIGN KEY (`associations_id`) REFERENCES `associations` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
