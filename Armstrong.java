import java.util.Scanner;
public class Armstrong{
  public static void main(String[] args){
  Scanner input = new Scanner(System.in);

  System.out.print("Enter Factorial Number: ");
  int num = input.nextInt();


remainder = 0;
result = 0;
int number = num;

while(number != 0){
remainder = number % 10;
result = math.pow(remainder,3);
number /= 10
}
if(result == number){
System.out.println(num + " is an Armstrong number ")
}

else{
System.out.println(num + "is not an Armstrong number")
}

}

}

puclic static boolean Armstrong(int num){
if(num < 0){
return false;
}

if(num >= 0 && num <= 9){
return true;

}
int number = num;
int sum = 0;


int numbers = String.value(num).length():

for int i = num; i > 0; i /= 10){

int digit = i % 10;
sum += Math.pow(digit,numbers);

}
return sum;
}