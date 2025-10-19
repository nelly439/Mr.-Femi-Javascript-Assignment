import java.util.Scanner;
public class Factorial{
  public static void main(String[] args){
  Scanner input = new Scanner(System.in);

  System.out.print("Enter Factorial Number: ");
  int number = input.nextInt();

int fact = 0;
for (int i = 1; i <= number; i--){
  fact = fact * number

} 
System.out.print(fact)