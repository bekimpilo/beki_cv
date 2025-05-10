// Excel-inspired Portfolio Website - Gamification System

// Gamification configuration
const gamificationConfig = {
    // Achievements that can be unlocked
    achievements: [
        {
            id: 'visit_all_sections',
            name: 'Explorer',
            description: 'Visited all sections of the portfolio',
            icon: '🔍',
            unlocked: false
        },
        {
            id: 'view_projects',
            name: 'Project Analyst',
            description: 'Viewed project details',
            icon: '📊',
            unlocked: false
        },
        {
            id: 'contact_form',
            name: 'Let\'s Connect',
            description: 'Filled out the contact form',
            icon: '📧',
            unlocked: false
        },
        {
            id: 'skill_master',
            name: 'Skill Master',
            description: 'Viewed all skills',
            icon: '🏅',
            unlocked: false
        },
        {
            id: 'resume_download',
            name: 'Resume Reviewer',
            description: 'Downloaded the resume',
            icon: '📄',
            unlocked: false
        }
    ],
    
    // Excel-themed levels
    levels: [
        { name: 'Beginner', threshold: 0, icon: '🔰' },
        { name: 'Intermediate', threshold: 2, icon: '⭐' },
        { name: 'Advanced', threshold: 3, icon: '🌟' },
        { name: 'Expert', threshold: 4, icon: '💫' },
        { name: 'Master', threshold: 5, icon: '👑' }
    ],
    
    // Current user stats
    userStats: {
        score: 0,
        level: 0,
        sectionsVisited: [],
        achievementsUnlocked: 0
    }
};

// Initialize gamification system
function initializeGamification() {
    // Check for saved progress in localStorage
    const savedStats = localStorage.getItem('portfolioUserStats');
    if (savedStats) {
        gamificationConfig.userStats = JSON.parse(savedStats);
        updateAchievementsFromSaved();
    }
    
    // Create gamification UI elements
    createGamificationUI();
    
    // Set up section tracking
    setupSectionTracking();
    
    // Set up other achievement triggers
    setupAchievementTriggers();
}

// Update achievements based on saved stats
function updateAchievementsFromSaved() {
    const unlockedAchievements = gamificationConfig.userStats.unlockedAchievements || [];
    
    gamificationConfig.achievements.forEach(achievement => {
        if (unlockedAchievements.includes(achievement.id)) {
            achievement.unlocked = true;
        }
    });
}

// Create gamification UI
function createGamificationUI() {
    // Create the gamification panel
    const gamificationPanel = document.createElement('div');
    gamificationPanel.className = 'fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg border border-excel-border z-50 transform transition-transform duration-300 translate-y-full';
    gamificationPanel.id = 'gamification-panel';
    
    // Add toggle button
    const toggleButton = document.createElement('button');
    toggleButton.className = 'absolute -top-10 left-0 bg-excel-green text-white px-3 py-1 rounded-t-lg shadow-md';
    toggleButton.innerHTML = 'Achievements 🏆';
    toggleButton.onclick = function() {
        gamificationPanel.classList.toggle('translate-y-full');
        gamificationPanel.classList.toggle('translate-y-0');
    };
    
    // Create panel content
    const panelContent = document.createElement('div');
    panelContent.innerHTML = `
        <h3 class="text-lg font-bold mb-2 text-excel-green">Your Progress</h3>
        <div class="mb-4">
            <div class="flex items-center justify-between mb-1">
                <span>Level: <span id="user-level-name">Beginner</span> <span id="user-level-icon">🔰</span></span>
                <span><span id="achievements-count">0</span>/${gamificationConfig.achievements.length} Unlocked</span>
            </div>
            <div class="w-full bg-excel-lightGreen rounded-full h-2.5">
                <div id="level-progress" class="bg-excel-green h-2.5 rounded-full" style="width: 0%"></div>
            </div>
        </div>
        <div id="achievements-list" class="space-y-2 max-h-60 overflow-y-auto"></div>
    `;
    
    // Assemble panel
    gamificationPanel.appendChild(toggleButton);
    gamificationPanel.appendChild(panelContent);
    document.body.appendChild(gamificationPanel);
    
    // Populate achievements list
    updateAchievementsUI();
}

// Update achievements UI
function updateAchievementsUI() {
    const achievementsList = document.getElementById('achievements-list');
    if (!achievementsList) return;
    
    // Clear existing list
    achievementsList.innerHTML = '';
    
    // Add each achievement
    gamificationConfig.achievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.className = `p-2 rounded ${achievement.unlocked ? 'bg-excel-lightGreen' : 'bg-gray-100 text-gray-500'}`;
        
        achievementElement.innerHTML = `
            <div class="flex items-center">
                <span class="text-xl mr-2">${achievement.unlocked ? achievement.icon : '🔒'}</span>
                <div>
                    <div class="font-semibold">${achievement.name}</div>
                    <div class="text-xs">${achievement.description}</div>
                </div>
            </div>
        `;
        
        achievementsList.appendChild(achievementElement);
    });
    
    // Update level and progress
    updateLevelUI();
}

// Update level UI
function updateLevelUI() {
    const userLevel = getCurrentLevel();
    
    document.getElementById('user-level-name').textContent = userLevel.name;
    document.getElementById('user-level-icon').textContent = userLevel.icon;
    document.getElementById('achievements-count').textContent = gamificationConfig.userStats.achievementsUnlocked;
    
    // Calculate progress to next level
    const nextLevel = getNextLevel();
    let progressPercentage = 100;
    
    if (nextLevel) {
        const currentThreshold = userLevel.threshold;
        const nextThreshold = nextLevel.threshold;
        const range = nextThreshold - currentThreshold;
        const progress = gamificationConfig.userStats.achievementsUnlocked - currentThreshold;
        progressPercentage = Math.floor((progress / range) * 100);
    }
    
    document.getElementById('level-progress').style.width = `${progressPercentage}%`;
}

// Get current level based on achievements unlocked
function getCurrentLevel() {
    const unlockedCount = gamificationConfig.userStats.achievementsUnlocked;
    
    // Find the highest level the user has reached
    for (let i = gamificationConfig.levels.length - 1; i >= 0; i--) {
        if (unlockedCount >= gamificationConfig.levels[i].threshold) {
            return gamificationConfig.levels[i];
        }
    }
    
    // Default to first level
    return gamificationConfig.levels[0];
}

// Get next level
function getNextLevel() {
    const unlockedCount = gamificationConfig.userStats.achievementsUnlocked;
    
    for (let i = 0; i < gamificationConfig.levels.length; i++) {
        if (unlockedCount < gamificationConfig.levels[i].threshold) {
            return gamificationConfig.levels[i];
        }
    }
    
    // No next level (max level reached)
    return null;
}

// Set up section tracking
function setupSectionTracking() {
    // Track sections visited using Intersection Observer
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                trackSectionVisit(sectionId);
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Track section visit
function trackSectionVisit(sectionId) {
    // Add to visited sections if not already there
    if (!gamificationConfig.userStats.sectionsVisited.includes(sectionId)) {
        gamificationConfig.userStats.sectionsVisited.push(sectionId);
        saveUserStats();
        
        // Check if all sections have been visited
        const allSections = ['home', 'projects', 'skills', 'experience', 'education', 'achievements', 'contact'];
        const allVisited = allSections.every(section => 
            gamificationConfig.userStats.sectionsVisited.includes(section)
        );
        
        if (allVisited) {
            unlockAchievement('visit_all_sections');
        }
    }
}

// Set up other achievement triggers
function setupAchievementTriggers() {
    // Project details view
    document.querySelectorAll('a[href="#"]').forEach(link => {
        if (link.textContent.includes('View Details')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                unlockAchievement('view_projects');
            });
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // The actual submission is handled elsewhere
            unlockAchievement('contact_form');
        });
    }
    
    // Resume download
    const resumeButton = document.querySelector('button:not([type="submit"])');
    if (resumeButton && resumeButton.textContent.includes('Download Resume')) {
        resumeButton.addEventListener('click', function() {
            unlockAchievement('resume_download');
        });
    }
    
    // Skill master (when all skills are viewed)
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Wait a bit to make sure user has actually viewed the skills
                    setTimeout(() => {
                        unlockAchievement('skill_master');
                    }, 3000);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.8 });
        
        observer.observe(skillsSection);
    }
}

// Unlock achievement
function unlockAchievement(achievementId) {
    // Find the achievement
    const achievement = gamificationConfig.achievements.find(a => a.id === achievementId);
    
    if (achievement && !achievement.unlocked) {
        // Unlock it
        achievement.unlocked = true;
        gamificationConfig.userStats.achievementsUnlocked++;
        
        // Save progress
        saveUserStats();
        
        // Update UI
        updateAchievementsUI();
        
        // Show notification
        showAchievementNotification(achievement);
    }
}

// Show achievement notification
function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-white p-4 rounded-md shadow-lg border-l-4 border-excel-green transform transition-transform duration-500 translate-x-full';
    notification.innerHTML = `
        <div class="flex items-center">
            <span class="text-2xl mr-3">${achievement.icon}</span>
            <div>
                <div class="font-bold text-excel-green">Achievement Unlocked!</div>
                <div class="font-semibold">${achievement.name}</div>
                <div class="text-sm text-gray-600">${achievement.description}</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 5000);
}

// Save user stats to localStorage
function saveUserStats() {
    // Track unlocked achievements
    const unlockedAchievements = gamificationConfig.achievements
        .filter(a => a.unlocked)
        .map(a => a.id);
    
    gamificationConfig.userStats.unlockedAchievements = unlockedAchievements;
    
    // Save to localStorage
    localStorage.setItem('portfolioUserStats', JSON.stringify(gamificationConfig.userStats));
}

// Reset progress (for testing)
function resetProgress() {
    localStorage.removeItem('portfolioUserStats');
    gamificationConfig.userStats = {
        score: 0,
        level: 0,
        sectionsVisited: [],
        achievementsUnlocked: 0
    };
    
    gamificationConfig.achievements.forEach(achievement => {
        achievement.unlocked = false;
    });
    
    updateAchievementsUI();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize gamification system
    initializeGamification();
});
