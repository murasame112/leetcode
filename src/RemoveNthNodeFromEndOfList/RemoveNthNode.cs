using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeetCodeCSharp
{
    class RemoveNthNode
    {
        public ListNode RemoveNthFromEnd(ListNode head, int n)
        {
            ListNode first = head;
            ListNode forward = head;
            for (int i = 0; i < n; i++)
            {
                if(forward.next == null)
                {
                    head = head.next;
                    return head;
                }
                forward = forward.next;

            }
            while (forward.next != null)
            {
                head = head.next;
                forward = forward.next;
                
            }
            head.next = head.next.next;

            return first;
        }
    }
}
