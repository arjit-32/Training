// "static void main" must be defined in a public class.
public class Main {
    public static void main(String[] args) { 
        ArrayList<Integer> list = new ArrayList<Integer>();
        list.add(1);
        list.add(4);
        list.add(2);
        list.add(3);
        
        System.out.println(list);
      
        sort(list);
        
        System.out.println("\nsorted arry");
       
        System.out.println(list);
       
    }
     /* Hypo - sort(list(n)) = sorted list(n)
                  sort(list(n-1)) = sorted list(n-1)
           
           Base - if(list.size()==0 or list.size()==1)  return;
           
           Induction - sort([3,2,1]) = sort([3,2]) , take out 1
                        sort([3,2]) = [2,3],   Place 1 in this
                                    = [1,2,3]
            // Placement is the real step where sorting happens
        */
        
    public static void sort(ArrayList<Integer> list){
       if(list.size()==0 || list.size()==1) return;
        
        int element = list.get(list.size()-1);
        list.remove(list.size()-1);
        
        sort(list);
        place_element(list,element);
        
    }
    
    public static ArrayList<Integer> place_element(ArrayList<Integer> list, int element){
       int pos=0;
        for(int i=0;i<list.size();++i){
            if(list.get(i)<element) {
                pos=i+1;
            }
        }
        list.add(pos,element);
        return list;
    }
}