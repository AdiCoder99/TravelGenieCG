# Chhattisgarh Travel Planner (AI-Powered)

An end-to-end travel planning web application focused on Chhattisgarh destinations. 
Users can explore destination pages, browse curated travel experiences, and generate a personalized day-wise itinerary using Gemini AI based on duration, budget, and trip category.

## What This Project Does

- Showcases destinations across Chhattisgarh (temples, waterfalls, heritage, forest locations)
- Provides destination detail pages with description and map link
- Offers an experiences page to help users choose a travel style
- Collects trip preferences (days, budget, category)
- Calls a backend API that uses Gemini to generate a structured itinerary
- Displays itinerary results as day-wise cards with stops and cost hints

## Main Features

### Frontend

- React + Vite
- Tailwind CSS based UI
- Swiper-powered hero slider
- Route-based pages with React Router
- Toast notifications for validation and errors
- Shared app state via React Context

### Backend

- Express API server
- CORS + JSON middleware
- Prompt builder for itinerary generation
- Gemini integration through Google GenAI SDK
- Single itinerary generation endpoint

## Tech Stack

- Frontend: React 19, Vite, Tailwind CSS 4, React Router, React Hot Toast, Swiper
- Backend: Node.js, Express 5, dotenv, cors, nodemon
- AI: Google Gemini via @google/genai

## Project Structure

```text
Mini Project/
  client/
    src/
      Components/
      Context/
      Pages/
      assets/
  server/
    controllers/
    routes/
    services/
    utils/
```

## Application Flow

1. User opens Home page and explores destinations/experiences.
2. User goes to Planner page and enters:
   - days
   - budget
   - category (adventurous, religious, cultural, nature, mixed)
3. Frontend sends POST request to backend.
4. Backend builds prompt and asks Gemini to generate itinerary JSON.
5. Frontend parses AI response and renders day-wise itinerary cards.

## Frontend Routes

- / -> Home (Hero + Destinations + Planner CTA)
- /planner -> Trip planner form
- /planner/results -> Generated itinerary results
- /experiences -> Experiences page
- /destination/:id -> Destination details page
- * -> Custom 404 page

## API Documentation

### Base URL

- Local: http://localhost:3000

### Generate Itinerary

- Method: POST
- Endpoint: /api/itinerary/generate
- Content-Type: application/json

Request body:

```json
{
  "days": 4,
  "budget": 12000,
  "category": "nature"
}
```

Response shape:

```json
{
  "itinerary": "...AI output..."
}
```

Note:
- The frontend parser supports both:
  - direct object format: { "days": [...] }
  - string output wrapped in markdown/json fences from AI

Expected parsed itinerary format:

```json
{
  "days": [
    {
      "day": 1,
      "places": ["Place A", "Place B"],
      "cost": "INR 2500"
    }
  ]
}
```

## Setup Instructions

## 1) Prerequisites

- Node.js 18+ (recommended 20+)
- npm
- A Gemini API key

## 2) Clone and enter the project

```bash
git clone <your-repo-url>
cd "Mini Project"
```

## 3) Install dependencies

Client:

```bash
cd client
npm install
```

Server:

```bash
cd ../server
npm install
```

## 4) Configure environment variables

Create a .env file inside server/ with:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Important:
- Never commit real API keys.
- If a key was exposed in version history, rotate it immediately.

## 5) Run the app

Start backend (from server/):

```bash
npm run server
```

Start frontend (from client/ in a second terminal):

```bash
npm run dev
```

Default local URLs:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Available Scripts

### client/package.json

- npm run dev -> Start Vite development server
- npm run build -> Build production assets
- npm run preview -> Preview production build
- npm run lint -> Run ESLint

### server/package.json

- npm run server -> Start backend with nodemon

## Key Implementation Notes

- Frontend API call is currently hardcoded to:
  - http://localhost:3000/api/itinerary/generate
- App context handles loading/error states globally for planning flow.
- Itinerary parser strips markdown code fences before JSON.parse.
- Destination metadata (title, description, map coordinates) is stored in client/src/assets/assets.js.

## Known Limitations

- No authentication or user accounts
- No database persistence (generated plan is in frontend memory state)
- Single backend endpoint focused on itinerary generation
- Minimal backend validation for request payload types/ranges
- Hardcoded API base URL on frontend (not environment-driven yet)

## Suggested Improvements

- Move API base URL to frontend env (for example, VITE_API_BASE_URL)
- Add stronger request validation on backend
- Add retry/fallback handling for AI response formatting
- Persist itineraries to a database for history/favorites
- Add tests (unit + integration)
- Add Docker setup for one-command local startup

## Security and Secrets

- Keep server/.env in .gitignore
- Use different API keys for dev and production
- Rotate keys immediately if leaked

## Troubleshooting

### Frontend loads but itinerary generation fails

- Verify backend is running on port 3000
- Verify .env exists in server/ and GEMINI_API_KEY is valid
- Check backend terminal logs for Gemini errors

### CORS or network errors

- Confirm frontend is calling correct backend URL
- Confirm backend started without port conflict

### Invalid itinerary response

- AI may return non-JSON output occasionally
- Regenerate once, or strengthen prompt/output constraints in promptBuilder

## License

No license file is currently included. Add a LICENSE file if you plan to open-source this project.

## Credits

Built as a Chhattisgarh tourism-focused mini project with AI-assisted trip planning.
