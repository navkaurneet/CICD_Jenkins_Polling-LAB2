pipeline {
    agent any

    environment {
        NODE_VERSION = '20'
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

        stage('Set up Node.js') {
            steps {
                script {
                    // Set up Node.js (adjust the version as necessary)
                    def nodeVersion = '20'
                    bat "npm install -g n"
                    bat "n ${nodeVersion}"
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                bat 'npm install'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build Docker image (adjust as per your Dockerfile)
                bat 'docker build -t your-image-name .'
            }
        }
        
        stage('Run Tests') {
            steps {
                // Run tests (adjust the test command as needed)
                bat 'npm test'
            }
        }
    }
    
    post {
        always {
            echo 'Cleaning up...'
            // Clean up if necessary
        }
    }
}
