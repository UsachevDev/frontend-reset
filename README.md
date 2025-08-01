# frontend-reset

[![CI](https://github.com/UsachevDev/frontend-reset/actions/workflows/ci.yml/badge.svg)](https://github.com/UsachevDev/frontend-reset/actions/workflows/ci.yml)

### Demo  
https://frontend-reset-mfub7y951-usachevdev1s-projects.vercel.app

---

## Стек
- **Vite + React 18 + TypeScript**
- **pnpm** — менеджер пакетов
- **ESLint + Prettier** — качество кода
- **Husky + commitlint** — проверки before commit
- **GitHub Actions** — CI
- **Vercel** — прод-деплой

---

## Быстрый старт
```bash
pnpm install            # зависимости
pnpm dev                # локально http://localhost:5173
```

## Основные скрипты
| Скрипт        | Назначение                 |
|---------------|---------------------------|
| `pnpm dev`    | Dev‑сервер с HMR          |
| `pnpm build`  | Прод‑сборка в `dist/`     |
| `pnpm preview`| Просмотр сборки           |
| `pnpm lint`   | ESLint, max‑warnings = 0  |
| `pnpm format` | Prettier --write .        |
| `pnpm test`   | (появится позже)          |

---

## Коммит‑правила
Conventional Commits  
`<type>(scope): краткое описание`

**Примеры**
```text
feat(ui): add dark‑mode toggle
fix(auth): correct token refresh
```

---

## CI
Каждый push / PR:
1. `pnpm install`
2. `pnpm lint`
3. `pnpm test --if-present`

---

## Деплой
```bash
vercel --prod    # публикует новую версию demo
```

---

