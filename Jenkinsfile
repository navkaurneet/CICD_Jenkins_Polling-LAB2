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
 stage('Build') {
            steps {
                echo 'Building the application...'
                // Add any build commands here
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add test commands or scripts here
            }
        }
    }
    post {
        success {
            echo 'Build and tests succeeded!'
        }
        failure {
            echo 'Build or tests failed.'
        }
    }
}
