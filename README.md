# frontend-reset

[![CI](https://github.com/UsachevDev/frontend-reset/actions/workflows/ci.yml/badge.svg)](https://github.com/UsachevDev/frontend-reset/actions/workflows/ci.yml)

### Demo
https://frontend-reset-mfub7y951-usachevdev1s-projects.vercel.app

Монорепо для 12-недельного пути к job-ready фронтенду.  
Фаза 1 — 10-дневный интенсив (D0–D10).

---

## Стек
- **Vite + React 19 + TypeScript** (`apps/react-basics`)
- **pnpm workspaces**
- **ESLint (flat) + Prettier**
- **Vitest + @testing-library/react + jsdom**
- **Husky + lint-staged + commitlint**
- **GitHub Actions (CI)**
- **Vercel** (деплой)

---

## Структура
```
apps/
  vanilla-js/        # задания без сборщика
  react-basics/      # Vite + React + TS (основной playground)
```

---

## Быстрый старт
```bash
pnpm i
pnpm dev        # стартует Vite в apps/react-basics
```

### Скрипты (root)
| Скрипт         | Назначение                               |
|----------------|------------------------------------------|
| `pnpm dev`     | dev-сервер для `react-basics`            |
| `pnpm build`   | сборка `react-basics`                    |
| `pnpm preview` | предпросмотр билда                       |
| `pnpm test`    | тесты vitest (`react-basics`)            |
| `pnpm lint`    | ESLint (flat), `max-warnings=0`          |

### Vanilla JS
Открой `apps/vanilla-js/index.html` в браузере  
или подними любой статик-сервер.

---

## Definition of Done (DoD)
- Работает в последних **Chrome/Firefox**
- В README есть раздел **«Как запустить»**
- В React-части ≥ **1 тест** (Vitest/RTL) — зелёный
- **Демо/деплой** добавлен в README

---

## План спринта D0–D10
- [x] **D0 — Scaffold**: монорепо, инструменты, тесты, CI
- [ ] **D1 — Conversion Lab**: object-to-primitive, сортировка
- [ ] **D2 — Closures & Context**: once/memoize/throttle/debounce
- [ ] **D3 — Async Playground**: retry/timeout/queue, micro/macro
- [ ] **D4 — State Drills (React)**: useState, controlled inputs
- [ ] **D5 — Effects Done Right**: AbortController, cleanup
- [ ] **D6 — Router & Patterns**: React Router, 404, guards
- [ ] **D7 — Form System**: RHF + Zod, sync/async валидация
- [ ] **D8 — Data Fetching**: TanStack Query, кэш, ретраи
- [ ] **D9 — Accessible Widgets**: Dropdown/Modal с ARIA
- [ ] **D10 — Perf & Ship**: lazy/Suspense, Lighthouse, LCP/CLS

---

## Тесты
```bash
pnpm test
# vitest: jsdom + RTL; globals включены в vite.config.ts
```

---

## Коммиты
Conventional Commits:
```
<type>(scope): краткое описание
```
Примеры:
```
feat(ui): add dark-mode toggle
fix(auth): correct token refresh
```

---

## CI (GitHub Actions)
Каждый push/PR:
1) `pnpm install --frozen-lockfile`  
2) `pnpm lint`  
3) `pnpm test`  
4) `pnpm build`  

Файл: `.github/workflows/ci.yml`.

---

## Деплой (Vercel)
Монорепо деплоит `apps/react-basics`:
- build: `pnpm -F react-basics build`
- output: `apps/react-basics/dist`

(Опционально зафиксировать через `vercel.json` в корне.)
