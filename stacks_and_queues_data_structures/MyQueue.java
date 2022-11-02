package package2;

public class MyQueue {
	// private data fields 
	private int capacity = 20;
	private int[] arr = new int[capacity];
	private int head = 0;
	private int tail = 0;
	private int size = 0;
	
	// Default Constructor
	MyQueue() {
		
	}
	
	// Enqueue operation in an array 
	public void enqueue(int val) {
		this.arr[this.tail] = val;
		this.tail++;
		this.size++; // Increment the size of the queue
	}
	// Dequeue operation in an array 
	public int dequeue() {
		int res = this.arr[this.head];
		this.head++;
		this.size--; // Decrement the size of the queue
		return res;
	}
	// Return the front of the queue 
	public int getFront() {
		return this.arr[this.head];
	}
	// Return the rear part of the queue
	public int getRear() {
		return this.arr[this.tail - 1];
	}
	
	public int getSize() {
		return this.size;
	}
}
