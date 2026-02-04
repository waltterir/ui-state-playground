# UI State Playground

A small React + TypeScript project focused on **explicit UI state modeling**.

This playground demonstrates how common UI states (idle, loading, success,
error) can be modeled in a way that makes invalid UI combinations impossible by design.

Rather than building features, this project focuses on **clarity, correctness,
and state-driven rendering**.

---

## Demo

**Live demo:**
[ui-state-playground.vercel.app](https://ui-state-playground.vercel.app/)

Preview:

![](./src/assets/GoodModel.gif)

---

## What makes this different?

This project highlights the difference between **implicit** and **explicit**
UI state modeling:

- **Bad model:** multiple boolean flags (`loading`, `error`) can overlap and produce impossible UI states
- **Good model:** a single discriminated union ensures only one valid state exists at a time
- **Result:** rendering becomes predictable, transitions are safer, and UI bugs are prevented by design

---

## Why boolean flags fail

Boolean flags seem simple at first, but they scale poorly.
Once you combine `isLoading`, `hasError`, and `hasData`, you quickly end up with
states that should never happen (loading + error at the same time).

This project shows how TypeScript union types can eliminate entire classes of UI state bugs.

---

## Implementation overview

- **GoodModel**  
  Uses a reducer and a discriminated union (`UiStatus`) to ensure only valid UI
  states can be represented and rendered.

- **BadModel**  
  Uses multiple boolean flags to intentionally demonstrate how invalid and
  overlapping UI states can occur.

- **ManageModels**  
  Switches between the two implementations to allow direct visual comparison.

---

## Tech stack

- React
- TypeScript
- Vite

---

## Getting started

```bash
npm install
npm run dev
```
