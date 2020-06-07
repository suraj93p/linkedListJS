function LinkedList(val) {
    this.value = val || 0;
    this.next = null;
}

LinkedList.prototype.insert = function(val) {
    var lastNode = this;
    while (null !== lastNode.next) {
        lastNode = lastNode.next;
    }
    lastNode.next = {
        value: val,
        next: null
    };
}

LinkedList.prototype.remove = function(val) {
    var lastNode = this;
    var prevNode = null;
    while (val !== lastNode.value) {
        prevNode = lastNode;
        lastNode = lastNode.next;
    }
    prevNode.next = lastNode.next;

    return lastNode.value;
}

LinkedList.prototype.traverse = function() {
    var resStr = "";
    var lastNode = this;
    while (null !== lastNode.next) {
        resStr += lastNode.value + " => ";
        lastNode = lastNode.next;
    }
    resStr += lastNode.value + " => END";
    console.log(resStr);
}

LinkedList.prototype.reverse = function() {
    var currNode = this,
        prevNode = null,
        nextNode = null;
    while (currNode != null) {
        nextNode = currNode.next;
        currNode.next = prevNode;
        prevNode = currNode;
        currNode = nextNode
    }
    //prevNode is the header for reversed link list
}

var ll = new LinkedList();
ll.insert(7);
ll.insert(8);
ll.insert(9);
ll.insert(10);
ll.remove(8);
ll.traverse();
ll.reverse();
ll.traverse();
