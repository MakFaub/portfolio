# Makaela Fauber — Portfolio

[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-1AD1A5?style=flat&logo=daisyui&logoColor=white)](https://daisyui.com/)

A personal portfolio site showcasing my computer science projects, resume, and certifications.

🔗 **Live Site:** [Coming soon]

---

## 👋 About Me

[Add a short bio here — e.g., who you are, what you're studying, what you're passionate about in CS, and what you're looking for (internships, opportunities, etc.)]

---

## 🚀 Projects

Below are some of the projects featured on this site, mostly developed during my coursework.

### Buff's Bulletin
A campus events map for CU Boulder students. Buff's Bulletin puts every on-campus event in one place, so students can find things to do and clubs can get their events seen.
#### 📂 [GitHub Repo](https://github.com/miaraygithub/software-dev-group-12-9) • 🎥 [Live Demo](https://youtu.be/PPCzDpSjajc)

#### Why We Built It
Event info at CU is scattered, and neither the campus map nor Google Maps shows what's happening on campus. Buff's Bulletin shows upcoming events as pins on an interactive Mapbox map, with a matching list in the sidebar.

#### Features
- Map + sidebar: Browse upcoming events as map pins and as a list. Clicking a pin opens that event in the sidebar, and clicking an event shows its full details.
- Search: Anyone can search for clubs and events.
- Accounts: Logged-in users can RSVP, read and post comments, edit their profile, see their upcoming events, and send and receive friend requests.
- Club organizers: Users can register as organizers to create and post new events.

#### My Contribitions
- Map: Set up the Mapbox API and built the interactive map. Added event pins color-coded by category, plus a pin legend. Worked with a teammate's event parser to load category tags into the database.
- Search: Built the search bar and search results page, along with the supporting APIs.
- UI: Designed the home page.
- Design: Created the Use Case Diagram.

#### Testing
We used automated unit tests (Mocha and Chai) on the critical routes /register, /login, and /new-event, plus user testing to check the experience with real students.

#### Tech Stack
Node.js, Express, PostgreSQL, Handlebars, Bootstrap, HTML/CSS, Mapbox API, Docker, Mocha, Chai, Render. Built with Git/GitHub and VS Code.

#### Team & Process
Built by a team of 4 for CU Boulder's software engineering course. We worked in 1-week Scrum sprints and tracked work with a Kanban board.
- **Week 1 - Project Setup:** environment configuration, documentation, partials, initial database schema
- **Week 2 - Backend:** API routes, map with pins, key page layouts (Home, Events, Profile, etc.)
- **Week 3 - Functionality:** web scraping, data parsing, session authentication
- **Week 4 - Final Touches:** UI refinement, user testing, cloud hosting


### Global Sea Surface Temperature Trends and ENSO Analysis
Numerical analysis of 175 years of global ocean temperature data, separating the long-term warming signal from short-term El Niño and La Niña swings.

#### 📂 [GitHub Repo](https://github.com/MakFaub/csci-3656-final-project) • 📄 [Full Report (PDF)]

#### The Question
Sea surface temperature (SST) is a key indicator of climate change, but the data is noisy: seasonal cycles, sparse historical measurements, and natural events like El Niño can hide the long-term trend. This project asks how fast the oceans are warming, where, and how confident we can be.

#### Key findings
- Warming is accelerating. Across 1850-2025, most of the ocean warms at roughly 0.005°C/year. Over 1988-2025, most of it warms at 0.02-0.04°C/year.
- The warming is statistically significant, and the cooling isn't. After filtering by p-value, most warming regions remain significant. The small areas of apparent cooling since 1988 do not.
- ENSO swings are large but don't change the trend. El Niño and La Niña events moved Niño 3.4 temperatures by more than 2°C, far more than the century-scale warming rate. Even so, they do not reverse the upward trend.
- Phase boundaries are robust. Three independent root-finding methods agreed on when each ENSO phase ended, to within one day.

#### Approach
- **Data:** COBE-SST 2 monthly means (1850-2025) on a 1°×1° global grid, loaded as a multidimensional xarray dataset, with a CSV subset for 1988-2025.
Cleaning and smoothing: Interpolated missing values with cubic splines, applied a 3-month rolling mean, and used a Gaussian spatial filter with an adaptive width near coastlines to avoid blurring land.
- **Trend analysis:** Ran linear regression at every grid point to get slope (°C/year) and p-value, then mapped the significant trends. Weighted by latitude to compute the global yearly mean.
- **ENSO detection:** Classified El Niño and La Niña phases from Niño 3.4 anomalies (beyond ±0.4°C for 6+ months).
- **Verification:** Checked phase-boundary dates with bisection, Newton-Raphson, and cubic spline segmentation.
- **Forecast:** Used a seasonal ARIMA model to extend ENSO behavior to 2045, as an illustration of statistical variability and not a climate prediction.

#### Limitations
- Pre-1980s data came from ships and buoys and undersamples most of the ocean, so some of the apparent acceleration may reflect better measurement.
- Smoothing choices may over-smooth some regional detail.
- The ARIMA forecast is statistical only. It includes no greenhouse gas or other climate drivers and should not be read as a prediction.

#### Tech stack
Python with xarray (multidimensional NetCDF data), NumPy, and pandas. SciPy for the analysis: gaussian_filter and binary_dilation for coast-aware spatial smoothing, CubicSpline for interpolation and smoothing, and linregress for per-grid-point trends and p-values. Matplotlib and Cartopy for the maps and plots.

#### Team
Built by a team of 2 for CU Boulder's Numerical Computation course.

### [Project Name 3]
[Add a short description]
- **Tech Stack:** [ ]
- **Links:** [GitHub Repo] | [Live Demo]

> *More projects coming soon as I continue building!*

---

## 📄 Resume

My resume is available for download/viewing directly on the site.

- [View/Download Resume](#) *(add link or file path)*

---

## 🎓 Certifications

**Google Data Analytics Professional Certificate**
[Add a sentence about what the certification covers and what you learned, e.g., data cleaning, visualization, SQL, R programming, Tableau, etc.]

- [View Certificate](#) *(add link)*

---

## 🛠️ Built With

- [React](https://reactjs.org/) — front-end library
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [DaisyUI](https://daisyui.com/) — component library for Tailwind

---

## 📬 Contact

- **Email:** makaelafauber@gmail.com
- **LinkedIn:** linkedin.com/in/makaelafauber
- **GitHub:** github.com/MakFaub

---

*Thanks for stopping by! This portfolio is a work in progress and will be updated as I complete new projects.*
