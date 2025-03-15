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
