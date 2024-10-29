class One{
    public static void main(String[] args) {
        System.out.println("hello");
        One one =new One();
        one.drill();
        int goals=one.pass(10);
        System.out.println(goals);
    }
    public void drill(){
        System.out.println("do training");
    }
    public int pass(int goals){
        return goals*5;
    }
}