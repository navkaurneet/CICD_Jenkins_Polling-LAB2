pipeline {
    agent any
    environment {
        NODE_VERSION = '16'  
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
                    credentialsId: 'GitHub_PAT'
                )
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Add any build commands here
            }
        } // Close the Build stage properly here
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
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
