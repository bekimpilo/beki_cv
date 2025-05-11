# Excel-Inspired Data Analyst Portfolio

An interactive portfolio website with an Excel-inspired theme and interactive elements, designed specifically for data analysts to showcase their skills, projects, and experience in a creative and memorable way.

## Features

- **Excel-Inspired Design**: Mimics the look and feel of Microsoft Excel for a unique presentation
- **Interactive Excel Menu**: Functional Excel-like toolbar with interactive Easter eggs
- **Dark/Light Mode Toggle**: Switch between light and dark themes with a single click
- **Dynamic Project Display**: Showcase your projects with images and descriptions
- **Professional Profile Section**: Display your photo alongside your bio and skills
- **Fully Responsive**: Works on all device sizes from mobile to desktop
- **Easy Customization**: Simple configuration section to update content without touching the core code
- **Webhook Integration**: Contact form sends data to your specified webhook URL
- **Social Media Integration**: Connect visitors to your LinkedIn, GitHub, and X (formerly Twitter) profiles

## Technologies Used

- HTML5
- Tailwind CSS (via CDN)
- Vanilla JavaScript

## Getting Started

1. Clone or download this repository
2. Open `js/main.js` and update the `userConfig` section with your personal information
3. Replace the webhook URL in the `userConfig` section with your own webhook URL
4. Test the website locally by opening `index.html` in a browser
5. Deploy to your preferred hosting service

## Customization

### User Configuration

All personal information can be edited in the `userConfig` object at the top of the `js/main.js` file:

```javascript
const userConfig = {
    // Personal Information
    name: "Your Name",
    title: "Data Analyst",
    bio: "Your bio here...",
    profilePhoto: "./images/profile-photo.jpg", // Add your profile photo here
    
    // Contact Information
    email: "your.email@example.com",
    phone: "+1 (123) 456-7890",
    location: "City, Country",
    
    // Social Media Links
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
    x: "https://x.com/yourusername", // Formerly Twitter
    
    // Resume Link
    resumeLink: "./assets/CV.pdf",
    
    // Webhook URL for contact form
    webhookUrl: "YOUR_WEBHOOK_URL_HERE",
    
    // Skills, projects, experience, education, and achievements...
}
```

### Adding Projects

To add or modify projects, edit the `projects` array in the `userConfig` object:

```javascript
projects: [
    {
        title: "Project Title",
        description: "Project description...",
        tags: ["Skill1", "Skill2"],
        link: "#"
    },
    // Add more projects...
]
```

### Styling

The website uses Tailwind CSS for styling. Custom Excel-inspired colors are defined in the Tailwind configuration in the `index.html` file. Additional custom styles are in the `css/styles.css` file.

## Interactive Excel Menu

The website features an Excel-inspired menu bar with interactive buttons that showcase your professional skills and achievements:

- **File Menu**: Dropdown with Excel-like options and an "About" dialog highlighting your professional profile
- **Home Button**: Displays a professional summary with your experience and specializations
- **Insert Button**: Shows your data visualization portfolio with professional examples
- **Formulas Button**: Presents your analytical skills in an organized grid
- **Data Button**: Showcases your data-driven results with specific metrics and business impact
- **View Button**: Toggles between light and dark mode for the entire website

These interactive elements are professionally designed to impress potential employers while maintaining the Excel-inspired theme.

## Dark Mode

The website includes a comprehensive dark mode that can be toggled by clicking the "View" button in the Excel menu bar. The dark mode:

- Changes the entire site background to a dark color
- Adjusts text colors for better readability
- Updates all UI elements including buttons, borders, and interactive components
- Provides a consistent experience throughout the site

This feature demonstrates your attention to detail and consideration for user experience.

## Contact Form

The contact form sends data to a webhook URL that you specify in the `userConfig.webhookUrl` property. You can use services like:

- Formspree
- Netlify Forms
- Google Forms
- Custom backend API

## Profile Photo

To add your profile photo to the portfolio:

1. Place your profile photo in the `images` directory
2. Name it `profile-photo.png` or update the path in the `userConfig.profilePhoto` property
3. The photo will automatically appear in the header section of your portfolio

## Browser Compatibility

The website is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Setup Instructions

1. Clone or download this repository
2. Update the `userConfig` object in `js/main.js` with your information
3. Add your profile photo to the `images` directory
4. Test locally by opening `index.html` in a browser
5. Deploy to your preferred hosting service (GitHub Pages, Netlify, Vercel, etc.)

## License

Feel free to use and modify this template for your personal portfolio.

## Acknowledgements

- Tailwind CSS for the utility-first CSS framework
- Microsoft Excel for design inspiration
- Icons from Heroicons and other open-source libraries
