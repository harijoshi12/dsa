package HackerRank;

/**
 * PlusMinus
 */
public class PlusMinus {
  public static void solution(int[] List){
    int plus = 0;
    int minus = 0;
    int zero = 0;
    for(int i =0;i<List.length;i++){
        if(List[i]>0){
            plus++;
        }else if(List[i]<0){
            minus++;
        }else{
            zero++;
        }
    }
    System.out.println();
    // System.out.println((float)plus/List.lenght)
    // System.out.println((float)minus/List.lenght)
    // System.out.println((float)zero/List.lenght)
  
  }

  public static void main(String[] args) {
    int[] list = {1,1,0,-1,-1};
    solution(list);
  }
}