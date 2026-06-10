class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next

if __name__ == "__main__":
    array = [2, 5, 8, 7]

    y = Node(array[0], None)
    print(y.data)
