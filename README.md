# React Native Starter with DDD Architecture 🚀

A production-ready React Native starter template built with Expo and Domain-Driven Design principles. This template serves as a foundation for scalable and maintainable React Native applications.

## Features

- 📱 Built with [Expo](https://expo.dev)
- 🏗️ Domain-Driven Design (DDD) architecture
- 🔄 State management with Zustand/Redux
- 🎨 Strict styling guidelines with StyleSheet
- ✨ Performance optimizations out of the box
- 🧪 Clean Architecture principles
- 💉 Dependency Injection pattern
- 🔍 Strict TypeScript configuration

## Project Structure

```
src/
├── app/           # Application layer (navigation, providers, state)
├── features/      # Feature-based modules
└── shared/
    ├── ui/        # Reusable UI components
    ├── lib/       # Utilities and helpers
    ├── api/       # API client and requests
    ├── domain/    # Business logic and entities
    └── infrastructure/  # External services integration
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

- Components follow PascalCase naming convention
- API calls must be made through services, not directly in components
- State management uses Zustand/Redux patterns
- Inline styles are discouraged in favor of StyleSheet
- Strict dependency rules between layers (Clean Architecture)
- Performance optimization through proper memoization

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
