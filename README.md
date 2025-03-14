# React Native Starter with DDD Architecture 🚀

A production-ready React Native starter template built with Expo and Domain-Driven Design principles. This template serves as a foundation for scalable and maintainable React Native applications.

## Features

### Architecture & Design
- 🏗️ Domain-Driven Design (DDD) architecture
- 🧪 Clean Architecture principles
- 💉 Dependency Injection pattern
- 🎯 Feature-first organization
- 🔐 Strict domain boundaries
- 🏢 Three-layer architecture (Domain, Infrastructure, Presentation)

### Core Technologies
- 📱 [Expo](https://expo.dev) for cross-platform development
- 🎨 [NativeBase](https://nativebase.io) UI components
- 🔄 [Zustand](https://github.com/pmndrs/zustand) for state management
- 🌐 [Supabase](https://supabase.io) for backend services
- 🚦 [React Navigation](https://reactnavigation.org) with type safety

### Authentication
- 🔒 Complete auth flow (login/register)
- 🛡️ Secure password handling
- 🎯 Clean presenter pattern
- ✅ Form validation
- 🚫 Error handling

### Internationalization
- 🌍 Type-safe translations with i18next
- 🔄 Automatic language detection
- 📦 Feature-based translation organization
- 🎯 Domain-driven translation structure
- 🌐 Multi-language support (EN, FR)

### Developer Experience
- 🔍 Strict TypeScript configuration
- ⚡ Performance optimizations
- 🧹 Linting and formatting rules
- 📝 Comprehensive documentation
- 🧪 Testing setup

## Project Structure

Following Domain-Driven Design principles, the project is organized into features with clear boundaries:

```
app/                      # Application Layer
├── _layout.tsx         # Root layout with providers
├── index.tsx           # Entry point
├── (auth)/             # Auth routes
│   ├── login.tsx      # Login screen
│   └── register.tsx   # Register screen
├── (dashboard)/        # Protected routes
    ├── _layout.tsx    # Dashboard layout
    └── index.tsx     # Dashboard home

features/                # Feature Modules
├── auth/               # Auth Feature
│   ├── domain/         # Business logic
│   │   ├── entities/   # Domain models
│   │   └── services/   # Domain services
│   ├── infrastructure/ # External services
│   │   ├── i18n/       # Auth translations
│   │   └── services/   # Auth implementations
│   └── presentation/   # UI layer
│       ├── components/ # Auth components
│       └── hooks/     # Auth hooks

├── shared/             # Shared Feature
    ├── domain/         # Shared models
    ├── infrastructure/ # Shared services
    │   ├── i18n/       # Shared translations
    │   └── services/   # Core services
    └── ui/             # Reusable UI
        ├── components/ # UI components
        └── hooks/     # UI hooks
```

### Layer Responsibilities

#### Domain Layer
- Business logic and rules
- Domain models and interfaces
- Pure TypeScript with no external dependencies
- No knowledge of infrastructure or UI

#### Infrastructure Layer
- External service implementations
- Data persistence and API calls
- Translation resources
- Framework-specific code

#### Presentation Layer
- UI components and hooks
- State management
- User interactions
- Translation consumption
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npx expo start
   ```

## Development Guidelines

### Architecture Rules

1. **Domain-Driven Design**
   - Keep features isolated in their own directories
   - Maintain clear boundaries between domains
   - Follow the three-layer architecture (Domain, Infrastructure, Presentation)
   - No direct dependencies between features

2. **Clean Architecture**
   - Domain layer has no external dependencies
   - Infrastructure implements domain interfaces
   - Presentation layer depends on domain, not infrastructure
   - Use dependency injection for services

### Component Development

1. **Naming & Structure**
   - Use PascalCase for component names
   - Place reusable UI in `features/shared/ui`
   - Keep feature-specific components within their feature
   - Follow the established folder structure

2. **Styling**
   - Use StyleSheet instead of inline styles
   - Follow NativeBase theming guidelines
   - Maintain consistent spacing and layout
   - Use shared theme variables

3. **Performance**
   - Wrap event handlers with useCallback
   - Memoize expensive computations with useMemo
   - Implement proper error boundaries
   - Follow React performance best practices

### State Management

1. **Data Flow**
   - Use Zustand/Redux for global state
   - Keep component state minimal
   - Follow unidirectional data flow
   - Implement proper state selectors

2. **API Integration**
   - Never make API calls directly in components
   - Use infrastructure services for external calls
   - Implement proper error handling
   - Follow domain-driven response mapping

### Translation Management

1. **Organization**
   - Add translations in feature's infrastructure/i18n
   - Follow established namespace structure (auth.*, shared.*)
   - Maintain type safety for all translations
   - Use shared translations for common UI elements

2. **Implementation**
   - Use useTranslation hook consistently
   - Follow the established key structure
   - Provide interpolation values when needed
   - Handle pluralization correctly

### Code Quality

1. **TypeScript**
   - Maintain strict type checking
   - Use explicit types for props and state
   - Avoid any type when possible
   - Document complex type definitions

2. **Testing**
   - Write unit tests for domain logic
   - Test components in isolation
   - Mock external dependencies
   - Maintain good test coverage

3. **Documentation**
   - Document complex business logic
   - Maintain up-to-date README files
   - Use JSDoc for public APIs
   - Keep inline comments minimal but meaningful

## Available Scripts

- `npx expo start`: Start the development server
- `npm run lint`: Run linting checks
- `npm run test`: Run tests
- `npm run build`: Build for production

## Contributing

1. Follow the established folder structure
2. Adhere to the linting rules
3. Write tests for new features
4. Submit PRs with clear descriptions

## License

MIT

---
*This README will be updated as new features are added to the starter template.*
