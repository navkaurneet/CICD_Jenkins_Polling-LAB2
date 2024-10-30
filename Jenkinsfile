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
                echo "Setting up Node.js version ${NODE_VERSION}"
                sh '''
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                    nvm install ${NODE_VERSION}
                    nvm use ${NODE_VERSION}
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                sh "docker build -t ${IMAGE_NAME} ."
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'
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
