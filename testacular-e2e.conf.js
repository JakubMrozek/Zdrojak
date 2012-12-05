files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/frontend/e2e/**/*.js'
];

proxies = {
  '/': 'http://localhost:5000/'
};


autoWatch = false;

browsers = ['Chrome'];

singleRun = true;
