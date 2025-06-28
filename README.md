# TaskFlow - To-Do List Application

## Project Structure

```
Mission4_/
├── index.html             # Main application page
├── assets/
│   ├── script.js          # Main JavaScript functionality and event handlers
│   ├── styles.css         # CSS styles and Tailwind CSS
│   ├── template.js        # HTML templates and components
│   └── helper.js          # Utility functions and helpers
└── README.md  
```

## Getting Started

### Clone the Repository

```bash
# Clone the repository to your local machine
git clone <repository-url>

# Navigate to the project directory
cd Mission4_
```

## How to Run the Application

### Method 1: Using Python (Recommended)

#### Python 3.x

```bash
# Navigate to the project directory
cd Mission4_

# Start the server
python -m http.server 8000
```

#### Python 2.x

```bash
# Navigate to the project directory
cd Mission4_

# Start the server
python -m SimpleHTTPServer 8000
```

#### Access the application:

Open your web browser and go to: `http://localhost:8000/index.html`

### Method 2: Using Node.js

If you have Node.js installed:

```bash
# Install a simple HTTP server globally
npm install -g http-server

# Navigate to the project directory
cd Mission4_

# Start the server
http-server -p 8000
```

### Method 3: Using PHP

If you have PHP installed:

```bash
# Navigate to the project directory
cd Mission4_

# Start the server
php -S localhost:8000
```

### Method 4: Using Live Server (VS Code Extension)

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## How to Stop the Web Server

### Method 1: Using Keyboard Shortcut (Recommended)

In the terminal where the server is running:

- Press `Ctrl + C` (Windows/Linux) or `Cmd + C` (Mac)

### Method 2: Using PowerShell (Windows)

If the server is running in the background or you can't find the terminal:

```powershell
# Stop all Node.js processes
Stop-Process -Name "node" -Force

# Stop all Python processes
Stop-Process -Name "python" -Force
```

### Method 3: Using Task Manager (Windows)

1. Press `Ctrl + Shift + Esc` to open Task Manager
2. Look for processes named:
   - `python.exe` (if using Python server)
   - `node.exe` (if using Node.js server)
3. Right-click on the process and select "End Task"

### Method 4: Using Activity Monitor (Mac)

1. Open Activity Monitor from Applications > Utilities
2. Search for:
   - `python` (if using Python server)
   - `node` (if using Node.js server)
3. Select the process and click the "X" button to force quit

### Method 5: Using Terminal Commands (Linux/Mac)

```bash
# Find and kill Python processes
pkill -f "python -m http.server"

# Find and kill Node.js processes
pkill -f "http-server"
```

### Verify the Server is Stopped

After stopping the server, you can verify it's no longer running by:

1. Trying to access `http://localhost:8000` in your browser
2. You should see a "Connection refused" or "This site can't be reached" error
3. Or check if the port is still in use: `netstat -an | findstr :8000` (Windows) or `lsof -i :8000` (Mac/Linux)
