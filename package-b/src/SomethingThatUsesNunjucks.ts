import nunjucks = require("nunjucks");

export class SomethingThatUsesNunjucks {
    
    foo(env: nunjucks.Environment) {
        return env;
    }
    
}
