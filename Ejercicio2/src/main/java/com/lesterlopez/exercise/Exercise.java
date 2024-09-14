package com.lesterlopez.exercise;

import java.util.ArrayList;

public class Exercise {

    public void equalNumbers() {
        ArrayList<Integer> resultado = new ArrayList<>();
        Integer[] array1 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        Integer[] array2 = {5, 6, 7, 10, 11, 12, 13, 14, 15};

        for (int i = 0; i < array1.length; i++) {
            for (int j = 0; j < array2.length; j++) {
                //System.out.println(array1[i] + " = " + array2[j]);
                if (array1[i] == array2[j]) {
                    boolean exists = false;
                    for (Integer num : resultado) {
                        if (num == array2[j]) {
                            exists = true;
                        }
                    }
                    if (!exists) {
                        resultado.add(array1[i]);
                    }
                }
            }
        }
        System.out.println(resultado);
    }
}


