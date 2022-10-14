pipeline {
    agent any
    environment {
        MAP_NAME = 'highstreets-map-explorer'
    }
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }
        stage('Deliver') {
            steps {
                sshagent(credentials: ['apps.london']) {
                    bat '''
                    ssh -o StrictHostKeyChecking=no ubuntu@3.8.247.156 uptime
                    ssh -v ubuntu@3.8.247.156 mkdir -p /home/ubuntu/temp/%MAP_NAME%
                    scp -r build/* ubuntu@3.8.247.156:/home/ubuntu/temp/%MAP_NAME%
                    ssh -v ubuntu@3.8.247.156 sudo mkdir -p -m 777 /var/www/html/%MAP_NAME%
                    ssh -v ubuntu@3.8.247.156 sudo cp -r /home/ubuntu/temp/%MAP_NAME%/* /var/www/html/%MAP_NAME%/

            '''
                }
            }
        }
    }
}
