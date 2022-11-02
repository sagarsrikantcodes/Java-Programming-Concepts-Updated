package package2;

public class QueueLinkedList {
	// Private data fields are head node, tail node and the size
	private Node head;
	private Node tail;
	private int size;
	
	// Default constructor
	QueueLinkedList(){
		
	}
	// Enqueue operation - addLast 
	public void enqueue(int val) {
		// Create a new Node temp
		Node temp = new Node();
		temp.data = val;
		temp.next = null;
		if(isEmpty()) {
			this.head = this.tail = temp;
		} else {
			this.tail.next = temp;
			this.tail = temp;
		}
		// Increment the size of the linkedlist Queue
		this.size++;
	}
	// Dequeue operation - removeFirst
	public int dequeue() {
		if(isEmpty()) {
			System.out.println("Queue is empty");
			return -1;
		}
		
		int res = this.head.data;
		// Assign a new head 
		this.head = this.head.next;
		this.size--;
		return res;
	}
	
	public int getFront() {
		return this.head.data;
	}
	
	public int getRear() {
		return this.tail.data;
	}
	
	public int getSize() {
		return this.size;
	}
	
	public boolean isEmpty() {
		if(this.size == 0) {
			return true;
		}
		
		return false;
	}
}
