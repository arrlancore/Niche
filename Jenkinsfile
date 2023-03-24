if ( "${branch}" == 'testrelease') {
 targetEnv = "qa"
}
pipeline {
 agent any
 environment {
  LC_ALL = 'en_US.UTF-8'
  LANG = 'en_US.UTF-8'
  LANGUAGE = 'en_US.UTF-8'
 }
 stages {
  stage(‘Build Dependencies’) {
  steps {
  sh label: ‘’, script: “bundle install”
  }
 }
 stage(‘Build App’) {
  steps {
   sh label: ‘’, script: "bundle exec fastlane appcenter_release --env qa"
   }
  }
 }
}