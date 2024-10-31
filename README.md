# Implementing Jenkins Polling Method

## LAB2 - Navneet

This project showcases how Jenkins is utilized to automate builds and tests for code changes in a GitHub repository through a CI/CD pipeline. By setting up Jenkins to regularly check GitHub for updates, we can guarantee that any changes to the code will automatically start a pipeline process, improving deployment speed and code quality.

## Prerequisites
- **Jenkins**: Ensure Jenkins is installed and accessible from your network.
- **GitHub Account**: Required to store the repository.
- **GitHub Personal Access Token (PAT)**: Needed to allow Jenkins to access your GitHub repository.
- **Repository Access**: Makw sure that the github repositery or branch which we want to monitor is accessible to Jenkins.


## Setup Instructions

### Step 1: Create a Jenkins Pipeline Job
1. In the Jenkins dashboard, select **New Item** and name the job.
2. Choose **Pipeline** as the job type, then click **OK**.
3. Under the **General Setting**
4. Select the **github repositery** and give the link of your github repositery.
5. Go to **Build Triggers**, Select the two checkboxes named as **GitHub hook trigger for GITScm polling** and **Poll SCM** and write the value H/5 * * *, which indicate that in every five minute the pipeline will trigger.
6. In the **Pipeline configuration page**, go to **Pipeline Definition** and select **Pipeline script from SCM**.
7. Under **SCM**, select **Git**, then add your repository URL.
8. Choose the branch to monitor (e.g., `main` or `develop`).
9. In **Credentials**, add the GitHub PAT if prompted, and select it.
10. For **Script Path**, enter `Jenkinsfile` (assuming this file is in your repository's root).

### Step 2: Add the Jenkinsfile
Include the `Jenkinsfile` in the root of your repository.

### Step 3: Configure Polling
The pollSCM trigger is configured to poll every 5 minutes:
pollSCM('H/5 * * * *'): Polls the GitHub repository every 5 minutes to detect changes.

### Step 4: Test the Pipeline
**Commit a Change:** Make a small change in the code (e.g., update the README file) and commit it to the repository.
Wait for Polling: Jenkins will poll for changes at the specified interval.
**Verify Pipeline Execution:** Check the Jenkins job to ensure that the pipeline executes when changes are detected.
**Observe Logs:** Review the build logs in Jenkins to verify that each stage (checkout, build, test) runs as expected.

### Pipeline Stages
**Checkout:** Clones the repository from GitHub.
**Build:** Simulates a build process (can be customized based on project needs).
**Test:** Runs a simple test command (e.g., echo "Running tests").
**Notification:** Posts success or failure notifications to the Jenkins console.

### Troubleshooting
**GitHub Authentication Errors:** Ensure the GitHub PAT is correct and has permissions for repository access.
**Polling Not Triggering Builds:** Verify that the polling interval is set correctly in the Jenkinsfile. Check Jenkins logs for any connection issues with GitHub.
**Network Access:** Ensure Jenkins has network access to the GitHub repository and that firewall rules allow outgoing connections.

