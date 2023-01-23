package com.codecool.App;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class DemoTest {

    @Test
    public void testSum(){
        Demo demo = new Demo();
        int result  = demo.sum(2, 3);
        assertEquals(5, result);
    }

    @Test
    public void altceva(){
        Demo demo = new Demo();
        int result  = demo.sum(2, 3);
        assertEquals(5, result);
    }
}
