import Node from "./Node" ;
export default class LinkedList{
    constructor(){
        this.head = null;
    }
    add(value) {
        let node = Node(value);
        console.log("Node added");
    }
}