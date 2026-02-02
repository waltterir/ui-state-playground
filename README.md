# UI State Playground (WIP)

A React + TypeScript playground for experimenting with how common UI states
are modeled and rendered in a predictable way.

Instead of focusing on features, this project focuses on *how UI behaves*
when things are idle, loading, successful, or broken.

---

## What this project explores

This project is built around a simple question:

**What states can a UI be in, and how can TypeScript help prevent invalid ones?**

The application consists of small, isolated examples that demonstrate:
- explicit UI states instead of implicit boolean flags
- safe state transitions using reducer patterns
- components that only receive the data they actually need

---

## Core ideas

- UI state is modeled with union types instead of loose objects
- State transitions are handled with `useReducer`
- Each UI state has a clear visual representation
- Invalid UI combinations are prevented at compile time

Example focus areas:
- loading vs idle confusion
- error states with missing data
- success states that assume too much

---

## Current focus

- Defining UI state shapes with TypeScript union types
- Implementing reducer-based state transitions
- Splitting UI into small, typed components
- Practicing typed props and event handling

---

## Planned experiments

- Simulated async flows (success, error, slow responses)
- Comparing different ways to model the same UI state
- Reusable layout components using typed `children`
- Visualizing how small state changes affect UI behavior

---

## Tech stack

- React
- TypeScript
- Vite

---

## Project status

This is an ongoing learning project developed incrementally.
The focus is on clarity and correctness rather than completeness.

The structure is intentionally kept flexible to allow experimentation
as understanding of TypeScript and React patterns grows.
