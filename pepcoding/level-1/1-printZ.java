class HelloWorld {
    public static void main(String[] args) {
        int total=5;
        
        for(int i=0;i<total;++i){
            for(int j=0;j<total;++j){
                if(i==total-j-1 || i==0 || i==total-1)
                    System.out.print("*");
                else
                    System.out.print(" ");
            }
            System.out.println();   
        }
    }
}