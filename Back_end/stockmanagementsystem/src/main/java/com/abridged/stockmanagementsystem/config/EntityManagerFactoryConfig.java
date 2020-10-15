package com.abridged.stockmanagementsystem.config;

import org.springframework.context.annotation.Bean;

import org.springframework.context.annotation.Configuration;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;


@Configuration
@EnableWebMvc
public class EntityManagerFactoryConfig {

	/**
	 * This is helps to create a JPA javax.persistence.EntityManagerFactory
	 * according to JPA's standard container
	 * 
	 * @param nothing
	 * @return factoryBean
	 */
	@Bean
	public LocalContainerEntityManagerFactoryBean getEntityManager() {
		LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
		factoryBean.setPersistenceUnitName("rupesh");
		return factoryBean;
	}
}