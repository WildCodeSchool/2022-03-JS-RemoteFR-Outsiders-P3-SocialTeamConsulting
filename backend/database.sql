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
  `image_carte` VARCHAR(255),
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
('asso1', 'INS', '17 rue Jean Jaures', 63000, 'Clermont-ferrand', 'asso@test.fr', 'qwerty', 'pré-inscrit'),
('asso2', 'ABC', '4 rue Florence', 63530, 'Sayat', 'abc@test.fr', 'abc', 'pré-inscrit'),
('asso3', 'test', '2 rue testland', 62000, 'Test', 'test@test.fr', 'test', 'pré-inscrit'),

INSERT INTO `MISSIONS` (`intitule`, `metier`, `adresse`, `code_postal`, `ville`, `description`, `horaire_debut`, `horaire_fin`, `date_debut`, `date_fin`, `total_heure`, `etat`,) VALUES
(`Recherche assistante de service social`, `assistante de service social`, `2 avenue Julien`, 33000, `Bordeaux`,
`description`, `07:30:00`, `14:00:00`, '2022-06-15', '2022-06-15', `5`, `en attente`)

INSERT INTO `ADMINISTRATEURS` (`id`, `nom`, `prenom`, `telephone`, `email`, `password`) VALUES
('a1', 'Doe', 'John', 0123456789, 'john.doe@gmail.com', 'azerty'),
('b2', 'McFly', 'Marty', 9876543210, 'marty.macfly@lonepine.com', 'dolorean'),
('c3', 'Gump', 'Forrest', 0147258369, 'forrest.gump@bubbagump.com', 'runrunrun');





