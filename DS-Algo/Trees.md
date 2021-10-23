 # Representation

```java
public class BinaryTreeNode{
    public int data;
    public BinaryTreeNode left,right;

    public BinaryTreeNode(int data){
        this.data=data;
        left=null;
        right=null;
    }
}
```

# Traversal 
- DFS
```java
//preorder
public void preorder(BinaryTreeNode root){
    if(root!=null){
        System.out.println(root.data);
        preorder(root.left);
        preorder(root.right);
    }
}

/* IN-order
inorder(root.left);
System.out.println(root.data);
inorder(root.right);

POST-order
postorder(root.left);
postorder(root.right);
System.out.println(root.data);
*/

- BFS
```java
void printLevelOrder(BinaryTreeNode root){
    Queue<BinaryTreeNode> q = new LinkedList<>)();
    q.add(root);
    while(!q.isEmpty()){
        BinaryTreeNode temp = q.poll();
        System.out.println(temp.data);

        if(temp.left!=null) q.add(temp.left);
        if(temp.right!=null) q.add(temp.right);
    }
}

```



```