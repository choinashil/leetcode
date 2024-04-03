var Node = function(url) {
    this.url = url;
    this.prev = null;
    this.next = null;
}

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.current = new Node(homepage);
    this.head = this.current;
    this.tail = this.current;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    const newNode = new Node(url);

    if (this.current === this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
    } else {
        this.current.next = newNode;
        newNode.prev = this.current;
    }
    
    this.tail = newNode;
    this.current = newNode;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    for (let i = 0; i < steps; i++) {
        if (this.current === this.head) {
            break;
        } else {
            this.current = this.current.prev;
        }
    }

    return this.current.url;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    for (let i = 0; i < steps; i++) {
        if (this.current === this.tail) {
            break;
        } else {
            this.current = this.current.next;
        }
    }

    return this.current.url;
};