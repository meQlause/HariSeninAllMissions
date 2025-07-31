# VideoBelajar App

This React application uses localStorage for data storage and authentication.

## Authentication System

### User Registration

- Users can register with their name, email, phone, and password
- Registration data is stored in localStorage using the email as the key
- Password is stored directly in localStorage and not its hash (for development purpose onlly)
- Email validation prevents duplicate registrations

### User Login

- Users authenticate using their registered email and password
- The app checks localStorage for the stored password associated with the email
- Authentication status is stored in localStorage with key "isAuth" set to "true"
- Failed login attempts show confirmation dialogs

### Authentication State

- The `useAuth` hook manages authentication state
- Checks localStorage for "isAuth" key on component mount
- Returns boolean indicating if user is authenticated
- Used throughout the app to conditionally render components

### Logout

- Users can logout via the header dropdown menu
- Sets "isAuth" in localStorage to "false"
- Redirects user to home page

## localStorage Data Structure

```
localStorage:
├── "user@email.com" → "userpassword" (user credentials)
├── "isAuth" → "true" | "false" (authentication status)
└── ... (other app data)
```

## Security Notes

⚠️ **Important**: This implementation is for demonstration purposes only. In a production environment:

- Never store passwords in plain text
- Use secure authentication tokens
- Implement proper password hashing
- Use secure HTTP-only cookies or JWT tokens
- Consider using a backend server for authentication
