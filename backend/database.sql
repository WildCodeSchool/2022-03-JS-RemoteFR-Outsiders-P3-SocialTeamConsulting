CREATE DATABASE IF NOT EXISTS `STC_Data_Base` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `STC_Data_Base`;

--
-- Database: `stc_data_base`
--

--
-- Structure for table `accepte`
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
-- Dumping data for table `accepte`
--

INSERT INTO `accepte` (`intervenants_id`, `missions_id`, `isvalidated`) VALUES
('72d72f88-f23e-444a-84e9-2957636c466a', 1, 0),
('72d72f88-f23e-444a-84e9-2957636c466a', 2, 2),
('72d72f88-f23e-444a-84e9-2957636c466a', 4, 2),
('72d72f88-f23e-444a-84e9-2957636c466a', 5, 0),
('72d72f88-f23e-444a-84e9-2957636c466a', 6, 0),
('75c0887a-e2e6-47ab-a27d-dada6363ba50', 1, 0),
('75c0887a-e2e6-47ab-a27d-dada6363ba50', 2, 1),
('75c0887a-e2e6-47ab-a27d-dada6363ba50', 4, 2),
('7a3d671d-468a-4885-b863-66d43bb11fd0', 2, 2),
('7a3d671d-468a-4885-b863-66d43bb11fd0', 4, 1),
('7a3d671d-468a-4885-b863-66d43bb11fd0', 6, 0),
('82e678c4-4813-45e0-a419-844d821810a7', 1, 0),
('82e678c4-4813-45e0-a419-844d821810a7', 4, 2),
('82e678c4-4813-45e0-a419-844d821810a7', 6, 0),
('8c813d4c-4c57-41ea-abc9-4402cab19033', 1, 0),
('8c813d4c-4c57-41ea-abc9-4402cab19033', 4, 2),
('8c813d4c-4c57-41ea-abc9-4402cab19033', 5, 0);

-- --------------------------------------------------------

--
-- Table structure for table `administrateurs`
--

DROP TABLE IF EXISTS `administrateurs`;
CREATE TABLE IF NOT EXISTS `administrateurs` (
  `id` varchar(255) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `telephone` varchar(10) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `administrateurs`
--

INSERT INTO `administrateurs` (`id`, `nom`, `prenom`, `telephone`, `email`, `password`) VALUES
('a1', 'Doe', 'John', '0123456789', 'john.doe@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$rI0fZ1izJTQZSJfBA48I6A$zkkbRMJ5kTJ1nek9/+O4b84fEERAAAccyPUW2i2GazY'),
('b2', 'McFly', 'Marty', '0987654321', 'marty.macfly@lonepine.com', '$argon2id$v=19$m=65536,t=5,p=1$rI0fZ1izJTQZSJfBA48I6A$zkkbRMJ5kTJ1nek9/+O4b84fEERAAAccyPUW2i2GazY'),
('ba143159-2dde-49b4-bef7-4c22f394e6a7', 'co', 'ophelie', '0111456789', 'c.o@test.fr', '$argon2id$v=19$m=65536,t=5,p=1$eHJcDz4RwFxQxjecUHn7lw$CNp/hPv7NGxp9RWkFYQJzlJSUQ7eM/IXwedcnCzGK9A'),
('c3', 'Gump', 'Forrest', '0147258369', 'forrest.gump@bubbagump.com', '$argon2id$v=19$m=65536,t=5,p=1$rI0fZ1izJTQZSJfBA48I6A$zkkbRMJ5kTJ1nek9/+O4b84fEERAAAccyPUW2i2GazY');

-- --------------------------------------------------------

--
-- Table structure for table `associations`
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
  UNIQUE KEY `email` (`email`),
  KEY `modifications_id` (`modifications_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `associations`
--

INSERT INTO `associations` (`id`, `nom`, `adresse`, `code_postal`, `ville`, `email`, `telephone`, `password`, `pre_inscription_message`, `etat`, `description`, `logo`, `modifications_id`) VALUES
('05932648-c2a6-472b-a58e-5506c868808f', 'La Select', '44 avenue Dujean', '76888', 'truuc', 'abcasso999@test.fr', '0123456789', '$argon2id$v=19$m=65536,t=5,p=1$rI0fZ1izJTQZSJfBA48I6A$zkkbRMJ5kTJ1nek9/+O4b84fEERAAAccyPUW2i2GazY', 'hello my friiiiend', 'pré-inscrit', NULL, NULL, NULL),
('18679c5f-dc33-475e-8630-45c971d38cab', 'Unicite', '2 rue lambert', '63800', 'romagnat', 'test12@test.fr', '0745628759', '$argon2id$v=19$m=65536,t=5,p=1$sWKwJmgHbVimkODftSE7hg$WK0XCPFxJQzyD6FDvXjdyxC+YfF/dS9ThakxH+MJaqs', 'gfsgs', 'inscrit', NULL, NULL, NULL),
('26c52bca-579f-467c-874f-3f8618c79634', 'Sal\'Help', '20 rue st gorges', '20000', 'Creuse', 'uneadresse4@hello.fr', '0755667788', '$argon2id$v=19$m=65536,t=5,p=1$9dOM67CRc3YAQhj/+ItVIw$vKqASWRYB1Q4gOnwgEbbxg9SvdwmhTD5aQlBVwz+duA', 'hello message', 'pré-inscrit', NULL, NULL, NULL),
('45185cd8-cd71-4d32-b188-a5a0848a1612', 'AssoEduc', '4 avenue laverrine', '69000', 'Lyon', 'test32112@test.fr', '0123456789', '$argon2id$v=19$m=65536,t=5,p=1$L4FoyHfGy/zPcUqtyzTtnA$qK7z3H/I1aHXUqL+oOrYlyXu9OlLDXYAbHSOnFKQP5w', 'hello my friiiiend', 'inscrit', NULL, NULL, NULL),
('6c7d9968-b005-426b-bf36-3308bb3b11fc', 'EducAssociation', '4 avenue lala', '69000', 'Lyon', 'test33@testo.fr', '0123456789', '$argon2id$v=19$m=65536,t=5,p=1$JwZ4T5CL9EXfarcuTPI1ng$Rfn3AwMwsMrzm91h0zNZeKMGU4Sj3uCsR0yqWIT+o98', 'hello my friiiiend', 'inscrit', NULL, NULL, NULL),
('77ea3b3d-a434-4fa2-8aae-ad5c3e9d72e7', 'Projecte ton asso', '4 avenue lala', '75000', 'Paris', 'asso20252@test.fr', '0123456789', '$argon2id$v=19$m=65536,t=5,p=1$c9vdbl5W4cJu1soCRv1oFg$y9/hnA/0O9qnrXMelEHUjndvdGqxbKr5S3XNvLtn5NE', 'hello my friiiiend', 'inscrit', NULL, NULL, NULL),
('ad52fdea-7e30-4c9b-917d-4b783e72f812', 'Aide pour tous Asso', '4 avenue lala', '75000', 'Paris', '123abcass@test.fr', '0123456789', '$argon2id$v=19$m=65536,t=5,p=1$8PbMoSUX8l8w7GcdNvHuwg$OmPLqJsV0B/w9nX8eoOvX36sa+Hx2TD5viNa9qcUYyU', 'hello my friiiiend', 'refusé', NULL, NULL, NULL),
('asso1', 'Social Association', '17 rue Jean Jaures', '63000', 'Clermont-ferrand', 'asso@test.fr', '0123456789', '$argon2id$v=19$m=65536,t=5,p=1$rI0fZ1izJTQZSJfBA48I6A$zkkbRMJ5kTJ1nek9/+O4b84fEERAAAccyPUW2i2GazY', NULL, 'refusé', NULL, NULL, NULL),
('asso2', 'Sociassociation', '4 rue Florence', '63530', 'Sayat', 'abc@test.fr', '0234567891', '$argon2id$v=19$m=65536,t=5,p=1$rI0fZ1izJTQZSJfBA48I6A$zkkbRMJ5kTJ1nek9/+O4b84fEERAAAccyPUW2i2GazY', NULL, 'refusé', NULL, NULL, NULL),
('asso3', 'assis\'ta city', '2 rue testland', '75000', 'Paris', 'test@test.fr', '0369258147', '$argon2id$v=19$m=65536,t=5,p=1$rI0fZ1izJTQZSJfBA48I6A$zkkbRMJ5kTJ1nek9/+O4b84fEERAAAccyPUW2i2GazY', NULL, 'banni', NULL, NULL, NULL),
('b42a8837-bc63-4f12-9e7c-d787488f24f6', 'Aider', '4 avenue lala', '75000', 'Paris', 'justheretesttest44@test.fr', '0123456789', '$argon2id$v=19$m=65536,t=5,p=1$yik5l+g/v6nqW1O1BRRMLg$dwyb2zjER52LJ5NlYubQhbgRR98i7zMDdtK0uTzuWps', 'hello my friiiiend', 'banni', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `historiques`
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
-- Table structure for table `intervenants`
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
  UNIQUE KEY `email` (`email`),
  KEY `modifications_id` (`modifications_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `intervenants`
--

INSERT INTO `intervenants` (`id`, `nom`, `prenom`, `email`, `password`, `telephone`, `image_cv`, `image_carte_vitale`, `image_statut_autoentrepreneur`, `etat`, `pre_inscription_message`, `adresse`, `code_postal`, `ville`, `image_diplomes`, `image_iban`, `image_siret`, `image_identite`, `image_justificatif_de_domicile`, `modifications_id`) VALUES
('146d50df-a3df-40bb-b04b-ac80048fcf6c', 'DUPONT', 'Marc', 'uneadresse6@hello.fr', '$argon2id$v=19$m=65536,t=5,p=1$rI0fZ1izJTQZSJfBA48I6A$zkkbRMJ5kTJ1nek9/+O4b84fEERAAAccyPUW2i2GazY', '0755667782', 'd4c0d52a70cb3303b865c5004.png', 'd4c0d52a70cb3303b865c5003.png', 'd4c0d52a70cb3303b865c5002.png', 'pré-inscrit', 'un messageeeefs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('49a152c5-bf8a-45c6-a427-c39006dbcfd4', 'Despres', 'Violette', 'uneadresse1234@hello.fr', '$argon2id$v=19$m=65536,t=5,p=1$rI0fZ1izJTQZSJfBA48I6A$zkkbRMJ5kTJ1nek9/+O4b84fEERAAAccyPUW2i2GazY', '0755667788', 'd4c0d52a70cb3303b865c500a.png', 'd4c0d52a70cb3303b865c5009.png', 'd4c0d52a70cb3303b865c5008.png', 'pré-inscrit', 'lkhgdbds', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('59c05536-fa4e-43f5-84a4-2aec1b20340e', 'Duchez', 'Victor', 'uneadresse66@hello.fr', '$argon2id$v=19$m=65536,t=5,p=1$rI0fZ1izJTQZSJfBA48I6A$zkkbRMJ5kTJ1nek9/+O4b84fEERAAAccyPUW2i2GazY', '0755667788', 'ca6dc756258cb8ab21ba19f02.png', 'ca6dc756258cb8ab21ba19f01.png', 'ca6dc756258cb8ab21ba19f00.png', 'pré-inscrit', 'jtjdf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('72d72f88-f23e-444a-84e9-2957636c466a', 'Laporte', 'Juliette', 'copycat@test.fr', '$argon2id$v=19$m=65536,t=5,p=1$BOIb3+c5dnl0r18xR8LCFA$I5AVVrpZffSKJM8ju6g+Wb/zokJ1pF/K67Yicj+A15U', '0745628760', 'cv', 'carte vitale', 'autoentrepreneur', 'inscrit', 'hfdbs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('75c0887a-e2e6-47ab-a27d-dada6363ba50', 'Pau', 'Pole', 'paupole@test.com', '$argon2id$v=19$m=65536,t=5,p=1$480cC62RXWZyXpyKWMfsog$D5KP+qAp3N2qrEMNG8AimxC0OXgwiI8kbXxrscpyVmM', '0768665377', 'cv', 'carte vitale', 'autoentrepreneur', 'inscrit', 'my message heeeere', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('76bfe19f-4a40-4333-90f1-4fdb0b489833', 'COUDERT', 'OPHELIE', 'o.c@test.fr', '$argon2id$v=19$m=65536,t=5,p=1$CfZmvVGOQjD+jmDGcGTskA$j0NrcyQwK20MPN2+uBmYE9V1MxOFdeAw6AkfOMQDjzc', '0777777777', 'e0c7b7eac4b70e07e09d7f402.png', 'e0c7b7eac4b70e07e09d7f401.png', 'e0c7b7eac4b70e07e09d7f400.png', 'pré-inscrit', 'Je souhaite vous rejoindre !', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('7a3d671d-468a-4885-b863-66d43bb11fd0', 'Vivier', 'Denis', '555uneadresse@hello.fr', '$argon2id$v=19$m=65536,t=5,p=1$bw3Of7/W4ZoZunU1uQgMAQ$mqE5+oE8jeM9inytCuN5TsP5RiZB+6C8zGmQFNRfyK8', '0755667788', 'd4c0d52a70cb3303b865c5019.png', 'd4c0d52a70cb3303b865c5018.png', 'd4c0d52a70cb3303b865c5017.png', 'inscrit', 'gfwhggg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('82e678c4-4813-45e0-a419-844d821810a7', 'Poel', 'Joel', 'testmytest@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$T1rbY/kXgTos6vpZXErf3g$/v/lJzunBBcxy18LN3aMntvULm1YhyxxDY/pDaNJglQ', '0745628759', 'cv', 'carte vitale', 'autoentrepreneur', 'inscrit', 'gfdhs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('8c813d4c-4c57-41ea-abc9-4402cab19033', 'Punier', 'Baptiste', 'uneadresse@hello.fr', '$argon2id$v=19$m=65536,t=5,p=1$8ytLdbxUFtEgsCw6VHSgfA$8ReruDKgBMM+oQjYe7X5BSpXzpD4SsjQLVRbh2Msxrc', '0755667788', 'd4c0d52a70cb3303b865c5016.png', 'd4c0d52a70cb3303b865c5015.png', 'd4c0d52a70cb3303b865c5014.png', 'inscrit', 'gfwhggg', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('A1', 'Wayne', 'Bruce', 'batman@wayneco.com', '$argon2id$v=19$m=65536,t=5,p=1$rI0fZ1izJTQZSJfBA48I6A$zkkbRMJ5kTJ1nek9/+O4b84fEERAAAccyPUW2i2GazY', '0123456789', 'https://pbs.twimg.com/media/Cx9GQDoUQAEQhYh.jpg', 'https://secu-jeunes.fr/wp-content/uploads/2016/09/carte-vitale-300x292.png', 'https://teleservices-greffe.fr/static/img/sample-kbis.jpg', 'refusé', 'je veux vous rejoindre car je sais plus quoi faire de mes nuits', '1007 Mountain Drive', '12345', 'Gotham City', 'https://hansen-hypnose.com/wp-content/uploads/2017/11/DIPLOME-PRATICIEN-HYPNOSE-SPECIMEN.jpg', 'https://dk85klopn8z0j.cloudfront.net/wp-content/uploads/2015/11/specimen-rib.png', 'https://www.anafagc.fr/webroot/uploads/fraude%20n%C2%B0SIRET.jpg', 'https://i.servimg.com/u/f62/17/60/83/74/tm/cibatm10.jpg', 'https://www.maitriser-mon-energie.fr/wp-content/uploads/sites/8/2020/01/attestation-de-domicile-page-001_censored-724x1024.jpg', NULL),
('a2dbd914-214e-4e9f-8e37-64a544d1a84a', 'Parliez', 'Fernand', 'fernand.parliez@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$XPrVxTKhAwhI9YhGXAKXWw$5QPk1W/9T3lTfCAqvyk16m3EQZD+JO2nqBmrLMxKMbQ', '0678889988', '9f093195f4b8f0c9bb5b4e002.png', '9f093195f4b8f0c9bb5b4e001.png', '9f093195f4b8f0c9bb5b4e000.png', 'pré-inscrit', 'Je veux vous rejoindre.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('B4', 'Stark', 'Tony', 'ironman@starkco.com', '$argon2id$v=19$m=65536,t=5,p=1$rI0fZ1izJTQZSJfBA48I6A$zkkbRMJ5kTJ1nek9/+O4b84fEERAAAccyPUW2i2GazY', '0123456789', 'https://mir-s3-cdn-cf.behance.net/projects/404/1b6c6293552649.Y3JvcCwxMjAwLDkzOCwwLDA.jpg', 'https://secu-jeunes.fr/wp-content/uploads/2016/09/carte-vitale-300x292.png', 'https://teleservices-greffe.fr/static/img/sample-kbis.jpg', 'banni', '', '', '', '', '', '', '', '', '', NULL),
('b7e7266a-47b9-4866-8585-f99c5233d9df', 'Marlot', 'Antho', 'mytestadress@mail.fr', '$argon2id$v=19$m=65536,t=5,p=1$L5OPR0z6E86S9eqzp13bjA$MwKWzA8099fz2sT9z3b4d9oMrxcUgZ068nLbFetjWY0', '0745626987', 'cv', 'carte vitale', 'autoentrepreneur', 'banni', 'HELLO', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('da817fcc-3700-4c40-99d3-480b6c7c1cd4', 'Dugres', 'Sylvie', 'd.s@gmail.com', '$argon2id$v=19$m=65536,t=5,p=1$8wfaCKgazCja6A0C+WlAaQ$LNnYZAvAJQYckFbhRI5R5doAyNs/G7osjMfs6QHmXyk', '0123445588', '12d6762bc7b4abc733f0ad104.png', '12d6762bc7b4abc733f0ad103.png', '12d6762bc7b4abc733f0ad102.png', 'pré-inscrit', 'hello', '3 rue du Dauphin', '63400', 'Chamalieres', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
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
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `nom`, `prenom`, `email`, `telephone`, `message`, `ishandled`) VALUES
(1, 'Association', '', 'asso@asso.com', '0123458697', 'Bonjour, j aimerais avoir plus d information sur votre structure et les moyens d affectations d intervenants', 1),
(2, 'Doe', 'John', 'john@autoentrepreneur.com', '0123458697', 'Bonjour, j aimerais comment je peux choisir une mission', 1);

-- --------------------------------------------------------

--
-- Table structure for table `missions`
--

DROP TABLE IF EXISTS `missions`;
CREATE TABLE IF NOT EXISTS `missions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `intitule` varchar(255) NOT NULL,
  `metier` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `code_postal` varchar(5) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `description` varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `missions`
--

INSERT INTO `missions` (`id`, `intitule`, `metier`, `adresse`, `code_postal`, `ville`, `description`, `horaire_debut`, `horaire_fin`, `date_debut`, `date_fin`, `total_heure`, `etat`, `note_intervenant`, `note_association`, `commentaire_intervenant`, `commentaire_association`, `associations_id`) VALUES
(1, 'Recherche assistante de service social', 'Assistante de service social', '2 avenue Julien', '33000', 'Bordeaux', 'Suite à la réouverture vous serez amené à gérer l\'accueil client et répondre aux questions des clients', '07:30:00', '14:00:00', '2022-06-15', '2022-06-15', 5, 'acceptée', NULL, NULL, NULL, NULL, 'asso1'),
(2, 'Encadrement d\'un groupe de jeunes', 'Educateur spécialisé', '4 rue Lambert', '15000', 'Cantal', 'Vous aiderez à surveiller ponctuellement, diriger un groupe de jeunes, agés de 7 à 15 ans', '09:00:00', '19:00:00', '2022-06-17', '2022-06-17', 8, 'pourvue', NULL, NULL, NULL, NULL, 'asso1'),
(3, 'Recherche un chef de service', 'Chef de service', '15 rue de la Wild', '75000', 'Paris', 'Vous serez en autonomie', '09:30:00', '17:30:00', '2022-06-18', '2022-06-18', 7, 'acceptée', NULL, NULL, NULL, NULL, 'asso1'),
(4, 'Recherche une assistante', 'Conseillère en économie social et familiale', '20 rue st gorges', '63000', 'Clermont-ferrand', 'Vous serez amené à vous occuper de différentes choses, nous recherchons quelqu\'un de polyvalent.', '17:56:00', '20:56:00', '2022-06-21', '2022-06-21', 3, 'pourvue', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(5, 'Recherche un éducateur disponible rapidement', 'Educateur', '230 rue st gorges', '34000', 'Montpellier', 'Disponible pour la prochaine mission qui aura lieu dans une semaine. Quelqu\'un de dynamique et de souriant est un plus.', '18:02:00', '23:03:00', '2022-06-21', '2022-06-21', 5, 'acceptée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(6, 'Recherche un éducateurs pour enfants difficiles', 'Educateur', '2 rue Jean Pelasse', '22000', 'Marseille', 'En équipe de 3 vous surveillerez des enfants lors d\'une sortie en plein air', '18:02:00', '23:03:00', '2022-06-21', '2022-06-21', 5, 'acceptée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(7, 'Recherche chef de projet experimente', 'Chef de service', '20 rue st gorges', '33000', 'Bordeaux', 'Vous serez en autonomie. Organisation, savoir-être, patience sont vos qualités principales. Vous aurez à gérer un groupe de 5 personnes', '08:45:00', '20:45:00', '2022-06-28', '2022-06-30', 10, 'refusée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(8, 'Recherche chef de projet experimente', 'Chef de service', '20 rue st gorges', '75000', 'Paris', 'Vous serez en autonomie. Organisation, savoir-être, patience sont vos qualités principales.', '08:45:00', '20:45:00', '2022-06-28', '2022-06-30', 10, 'en attente', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(9, 'Recherche moniteur expérimenté', 'Moniteur', '1 rue de général de gaulle', '75000', 'Paris', 'Vous êtes enjoué, et vous aimez le contact avec les autres, venez nous rejoindre.', '09:00:00', '16:00:00', '2022-07-11', '2022-07-25', 20, 'acceptée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(10, 'Recherche moniteur disponible rapidement ', 'Moniteur', '5 rue de général de gaulle', '75000', 'Paris', 'Vous êtes dynamique, et vous aimez le contact avec les autres, venez nous rejoindre.', '09:00:00', '16:00:00', '2022-07-20', '2022-07-20', 6, 'refusée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(11, 'Recherche assistance polyvalent', 'Assistante de service social', '6 rue de général de gaulle', '75000', 'Paris', 'URGENT ! Vous êtes dynamique, et vous aimez le contact avec les autres, venez nous rejoindre.', '09:00:00', '16:00:00', '2022-07-19', '2022-07-19', 6, 'refusée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(12, 'Recherche assistante expérimentée polyvalent', 'Assistante de service social', '9 rue de général de gaulle', '75000', 'Paris', 'Vous désirez rejoindre une équipe dynamique, et vous aimez le contact avec les autres? ', '10:00:00', '20:00:00', '2022-07-13', '2022-07-15', 24, 'refusée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(13, 'Recherche assistante expérimentée polyvalent', 'Assistante de service social', '10 rue de général de gaulle', '75100', 'Paris', 'Vous désirez rejoindre une équipe dynamique, et vous aimez le contact avec les autres? ', '10:00:00', '20:00:00', '2022-06-28', '2022-06-29', 20, 'archivée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(14, 'Recherche chef expérimenté polyvalent', 'Chef de service', '10 rue st-Michel', '63000', 'Clermont-ferrand', 'Vous aurez une petite équipe de 4 personnes à manager. Nous attendons de vous de la rigueur et de l\'organisation', '06:00:00', '18:00:00', '2022-06-14', '2022-06-14', 9, 'archivée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(15, 'Recherche chef de projet', 'Chef de service', '2 rue st-Michel', '63300', 'Clermont-ferrand', 'URGENT, Vous aurez une petite équipe de 4 personnes à manager. Nous attendons de vous de la rigueur et de l\'organisation', '10:00:00', '18:00:00', '2022-06-09', '2022-06-10', 18, 'archivée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(16, 'Recherche infirmière', 'Autre', '22 rue st-Michel', '75000', 'Paris', 'Recherche une infirmière disponible les après pour venir renforcer notre équipe.', '13:00:00', '22:30:00', '2022-06-30', '2022-07-03', 27, 'terminée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(17, 'Recherche infirmière weekend', 'Autre', '15 rue st-Marcel', '75000', 'Paris', 'Que vous soyez junior ou expérimenté, nous recherchons une infirmière disponible pour venir renforcer notre équipe  lors d\'un évenement.', '09:30:00', '18:30:00', '2022-07-02', '2022-07-04', 16, 'terminée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(18, 'Recherche infirmière nuit', 'Assistante de service social', '5 rue Louet', '75400', 'Paris', 'Que vous soyez junior ou expérimenté, nous recherchons une infirmière de nuit pour surveiller et aider les résidents en cas de besoin.', '22:30:00', '06:30:00', '2022-07-04', '2022-07-05', 8, 'terminée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(22, 'Recherche d\'une assistante sociale', 'Assistante de service social', '4 rue Lambert', '15000', 'Cantal', 'Nous recrutons pour le compte d\'un de nos clients une assistante sociale pour une mission de prestation de service.\r\nSous la responsabilité de la cheffe de service social , l\'intervenant :\r\n- Oriente les familles selon leurs besoins\r\n- Développe et renforce les partenariats avec les partenaires institutionnels et associatifs\r\n- Conçoit et met en place des ateliers d\'information collective\r\nExpérience\r\n\r\nPROFIL :\r\nDiplôme d\'Assistant de travail social exigé.\r\nAutonomie\r\nCompétences organisationnelles et de rigueur.\r\nQualité relationnelles, goût du travail en équipe et discrétion (confidentialité)\r\nConnaissance de la demande d\'asile (serait un plus)\r\nConnaissance des dispositifs sociaux et du système de protection sociale français', '09:00:00', '17:30:00', '2022-08-15', '2022-08-17', 21, 'acceptée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(23, 'Recherche Assistante de Service Social, Educateur Spécialisé, Moniteur Educateur..', 'Moniteur', '22 rue st-Michel', '75000', 'Paris', 'Bonjour, \r\n\r\nNous recherchons un travailleur social (Assistante de Service Social, Educateur Spécialisé, Moniteur Educateur..) pour une mission se situant à SERRIS.\r\nIdéalemenrt une première expérience dans l\'accompagnement de mineurs en MECS (Maison d\'Enfant à Caractère Social). \r\n L\'intervenant mis à disposition du client aura pour mission :\r\n•	Prise en charge de 6 jeunes mineurs dans un collectif dans le respect du projet de service\r\n•	Soutien de l’éducateur réfèrent \r\n•	Appliquer les consignes de sécurité propre au site\r\n•	La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante. \r\n\r\nLa missions se déroulera le..... de 9h00 à 22h00\r\nLes détails et le contact du responsable de service vous seront délivré lors de la validation de la mission.\r\nMerci de nous contacter directement \r\n\r\n\r\nBonjour, \r\n\r\nNous recherchons un intevenenant Travailleur social, idéalement un éducateur spécialiséayant déjà de l\'expérience dans l\'acompagnement des MNA (Mineur Non Accompagné), pour une mission à temps plein, potentiellement de longue durée.\r\nLa mission se situe à Ormoy (91). \r\n\r\nL\'intervenant mis à disposition du client aura pour mission :\r\n•	Prise en charge de jeunes dit mineurs non accompagnés, au sein d’un collectif dans le respect du projet de service\r\n•	Ouverture de droit et accompagnement socio-éducatif dans le cadre de la réglementation en vigueur concernant ce public\r\n•	Appliquer les consignes de sécurité propre au site\r\n•	La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante. \r\nLa mission se déreoulera à partir du.... à temps plein du lundi au vendredi de 9h00 à 17h.\r\nLes détails et le contact du responsable de service vous seront délivré lors de la validation de la mission.\r\nMerci de nous contacter directement ', '10:00:00', '18:00:00', '2022-06-09', '2022-06-09', 8, 'acceptée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(24, 'Assistante de Service Social, Educateur Spécialisé, Moniteur Educateur..', 'Moniteur', '4 rue Lambert', '15000', 'Cantal', 'Bonjour, \r\n\r\nNous recherchons un travailleur social (Assistante de Service Social, Educateur Spécialisé, Moniteur Educateur..) pour une mission se situant à SERRIS.\r\nIdéalemenrt une première expérience dans l\'accompagnement de mineurs en MECS (Maison d\'Enfant à Caractère Social). \r\n L\'intervenant mis à disposition du client aura pour mission :\r\n•	Prise en charge de 6 jeunes mineurs dans un collectif dans le respect du projet de service\r\n•	Soutien de l’éducateur réfèrent \r\n•	Appliquer les consignes de sécurité propre au site\r\n•	La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante. \r\n\r\nLa missions se déroulera le..... de 9h00 à 22h00\r\nLes détails et le contact du responsable de service vous seront délivré lors de la validation de la mission.\r\nMerci de nous contacter directement \r\n\r\n\r\nBonjour, \r\n\r\nNous recherchons un intevenenant Travailleur social, idéalement un éducateur spécialiséayant déjà de l\'expérience dans l\'acompagnement des MNA (Mineur Non Accompagné), pour une mission à temps plein, potentiellement de longue durée.\r\nLa mission se situe à Ormoy (91). \r\n\r\nL\'intervenant mis à disposition du client aura pour mission :\r\n•	Prise en charge de jeunes dit mineurs non accompagnés, au sein d’un collectif dans le respect du projet de service\r\n•	Ouverture de droit et accompagnement socio-éducatif dans le cadre de la réglementation en vigueur concernant ce public\r\n•	Appliquer les consignes de sécurité propre au site\r\n•	La mise en place de toutes action éducatives utile à l’accompagnement des jeunes en concertation avec l’équipe encadrante. \r\nLa mission se déreoulera à partir du.... à temps plein du lundi au vendredi de 9h00 à 17h.\r\nLes détails et le contact du responsable de service vous seront délivré lors de la validation de la mission.\r\nMerci de nous contacter directement ', '09:30:00', '18:30:00', '2022-08-21', '2022-08-21', 8, 'acceptée', NULL, NULL, NULL, NULL, '18679c5f-dc33-475e-8630-45c971d38cab'),
(25, 'Recrute une assistante sociale ', 'Assistante de service social', '230 rue st gorges', '34000', 'Montpellier', 'Description du poste\r\nNous recrutons pour le compte d\'un de nos clients une assistante sociale pour une mission de prestation de service.\r\n\r\nSous la responsabilité de la cheffe de service social , l\'intervenant :\r\n- Assure les évaluations sociales des familles\r\n- Assure l\'accompagnement et le suivi des familles, au regard de leurs démarches sociales et administratives\r\n- Oriente les familles selon leurs besoins\r\n- Développe et renforce les partenariats avec les partenaires institutionnels et associatifs\r\n- Conçoit et met en place des ateliers d\'information collective\r\n\r\nContact : M.Mme ....\r\nTél. :.. .. .. .. ..\r\n\r\nExpérience\r\nPROFIL :\r\nDiplôme d\'Assistant de travail social éxigé\r\n\r\nCOMPÉTENCES REQUISES :\r\n\r\nAutonomie\r\nCapacités d\'écoute\r\nCompétences organisationnelles et de rigueur.\r\nQualité relationnelles, goût du travail en équipe et discrétion (confidentialité)\r\nMaîtrise des outils informatiques, capacités rédactionnelles et aisance à l\'oral\r\n\r\nCONNAISSANCES :\r\n\r\nConnaissance de la demande d\'asile (serait un plus)\r\nConnaissance des dispositifs sociaux et du système de protection sociale français\r\nConnaissance du système institutionnel français\r\n\r\nPoste à pourvoir au plus vite, plus de détail après validation de la mission.', '13:00:00', '23:00:00', '2022-07-30', '2022-07-31', 16, 'acceptée', NULL, NULL, NULL, NULL, '45185cd8-cd71-4d32-b188-a5a0848a1612');

-- --------------------------------------------------------

--
-- Table structure for table `modifications`
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
-- Constraints for dumped tables
--

--
-- Constraints for table `accepte`
--
ALTER TABLE `accepte`
  ADD CONSTRAINT `accepte_ibfk_1` FOREIGN KEY (`missions_id`) REFERENCES `missions` (`id`),
  ADD CONSTRAINT `accepte_ibfk_2` FOREIGN KEY (`intervenants_id`) REFERENCES `intervenants` (`id`);

--
-- Constraints for table `associations`
--
ALTER TABLE `associations`
  ADD CONSTRAINT `associations_ibfk_1` FOREIGN KEY (`modifications_id`) REFERENCES `modifications` (`id`);

--
-- Constraints for table `historiques`
--
ALTER TABLE `historiques`
  ADD CONSTRAINT `historiques_ibfk_1` FOREIGN KEY (`modifications_id`) REFERENCES `modifications` (`id`),
  ADD CONSTRAINT `historiques_ibfk_2` FOREIGN KEY (`missions_id`) REFERENCES `missions` (`id`),
  ADD CONSTRAINT `historiques_ibfk_3` FOREIGN KEY (`associations_id`) REFERENCES `associations` (`id`),
  ADD CONSTRAINT `historiques_ibfk_4` FOREIGN KEY (`administrateurs_id`) REFERENCES `administrateurs` (`id`),
  ADD CONSTRAINT `historiques_ibfk_5` FOREIGN KEY (`intervenants_id`) REFERENCES `intervenants` (`id`);

--
-- Constraints for table `intervenants`
--
ALTER TABLE `intervenants`
  ADD CONSTRAINT `intervenants_ibfk_1` FOREIGN KEY (`modifications_id`) REFERENCES `modifications` (`id`);

--
-- Constraints for table `missions`
--
ALTER TABLE `missions`
  ADD CONSTRAINT `missions_ibfk_1` FOREIGN KEY (`associations_id`) REFERENCES `associations` (`id`);
COMMIT;