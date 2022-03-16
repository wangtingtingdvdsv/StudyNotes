/**
 * 题目: https://www.cnblogs.com/poterliu/p/12582545.html
 * */

/*
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Set;

public class Test {

    // 50%的概率随机返回 0 或者 1
    public int foo(){
        int seed = new Random().nextInt(100);
        if(seed % 2 ==0){
            return 0;
        } else {
            return 1;
        }
    }

    // 以各 10%的概率返回[0-9]中的一个数字
    public int boo() {
        String seed = String.valueOf(foo()) + String.valueOf(foo()) + String.valueOf(foo()) + String.valueOf(foo());
        int reslut = Integer.valueOf(seed, 2);
        while(reslut >= 10){
            reslut = boo();
        }
        return reslut;
    }


    public static void main(String[] args) {
        Test test = new Test();
        System.out.println(test.boo());

        //统计每个数字出现概率
        Map<Integer, Double> countMap = new HashMap<Integer, Double>();
        int count = 1000000;
        for (int i = 0; i < count; i++) {
            int num = test.boo();
            if(countMap.get(num) == null){
                countMap.put(num, (double) 1);
            } else {
                countMap.put(num, countMap.get(num) + 1);
            }
        }


        Set<Integer> keySet = countMap.keySet();
        for (Integer num : keySet) {
            double ratio = countMap.get(num) / count;
            double percent = ratio * 100;
            System.out.println(num + "出现概率：" + percent + "%");
        }
    }
}
* */
