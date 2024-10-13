using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeetCodeCSharp
{
    class Reorder
    {
        public void ReorderList(ListNode head)
        {
            if(head.next != null)
            {
                ListNode last = head;
                ListNode mid = head;
                ListNode firstEnd = head;
                while (last.next != null)
                {
                    if (last.next.next == null)
                    {
                        last = last.next;
                    }
                    else
                    {
                        last = last.next.next;
                    }

                    firstEnd = mid;
                    mid = mid.next;
                }
                firstEnd.next = null;

                mid = Reverse(mid);
                ListNode list1 = head;
                ListNode list2 = mid;
                bool left = false;
                ListNode f = head;
                list1 = list1.next;
                head = Build(list1, list2, f, f, left);
            }

        }
        private ListNode Reverse(ListNode head)
        {
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
        }

        private ListNode Build(ListNode list1, ListNode list2, ListNode first, ListNode current, bool left)
        {

            if (list1 == null && list2 == null)
            {
                return first;
            }
            if (list1 == null)
            {
                current.next = list2;
                current = current.next;
                list2 = list2.next;

                return first;
            }
            if (list2 == null)
            {
                current.next = list1;
                current = current.next;
                list1 = list1.next;
                return first;
            }

            if (left)
            {
                current.next = list1;
                current = current.next;
                list1 = list1.next;
                left = false;
            }
            else
            {
                current.next = list2;
                current = current.next;
                list2 = list2.next;
                left = true;
            }

            return Build(list1, list2, first, current, left);

        }
    }


}
