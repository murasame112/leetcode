using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LeetCodeCSharp
{
    class MergeTwoSortedLists
    {
        
        public ListNode MergeTwoLists(ListNode list1, ListNode list2)
        {
            if (list1 == null && list2 == null)
            {
                return null;
            }
            if (list1 == null)
            {
                return list2;
            }
            if (list2 == null)
            {
                return list1;
            }
            ListNode first;
            if (list1.val > list2.val)
            {
                first = list2;
                list2 = list2.next;
            }
            else
            {
                first = list1;
                list1 = list1.next;
            }

            return Com(list1, list2, first, first);
        }

        public ListNode Com(ListNode list1, ListNode list2, ListNode first, ListNode current)
        {
            if (list1 == null && list2 == null)
            {
                return first;
            }

            if (list2 == null)
            {
                while (list1 != null)
                {
                    current.next = list1;
                    current = current.next;
                    list1 = list1.next;
                }
                return first;
            }

            if (list1 == null)
            {
                while (list2 != null)
                {
                    current.next = list2;
                    current = current.next;
                    list2 = list2.next;
                }
                return first;
            }

            if (list1.val > list2.val && list2 != null)
            {
                current.next = list2;
                list2 = list2.next;
            }
            else
            {
                current.next = list1;
                list1 = list1.next;
            }
            return Com(list1, list2, first, current.next);
        }
    }
}
