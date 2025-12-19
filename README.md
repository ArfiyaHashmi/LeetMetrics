# LeetMetrics 📊

A sleek, modern web-based analytics dashboard that provides instant visualization of your LeetCode profile statistics. Track your problem-solving journey with beautiful progress circles and comprehensive metrics.

##  Features

### Visual Analytics
- Interactive Progress Circles - Real-time visualization of Easy, Medium, and Hard problems solved
- Conic Gradient Progress - Modern circular progress indicators showing completion percentage
- Stats Cards - Clean card-based display of key metrics

### Key Metrics Displayed
- Problems Solved - Breakdown by difficulty level (Easy/Medium/Hard)
- Global Ranking - Your position on LeetCode's global leaderboard
- Acceptance Rate - Overall submission success rate
- Contribution Points - Points earned from community contributions
- Reputation Score - Your LeetCode reputation

### User Experience
- Instant Search - Fast API integration with real-time data fetching
- Glass Morphism UI - Modern frosted glass design aesthetic
- Responsive Design - Works seamlessly across all devices
- Animated Interactions - Smooth hover effects and transitions
- Username Validation - Real-time validation with helpful error messages

## Design Highlights

- Modern Dark Theme - Eye-comfortable gradient background
- Neon Accents - Vibrant #00ff88 (mint green) primary color
- Glassmorphism - Frosted glass effect with backdrop blur
- Smooth Animations - CSS transitions for enhanced UX
- Typography - Clean Poppins font family

## Technology Stack

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Advanced styling with modern features
  - CSS Custom Properties (Variables)
  - Conic Gradients
  - Backdrop Filters
  - Flexbox Layout
- **Vanilla JavaScript** - No framework dependencies
  - Async/Await for API calls
  - DOM Manipulation
  - Event Handling

### API
- **LeetCode Stats API** - `https://leetcode-stats-api.herokuapp.com/`

### Fonts
- **Google Fonts** - Poppins (400, 500, 600, 700 weights)

##  Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls and Google Fonts)
- Basic understanding of HTML/CSS/JavaScript (for customization)

##  Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/leetmetrics.git
   cd leetmetrics
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server (recommended)
   
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   
   # Using VS Code Live Server extension
   # Right-click on index.html → Open with Live Server
   ```

3. **Start using**
   - Enter any valid LeetCode username
   - Click "Search" to view analytics

### Project Structure

```
leetmetrics/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Core JavaScript functionality
├── .gitignore         # Git ignore rules
└── README.md          # Project documentation
```

##  Usage

### Basic Usage

1. **Enter Username**
   - Type a valid LeetCode username in the input field
   - Username must be 3-16 characters
   - Can contain letters, numbers, underscores, and dots
   - Must start with a letter

2. **View Analytics**
   - Click the "Search" button
   - Wait for data to load (button shows "searching...")
   - View your comprehensive statistics

3. **Interpret Results**
   - **Progress Circles**: Shows problems solved vs. total available
   - **Cards**: Display acceptance rate, ranking, contributions, and reputation

### Username Validation Rules

The app validates usernames using the following regex pattern:
```javascript
/^[a-zA-Z][a-zA-Z0-9_.]{2,15}$/
```

**Valid Examples:**
- `john_doe`
- `user123`
- `coding.master`
- `leetcoder`

**Invalid Examples:**
- `_john` (starts with underscore)
- `ab` (too short)
- `user-name` (contains hyphen)
- `verylongusername123` (too long)

##  Features Breakdown

### Progress Visualization

```javascript
// The progress circles use CSS conic-gradient
background: conic-gradient(
    #00ff88 var(--progress-degree, 0%), 
    #1a1c2c 0%
);
```

Each circle dynamically updates based on:
- **Solved**: Number of problems you've solved
- **Total**: Total problems available
- **Percentage**: Calculated as (solved/total) × 100

### API Integration

The app fetches data from LeetCode Stats API:
```javascript
const url = `https://leetcode-stats-api.herokuapp.com/${username}`;
```

**Response includes:**
- Total questions and solved count
- Difficulty-wise breakdown
- Acceptance rate
- Global ranking
- Contribution points
- Reputation score

## Customization

### Changing Colors

Edit `style.css` to customize the color scheme:

```css
/* Primary accent color */
#00ff88  /* Mint green - used for buttons and highlights */

/* Background gradient */
background: linear-gradient(135deg, #1a1c2c 0%, #2a2d3e 100%);

/* Card gradient */
background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
```

### Modifying Layout

Adjust container width in `style.css`:
```css
.container {
    max-width: 600px;  /* Increase for wider layout */
    width: 50%;        /* Adjust percentage */
}
```

### Adding New Stats

1. Extract data from API response in `script.js`
2. Add new card in `displayUserData()` function:
```javascript
cardStatsContainer.innerHTML += `
    <div class="card">New Stat: ${data.newStat}</div>
`;
```

## 🔧 API Response Structure

```json
{
  "status": "success",
  "totalQuestions": 3000,
  "totalSolved": 500,
  "totalEasy": 800,
  "easySolved": 250,
  "totalMedium": 1600,
  "mediumSolved": 200,
  "totalHard": 600,
  "hardSolved": 50,
  "acceptanceRate": 45.5,
  "ranking": 12345,
  "contributionPoints": 150,
  "reputation": 45
}
```

## 🐛 Troubleshooting

### Common Issues

**1. "Unable to fetch user details"**
- ✅ Check internet connection
- ✅ Verify username spelling
- ✅ Ensure LeetCode profile is public
- ✅ API might be temporarily down (try again later)

**2. "Invalid username" alert**
- ✅ Username must be 3-16 characters
- ✅ Must start with a letter
- ✅ Can only contain letters, numbers, `_` and `.`

**3. Progress circles not showing**
- ✅ Clear browser cache
- ✅ Check browser console for errors (F12)
- ✅ Ensure CSS custom properties are supported

**4. Styling issues**
- ✅ Verify Google Fonts are loading
- ✅ Check browser compatibility
- ✅ Try hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Vercel

```bash
npm i -g vercel
vercel
```

## 📈 Future Enhancements

Planned features for upcoming versions:

-  **Contest Statistics** - Display contest participation and performance
-  **Submission Calendar** - GitHub-style activity heatmap
-  **Compare Users** - Side-by-side comparison of multiple profiles
-  **Dark/Light Theme Toggle** - User preference for themes
-  **Data Export** - Download stats as PDF or CSV
-  **Historical Tracking** - Track progress over time with charts
-  **Badge System** - Display earned LeetCode badges
-  **Problem Recommendations** - Suggest problems based on weak areas
-  **Social Sharing** - Share your stats on social media
-  **Progressive Web App** - Offline support and installability

##  Contributing

Contributions make the open-source community amazing! Any contributions are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Follow existing code style and formatting
- Add comments for complex logic
- Test thoroughly before submitting
- Update documentation for new features
- Keep commits atomic and well-described

##  Code Quality

### Best Practices Implemented
-  Async/await for cleaner asynchronous code
-  Error handling with try-catch blocks
-  Input validation before API calls
-  DOMContentLoaded event for safe script execution
-  CSS custom properties for maintainability
-  Semantic HTML structure
-  Responsive design principles



##  Author

Created as a portfolio project demonstrating:
- **Frontend Development** - HTML, CSS, JavaScript
- **API Integration** - RESTful API consumption
- **UI/UX Design** - Modern web design principles
- **Responsive Design** - Mobile-first approach
- **Data Visualization** - Creative progress indicators

##  Acknowledgments

- [LeetCode Stats API](https://github.com/JeremyTsaii/leetcode-stats-api) - For providing free API access
- [Google Fonts](https://fonts.google.com/) - Poppins font family
- [Shields.io](https://shields.io/) - README badges
- LeetCode community for inspiration


## Quick Start Commands

```bash
# Clone repository
git clone https://github.com/yourusername/leetmetrics.git

# Navigate to directory
cd leetmetrics

# Open in browser (or use any local server)
open index.html
```
