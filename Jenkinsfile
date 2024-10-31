pipeline {
    agent any
    environment {
        NODE_VERSION = '16'  // Specify Node.js version
        IMAGE_NAME = 'navyaemmy/nav-jpolling'  // Docker image name
    }
    triggers {
        pollSCM('H/5 * * * *') // Poll every 5 minutes for changes
    }
    stages {
        stage('Checkout') {
            steps {
                // Cloning the GitHub repository
                git branch: 'main', url: 'https://github.com/navkaurneet/CICD_Jenkins_Polling-LAB2.git', credentialsId: 'GitHub_PAT1'
            }
        }
        stage('Set up Node.js') {
            steps {
                echo "Setting up Node.js version ${NODE_VERSION}"
                bat "nvm install ${NODE_VERSION}"
                bat "nvm use ${NODE_VERSION}"
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                bat 'npm install'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                bat 'npm test'  // Run tests as specified in the package.json file
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
