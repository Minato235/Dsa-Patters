class TreeNode {
  constructor(val) {
    this.root = val;
    this.left = null;
    this.right = null;
  }
}
class Bt {
  constructor(val) {
    this.root = null;
  }

  insert(val) {
    let newNode = new TreeNode(val);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let q = [this.root];
    while(q.length>0){
      let node=q.shift();
      if(node.left==null){
        node.left=newNode;
        return;
      }else{
          q.push(node.left);
      }
      if(node.right===null){
        node.right=newNode
        return;
      }else{
        q.push(node.right)
      }
    }
  }
}
const tree = new Bt();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log(JSON.stringify(tree))