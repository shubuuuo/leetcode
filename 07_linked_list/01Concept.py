class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

    # def newnode(self, value):
    #     # Create a new node
    #     newNode = Node(value)

    #     # Connect the new node to LL
    #     newNode.next = head

    #     # Set newnode as head
    #     head = newNode


class LinkedList:
    def __init__(self):
        self.head = None
        
    def insert_front(self, value):
        print("Inserting", value)
        
        # Step 1: Create a new Node
        new_node = Node(value)
        
        # Step 2: Set next of new_node to the current head
        new_node.next = self.head

        # Step 3: Set new_node as the head
        self.head = new_node
        
    def get_head_value(self):
        if self.head is None:
            return -1
        else:
            return self.head.value
        
    # def insert_at_end(self, value):
    #     print("Inserting at end:", value)

    #     # Step 1: Creating a new node
    #     new_node = Node(value)

    #     # Step 2: Set the current node as the head
    #     # self.get_head_value = head

    #     # Check if the head is empty or not
    #     if self.head is None:
    #         self.head = ______
    #         return
        
    #     # Iterate to the end of the list
    #     current = self.head
    #     while current.next:
    #         # self.get_head_value = next
    #         current = current.next

    #     # next = new_node
    #     current._____ = ________

    # def get_last_value(self):
        
    #     if self.head is None:
    #         return -1
        
    #     current = self.head
    #     while current.next:
    #         current = current.next
    #     return current.value
    

class LinkedListEnd:
    def __init__(self):
        self.head = None

    def insert_at_end(self, value):
        new_node = Node(value)
        
        # If there are no nodes in the linked list
        # Set the new node as head and return
        if self.head is None:
            self.head = ______
            return
        
        # Iterate to the end of list
        current = self.head
        while current.next:
            current = current.next
        
        # Set the next of last value to the new Node
        current._____ = ________
        

    def get_last_value(self):
        
        if self.head is None:
            return -1
        
        current = self.head
        while current.next:
            current = current.next
        return current.value

if __name__ == "__main__":
    n = int(input())
    linked_list = LinkedListEnd()
    vals = list(map(int, input().split()))
    for x in vals:
        linked_list.insert_at_end(x)
        print(linked_list.get_last_value(), end=" ")

# Create an instance of LinkedList
list = LinkedList()
list.insert_front(3)
print("The value at the head is:", list.get_head_value())

list.insert_front(2)
print("The value at the head is:", list.get_head_value())


# Creating head of the Linked list
head = Node(1)
print("The value at head is", head.value)

# Node.newnode(3)
# print("The value at head is", head.value)


# cook your dish here
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedListAtMiddle:
    def __init__(self):
        self.head = None

    def insert_after_k(self, value, k):
        new_node = Node(value)
        current = self.head
        
        #If there are no nodes in the linked list
        #Set the new node as head and return
        if current is None:
            self.head = new_node
            return
        
        #Iterate to the k-th node
        for _ in range(k-1):
            current = current.next
        # Set the next of new Node to next of current
        new_node.next = current.next
    
        #Set the next of current to new Node
        current.next = new_node



    def print_values(self):
        current = self.head
        while current:
            print(current.value, end=" ")
            current = current.next
        print()

if __name__ == "__main__":
    n = int(input())
    x, k = map(int, input().split())
    linked_list = LinkedList()
    vals = list(map(int, input().split()))
    for i in range(len(vals)):
        a = vals[i]
        linked_list.insert_after_k(a, i)
    linked_list.insert_after_k(x, k)
    linked_list.print_values()


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        
class LinkedList:
    def __init__(self):
        self.head = None
        # Create the Node tail
        self.tail = None
        # self._____ = ______

    def insert_at_end(self, value):
        new_node = Node(value)
        # If there are no nodes in the linked list
        # Set the new node as head and return
        if self.head is None:
            self.head = new_node
            self.tail = new_node
            return
        
        # Set next of tail to the new Node
        self.tail.next = new_node

        # Set new Node as the new tail
        self.tail = new_node
