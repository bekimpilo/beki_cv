// Excel-inspired Portfolio Website JavaScript

// ===== USER CONFIGURATION SECTION =====
// Edit this section to customize your portfolio
const userConfig = {
    // Personal Information
    name: "Bekimpilo Ndlovu",
    title: "Associate",
    bio: "Bekimpilo is a self-starter, a fast learner, and a resourceful Data maverick and Systems thinker with a background in Actuarial Science  and  Artificial  Intelligence  and  client-facing  experience  in  both  private  and  public  sectors.  Beki  is  passionate  about channeling his deep understanding of math and his creativity towards solving socially undesirable phenomena. Beki recently qualified as an AI Auditor in the EU AI Act (FHCA) and an Expert in the AI Risk Management framework (FHTE).",
    profilePhoto: "./images/beki.jpg",
    
    // Contact Information
    email: "bekisesa@gmail.com",
    phone: "+27 61 611 9681",
    location: "Johannesburg, South Africa",
    
    // Social Media Links
    linkedin: "https://www.linkedin.com/in/bekimpilo-ndlovu-3960472a/",
    github: "https://github.com/bekimpilo",
    x: "https://x.com/yourusername",
    
    // Resume Link
    resumeLink: "./assets/CV.pdf",
    
    // Webhook URL for contact form
    webhookUrl: "https://script.google.com/macros/s/AKfycbxaYKYOdyCfJhsY3uQx_bLWmxuSd2kg-TiC4A6kPqcMjbQxmo7eVXzomKQCkT22IlSN/exec",
    
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
            name: "Power Apps", 
            description: "Developing no-code and low-code applications for business solutions",
            icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-12 w-12\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2\" /></svg>"
        }
    ],
    
    // Projects
    projects: [
        {
            title: "RSA Pharma Project",
            description: "Leveraged data analytics drive significant improvements in compliance rates and reduced system downtimes significantly, ultimately optimizing system maintenance and support costs.",
            tags: ["Product Management", "Power BI", "Tableau"],
            link: "https://pythonandvba.com",
            image: "./images/sales-analysis.jpg"
        },
        {
            title: "Media Monitoring Dashboard",
            description: "utilising NLP techniques such as named entity recognition and sentiment analysis on news articles to identify medicines at risk of stockout.",
            tags: ["Python", "NLP","AI", "LookerStudio"],
            link: "https://pythonandvba.com",
            image: "./images/customer-segmentation.jpg"
        },
        {
            title: "Provider Mapping Tool",
            description: "Developed a tool to map healthcare providers using SERP API and Streamlit UI and deployed it on a free instance of Render Cloud",
            tags: ["R", "Tableau"],
            link: "https://pythonandvba.com",
            image: "./images/forecasting-model.jpg"
        }
    ],
    
    // Experience
    experience: [
        {
            company: "Clinton Health Access Initiative",
            position: "Business Analyst, Associate",
            period: "May 2018 - Present",
            description: "Leveraged  data  analytics  drive  significant  improvements  in  compliance  rates  and  reduce  error  rates,  ultimately optimizing  system  maintenance  and  support  costs.  This  led  to  the  increase  in  compliance  rates  from  a  three-year maximum rate of 77% to 98.75%"
        },
        {
            company: "Maksure Risk Solutions",
            position: "Actuarial & Broking Analyst",
            period: "January 2017 - May 2018",
            description: "Developed  risk  profiles,  portfolio  performance  analysis,  claims  analysis,  and  cresta  zone  analysis  during  reinsurance treaty renewals for insurance companies. Engaged with underwriting managers to broker facultative reinsurance and supported Treaty reinsurance broking."
        },
        {
            company: "SolveCo Actuaries and Consultants",
            position: "Actuarial Analyst",
            period: "2016",
            description: "Conducted actuarial and product testing for Sanlam life insurance subsidiaries across SADC. "
        }
    ],
    
    // Education
    education: [
        {
            institution: "Universidad Politécnica de Madrid",
            degree: "Masters Artificial Intelligence for public",
            period: "Sept 2022 - Aug 2023",
            description: "Graduated with honors. Relevant coursework included statistics, data mining, and machine learning."
        },
        {
            institution: "National University of Science and Technology",
            degree: "BCom (hons) Actuarial Science",
            period: "Sept 2009 - Nov 2013",
            description: "Graduated with honors. Relevant coursework included statistics, data mining, and machine learning."
        }
       ],
    
    // Achievements/Certifications
    achievements: [
        {
            title: " ForHumanity Certified Auditor- EU AI Act",
            issuer: "ForHumanity",
            date: "2024",
            description: "Certification validating skills in preparing, modeling, visualizing, and analyzing data using Microsoft Power BI."
        },
        {
            title: "ForHumanity Trained Expert on Risk Management Framework (2023)",
            issuer: "Forhumanity",
            date: "2023",
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
    populateProjects();
    setupMobileMenu();
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
    const xLink = document.getElementById('x-link');
    
    if (linkedinLink) linkedinLink.href = userConfig.linkedin;
    if (githubLink) githubLink.href = userConfig.github;
    if (xLink) xLink.href = userConfig.x;
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
    
    // Clear existing content
    achievementsContainer.innerHTML = '';
    
    // Add each achievement from config
    userConfig.achievements.forEach(achievement => {
        const achievementRow = document.createElement('tr');
        achievementRow.className = 'excel-cell';
        
        achievementRow.innerHTML = `
            <td class="border border-excel-border p-2">${achievement.title}</td>
            <td class="border border-excel-border p-2">${achievement.issuer}</td>
            <td class="border border-excel-border p-2">${achievement.date}</td>
            <td class="border border-excel-border p-2">${achievement.description}</td>
        `;
        
        achievementsContainer.appendChild(achievementRow);
    });
}

// Populate projects section
function populateProjects() {
    const projectsContainer = document.querySelector('#projects .grid');
    if (!projectsContainer) return;
    
    // Clear existing content
    projectsContainer.innerHTML = '';
    
    // Add each project from config
    userConfig.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'border border-excel-border rounded-md overflow-hidden hover:shadow-lg transition-shadow';
        
        projectCard.innerHTML = `
            <div class="bg-excel-gray px-4 py-2 border-b border-excel-border">
                <h3 class="font-bold">${project.title}</h3>
            </div>
            <div class="p-4">
                <div class="mb-4 bg-gray-200 rounded-md overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-auto">
                </div>
                <p class="text-gray-600 mb-2">${project.title}</p>
                <p class="mb-4">${project.description}</p>
                <div class="flex justify-between items-center">
                    <div class="flex space-x-2">
                        ${project.tags.map(tag => `<span class="bg-excel-lightGreen text-excel-green px-2 py-1 rounded text-xs">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="text-excel-green hover:underline text-sm">View Details →</a>
                </div>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
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

// Setup mobile menu functionality
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// Setup Excel menu bar Easter eggs
function setupExcelEasterEggs() {
    // File menu Easter egg
    const fileButton = document.getElementById('excel-file');
    if (fileButton) {
        fileButton.addEventListener('click', function() {
            const fileMenu = document.createElement('div');
            fileMenu.className = 'excel-menu bg-white text-black shadow-lg rounded-md absolute z-50 mt-1';
            fileMenu.style.minWidth = '200px';
            fileMenu.innerHTML = `
                <div class="p-2 hover:bg-excel-hover cursor-pointer">New</div>
                <div class="p-2 hover:bg-excel-hover cursor-pointer">Open</div>
                <div class="p-2 hover:bg-excel-hover cursor-pointer">Save</div>
                <div class="p-2 hover:bg-excel-hover cursor-pointer">Save As</div>
                <div class="border-t border-excel-border my-1"></div>
                <div class="p-2 hover:bg-excel-hover cursor-pointer">Print</div>
                <div class="p-2 hover:bg-excel-hover cursor-pointer">Share</div>
                <div class="border-t border-excel-border my-1"></div>
                <div class="p-2 hover:bg-excel-hover cursor-pointer" id="excel-about">About</div>
            `;
            
            // Position the menu
            fileMenu.style.position = 'absolute';
            fileMenu.style.left = fileButton.getBoundingClientRect().left + 'px';
            fileMenu.style.top = (fileButton.getBoundingClientRect().bottom + window.scrollY) + 'px';
            
            // Add to body
            document.body.appendChild(fileMenu);
            
            // Handle About click
            const aboutButton = fileMenu.querySelector('#excel-about');
            if (aboutButton) {
                aboutButton.addEventListener('click', function() {
                    showExcelDialog(
                        'About Portfolio.xlsx',
                        `<p class="mb-2">Portfolio.xlsx - Associate</p>
                         <p class="mb-2">© ${new Date().getFullYear()} ${userConfig.name}</p>
                         <p class="mb-2">This interactive portfolio showcases my professional experience.</p>
                         <p>I'm passionate about transforming data into actionable insights that drive business decisions.</p>`,
                        'OK'
                    );
                    document.body.removeChild(fileMenu);
                });
            }
            
            // Close menu when clicking outside
            document.addEventListener('click', function closeMenu(event) {
                if (!fileMenu.contains(event.target) && event.target !== fileButton) {
                    if (document.body.contains(fileMenu)) {
                        document.body.removeChild(fileMenu);
                    }
                    document.removeEventListener('click', closeMenu);
                }
            });
        });
    }
    
    // Home menu Easter egg
    const homeButton = document.getElementById('excel-home');
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            showExcelDialog(
                'Professional Summary',
                `<p class="mb-2">With ${userConfig.experience ? userConfig.experience.length : '7+'}+ years of experience in consulting, I specialize in:</p>
                 <ul class="list-disc pl-5 mb-3">
                    <li>Transforming complex datasets into actionable business insights</li>
                    <li>Creating interactive dashboards and visualizations</li>
                    <li>Implementing data-driven solutions that improve efficiency</li>
                    <li>Collaborating with cross-functional teams to drive strategic decisions</li>
                 </ul>
                 <p>I'm committed to continuous learning and staying current with industry best practices.</p>`,
                'OK'
            );
        });
    }
    
    // Insert menu Easter egg
    const insertButton = document.getElementById('excel-insert');
    if (insertButton) {
        insertButton.addEventListener('click', function() {
            showExcelDialog(
                'Data Visualization Portfolio',
                `<p class="mb-3">As a data analyst, I create impactful visualizations that communicate insights effectively:</p>
                <div class="flex flex-wrap gap-4 justify-center mb-3">
                    <div class="border border-excel-border p-3 hover:bg-excel-hover cursor-pointer rounded-md">
                        <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                            <path d="M7 14L10 11L13 14L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="text-center mt-1 font-semibold">Trend Analysis</p>
                        <p class="text-center text-sm">Time-series forecasting</p>
                    </div>
                    <div class="border border-excel-border p-3 hover:bg-excel-hover cursor-pointer rounded-md">
                        <svg class="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
                            <rect x="6" y="14" width="3" height="5" fill="#217346"/>
                            <rect x="11" y="9" width="3" height="10" fill="#217346"/>
                            <rect x="16" y="11" width="3" height="8" fill="#217346"/>
                        </svg>
                        <p class="text-center mt-1 font-semibold">Comparative Analysis</p>
                        <p class="text-center text-sm">Performance metrics</p>
                    </div>
                </div>
                <p>My interactive dashboards help stakeholders make data-driven decisions with confidence.</p>`,
                'View Projects'
            );
        });
    }
    
    // Formulas menu Easter egg
    const formulasButton = document.getElementById('excel-formulas');
    if (formulasButton) {
        formulasButton.addEventListener('click', function() {
            showExcelDialog(
                'Analytical Skills',
                `<p class="font-semibold mb-3">My analytical toolkit includes:</p>
                 <div class="grid grid-cols-2 gap-2 mb-3">
                    <div class="border border-excel-border p-2 rounded">
                        <p class="font-bold text-excel-green">Statistical Analysis</p>
                        <p class="text-sm">Regression, hypothesis testing, correlation analysis</p>
                    </div>
                    <div class="border border-excel-border p-2 rounded">
                        <p class="font-bold text-excel-green">Data Modeling</p>
                        <p class="text-sm">Predictive models, segmentation, forecasting</p>
                    </div>
                    <div class="border border-excel-border p-2 rounded">
                        <p class="font-bold text-excel-green">Advanced Excel</p>
                        <p class="text-sm">VLOOKUP, Pivot Tables, Power Query, DAX</p>
                    </div>
                    <div class="border border-excel-border p-2 rounded">
                        <p class="font-bold text-excel-green">Programming</p>
                        <p class="text-sm">Python, SQL, R for data manipulation</p>
                    </div>
                 </div>
                 <p>I apply these skills to extract meaningful insights from complex datasets.</p>`,
                'OK'
            );
        });
    }
    
    // Data menu Easter egg
    const dataButton = document.getElementById('excel-data');
    if (dataButton) {
        dataButton.addEventListener('click', function() {
            const skills = userConfig.skills.map(skill => skill.name);
            showExcelDialog(
                'Data-Driven Results',
                `<p class="font-semibold mb-3">My data analysis work has delivered measurable business impact:</p>
                 <ul class="list-disc pl-5 mb-3">
                    <li><span class="font-bold text-excel-green">15% Revenue Growth</span> - Identified untapped market segments through customer data analysis</li>
                    <li><span class="font-bold text-excel-green">30% Cost Reduction</span> - Optimized inventory management through predictive modeling</li>
                    <li><span class="font-bold text-excel-green">40% Faster Reporting</span> - Automated data pipelines and created interactive dashboards</li>
                    <li><span class="font-bold text-excel-green">25% Improved Accuracy</span> - Enhanced data quality through validation processes</li>
                 </ul>
                 <p>I'm passionate about translating data insights into tangible business outcomes.</p>`,
                'Contact Me'
            );
        });
    }
    
    // View menu Easter egg - Direct dark mode toggle
    const viewButton = document.getElementById('excel-view');
    if (viewButton) {
        viewButton.addEventListener('click', function() {
            // Immediately toggle dark mode
            document.body.classList.toggle('excel-dark-mode');
            
            // Show notification based on current state
            if (document.body.classList.contains('excel-dark-mode')) {
                showNotification('Dark mode enabled!', 'success');
            } else {
                showNotification('Light mode enabled!', 'success');
            }
        });
    }
}

// Show Excel-style dialog
function showExcelDialog(title, content, buttonText) {
    // Create dialog backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    
    // Create dialog
    const dialog = document.createElement('div');
    dialog.className = 'bg-white rounded-md shadow-lg max-w-md w-full mx-4';
    dialog.innerHTML = `
        <div class="bg-excel-green text-white px-4 py-2 flex justify-between items-center">
            <h3 class="font-bold">${title}</h3>
            <button class="excel-dialog-close focus:outline-none">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
        <div class="p-4">
            ${content}
        </div>
        <div class="bg-excel-gray px-4 py-3 flex justify-end">
            <button class="excel-dialog-close bg-excel-green hover:bg-excel-darkGreen text-white px-4 py-1 rounded">${buttonText}</button>
        </div>
    `;
    
    // Add dialog to backdrop
    backdrop.appendChild(dialog);
    
    // Add to body
    document.body.appendChild(backdrop);
    
    // Handle close button click
    const closeButtons = dialog.querySelectorAll('.excel-dialog-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.body.removeChild(backdrop);
        });
    });
    
    // Close on backdrop click
    backdrop.addEventListener('click', function(event) {
        if (event.target === backdrop) {
            document.body.removeChild(backdrop);
        }
    });
}

// Call setup functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set user name and current year
    document.getElementById('userName').textContent = userConfig.name;
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Set profile photo
    const profilePhoto = document.getElementById('profilePhoto');
    if (profilePhoto && userConfig.profilePhoto) {
        profilePhoto.src = userConfig.profilePhoto;
        profilePhoto.alt = userConfig.name + ' - Profile Photo';
    }
    
    // Set footer name
    const footerName = document.getElementById('footerName');
    if (footerName) {
        footerName.textContent = userConfig.name;
    }
    
    // Set resume link
    const resumeLink = document.getElementById('resume-link');
    if (resumeLink) {
        resumeLink.href = userConfig.resumeLink;
    }
    
    // Initialize all sections with user configuration data
    populateContactInfo();
    populateSkills();
    populateExperience();
    populateEducation();
    populateAchievements();
    populateProjects();
    
    // Set up interactive elements
    setupContactForm();
    setupCellHoverEffects();
    setupNavigation();
    setupMobileMenu();
    setupExcelEasterEggs();
});
