import java.util.Scanner;
public class puuo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("До скольки начать осчет: ");
        int num = sc.nextInt();

        for (int i = 1; i <= num; i++) {
            System.out.println(i);
            if (i == 67) {
                System.out.println("хыхыхы 67");
            }
        }


    }
}