addTwoNumbers(l1, l2) {
    let dummy=new ListNode();
    let cur=dummy;
    let carry=0;

    while(l1 || l2 || carry){
        let v1=l1 ? l1.val:0;
        let v2=l2 ? l2.val:0;

        let val=v1+v2+cur;
        carry=Math.floor(val/10);
        val=val%10;
        cur.next=new ListNode(val);

        cur=cur.next;
        l1=l1 ? l1.next:null
        l2=l2 ? l2.next:null
    }
    return dummy.next;
}