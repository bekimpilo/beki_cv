// Excel-inspired Portfolio Website JavaScript

// ===== USER CONFIGURATION SECTION =====
// Edit this section to customize your portfolio
const userConfig = {
    // Personal Information
    name: "Sven Bosau",
    title: "Data Analyst",
    bio: "I am a data analyst with expertise in transforming complex datasets into actionable insights. My passion lies in using data visualization and statistical analysis to solve business problems.",
    
    // Contact Information
    email: "your.email@example.com",
    phone: "+1 (123) 456-7890",
    location: "City, Country",
    
    // Social Media Links
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/Sven-Bosau",
    twitter: "https://twitter.com/yourusername",
    
    // Resume Link
    resumeLink: "./CV.pdf",
    
    // Webhook URL for contact form
    webhookUrl: "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY4MDYzMDA0MzE1MjY0NTUzNjUxMzci_pc",
    
    // Skills with descriptions
    skills: [
        { 
            name: "Excel", 
            description: "Advanced data analysis, pivot tables, and financial modeling",
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z\" /></svg>"
        },
        { 
            name: "SQL", 
            description: "Database queries, data extraction, and manipulation",
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z\" /><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 17l6-6\" /><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 11l6 6\" /></svg>"
        },
        { 
            name: "Python", 
            description: "Data processing, analysis, and machine learning",
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\" /></svg>"
        },
        { 
            name: "Data Visualization", 
            description: "Creating insightful charts and interactive dashboards",
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z\" /></svg>"
        },
        { 
            name: "Power BI", 
            description: "Business intelligence and interactive reporting",
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z\" /></svg>"
        },
        { 
            name: "Statistical Analysis", 
            description: "Hypothesis testing, regression analysis, and forecasting",
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2\" /></svg>"
        }
    ],
    
    // Projects
    projects: [
        {
            title: "Sales Data Analysis",
            description: "Analyzed 5 years of sales data to identify trends and opportunities, resulting in 15% revenue growth.",
            tags: ["Excel", "Power BI"],
            link: "#"
        },
        {
            title: "Customer Segmentation",
            description: "Developed customer segments using clustering algorithms to optimize marketing campaigns.",
            tags: ["Python", "SQL"],
            link: "#"
        },
        {
            title: "Forecasting Model",
            description: "Built a time-series forecasting model that improved inventory planning by 22%.",
            tags: ["R", "Tableau"],
            link: "#"
        }
    ],
    
    // Experience
    experience: [
        {
            company: "Company Name",
            position: "Senior Data Analyst",
            period: "Jan 2023 - Present",
            description: "Lead data analyst responsible for creating dashboards and reports for executive team. Implemented automated reporting system that saved 10 hours per week."
        },
        {
            company: "Previous Company",
            position: "Data Analyst",
            period: "Mar 2020 - Dec 2022",
            description: "Conducted market analysis and created visualizations to support business decisions. Developed SQL queries to extract and analyze customer data."
        },
        {
            company: "First Company",
            position: "Junior Analyst",
            period: "Jun 2018 - Feb 2020",
            description: "Assisted in data collection and cleaning. Created Excel models for financial forecasting."
        }
    ],
    
    // Education
    education: [
        {
            institution: "University Name",
            degree: "Bachelor of Science in Data Science",
            period: "2014 - 2018",
            description: "Graduated with honors. Relevant coursework included statistics, data mining, and machine learning."
        }
    ],
    
    // Achievements/Certifications
    achievements: [
        {
            title: "Microsoft Certified: Data Analyst Associate",
            issuer: "Microsoft",
            date: "2022",
            description: "Certification validating skills in preparing, modeling, visualizing, and analyzing data using Microsoft Power BI."
        },
        {
            title: "Google Data Analytics Professional Certificate",
            issuer: "Google",
            date: "2021",
            description: "Comprehensive program covering the entire data analysis process."
        }
    ]
};
// ===== END USER CONFIGURATION SECTION =====

// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Set user name and current year
    document.getElementById('userName').textContent = userConfig.name;
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Initialize the page with additional content from userConfig
    initializePage();
});

// Initialize page with user configuration
function initializePage() {
    // This function is now replaced by individual population functions
    setupNavigation();
}

// Populate contact information
function populateContactInfo() {
    // Update contact information
    document.getElementById('contact-email').textContent = userConfig.email;
    document.getElementById('contact-phone').textContent = userConfig.phone;
    document.getElementById('contact-location').textContent = userConfig.location;
    
    // Update social links
    const linkedinLink = document.getElementById('linkedin-link');
    const githubLink = document.getElementById('github-link');
    const twitterLink = document.getElementById('twitter-link');
    
    if (linkedinLink) linkedinLink.href = userConfig.linkedin;
    if (githubLink) githubLink.href = userConfig.github;
    if (twitterLink) twitterLink.href = userConfig.twitter;
}

// Populate skills section
function populateSkills() {
    const skillsContainer = document.getElementById('skills-container');
    if (!skillsContainer) return;
    
    // Clear existing skills
    skillsContainer.innerHTML = '';
    
    // Add skills from user configuration
    userConfig.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'border border-excel-border rounded-md overflow-hidden excel-cell p-4 flex flex-col items-center text-center';
        skillElement.innerHTML = `
            <div class="text-4xl mb-3 text-excel-green">
                ${skill.icon}
            </div>
            <h3 class="font-bold text-lg">${skill.name}</h3>
            <p class="text-gray-600 mt-2">${skill.description}</p>
        `;
        skillsContainer.appendChild(skillElement);
    });
}

// Populate experience section
function populateExperience() {
    const experienceContainer = document.getElementById('experience-container');
    if (!experienceContainer) return;
    
    // Clear existing experience
    experienceContainer.innerHTML = '';
    
    // Add experience from user configuration
    userConfig.experience.forEach(exp => {
        const expElement = document.createElement('tr');
        expElement.className = 'excel-cell';
        expElement.innerHTML = `
            <td class="border border-excel-border p-2">${exp.company}</td>
            <td class="border border-excel-border p-2">${exp.position}</td>
            <td class="border border-excel-border p-2">${exp.period}</td>
            <td class="border border-excel-border p-2">${exp.description}</td>
        `;
        experienceContainer.appendChild(expElement);
    });
}

// Populate education section
function populateEducation() {
    const educationContainer = document.getElementById('education-container');
    if (!educationContainer) return;
    
    // Clear existing education
    educationContainer.innerHTML = '';
    
    // Add education from user configuration
    userConfig.education.forEach(edu => {
        const eduElement = document.createElement('tr');
        eduElement.className = 'excel-cell';
        eduElement.innerHTML = `
            <td class="border border-excel-border p-2">${edu.institution}</td>
            <td class="border border-excel-border p-2">${edu.degree}</td>
            <td class="border border-excel-border p-2">${edu.period}</td>
            <td class="border border-excel-border p-2">${edu.description}</td>
        `;
        educationContainer.appendChild(eduElement);
    });
}

// Populate achievements section
function populateAchievements() {
    const achievementsContainer = document.getElementById('achievements-container');
    if (!achievementsContainer) return;
    
    // Clear existing achievements
    achievementsContainer.innerHTML = '';
    
    // Add achievements from user configuration
    userConfig.achievements.forEach(achievement => {
        const achievementElement = document.createElement('tr');
        achievementElement.className = 'excel-cell';
        achievementElement.innerHTML = `
            <td class="border border-excel-border p-2">${achievement.title}</td>
            <td class="border border-excel-border p-2">${achievement.issuer}</td>
            <td class="border border-excel-border p-2">${achievement.date}</td>
            <td class="border border-excel-border p-2">${achievement.description}</td>
        `;
        achievementsContainer.appendChild(achievementElement);
    });
}

// Setup smooth scrolling navigation
function setupNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
}

// Excel-like cell selection effect
function setupCellSelection() {
    const cells = document.querySelectorAll('.excel-cell');
    cells.forEach(cell => {
        cell.addEventListener('click', function() {
            // Remove selection from all cells
            cells.forEach(c => c.classList.remove('cell-selected'));
            // Add selection to clicked cell
            this.classList.add('cell-selected');
        });
    });
}

// Contact form submission
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Send to webhook
            fetch(userConfig.webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formObject),
            })
            .then(response => {
                if (response.ok) {
                    showNotification('Message sent successfully!', 'success');
                    contactForm.reset();
                } else {
                    showNotification('Failed to send message. Please try again.', 'error');
                }
            })
            .catch(error => {
                showNotification('An error occurred. Please try again later.', 'error');
                console.error('Error:', error);
            });
        });
    }
}

// Show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `fixed bottom-4 right-4 p-4 rounded-md shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.add('opacity-0');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Excel-like cell selection effect
function setupCellHoverEffects() {
    const cells = document.querySelectorAll('.excel-cell');
    cells.forEach(cell => {
        cell.addEventListener('mouseenter', function() {
            this.classList.add('bg-excel-lightGreen');
        });
        cell.addEventListener('mouseleave', function() {
            this.classList.remove('bg-excel-lightGreen');
        });
    });
}

// Call setup functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set user name and current year
    document.getElementById('userName').textContent = userConfig.name;
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Set resume link
    const resumeLink = document.getElementById('resume-link');
    if (resumeLink) {
        resumeLink.href = userConfig.resumeLink;
    }
    
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Initialize all sections with user configuration data
    populateContactInfo();
    populateSkills();
    populateExperience();
    populateEducation();
    populateAchievements();
    
    // Set up interactive elements
    setupContactForm();
    setupCellHoverEffects();
    setupNavigation();
});
