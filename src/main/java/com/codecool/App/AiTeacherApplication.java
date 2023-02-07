package com.codecool.App;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class AiTeacherApplication {

	public static void main(String[] args) {
		SpringApplication.run(AiTeacherApplication.class, args);
	}

}
