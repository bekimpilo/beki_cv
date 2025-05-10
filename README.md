# Excel-Inspired Data Analyst Portfolio

An interactive portfolio website with an Excel-inspired theme and gamification elements, designed specifically for data analysts to showcase their skills, projects, and experience.

## Features

- **Excel-Inspired Design**: Mimics the look and feel of Microsoft Excel for a unique presentation
- **Gamification Elements**: Includes achievements and level progression to engage visitors
- **Fully Responsive**: Works on all device sizes from mobile to desktop
- **Easy Customization**: Simple configuration section to update content without touching the core code
- **Webhook Integration**: Contact form sends data to your specified webhook URL
- **Interactive Elements**: Progress bars, animations, and Excel-like cell selection

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
    
    // Contact Information
    email: "your.email@example.com",
    phone: "+1 (123) 456-7890",
    location: "City, Country",
    
    // Social Media Links
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
    
    // Resume Link
    resumeLink: "./path/to/your/resume.pdf",
    
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

## Gamification System

The website includes a gamification system that tracks user interaction and awards achievements. Users can:

- Earn achievements by exploring different sections of the portfolio
- Level up as they unlock more achievements
- See their progress in the achievements panel

To customize the gamification elements, edit the `gamificationConfig` object in the `js/gamification.js` file.

## Contact Form

The contact form sends data to a webhook URL that you specify in the `userConfig.webhookUrl` property. You can use services like:

- Formspree
- Netlify Forms
- Google Forms
- Custom backend API

## Browser Compatibility

The website is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

Feel free to use and modify this template for your personal portfolio.

## Acknowledgements

- Tailwind CSS for the utility-first CSS framework
- Microsoft Excel for design inspiration
