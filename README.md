# Malek Kamel

Welcome to my personal website!

## Technology Stack

This site is built using standard HTML, CSS, and JavaScript. It's hosted as a GitHub page at [https://malekkamel.github.io/](https://malekkamel.github.io/).

## Create Your Own Website

Follow this step-by-step guide to set up your own website using this template:

### Step-by-Step Guide

#### 1. Create a GitHub Repository
- Log in to your GitHub account.
- Click the **+** icon in the top right corner and select **New repository**.
- Name your repository `<username>.github.io`, replacing `<username>` with your GitHub username (e.g., **MalekKamel.github.io**).
- Set the repository to **Public** and click **Create repository**.

#### 2. Add Your Website Files
- Clone your new repository to your local machine.
- Copy the contents of this repository to your repository.
- Commit your changes and push them to GitHub.

#### 3. Enable GitHub Pages
- Navigate to the **Settings** tab of your repository.
- Scroll down to the **Pages** section.
- Under **Source**, select the `main` branch (or `master`, depending on your setup) and click **Save**.
- After a few moments, you will see a message indicating that your site is published at `https://<username>.github.io`.

#### 4. Customize Your Site
- Edit the [data.json](https://github.com/MalekKamel/MalekKamel.github.io/blob/main/data.json) file in your repository to include your own information and projects.

### Conclusion
Your GitHub Page is now live! Visit it at `https://<username>.github.io`. You can easily update your site by committing new changes to your repository whenever you like. Enjoy showcasing your work!

## Development

To run the website locally, I use a simple server implemented in **Ruby**. For implementation details, refer to [simple_server.rb](https://github.com/MalekKamel/MalekKamel.github.io/blob/main/simple_server.rb).

To start the server, execute the following command in your terminal, ensuring you're in the project's root directory:

```bash
ruby simple_server.rb
```

If you don't have **Ruby** installed, please check the **Ruby Installation** section below.

## Ruby Installation

Before building the website, make sure you have Ruby installed. The minimum required version is **3.0.0**.

### macOS

1. **Using Homebrew**:
   If you have Homebrew installed, you can easily install Ruby with:
   ```bash
   brew install ruby
   ```

2. **Using rbenv** (recommended for version management):
   ```bash
   brew install rbenv
   rbenv install 3.0.0
   rbenv global 3.0.0
   ```

### Linux

1. **Using APT (Debian/Ubuntu)**:
   ```bash
   sudo apt update
   sudo apt install ruby3.0
   ```

2. **Using rbenv** (recommended):
   ```bash
   curl -fsSL https://github.com/rbenv/rbenv-installer/raw/main/bin/rbenv-installer | bash
   exec $SHELL
   rbenv install 3.0.0
   rbenv global 3.0.0
   ```

### Windows

1. **Using RubyInstaller**:
   Download and install RubyInstaller from the [RubyInstaller website](https://rubyinstaller.org/). Ensure you select a version that is **3.0.0** or higher.

2. **Using WSL (Windows Subsystem for Linux)**:
   If you prefer a Unix-like environment, install WSL and follow the **Linux** instructions above.

## Architecture

The project follows a simple MVC architecture.

## Data

Website data is encapsulated in the [data.json](https://github.com/MalekKamel/MalekKamel.github.io/blob/main/data.json) file.

## License

The website is open source and available under the terms of the [Apache License](https://www.apache.org/licenses/LICENSE-2.0).

```text
Copyright [2024] [Malek Kamel]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

---

Feel free to reach out if you have any questions or need further assistance!