package package2;

public class TestQueueUsingLinkedList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		QueueLinkedList q = new QueueLinkedList();
		System.out.println(q.getSize()); // Prints 0
		q.enqueue(10);
		q.enqueue(20);
		q.enqueue(30);
		q.enqueue(40);
		q.enqueue(50);
		q.enqueue(60);
		
		System.out.println(q.dequeue()); // Prints 10
		System.out.println(q.dequeue()); // Prints 20
		System.out.println(q.dequeue()); // Prints 30
		System.out.println(q.dequeue()); // Prints 40
		System.out.println(q.dequeue()); // Prints 50
		q.enqueue(70);
		System.out.println(q.getFront()); // Prints 60
		System.out.println(q.getRear()); // Prints 70
		System.out.println(q.getSize()); // Prints 2

	}
}
