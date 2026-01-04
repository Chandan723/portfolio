# GitHub Setup & Deployment Instructions

## 1. Create a Repository on GitHub
1.  Go to [github.com/new](https://github.com/new).
2.  Repository name: `portfolio` (or whatever you prefer).
3.  Visibility: **Public**.
4.  Do **not** add a README, .gitignore, or license (we already have them).
5.  Click **Create repository**.

## 2. Push Your Code
Run the following commands in your VS Code terminal (you can copy and paste them):

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit with portfolio site"

# Link to your new repository (replace YOUR_USERNAME with Chandan723)
git remote add origin https://github.com/Chandan723/portfolio.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

> [!NOTE]
> If you get an error saying "remote origin already exists", skip the `git remote add ...` step and just do `git push -u origin main` or check your current remote with `git remote -v`.

## 3. Resume Setup
To make your resume link work:
1.  Name your PDF resume file **`resume.pdf`**.
2.  Copy it into the **`public/`** folder of your project.
3.  Test it by clicking the "Resume" button on your site.
