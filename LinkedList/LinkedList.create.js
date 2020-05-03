import "./LinkedList"
export default function createLinkedList(arr) {
    console.log("Inside LinkedList.create");
        if (arr.length == 0) {
            return;
        } 
        for (let value of arr){
            if (this.head == undefined) {
                this.head = new Node(value);
            } else {
                let currentNode = this.head;
                while (currentNode.next){
                    currentNode = currentNode.next;
                }
                currentNode.next = new Node(value);
            }
        }
        return this.head;        
}
