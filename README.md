# Config‑Driven React Application (Vite + TypeScript)

## Overview

This project is a **config‑driven React application** built with **Vite** and **TypeScript**. The UI structure, routing, content, and theming are all defined through configuration files rather than hard‑coded JSX logic. The primary goal is to demonstrate a scalable, maintainable approach to building dynamic UIs where changes can be made by updating configuration instead of modifying component code.

---

## Key Objectives

* Decouple **UI structure** from **UI implementation**
* Enable easy page and component changes via configuration
* Centralize theme and layout decisions
* Maintain strong type safety using TypeScript

---

## Project Structure

```
src/
├── assets/            # Static assets
├── components/        # Reusable UI components (Hero, FeatureList, etc.)
├── config/            # Application and style configuration
│   ├── appConfig.ts   # Page structure & component mapping
│   └── styleConfig.ts # Theme definitions
├── context/           # React Context providers
│   ├── ConfigContext.tsx
│   └── ThemeConfigContext.tsx
├── hooks/             # Custom hooks for consuming config
│   ├── usePages.ts
│   └── useTheme.ts
├── pages/             # Page rendering logic
│   └── PageRenderer.tsx
├── utils/             # Helpers (component resolver)
│   └── componentResolver.tsx
├── App.tsx            # Application shell
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

---

## Architecture

### 1. Config‑Driven Design

The entire application is driven by a single configuration object (`appConfig.ts`) which defines:

* Routes (paths and page names)
* Components rendered per page
* Props passed to each component
* Theme tokens (colors, spacing, etc.)

This allows pages to be added or modified without changing routing or JSX logic.

---

### 2. Component Resolution

A **component resolver** maps string identifiers (e.g. `"Hero"`, `"ProductGrid"`) to actual React components.

**Why:**

* Keeps config files serializable and readable
* Prevents direct imports inside configuration
* Enforces a controlled list of allowed components

---

### 3. Page Rendering Flow

1. React Router matches a route
2. `PageRenderer` retrieves page config using `usePages`
3. Each component entry is resolved dynamically
4. Props from config are injected into the component

This ensures rendering logic remains generic and reusable.

---

### 4. State Management via Context

React Context is used instead of external libraries:

* `ConfigContext` provides page definitions
* `ThemeConfigContext` provides theme tokens

This satisfies the constraint of **no external state management** while keeping configuration globally accessible.

---

### 5. Theming Strategy

Themes are defined as typed objects (`StyleConfig`) and exposed through context.

Benefits:

* Centralized styling decisions
* Easy theme switching (light/dark)
* Strong TypeScript validation

---

## Trade‑Offs

### Advantages

* High scalability for content‑driven applications
* Minimal JSX duplication
* Easy to extend with new pages/components
* Clear separation of concerns

### Limitations

* Increased upfront complexity
* Debugging can be less intuitive due to indirection
* Strict typing requires careful config maintenance
* Not ideal for highly custom, one‑off UI flows

---

## When to Use This Approach

Recommended for:

* CMS‑like applications
* Admin dashboards
* White‑label or multi‑tenant apps
* Rapid UI iteration with minimal code changes

Not ideal for:

* Small, static applications
* Highly animation‑driven interfaces

---

## Conclusion

This project demonstrates a clean, extensible approach to building React applications where **configuration is the source of truth**. While it introduces some abstraction overhead, it significantly improves maintainability and scalability for medium to large applications.

---

## Tech Stack

* React
* TypeScript
* Vite
* React Router
* Plain CSS / Tailwind‑ready
