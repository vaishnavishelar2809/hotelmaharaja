package com.hotel.symbiosys.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.hotel.symbiosys.model.AdminLogin;

@Repository
@Qualifier("admRepo")
public interface AdminLoginRepository extends JpaRepository<AdminLogin, Long>{
	@Query(nativeQuery=true,value="select*from adminlogin where email=:email and password=:password")
	AdminLogin findByEmailAndPassword(@Param("email") String email,@Param("password")String password);

}
