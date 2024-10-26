class TreeNode {
    constructor(val) {
        // Each node of the binary tree contains a value, and references to the left and right children.
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        // The binary tree starts with an empty root.
        this.root = null;
    }

    // Method to insert a value into the binary tree
    insert(val) {
        const newNode = new TreeNode(val);  // Create a new tree node with the given value
        if (!this.root) {
            // If the tree is empty, the new node becomes the root
            this.root = newNode;
        } else {
            // Otherwise, insert the node into the correct position using a helper method
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to insert a node in the correct position recursively
    insertNode(node, newNode) {
        // If the new node's value is less than the current node's value, go to the left subtree
        if (newNode.val < node.val) {
            if (node.left === null) {
                // If the left child is empty, place the new node here
                node.left = newNode;
            } else {
                // Otherwise, keep going down the left subtree recursively
                this.insertNode(node.left, newNode);
            }
        } else {
            // If the new node's value is greater than or equal to the current node's value, go to the right subtree
            if (node.right === null) {
                // If the right child is empty, place the new node here
                node.right = newNode;
            } else {
                // Otherwise, keep going down the right subtree recursively
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Depth-first search (DFS) - Pre-order traversal: Root -> Left -> Right
    preOrder(node, res = []) {
        // If the node is not null, process it
        if (node != null) {
            // 1. Visit the current node (root)
            res.push(node.val);  // Add the node's value to the result
            // 2. Traverse the left subtree
            this.preOrder(node.left, res);
            // 3. Traverse the right subtree
            this.preOrder(node.right, res);
        }
        return res;  // Return the result array
    }

    // DFS - Post-order traversal: Left -> Right -> Root
    postOrder(node, res = []) {
        // If the node is not null, process it
        if (node != null) {
            // 1. Traverse the left subtree
            this.postOrder(node.left, res);
            // 2. Traverse the right subtree
            this.postOrder(node.right, res);
            // 3. Visit the current node (root)
            res.push(node.val);  // Add the node's value to the result
        }
        return res;  // Return the result array
    }

    // DFS - In-order traversal: Left -> Root -> Right
    inorder(node, res = []) {
        // If the node is not null, process it
        if (node != null) {
            // 1. Traverse the left subtree
            this.inorder(node.left, res);
            // 2. Visit the current node (root)
            res.push(node.val);  // Add the node's value to the result
            // 3. Traverse the right subtree
            this.inorder(node.right, res);
        }
        return res;  // Return the result array
    }
}

// Create a new binary tree
const tree = new BinaryTree();
// Insert nodes into the binary tree (This will build the tree structure)
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

console.log("Binary Tree Structure:", JSON.stringify(tree));  // Display the entire tree structure

// Perform pre-order traversal (DFS): Root -> Left -> Right
const pre = tree.preOrder(tree.root);
console.log("Pre-order Traversal:", JSON.stringify(pre));  // Output the pre-order traversal result

// Perform post-order traversal (DFS): Left -> Right -> Root
const post = tree.postOrder(tree.root);
console.log("Post-order Traversal:", JSON.stringify(post));  // Output the post-order traversal result

// Perform in-order traversal (DFS): Left -> Root -> Right
const inOrder = tree.inorder(tree.root);
console.log("In-order Traversal:", JSON.stringify(inOrder));  // Output the in-order traversal result
