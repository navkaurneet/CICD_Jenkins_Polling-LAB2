pipeline {
    agent any
    environment {
        DOCKER_USERNAME = credentials('navyaemmy')  // Define Docker Hub username credential in Jenkins
        DOCKER_PASSWORD = credentials('Navneet@1')  // Define Docker Hub password credential in Jenkins
        NODE_VERSION = '16'  // Specify Node.js version
        IMAGE_NAME = 'navyaemmy/nav-jpolling-lab2'  // Docker image name
    }
    triggers {
        pollSCM('H/5 * * * *') // Poll every 5 minutes for changes
    }
    stages {
        stage('Checkout') {
            steps {
                // Cloning the GitHub repository
                git branch: 'main', url: 'https://github.com/navkaurneet/CICD_Jenkins_Polling-LAB2.git'
            }
        }
        stage('Set up Node.js') {
            steps {
                echo "Setting up Node.js version ${NODE_VERSION}"
                sh "nvm install ${NODE_VERSION}"
                sh "nvm use ${NODE_VERSION}"
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
        stage('Log in to Docker Hub') {
            steps {
                echo 'Logging into Docker Hub...'
                sh "echo ${DOCKER_PASSWORD} | docker login -u ${DOCKER_USERNAME} --password-stdin"
            }
        }
        stage('Push Docker Image') {
            steps {
                echo 'Pushing Docker image to Docker Hub...'
                sh "docker push ${IMAGE_NAME}"
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npm test'  // Run tests as specified in the package.json file
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
