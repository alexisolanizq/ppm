const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'squ_a2594a1aabf026dd3fb4dd189fe142a3bebd5952',
    options: {
      'sonar.sources': './src'
    }
  },
  () => process.exit()
);
