const auth = {
  en: {
    login: {
      title: 'Login',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password',
      submitButton: 'Sign In',
      forgotPassword: 'Forgot Password?',
      noAccount: 'Don\'t have an account?',
      signUp: 'Sign Up',
      errors: {
        invalidEmail: 'Please enter a valid email',
        invalidPassword: 'Password must be at least 6 characters',
        invalidCredentials: 'Invalid email or password',
      },
    },
    register: {
      title: 'Create Account',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Password',
      displayNamePlaceholder: 'Display Name',
      submitButton: 'Create Account',
      haveAccount: 'Already have an account?',
      signIn: 'Sign In',
      errors: {
        invalidEmail: 'Please enter a valid email',
        invalidPassword: 'Password must be at least 6 characters',
        invalidDisplayName: 'Display name is required',
        emailInUse: 'Email is already in use',
      },
    },
    resetPassword: {
      title: 'Reset Password',
      emailPlaceholder: 'Email',
      submitButton: 'Send Reset Link',
      backToLogin: 'Back to Login',
      success: 'Reset link sent to your email',
      errors: {
        invalidEmail: 'Please enter a valid email',
        userNotFound: 'No account found with this email',
      },
    },
  },
  fr: {
    login: {
      title: 'Connexion',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Mot de passe',
      submitButton: 'Se connecter',
      forgotPassword: 'Mot de passe oublié ?',
      noAccount: 'Pas de compte ?',
      signUp: 'S\'inscrire',
      errors: {
        invalidEmail: 'Veuillez entrer un email valide',
        invalidPassword: 'Le mot de passe doit contenir au moins 6 caractères',
        invalidCredentials: 'Email ou mot de passe invalide',
      },
    },
    register: {
      title: 'Créer un compte',
      emailPlaceholder: 'Email',
      passwordPlaceholder: 'Mot de passe',
      displayNamePlaceholder: 'Nom d\'affichage',
      submitButton: 'Créer un compte',
      haveAccount: 'Déjà un compte ?',
      signIn: 'Se connecter',
      errors: {
        invalidEmail: 'Veuillez entrer un email valide',
        invalidPassword: 'Le mot de passe doit contenir au moins 6 caractères',
        invalidDisplayName: 'Le nom d\'affichage est requis',
        emailInUse: 'Cet email est déjà utilisé',
      },
    },
    resetPassword: {
      title: 'Réinitialiser le mot de passe',
      emailPlaceholder: 'Email',
      submitButton: 'Envoyer le lien',
      backToLogin: 'Retour à la connexion',
      success: 'Lien de réinitialisation envoyé à votre email',
      errors: {
        invalidEmail: 'Veuillez entrer un email valide',
        userNotFound: 'Aucun compte trouvé avec cet email',
      },
    },
  },
} as const;

export default auth;
