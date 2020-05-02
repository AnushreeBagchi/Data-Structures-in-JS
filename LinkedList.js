class Node{
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}

function create_linked_list(arr) {
    let head = undefined;
    if (arr.length == 0) {
        return;
    } 
    for (let value of arr){
        if (head == undefined) {
            head = new Node(value);
        } else {
            let currentNode = head;
            while (currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(value);
        }
    }
    return head;        

}
// Tests function
function test(list, linked_list){
    currentNode = linked_list;
    for (let i=0; i<list.length; i++) {
        if (currentNode.value !== list[i]){
            return "Test Failed";
        }
        currentNode = currentNode.next;
    }
    return "Test Passed";
}

let list1 = [10,20,30,40];
let linked_list = create_linked_list(list1);
console.log(test(list1, linked_list));




