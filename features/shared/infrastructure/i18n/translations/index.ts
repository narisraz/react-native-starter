const shared = {
  en: {
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
      retry: 'Retry',
      cancel: 'Cancel',
      save: 'Save',
      delete: 'Delete',
      edit: 'Edit',
      close: 'Close',
      confirm: 'Confirm',
      back: 'Back',
      next: 'Next',
      done: 'Done',
      greeting: 'Hello, {{name}}!',
    },
    navigation: {
      home: 'Home',
      reserve: 'Reserve',
      match: 'Match',
      messages: 'Messages',
    },
    screens: {
      home: {
        upcomingMatches: 'Upcoming Matches',
        readyForNextLevel: 'Ready to level up?',
        playConnectProgress: 'Play, connect, progress!',
        findPartner: {
          title: 'Find your partner',
          description: 'Play with partners at your level and progress together!'
        },
        findMatch: {
          title: 'Find a match',
          description: 'Join available matches near you and play!'
        },
        favoriteClubs: {
          title: 'Your favorite clubs',
          description: 'Find your preferred clubs and discover new ones!'
        },
        friendsPartners: {
          title: 'Your friends/partners',
          description: 'Find your friends and partners to play whenever you want!'
        }
      },
      reserve: {
        description: 'Book your padel court and schedule your next game.'
      },
      match: {
        description: 'Find matches and connect with other players in your area.'
      },
      messages: {
        description: 'Chat with your partners and organize your next games.'
      },
      matchDetails: {
        upcomingMatches: 'Upcoming Matches',
        onCourt: 'On the court soon!',
        courtType: 'Court Type',
        level: 'Level',
        price: 'Price',
        perPerson: 'per person',
        players: 'Players',
        description: 'Description',
        matchSheet: 'Match Sheet',
        paymentReceipt: 'Payment Receipt',
        additionalPurchase: 'Additional Purchase'
      },
      partnerSearch: {
        findIdealPartner: 'Find your ideal partner!',
        findPerfectPlayer: 'Find the PERFECT player based on your preferences.',
        refineSearch: 'Refine your search',
        searchPlaceholder: 'Search for a player...',
        availability: 'Availability',
        location: 'Location',
        inviteToPlay: 'Invite to play',
        levelBeginner: 'Beginner level',
        levelBeginnerPlus: 'Beginner+ level',
        levelIntermediate: 'Intermediate level',
        levelAdvanced: 'Advanced level',
        weekend: 'Weekend',
        evening: 'Evening',
        daytime: 'Daytime',
        radius20km: '20km radius',
        filters: {
          title: 'Filters',
          levelTitle: 'Game Level',
          matchTypeTitle: 'Match Type',
          locationTitle: 'Location/Search Radius',
          availabilityTitle: 'Availability',
          ageRangeTitle: 'Age Range',
          searchCityPlaceholder: 'Search for a city...',
          apply: 'Apply',
          cancel: 'Cancel',
          beginner: 'Beginner',
          intermediate: 'Intermediate',
          advanced: 'Advanced',
          legend: 'Legend',
          friendly: 'Friendly',
          training: 'Training',
          tournament: 'Tournament',
          competition: 'Competition',
          lille: 'Lille',
          radius20km: '20km radius',
          radius30km: '30km radius',
          anytime: 'Anytime',
          daytime: 'Daytime',
          evening: 'Evening',
          weekend: 'Weekend',
          ageRange1825: '18-25 years',
          ageRange2635: '26-35 years',
          ageRange3645: '36-45 years',
          ageRange45plus: '45+ years'
        }
      }
    },
    validation: {
      required: 'This field is required',
      email: 'Please enter a valid email',
      minLength: 'Must be at least {{count}} characters',
      maxLength: 'Must be less than {{count}} characters',
      passwordMatch: 'Passwords must match',
    },
    errors: {
      network: 'Network error. Please check your connection.',
      server: 'Server error. Please try again later.',
      unauthorized: 'Please login to continue',
      forbidden: 'You don\'t have permission to access this',
      notFound: 'Resource not found',
    },
    notifications: {
      success: 'Success',
      error: 'Error',
      info: 'Information',
      warning: 'Warning',
    },
  },
  fr: {
    common: {
      loading: 'Chargement...',
      error: 'Une erreur est survenue',
      retry: 'Réessayer',
      cancel: 'Annuler',
      save: 'Enregistrer',
      delete: 'Supprimer',
      edit: 'Modifier',
      close: 'Fermer',
      confirm: 'Confirmer',
      back: 'Retour',
      next: 'Suivant',
      done: 'Terminé',
      greeting: 'Bonjour, {{name}}!',
    },
    navigation: {
      home: 'Accueil',
      reserve: 'Réserver',
      match: 'Match',
      messages: 'Messages',
    },
    screens: {
      home: {
        upcomingMatches: 'Matchs à venir',
        readyForNextLevel: 'Prêt à passer au niveau supérieur ?',
        playConnectProgress: 'Jouez, connectez, progressez !',
        findPartner: {
          title: 'Trouver votre partenaire',
          description: 'Jouez en partenaire à votre niveau et puis, jouez et progressez ensemble !'
        },
        findMatch: {
          title: 'Trouver un match',
          description: 'Rejoignez les matchs disponibles près de chez vous et jouez !'
        },
        favoriteClubs: {
          title: 'Vos clubs favoris',
          description: 'Retrouvez vos clubs préférés et appliquez d\'autres !'
        },
        friendsPartners: {
          title: 'Vos amis/partenaires',
          description: 'Retrouvez vos amis et partenaires pour jouer quand vous voulez !'
        }
      },
      reserve: {
        description: 'Réservez votre court de padel et planifiez votre prochaine partie.'
      },
      match: {
        description: 'Trouvez des matchs et connectez-vous avec d\'autres joueurs dans votre région.'
      },
      messages: {
        description: 'Discutez avec vos partenaires et organisez vos prochaines parties.'
      },
      matchDetails: {
        upcomingMatches: 'Matchs à venir',
        onCourt: 'Bientôt sur le terrain !',
        courtType: 'Type de terrain',
        level: 'Niveau',
        price: 'Prix',
        perPerson: 'par personne',
        players: 'Joueurs',
        description: 'Description',
        matchSheet: 'Feuille de match',
        paymentReceipt: 'Justificatif de paiement',
        additionalPurchase: 'Achat additionnel'
      },
      partnerSearch: {
        findIdealPartner: 'Trouvez votre partenaire idéal !',
        findPerfectPlayer: 'Trouvez le joueur PARFAIT 😎 selon vos préférences.',
        refineSearch: 'Affiner votre recherche',
        searchPlaceholder: 'Rechercher un joueur...',
        availability: 'Disponibilité',
        location: 'Localisation',
        inviteToPlay: 'Inviter à jouer',
        levelBeginner: 'Niveau débutant',
        levelBeginnerPlus: 'Niveau débutant+',
        levelIntermediate: 'Niveau intermédiaire',
        levelAdvanced: 'Niveau avancé',
        weekend: 'Week-end',
        evening: 'Soirée',
        daytime: 'Journée',
        radius20km: '20km autour',
        filters: {
          title: 'Filtres',
          levelTitle: 'Niveau de jeu',
          matchTypeTitle: 'Type de match',
          locationTitle: 'Lieu/rayon de recherche',
          availabilityTitle: 'Disponibilités',
          ageRangeTitle: 'Tranche d\'âge',
          searchCityPlaceholder: 'Rechercher une ville...',
          apply: 'Appliquer',
          cancel: 'Annuler',
          beginner: 'Débutant',
          intermediate: 'Intermédiaire',
          advanced: 'Avancé',
          legend: 'Légende',
          friendly: 'Amical',
          training: 'Entrainement',
          tournament: 'Tournoi',
          competition: 'Compétition',
          lille: 'Lille',
          radius20km: '20km autour',
          radius30km: '30km autour',
          anytime: 'Peu importe',
          daytime: 'Journée',
          evening: 'Soirée',
          weekend: 'Week-end',
          ageRange1825: '18-25 ans',
          ageRange2635: '26-35 ans',
          ageRange3645: '36-45 ans',
          ageRange45plus: '+45 ans'
        }
      }
    },
    validation: {
      required: 'Ce champ est requis',
      email: 'Veuillez entrer un email valide',
      minLength: 'Doit contenir au moins {{count}} caractères',
      maxLength: 'Doit contenir moins de {{count}} caractères',
      passwordMatch: 'Les mots de passe doivent correspondre',
    },
    errors: {
      network: 'Erreur réseau. Veuillez vérifier votre connexion.',
      server: 'Erreur serveur. Veuillez réessayer plus tard.',
      unauthorized: 'Veuillez vous connecter pour continuer',
      forbidden: 'Vous n\'avez pas la permission d\'accéder à cette ressource',
      notFound: 'Ressource non trouvée',
    },
    notifications: {
      success: 'Succès',
      error: 'Erreur',
      info: 'Information',
      warning: 'Attention',
    },
  },
} as const;

export default shared;
