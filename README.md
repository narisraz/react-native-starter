# Bandeja Connect - Mobile Application 

A production-ready React Native application built with Expo and Domain-Driven Design principles. Bandeja Connect serves as a platform for connecting users with local services and businesses.

## Application Overview

Bandeja Connect is a mobile application designed to:
- Connect users with local businesses and service providers
- Provide a seamless authentication experience
- Offer a clean, intuitive user interface
- Support multiple languages (EN, FR)
- Follow strict DDD architecture for maintainability and scalability

## Features

### Architecture & Design
- Domain-Driven Design (DDD) architecture
- Clean Architecture principles
- Dependency Injection pattern
- Feature-first organization
- Strict domain boundaries
- Three-layer architecture (Domain, Infrastructure, Presentation)

### Core Technologies
- [Expo](https://expo.dev) for cross-platform development
- [NativeBase](https://nativebase.io) UI components
- [Zustand](https://github.com/pmndrs/zustand) for state management
- [Supabase](https://supabase.io) for backend services
- [React Navigation](https://reactnavigation.org) with type safety

### Authentication
- Complete auth flow (login/register)
- Secure password handling
- Clean presenter pattern
- Form validation
- Error handling

### User Experience
- Modern, clean UI based on Figma designs
- Responsive layouts for various device sizes
- Performance-optimized components
- Support for light/dark themes
- Intuitive search and filtering

### Internationalization
- Type-safe translations with i18next
- Automatic language detection
- Feature-based translation organization
- Domain-driven translation structure
- Multi-language support (EN, FR)

### Developer Experience
- Strict TypeScript configuration
- Performance optimizations
- Linting and formatting rules
- Comprehensive documentation
- Testing setup

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
    └── presentation/   # UI components
        ├── components/ # Reusable components
        ├── hooks/     # UI hooks
        └── providers/ # Context providers
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

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit the `.env` file with your Supabase credentials.

3. Start the development server:
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
   - Place reusable UI in `features/shared/presentation/components`
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
   - Use Zustand for global state
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

## Design Resources

The application UI is based on the [Bandeja Connect Figma Design](https://www.figma.com/design/jOeoIbuZFt4Q8JImckuUBt/Bandeja-Connect--%3E-Application?node-id=0-1).

## License

This project is licensed under the MIT License - see the LICENSE file for details.
