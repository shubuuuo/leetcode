var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data, next) {
        if (next === void 0) { next = null; }
        this.data = data;
        this.next = next;
    }
    return LinkedListNode;
}());
var array = [2, 5, 8, 7];
var y = new LinkedListNode(array[0], null);
console.log(y.data);
