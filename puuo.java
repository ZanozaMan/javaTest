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

        
        while (true) { 
            System.out.print("напиши число от 1 до 5: ");
            int a = sc.nextInt();

            if (a == 1) {
                System.out.println("ты нажал 1");
                break;
            } else if (a == 2) {
                System.out.println("ты нажал 2 ");
                break;
            } else if (a == 3) {
                System.out.println("ты нажал 3");
                break;
            } else if (a == 4) {
                System.out.println("ты нажал 4");
                break;
            } else if (a == 5) {
                System.out.println("ты нажал 5");
                break;
            } else {
                System.out.println("Что то пошло не так!\nПовотри действия");
            }
        }

    }
}