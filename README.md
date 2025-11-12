# Workout Logger Lite

A minimal React workout logging application designed to practice frontend development fundamentals and prepare for future full-stack integration.

## Features

• Add workout sets: exercise, weight, reps  
• Delete sets  
• Edit previously logged sets  
• Dark mode UI styling  
• Input validation with user feedback  
• Automatic timestamps for each set  
• Session summary (total sets & total volume lifted)

## Tech Stack

• React + Vite  
• Modern JavaScript  
• Local state management  
• Styled using inline CSS in components

## Future Enhancements

• JWT authentication  
• Backend API integration using Django REST Framework  
• Historical session tracking  
• Exercise presets and filtering

---
This project is part of my journey toward becoming a full-stack software engineer.

## Phase 1 – Full-Stack Integration

**Status:** ✅ Completed

### Features
- Added `WorkoutList` component fetching workouts from Django REST API.
- Configured Axios for HTTP requests.
- Combined with existing local Workout Logger Lite interface.
- Works with backend running on `http://127.0.0.1:8000/api/workouts/`.

### Run Locally
```bash
npm install
npm run dev

