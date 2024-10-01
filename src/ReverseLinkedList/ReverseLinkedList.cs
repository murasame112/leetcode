using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

	public class ListNode
	{
			public int val;
			public ListNode next;

			public ListNode(int val = 0, ListNode next = null)
			{
					this.val = val;
					this.next = next;
			}
	}

	class ReverseLinkedList
	{
			public ListNode ReverseList(ListNode head)
			{
					// second solution, O(n)
					ListNode current = head;
					ListNode previous = null;
					ListNode next = null;

					while (current != null)
					{
							next = current.next;
							current.next = previous;
							previous = current;
							current = next;
					}

					return previous;

					// first solution
					//if (head == null)
					//{
					//    return null;
					//}
					//ListNode first = head;
					//Stack<ListNode> nodeStack = new Stack<ListNode>();
					//while (head.next != null)
					//{
					//    nodeStack.Push(head);
					//    head = head.next;
					//}
					//ListNode newFirst = head;
					//while (!head.Equals(first))
					//{
					//    head.next = nodeStack.Pop();
					//    head = head.next;
					//}
					//first.next = null;
					//return newFirst;
			}
	}

