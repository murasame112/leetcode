using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeetCodeCSharp
{
    class AddTwoNumbers
    {
        public ListNode AddNumbers(ListNode l1, ListNode l2) //AddTwoNumbers()
        {
            int v1,
                v2;
            int r = 0;
            ListNode first = null;
            ListNode current;
            ListNode prev = null;
            while (l1 != null || l2 != null || r != 0)
            {
                if (l1 == null)
                {
                    v1 = 0;
                }
                else
                {
                    v1 = l1.val;
                    l1 = l1.next;
                }
                if (l2 == null)
                {
                    v2 = 0;
                }
                else
                {
                    v2 = l2.val;
                    l2 = l2.next;
                }
                int result = v1 + v2 + r;
                r = 0;

                if (result >= 10)
                {
                    result = result - 10;
                    r += 1;
                }

                current = new ListNode(result);

                if (first == null)
                {
                    first = current;
                    prev = current;
                }
                else if (first.next == null)
                {
                    first.next = current;
                    prev.next = current;
                }
                else
                {
                    prev = prev.next;
                    prev.next = current;
                }
                
               
            }
            return first;
        }
    }
}
