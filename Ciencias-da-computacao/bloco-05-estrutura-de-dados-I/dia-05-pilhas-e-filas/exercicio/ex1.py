from linked_list import LinkedList


class Queue():
    def __init__(self):
        self._data = LinkedList()

    def enqueue(self, value):
        self._data.insert_last(value)

    def dequeue(self):
        if len(self._data) == 0:
            return None
        return self._data.remove_first()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def peek(self):
        if self.is_empty():
            return None
        value = self._data.get_element_at(0)
        return value
