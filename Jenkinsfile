pipeline {
  agent any
  environment { 
    BUILD_TARGET = 'true'
  }
  stages {
    stage('build') {
      agent {
        docker {
            image 'node:14-alpine'
        }
      }
      steps {
        sh 'npm install && npm audit fix'
        sh ''
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      when { tag "*" }
      steps {
          sh 'docker-compose up --build -d --remove-orphans'
      }
    }
  }
}
