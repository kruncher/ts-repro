# Repro Steps

```
# Clone this repository.
git clone https://github.com/kruncher/ts-repro.git
cd ts-repro

# Prepare package-b
cd package-b
npm install
npm link

# Prepare package-a
cd ../package-a
npm link package-b
npm install

# By this step the TypeScript in package-a/src and package-b/src should
# be compiled into package-a/lib and package-b/lib

# Attempt to build and run unit tests of package-a
npm test

# Verify that package-a works normally by running it
node .
```

# Error Output

```
1 import nunjucks = require("nunjucks");
                            ~~~~~~~~~~

../package-b/lib/SomethingThatUsesNunjucks.d.ts(1,27): error TS2307: Cannot find module 'nunjucks'.
```
