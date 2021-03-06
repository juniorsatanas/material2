import {task} from 'gulp';


task('ci:lint', ['ci:forbidden-identifiers', 'lint']);

task('ci:forbidden-identifiers', function() {
  require('../../../scripts/ci/forbidden-identifiers.js');
});

// Travis sometimes does not exit the process and times out. This is to prevent that.
task('ci:test', ['test:single-run'], () => process.exit(0));

task('ci:e2e', ['e2e']);

/** Task to verify that all components work with AOT compilation. */
task('ci:aot', ['aot:build']);
