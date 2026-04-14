# Frontend Testing Challenge (Two Tracks)

This repository contains two small React screens with mocked async behavior.

## Setup

1. Install dependencies:
   - `npm install`
2. Run app locally to inspect behavior (optional):
   - `npm run dev`
3. Run test suite:
   - `npm run test`

## Candidate Tracks

### Track A - Login Screen

- Component: `src/Login.jsx`
- Test file scaffold: `src/Login.test.jsx`
- `src/Login.test.jsx` contains `test.todo(...)` placeholders.
- Candidate should replace each placeholder with implemented tests.

Required scenarios:

1. **Renders the form**
   - Login heading is visible
   - Email input is visible
   - Password input is visible
   - Submit button is visible

2. **Submit button state**
   - Disabled when fields are empty
   - Still disabled when only one field is filled
   - Enabled when both fields are filled

3. **Submit flow**
   - Button text changes to `Logging in...` after submit
   - Button is disabled while loading
   - `onLoginSuccess` is called after async completion

### Track B - Forgot Password Screen

- Component: `src/ForgotPassword.jsx`
- Test file scaffold: `src/ForgotPassword.test.jsx`
- `src/ForgotPassword.test.jsx` contains `test.todo(...)` placeholders.
- Candidate should replace each placeholder with implemented tests.

Required scenarios:

1. **Renders the form**
   - Forgot Password heading is visible
   - Email input is visible
   - Send button is visible

2. **Submit button state**
   - Disabled when email is empty
   - Enabled when email is provided

3. **Submit flow**
   - Button text changes to `Sending...` after submit
   - Button is disabled while loading
   - `onRequestSent` is called after async completion

## Expectations

- Prefer user-centric queries (`getByRole`, `getByLabelText`, etc.) when possible
- Keep tests deterministic and readable
- Keep changes focused and review-friendly
- Use clear naming and small, maintainable assertions

## Submission

- Push changes to your branch/repository
- Include a short note:
  - What you implemented
  - Trade-offs you made
  - What you would improve with more time
