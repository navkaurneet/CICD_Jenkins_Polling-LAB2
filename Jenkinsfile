pipeline {
    agent any
    environment {
        NODE_VERSION = '16'  // Specify Node.js version
        IMAGE_NAME = 'navyaemmy/nav-jpolling-lab2'  // Docker image name
    }
    triggers {
        pollSCM('H/5 * * * *') // Poll every 5 minutes for changes
    }
    stages {
        stage('Checkout') {
            steps {
                // Cloning the GitHub repository with credentials
                git(
                    branch: 'main',
                    url: 'https://github.com/navkaurneet/CICD_Jenkins_Polling-LAB2.git',
                    credentialsId: 'GitHub_PAT1'
                )
            }
        }
        stage('Install npm') {
            steps {
                // Installs npm on the Jenkins agent if it's not already installed
                sh 'curl -L https://www.npmjs.com/install.sh | sh'
            }
        }
        stage('Install Dependencies') {
            steps {
                // Installs npm dependencies from package.json
                sh 'npm install'
            }
        }
    }
    post {
        success {
            echo 'npm dependencies installed successfully!'
        }
        failure {
            echo 'Failed to install npm dependencies.'
        }
    }
}
