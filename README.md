
##  UX Improvement — Password Visibility Toggle

Added a **show/hide password** button inside the password field. This removes the frustration of retyping your password when you make a mistake, since you can now verify what you typed before submitting. The toggle button uses an `aria-label` that updates between `"Show password"` and `"Hide password"` so it is fully accessible to screen readers.

---

##  UI Improvement — Glassmorphism Design

Replaced the plain default layout with a **full-screen gradient** background going from cyan to purple to blue. Centered on the screen is a glass-style card built using `backdrop-filter: blur(40px)` and a semi-transparent background, giving it a frosted glass appearance similar to iOS UI components. The card contains the title, form fields, and action buttons — keeping everything focused and visually clean. 

---


##  Testing

### `Login.test.jsx`

**Implemented todos:**

-  `renders form fields and submit button` — checks that the email input, password input, and submit button are all present in the DOM when the component loads.
-  `disables submit until both fields are filled` — simulates typing into the email field only and verifies the button stays disabled, then types into the password field and verifies it becomes enabled.
-  `shows loading state and calls success callback on submit` — fills both fields, clicks submit, verifies the button switches to `"Logging in..."` and is disabled, then waits for the async call to finish and confirms `onLoginSuccess` was called exactly once.

**New test:**

-  `password visibility toggle shows and hides the password` — verifies the password input starts as `type="password"`, switches to `type="text"` when the toggle is clicked, and switches back when clicked again. Also checks the `aria-label` updates correctly between `"Show password"` and `"Hide password"`.

---

### `ForgotPassword.test.jsx`

**Implemented todos:**

-  `renders heading, email input, and send reset link button` — checks that the `"Forgot Password"` heading, email input, and submit button are all present when the component loads.
-  `disables submit until email is provided` — verifies the button starts disabled and becomes enabled only after an email is typed.
-  `shows loading state and calls onRequestSent after submit` — types an email, clicks submit, verifies the button switches to `"Sending..."` and is disabled, then confirms `onRequestSent` was called exactly once after the async delay.

---

##  Trade-offs

Adding the **password toggle** introduced a small amount of extra code and an additional button to the DOM, but the UX benefit of reducing login frustration outweighs the complexity cost. The **glassmorphism design** required removing the original top navigation buttons from `App.jsx` — instead, navigation between screens is handled through the "Forgot password?" link inside the login card and the "Back to Login" button on each screen, which feels more natural for an auth flow. Finally, adding **labels to inputs** means slightly more HTML to maintain, but it improves accessibility for screen readers and allows the tests to use `getByLabelText` which is the recommended user-centric query over `getByPlaceholderText`.

---

##  What I Would Improve With More Time

-  Form validation — add real-time inline error messages for invalid email format or password too short, rather than waiting until submit
-  Animation — add a subtle fade or slide transition when switching between the login and forgot password screens for a smoother feel
-  Test coverage — cover edge cases like submitting with only spaces in the fields, or what happens if the user double clicks the submit button quickly
