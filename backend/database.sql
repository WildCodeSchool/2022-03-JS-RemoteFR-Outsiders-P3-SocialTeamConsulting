CREATE DATABASE IF NOT EXISTS `STC_Data_Base` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `STC_Data_Base`;

CREATE TABLE `MODIFICATIONS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `logo` VARCHAR(255),
  `nom` VARCHAR(100),
  `prenom` VARCHAR(100),
  `adresse` VARCHAR(255),
  `code_postal` VARCHAR(5),
  `ville` VARCHAR(255),
  `image_cv` VARCHAR(255),
  `image_carte` VARCHAR(255),
  `image_carte_vitale` VARCHAR(255),
  `telephone` INT(10),
  `image_diplomes` VARCHAR(255),
  `image_iban` VARCHAR(255),
  `image_siret` VARCHAR(255),
  `image_identite` VARCHAR(255),
  `image_justificatif_de_domicile` VARCHAR(255),
  `email` VARCHAR(255),
  `password` VARCHAR(255),
  `image_statut_autoentrepreneur` VARCHAR(255),
  `etat` VARCHAR(255),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `ADMINISTRATEURS` (
  `id` VARCHAR(255) NOT NULL,
  `nom` VARCHAR(100) NOT NULL,
  `prenom` VARCHAR(100) NOT NULL,
  `telephone` INT(10) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `HISTORIQUES` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `type_action` VARCHAR(255) NOT NULL,
  `intervenants_id` VARCHAR(255),
  `administrateurs_id` VARCHAR(255),
  `associations_id` VARCHAR(255),
  `missions_id` INT,
  `modifications_id` INT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `ASSOCIATIONS` (
  `id` VARCHAR(255) NOT NULL,
  `nom` VARCHAR(100) NOT NULL,
  `adresse` VARCHAR(255) NOT NULL,
  `code_postal` VARCHAR(5) NOT NULL,
  `ville` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `telephone` INT(10) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `pre_inscription_message` VARCHAR(500),
  `etat` VARCHAR(255) NOT NULL,
  `description` VARCHAR(800),
  `logo` VARCHAR(255),
  `modifications_id` INT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `INTERVENANTS` (
  `id` VARCHAR(255) NOT NULL,
  `nom` VARCHAR(100) NOT NULL,
  `prenom` VARCHAR(100) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `telephone` INT(10) NOT NULL,
  `image_cv` VARCHAR(255) NOT NULL,
  `image_carte_vitale` VARCHAR(255) NOT NULL,
  `image_statut_autoentrepreneur` VARCHAR(255) NOT NULL,
  `etat` VARCHAR(255) NOT NULL,

  `pre_inscription_message` VARCHAR(500),
  `adresse` VARCHAR(255),
  `code_postal` VARCHAR(5),
  `ville` VARCHAR(255),
  `image_diplomes` VARCHAR(255),
  `image_iban` VARCHAR(255),
  `image_siret` VARCHAR(255),
  `image_identite` VARCHAR(255),
  `image_justificatif_de_domicile` VARCHAR(255),
  `modifications_id` VARCHAR(255),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `MISSIONS` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `intitule` VARCHAR(255) NOT NULL,
  `metier` VARCHAR(255) NOT NULL,
  `adresse` VARCHAR(255) NOT NULL,
  `code_postal` VARCHAR(5) NOT NULL,
  `ville` VARCHAR(255) NOT NULL,
  `description` VARCHAR(800) NOT NULL,
  `horaire_debut` TIME NOT NULL,
  `horaire_fin` TIME NOT NULL,
  `date_debut` DATE NOT NULL,
  `date_fin` DATE NOT NULL,
  `total_heure` INT NOT NULL,
  `etat` VARCHAR(255) NOT NULL,

  `note_intervenant` INT,
  `note_association` INT,
  `commentaire_intervenant` VARCHAR(500),
  `commentaire_association` VARCHAR(500),
  `associations_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `ACCEPTE` (
  `intervenants_id` VARCHAR(255) NOT NULL,
  `missions_id` INT NOT NULL,
  `isvalidated` BOOL NOT NULL,
  PRIMARY KEY (`intervenants_id`, `missions_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `MESSAGES` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(255) NOT NULL,
  `prenom` VARCHAR(255),
  `email` VARCHAR(255) NOT NULL,
  `telephone` INT(10),
  `message` VARCHAR(500) NOT NULL,
  `ishandled` BOOL NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `HISTORIQUES` ADD FOREIGN KEY (`modifications_id`) REFERENCES `MODIFICATIONS` (`id`);
ALTER TABLE `HISTORIQUES` ADD FOREIGN KEY (`missions_id`) REFERENCES `MISSIONS` (`id`);
ALTER TABLE `HISTORIQUES` ADD FOREIGN KEY (`associations_id`) REFERENCES `ASSOCIATIONS` (`id`);
ALTER TABLE `HISTORIQUES` ADD FOREIGN KEY (`administrateurs_id`) REFERENCES `ADMINISTRATEURS` (`id`);
ALTER TABLE `HISTORIQUES` ADD FOREIGN KEY (`intervenants_id`) REFERENCES `INTERVENANTS` (`id`);
ALTER TABLE `ASSOCIATIONS` ADD FOREIGN KEY (`modifications_id`) REFERENCES `MODIFICATIONS` (`id`);
ALTER TABLE `INTERVENANTS` ADD FOREIGN KEY (`modifications_id`) REFERENCES `MODIFICATIONS` (`id`);
ALTER TABLE `MISSIONS` ADD FOREIGN KEY (`associations_id`) REFERENCES `ASSOCIATIONS` (`id`);
ALTER TABLE `ACCEPTE` ADD FOREIGN KEY (`missions_id`) REFERENCES `MISSIONS` (`id`);
ALTER TABLE `ACCEPTE` ADD FOREIGN KEY (`intervenants_id`) REFERENCES `INTERVENANTS` (`id`);

INSERT INTO `ASSOCIATIONS` (`id`, `nom`, `adresse`, `code_postal`, `ville`, `email`, `telephone`, `password`, `etat`) VALUES
('asso1', 'INS', '17 rue Jean Jaures', 63000, 'Clermont-ferrand', 'asso@test.fr', 0123456789, 'qwerty', 'pré-inscrit'),
('asso2', 'ABC', '4 rue Florence', 63530, 'Sayat', 'abc@test.fr', 0234567891, 'abc', 'pré-inscrit'),
('asso3', 'test', '2 rue testland', 62000, 'Test', 'test@test.fr', 0369258147, 'test', 'pré-inscrit');

INSERT INTO `MISSIONS` (`intitule`, `metier`, `adresse`, `code_postal`, `ville`, `description`, `horaire_debut`, `horaire_fin`, `date_debut`, `date_fin`, `total_heure`, `etat`, `associations_id`) VALUES
("Recherche assistante de service social", "Assistante de service social", "2 avenue Julien", 33000, "Bordeaux",
"Suite à la réouverture vous serez amené à gérer l'accueil client et répondre aux questions des clients", "07:30:00", "14:00:00", '2022-06-15', '2022-06-15', 5, "en attente", "asso1"),
("Encadrement d'un groupe de jeunes", "Educateur spécialisé", "4 rue Lambert", 15000, "Cantal",
"Vous aiderez à surveiller ponctuellement, diriger un groupe de jeunes, agés de 7 à 15 ans", "09:00:00", "19:00:00", '2022-06-17', '2022-06-17', 8, "Validé", "asso1"),
("Recherche un chef de service", "Chef de service", "15 rue de la Wild", 75000, "Paris",
"Vous serez en autonomie", "09:30:00", "17:30:00", '2022-06-18', '2022-06-18', 7, "en attente","asso1");

INSERT INTO `ADMINISTRATEURS` (`id`, `nom`, `prenom`, `telephone`, `email`, `password`) VALUES
('a1', 'Doe', 'John', 0123456789, 'john.doe@gmail.com', 'azerty'),
('b2', 'McFly', 'Marty', 0987654321, 'marty.macfly@lonepine.com', 'dolorean'),
('c3', 'Gump', 'Forrest', 0147258369, 'forrest.gump@bubbagump.com', 'runrunrun');

INSERT INTO `INTERVENANTS` (`id`, `nom`, `prenom`, `email`, `password`, `telephone`, `image_cv`, `image_carte_vitale`, `image_statut_autoentrepreneur`, `etat`, `pre_inscription_message`, `adresse`, `code_postal`, `ville`,  `image_diplomes`, `image_iban`,`image_siret`, `image_identite`, `image_justificatif_de_domicile`, `modifications_id`) VALUES
('A1', 'Wayne', 'Bruce', 'batman@wayneco.com', 'joker', 0123456789, "https://pbs.twimg.com/media/Cx9GQDoUQAEQhYh.jpg", 'https://secu-jeunes.fr/wp-content/uploads/2016/09/carte-vitale-300x292.png', 'https://teleservices-greffe.fr/static/img/sample-kbis.jpg', 'validé', 'je veux vous rejoindre car je sais plus quoi faire de mes nuits', '1007 Mountain Drive', '12345', 'Gotham City', 'https://hansen-hypnose.com/wp-content/uploads/2017/11/DIPLOME-PRATICIEN-HYPNOSE-SPECIMEN.jpg', 'https://dk85klopn8z0j.cloudfront.net/wp-content/uploads/2015/11/specimen-rib.png','https://www.anafagc.fr/webroot/uploads/fraude%20n%C2%B0SIRET.jpg', 'https://i.servimg.com/u/f62/17/60/83/74/tm/cibatm10.jpg', 'https://www.maitriser-mon-energie.fr/wp-content/uploads/sites/8/2020/01/attestation-de-domicile-page-001_censored-724x1024.jpg',""),
('B4', 'Stark', 'Tony', 'ironman@starkco.com', 'elonmusk', 0123456789, "https://mir-s3-cdn-cf.behance.net/projects/404/1b6c6293552649.Y3JvcCwxMjAwLDkzOCwwLDA.jpg", 'https://secu-jeunes.fr/wp-content/uploads/2016/09/carte-vitale-300x292.png', 'https://teleservices-greffe.fr/static/img/sample-kbis.jpg', 'pré-inscrit',"","","","","","","","","","");

INSERT INTO `MESSAGES` (`nom`, `prenom`, `email`, `telephone`, `message`, `ishandled`) VALUES
('Association', '', 'asso@asso.com', 0123458697, 'Bonjour, j aimerais avoir plus d information sur votre structure et les moyens d affectations d intervenants', false),
('Doe', 'John', 'john@autoentrepreneur.com', 0123458697, 'Bonjour, j aimerais comment je peux choisir une mission', true);

