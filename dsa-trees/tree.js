/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  // const treeSchema = new TreeNode(2, [new TreeNode(3), new TreeNode(4), new TreeNode(5, [new TreeNode(6), new TreeNode(7)])])

  sumValues() {
    if(!this.root) return 0;

    let total = this.root.val;  //2

    function sumFunc(node) {
      for(let child of node.children) {  //3 4 5 - 6 7 
        total += child.val;
        if(child.children.length > 0) {
          sumFunc(child);
        }
      }
    }

    sumFunc(this.root)
    return total;

  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(!this.root) return 0;

    let count = this.root.val % 2 == 0 ? 1 : 0;

    function countFunc(node) {
      for(let child of node.children) {
        if(child.val % 2 == 0) count ++;
        if(child.children.length > 0) {
          countFunc(child);
        }
      }
    }
    countFunc(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(!this.root) return 0;

    let count = this.root.val > lowerBound ? 1 : 0;
    
    function countEvensHelper(node) {
      for(let child of node.children) {
        if(child.val > lowerBound) count ++;
        if(child.children.length > 0) {
          countEvensHelper(child);
        }
      }
    }
    countEvensHelper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
