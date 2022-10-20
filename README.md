# linked-list-removing-duplicates

ALGO EXPERT EASY

You're given the head of a Singly Linked List whose nodes are in sorted order
with respect to their values. Write a function that returns a modified version 
of the linked list that doesn't contain any nodes with duplicate values. The 
Linked List should be modified in place(i.e. you shouldn't create a brand 
new list), and the modiefied linked list should still have its nodes sorted 
with respect to their values.

Each *LinkedList* node has an integer *value* as well as a *next* node 
pointing to the next node in the list or to *None*/*null* if it's the tail
of the list.

Sample input: linkedlist = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 <br>
(the head node with value 1)

Sample output: 1 -> 3 -> 4 -> 5 -> 6 (the head node with value 1)
