package org.atin;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class JPAUtility {
	
	private static final EntityManagerFactory entityManagerFactory;
	
	static {
		entityManagerFactory = Persistence.createEntityManagerFactory("providers-isp");
	}
	
	public static EntityManager getEntityManager(){
		return entityManagerFactory.createEntityManager();
	}
	
	public static void close(){
		entityManagerFactory.close();
	}
}
