class Router {

    constructor(path,action) {
        this._path = path;
        this._action = action;
    }

    static retrieveData() {
        return "szia";
    }
    
    get path() {
        return this._path;
    }

    set path(path) {
        this._path = path;
    }
    

    route(action) {
        action();
    }

    write() {
        console.log(this._path);
    }
}

class SpecialRouter extends Router {
    constructor(path,action,file) {
        super(path,action);
        this._file = file;
    }

    specialRoute(word) {
        return word;
    }
}

module.exports = new Router('hello',() => console.log('szevasz'));