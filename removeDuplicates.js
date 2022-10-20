// You're given the head of a Singly Linked List whose nodes are in sorted order
// with respect to their values. Write a function that returns a modified version 
// of the linked list that doesn't contain any nodes with duplicate values. The 
// Linked List should be modified in place(i.e. you shouldn't create a brand 
// new list), and the modiefied linked list should still have its nodes sorted 
// with respect to their values.

// Each *LinkedList* node has an integer *value* as well as a *next* node 
// pointing to the next node in the list or to *None*/*null* if it's the tail
// of the list.

// Sample input: linkedlist = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6
// (the head node with value 1)

// Sample output: 1 -> 3 -> 4 -> 5 -> 6 (the head node with value 1)

//Naive approach: We can essentially traverse the list and store each 
//unique number we find, into a hash table. Then we can check whether the value
//of the current node can be found within the hash table. If it's in the table, 
//we remove the node from the list. (One thing I didn't know when I wrote this is
//that in order to remove a node from the middle of a linked list, one of the 
//options is to make your current node's next pointer, your current node's next 
//value's next value.  

//example: 1 -> 3 -> 4 -> 5. One way to remove four, is to make node 3's 
//next pointer, node 4's pointer. This would make node 3 point to node 5.
//Once we get to the last node in the list, the loop is finished. 


class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//O(n) time | O(1) space complexity
function removeDuplicatesFromLinkedList(linkedList) {
  let current = linkedList;
//If the current node we're on has a this.next value, we loop
  if(current.next) {
//If the value of the current node is equal to the value of the next node,
//we make the current node's next pointer be the value of the next node's 
//next pointer.
    if(current.value === current.next.value) {
      current.next = current.next.next;
    } else {
//Otherwise, we traverse to the next node, making our current node the next node.
      current = current.next;
    }
  }
return linkedList;
}

//Below you can see the power of ternary operators and using concise syntax.
//This is certainly not the most readable, so striking a balance between 
//succinct coding practices and readability is super important. Uncomment the 
//function to test it. 

// function removeDuplicatesFromLinkedList(ll) {
//   // Write your code here.
//   let h = ll;

//   while(h.next) {
//     (h.value === h.next.value) ?
//       h.next = h.next.next :
//       h = h.next;
//   }
//   return ll;
// }
