class PortfolioView {
    constructor() {
        this.description = document.getElementById('description');
        this.skillsContainer = document.getElementById('skillsContainer');
        this.projectsContainer = document.getElementById('projectsContainer');
        this.referencesContainer = document.getElementById('referencesContainer');
        this.themeToggle = document.getElementById('themeToggle');
    }

    renderDescription(description) {
        this.description.textContent = description;
    }

    renderSkills(skills) {
        this.skillsContainer.innerHTML = '';
        const containerWidth = this.skillsContainer.offsetWidth;
        let totalWidth = 0;

        skills.forEach(skill => {
            const chip = document.createElement('span');
            chip.className = 'skill-chip';
            chip.textContent = skill;
            this.skillsContainer.appendChild(chip);

            const chipWidth = chip.offsetWidth;
            chip.style.left = `${containerWidth + totalWidth}px`;
            totalWidth += chipWidth + 10;
        });

        this.animateSkills();
    }

    renderProjects(projects) {
        this.projectsContainer.innerHTML = '';
        projects.forEach(project => {
            const col = document.createElement('div');
            col.className = 'col-md-6 mb-3';
            col.innerHTML = `
                            <div class="card h-100">
                                <div class="card-body">
                                    <svg class="project-logo" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50" cy="50" r="45" fill="${project.logoColor}"/>
                                        <text x="50" y="65" font-size="50" text-anchor="middle" fill="white">${project.title.charAt(0)}</text>
                                    </svg>
                                    <h5 class="card-title">${project.title}</h5>
                                    <p class="card-text">${project.description}</p>
                                    <a href="${project.url}" class="btn btn-primary" target="_blank">View on GitHub</a>
                                </div>
                            </div>
                        `;
            this.projectsContainer.appendChild(col);
        });
    }

    renderReferences(references) {
        this.referencesContainer.innerHTML = '';
        references.forEach(course => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.innerHTML = `<a href="${course.url}" target="_blank" class="text-decoration-none">${course.title}</a>`;
            this.referencesContainer.appendChild(listItem);
        });
    }

    animateSkills() {
        const chips = this.skillsContainer.children;
        const containerWidth = this.skillsContainer.offsetWidth;
        let totalWidth = 0;

        for (let chip of chips) {
            totalWidth += chip.offsetWidth + 10;
        }

        function animate() {
            for (let chip of chips) {
                const currentLeft = parseFloat(chip.style.left);
                if (currentLeft <= -chip.offsetWidth) {
                    chip.style.left = `${containerWidth + totalWidth - chip.offsetWidth}px`;
                } else {
                    chip.style.left = `${currentLeft - 1}px`;
                }
            }
            requestAnimationFrame(animate);
        }

        animate();
    }

    bindThemeToggle(handler) {
        this.themeToggle.addEventListener('click', handler);
    }

    renderSocialLinks(socialLinks) {
        const socialContainer = document.getElementById('social-links');

        socialLinks.forEach(link => {
            const anchor = document.createElement('a');
            anchor.href = link.url;
            anchor.className = `social-icon ${link.class.split('-')[1]}`;
            anchor.title = link.title;
            anchor.target = link.url.startsWith('http') ? '_blank' : '_self';

            const icon = document.createElement('i');
            icon.className = `bi ${link.class}`;

            anchor.appendChild(icon);
            socialContainer.appendChild(anchor);
        });
    }
}

export default PortfolioView