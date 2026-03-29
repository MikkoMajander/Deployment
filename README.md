The goal of this project was to test a JavaScript utility library, implement automated testing using GitHub Actions, and integrate coverage reporting through Coveralls. The assignment required achieving at least 60% test coverage (excluding the .internal directory), documenting any discovered issues, and evaluating whether the library is production‑ready.

I began by setting up a Node.js testing environment locally. I copied the 'src' folder to my project's root directory and started writing unit tests for the functions. I used Mocha as the test runner.

Here's a list of all the functions I tested within the 'src' folder:

add.js  
at.js  
camelCase.js  
capitalize.js  
castArray.js  
ceil.js  
chunk.js  
clamp.js  
compact.js  
countBy.js  
defaultTo.js  
defaultToAny.js  
difference.js  
divide.js  
drop.js  
endsWith.js  
eq.js  
every.js  
filter.js  
get.js  
isArguments.js  
isArrayLike.js  
isArrayLikeObject.js  
isBoolean.js  
isBuffer.js  
isDate.js  
isEmpty.js  

After I had written unit tests for roughly 60 percent of the functions in the 'src' folder, I configured NYC for coverage reporting. I used a .nycrc.json file to configure coverage behavior, excluding the '.internal' directory as required.

I created a workflow file under '.github/workflows/' to install Node.js, install dependencies, run tests, generate coverage, and upload the results to coveralls. This ensures that every push triggers automated testing.

I had a lot of issues with the coverage reporting that I ultimately was unable fix. The coverage reporting locally showed unexpected behavior due to a configuration issue with NYC on Windows. The test suite itself covers over 60% of the source files, but coveralls only showed a 18% coverage. I tried fixing this in many different ways, but the only change on coveralls was that the coverage percentage went from 18% to 0%, and back to 18%.  
Here's the coverage badge: [![Coverage Status](https://coveralls.io/repos/github/MikkoMajander/Deployment/badge.svg?branch=main)](https://coveralls.io/github/MikkoMajander/Deployment?branch=main)
