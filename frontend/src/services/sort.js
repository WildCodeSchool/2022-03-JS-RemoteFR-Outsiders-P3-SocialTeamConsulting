// const missions = [
//   {
//     intervenants_id: "66980364-cd1a-4f83-9b68-1434a071e35c",
//     missions_id: 7,
//     isvalidated: 0,
//     id: 7,
//     intitule: "Recherche chef de projet experimente",
//     metier: "Chef de service",
//     adresse: "20 rue st gorges",
//     code_postal: "33000",
//     ville: "Bordeaux",
//     description:
//       "Vous serez en autonomie. Organisation, savoir-être, patience sont vos qualités principales. Vous aurez à gérer un groupe de 5 personnes",
//     horaire_debut: "08:45:00",
//     horaire_fin: "20:45:00",
//     date_debut: "2022-05-27T22:00:00.000Z",
//     date_fin: "2022-06-29T22:00:00.000Z",
//     total_heure: 10,
//     etat: "acceptée",
//     note_intervenant: null,
//     note_association: null,
//     commentaire_intervenant: null,
//     commentaire_association: null,
//     associations_id: "18679c5f-dc33-475e-8630-45c971d38cab",
//     nom: "Unicite",
//   },
//   {
//     intervenants_id: "66980364-cd1a-4f83-9b68-1434a071e35c",
//     missions_id: 8,
//     isvalidated: 0,
//     id: 8,
//     intitule: "Recherche chef de projet experimente",
//     metier: "Chef de service",
//     adresse: "20 rue st gorges",
//     code_postal: "75000",
//     ville: "Paris",
//     description:
//       "Vous serez en autonomie. Organisation, savoir-être, patience sont vos qualités principales.",
//     horaire_debut: "08:45:00",
//     horaire_fin: "20:45:00",
//     date_debut: "2022-06-21T22:00:00.000Z",
//     date_fin: "2022-06-29T22:00:00.000Z",
//     total_heure: 10,
//     etat: "acceptée",
//     note_intervenant: null,
//     note_association: null,
//     commentaire_intervenant: null,
//     commentaire_association: null,
//     associations_id: "18679c5f-dc33-475e-8630-45c971d38cab",
//     nom: "Unicite",
//   },
// ];

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

const sortByDate = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++)
      if (new Date(array[i].date_debut) < new Date(array[j].date_debut)) {
        swap(array, i, j);
      }
  }
  return array;
};

module.exports = { sortByDate };
