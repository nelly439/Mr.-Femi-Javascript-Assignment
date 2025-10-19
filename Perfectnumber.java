public class Assignment{
   public static boolean perfectnumbers(int number){


if(number <= 1){
return false;
}
sum = 1;
for(int i = 2;i < num; i++){
if(number % i == 0){
sum += i;
  }
    }

   return sum;
  }

}