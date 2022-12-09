/**
 * 树
 * 1. 节点的度： 结点的子树个数
 * 2. 树的度： 树的所有结点中最大的度数
 * 3. 叶节点
 * 4. 子节点
 * 5. 兄弟节点
 * 6. 路径和路径长度
 * 7. 节点的层次
 * 8. 树的深度
 * 9. 父节点
 */

/**
 * 二叉树
 * 第i层的最大节点数 2^(i-1) i >= 1
 * 深度为k的二叉树有最大节点数为 2^k - 1 K >= 1
 */

/**
 * 二叉搜索树
 */

// 创建BinarySearchTree
function BinarySearchTree() {
  // 创建节点构造函数
  function Node(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  // 保存根的属性
  this.root = null

  // 二叉树的相关操作方法
  // 向树中插入数据
  BinarySearchTree.prototype.insert = function (key) {
    // 1.根据key创建相应的node
    var newNode = new Node(key)

    // 2.判断根节点是否有值
    if (this.root === null) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  BinarySearchTree.prototype.insertNode = function(node, newNode) {
    // 1.准备向左子树插入数据
    if (newNode.key < node.key) {
      // 1.1 node的左子树生没有内容
      if (node.left === null) {
        node.left = newNode
      } else {
        // 1.2 node的左子树上已经有了内容
        this.insertNode(node.left, newNode)
      }
    } else { // 2.准备向右子树插入数据
      if (node.right === null) {
        // 2.1node的右子树上没有内容
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 先许遍历
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    this.preOrderTranversalNode(this.root, handler)
  }
  BinarySearchTree.prototype.preOrderTranversalNode = function (node, handler) {
    if (node !== null) {
      // 1.打印当前经过的节点
      handler(node.key)
      // 2.遍历所有的左子树
      this.preOrderTranversalNode(node.left, handler)
      // 3.遍历所有的右子树
      this.preOrderTranversalNode(node.right, handler)
    }
  }

  // 中序遍历
  BinarySearchTree.prototype.inOrderTraversal = function (handler) {
    this.inOrderTraversalNode(this.root, handler)
  }
  BinarySearchTree.prototype.inOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      this.inOrderTraversalNode(node.left, handler)
      handler(node.key)
      this.inOrderTraversalNode(node.right, handler)
    }
  }

  // 后序遍历
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
    this.postOrderTraversalNode(this.root, handler)
  }
  BinarySearchTree.prototype.postOrderTraversalNode = function(node, handler) {
    if (node !== null) {
      this.postOrderTraversalNode(node.left, handler)
      this.postOrderTraversalNode(node.right, handler)
      handler(node.key)
    }
  }

  // 最小值
  BinarySearchTree.prototype.min = function () {
    var node = this.root
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }

  // 最大值
  BinarySearchTree.prototype.max = function () {
    var node = this.root
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }

  // 搜索特定值
  BinarySearchTree.prototype.search = function (key) {
    return this.searchNode(this.root, key)
  }
  BinarySearchTree.prototype.searchNode = function (node, key) {
    // 1.如果传入的node为null就退出递归
    if (node === null) {
      return false
    }
    // 2.判断node节点的值和传入key大小
    if (node.key > key) {
      // 2.1传入的key交小，向左边继续查找
      return this.searchNode(node.left, key)
    } else if (node.key < key) {
      // 2.2传入的key较大,向右边继续查找
      return this.searchNode(node.right, key)
    } else {
      // 2.3传入相同，说明找到了key
      return true
    }
  }

  // 非递归实现搜索特定值
  BinarySearchTree.prototype.searchFlag = function (key) {
    var node = this.root
    while(node != null) {
      if (node.key > key) {
        node = node.left
      } else if (node.key < key) {
        node = node.right
      } else {
        return true
      }
    }
    return false
  }

  // 二叉树搜索树的删除
  BinarySearchTree.prototype.remove = function (key) {
    // 1. 定义临时的保存变量
    var current = this.root
    var parent = this.root
    var isLeftChild = true

    // 2. 开始查找节点
    while (current.key !== key) {
      parent = current
      if (key < current.key) {
        isLeftChild = true
        current = current.left
      } else {
        isLeftChild = false
        current = current.right
      }

      // 如果current已经指向null 那么说明没有找到
      if (current === null) return false
    }
    // 3. 删除的节点是叶节点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null
      } else if (ifLeftChild) {
        parent.left = null
      } else {
        parent.right = null
      }

    } else if (current.right === null) { // 4.删除有一个子节点的节点
      if (current === this.root) {
        this.root = current.left
      } else if (isLeftChild) {
        parent.left = current.left
      } else {
        parent.right = current.left
      }
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right
      } else if (isLeftChild) {
        parent.left = current.right
      } else {
        parent.right = current.right
      }
    } else { // 5.删除有两个节点的节点
        // 1.获取后继节点
        var successor = this.getSuccessor(current)

        // 2.判断是否是根节点
        if (current == this.root) {
          this.root = successor
        } else if (isLeftChild) {
          parent.left = successor
        } else {
          parent.right = successor
        }
        // 3.将删除节点的左树赋值给successor
        successor.left = current.left
    }
    return true
  }

  BinarySearchTree.prototype.getSuccessor = function(delNode) {
    // 1. 使用变量保存临时节点
    var successorParent = delNode
    var successor = delNode
    var current = delNode.right

    // 2.寻找节点
    while(current != null) {
      successorParent = successor
      successor = current
      current.current.left
    }

    // 3.如果是删除
    if (successor != delNode.right) {
      successorParent = successor.right
      successor.right = delNode.right
    }
  }
}

// 测试代码
var bst = new BinarySearchTree()

// 插入数据
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)

var resultString = ''
bst.postOrderTraversal(function(key) {
  resultString += key + ' '
})
console.log(bst, resultString)
console.log(bst.min(), bst.max())

console.log(bst.search(10))
console.log(bst.search(21))
console.log(bst.search(25))